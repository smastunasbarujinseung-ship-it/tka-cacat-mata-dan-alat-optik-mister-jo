export type SpeechState = 'idle' | 'playing' | 'paused';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private state: SpeechState = 'idle';
  private rate: number = 1.0;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private listeners: ((state: SpeechState) => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoice();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoice();
      }
    }
  }

  private initVoice() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize Indonesian voices:
    const idVoice = voices.find(
      v =>
        v.lang === 'id-ID' ||
        v.lang === 'in-ID' ||
        v.name.toLowerCase().includes('indonesia') ||
        v.lang.toLowerCase().startsWith('id')
    );
    this.selectedVoice = idVoice || voices[0] || null;
  }

  public subscribe(cb: (state: SpeechState) => void): () => void {
    this.listeners.push(cb);
    cb(this.state);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private setState(newState: SpeechState) {
    this.state = newState;
    this.listeners.forEach(l => l(this.state));
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.7, Math.min(2.0, newRate));
    if (this.state === 'playing' && this.currentUtterance) {
      // Re-trigger current text at new rate if needed
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public getState(): SpeechState {
    return this.state;
  }

  public isAvailable(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public speak(text: string, onFinish?: () => void) {
    if (!this.synth) {
      if (onFinish) onFinish();
      return;
    }

    // Cancel any ongoing speech
    this.stop();

    if (!text || text.trim() === '') {
      if (onFinish) onFinish();
      return;
    }

    // Clean text for speech: replace symbols, latex backslashes, etc.
    const speechReadyText = text
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2')
      .replace(/\\left\|/g, '')
      .replace(/\\right\|/g, '')
      .replace(/\\times/g, ' dikali ')
      .replace(/\\cdot/g, ' dikali ')
      .replace(/\\approx/g, ' mendekati ')
      .replace(/\\infty/g, ' tak terhingga ')
      .replace(/\\Delta/g, ' selisih ')
      .replace(/\\pm/g, ' plus minus ')
      .replace(/[{}\\_$^]/g, ' ')
      .replace(/Dioptri/gi, ' Dioptri ')
      .replace(/cm\b/gi, ' sentimeter ')
      .replace(/mm\b/gi, ' milimeter ')
      .replace(/\s+/g, ' ')
      .trim();

    try {
      const utterance = new SpeechSynthesisUtterance(speechReadyText);
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
        utterance.lang = this.selectedVoice.lang || 'id-ID';
      } else {
        utterance.lang = 'id-ID';
      }
      utterance.rate = this.rate;
      utterance.pitch = 1.05; // Slightly enthusiastic teacher pitch

      utterance.onstart = () => {
        this.setState('playing');
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        this.setState('idle');
        if (onFinish) onFinish();
      };

      utterance.onerror = () => {
        this.currentUtterance = null;
        this.setState('idle');
        if (onFinish) onFinish();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch {
      this.setState('idle');
      if (onFinish) onFinish();
    }
  }

  public pause() {
    if (this.synth && this.state === 'playing') {
      this.synth.pause();
      this.setState('paused');
    }
  }

  public resume() {
    if (this.synth && this.state === 'paused') {
      this.synth.resume();
      this.setState('playing');
    }
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
      this.setState('idle');
    }
  }
}

export const speechService = new SpeechService();
