import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, FastForward, Sparkles } from 'lucide-react';
import { speechService, SpeechState } from '../utils/speech';
import { NarrationParts } from '../types';

interface NarratorControlProps {
  narration?: NarrationParts;
  customText?: string;
  hasViewedDiscussion?: boolean;
  hasViewedQuickTrick?: boolean;
  autoPlayIntro?: boolean;
}

export const NarratorControl: React.FC<NarratorControlProps> = ({
  narration,
  customText,
  hasViewedDiscussion = false,
  hasViewedQuickTrick = false
}) => {
  const [speechState, setSpeechState] = useState<SpeechState>('idle');
  const [currentPart, setCurrentPart] = useState<number>(1);
  const [rate, setRate] = useState<number>(1.0);
  const [activePartText, setActivePartText] = useState<string>('');

  useEffect(() => {
    const unsub = speechService.subscribe(s => setSpeechState(s));
    setRate(speechService.getRate());
    return () => unsub();
  }, []);

  const getPartText = (partNum: number): string => {
    if (customText) return customText;
    if (!narration) return '';
    switch (partNum) {
      case 1:
        return narration.part1Intro;
      case 2:
        return narration.part2Stimulus;
      case 3:
        return narration.part3Question;
      case 4:
        return narration.part4Hint;
      case 5:
        return `${narration.part5Discussion}`;
      default:
        return narration.part1Intro;
    }
  };

  const handlePlayPart = (partNum: number) => {
    setCurrentPart(partNum);
    const textToSpeak = getPartText(partNum);
    setActivePartText(textToSpeak);
    speechService.speak(textToSpeak);
  };

  const handleTogglePlay = () => {
    if (speechState === 'playing') {
      speechService.pause();
    } else if (speechState === 'paused') {
      speechService.resume();
    } else {
      const textToSpeak = activePartText || getPartText(currentPart);
      setActivePartText(textToSpeak);
      speechService.speak(textToSpeak);
    }
  };

  const handleStop = () => {
    speechService.stop();
  };

  const handleReplay = () => {
    const textToSpeak = getPartText(currentPart);
    speechService.speak(textToSpeak);
  };

  const cycleRate = () => {
    const rates = [0.8, 1.0, 1.2, 1.5];
    const nextIdx = (rates.indexOf(rate) + 1) % rates.length;
    const newRate = rates[nextIdx];
    setRate(newRate);
    speechService.setRate(newRate);
  };

  return (
    <div className="bg-gradient-to-r from-red-900 via-rose-950 to-red-950 border border-amber-500/40 rounded-2xl p-3.5 sm:p-4 text-white shadow-lg mb-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Guru Identitas & Animasi Suara */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center font-black text-xl text-red-950 shadow-md ring-2 ring-amber-300">
              JO
            </div>
            {speechState === 'playing' && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base text-amber-200">Mister Jo</span>
              <span className="text-[11px] bg-red-800/80 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30 font-medium">
                Guru Fisika Jenius
              </span>
            </div>
            <p className="text-xs text-rose-200/90 flex items-center gap-1.5 mt-0.5">
              {speechState === 'playing' ? (
                <>
                  <span className="flex items-center gap-0.5 text-amber-400">
                    <span className="w-1 h-3 bg-amber-400 animate-pulse"></span>
                    <span className="w-1 h-4 bg-amber-300 animate-pulse delay-75"></span>
                    <span className="w-1 h-2 bg-amber-400 animate-pulse delay-150"></span>
                  </span>
                  <span>Sedang membimbing Bagian {currentPart}...</span>
                </>
              ) : speechState === 'paused' ? (
                'Suara sedang dijeda'
              ) : (
                'Klik tombol putar untuk mendengarkan narasi bimbingan'
              )}
            </p>
          </div>
        </div>

        {/* Kontrol Audio Utama */}
        <div className="flex items-center gap-2">
          {/* Tombol Kecepatan */}
          <button
            onClick={cycleRate}
            title="Ubah Kecepatan Suara"
            className="px-2.5 py-1.5 bg-red-950/80 hover:bg-red-800 border border-amber-400/40 rounded-lg text-xs font-semibold text-amber-300 flex items-center gap-1 transition"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>{rate}x</span>
          </button>

          {/* Tombol Ulangi */}
          <button
            onClick={handleReplay}
            title="Ulangi Bagian Ini"
            className="p-2 bg-red-950/80 hover:bg-red-800 border border-red-700 rounded-lg text-rose-200 transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Tombol Play/Pause */}
          <button
            onClick={handleTogglePlay}
            title={speechState === 'playing' ? 'Jeda Suara' : 'Putar Narasi'}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl shadow flex items-center gap-2 text-sm transition transform active:scale-95"
          >
            {speechState === 'playing' ? (
              <>
                <Pause className="w-4 h-4 fill-slate-950" />
                <span className="hidden sm:inline">Jeda</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span className="hidden sm:inline">Dengarkan</span>
              </>
            )}
          </button>

          {/* Tombol Hentikan */}
          {speechState !== 'idle' && (
            <button
              onClick={handleStop}
              title="Hentikan Suara"
              className="p-2 bg-red-950 hover:bg-red-800 border border-rose-500/50 rounded-lg text-rose-300 transition"
            >
              <VolumeX className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Bagian-Bagian Narasi 5 Langkah (Hanya tampil jika ada narasi soal) */}
      {narration && (
        <div className="mt-3.5 pt-3 border-t border-red-800/60">
          <div className="text-[11px] font-semibold text-amber-300/90 mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Pilih Bagian Bimbingan Mister Jo:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2">
            <button
              onClick={() => handlePlayPart(1)}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left transition flex items-center gap-1.5 ${
                currentPart === 1 && speechState === 'playing'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-red-950/60 hover:bg-red-800/80 text-rose-100 border border-red-800/50'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-red-800 text-amber-300 flex items-center justify-center text-[10px]">1</span>
              <span className="truncate">1. Pengantar</span>
            </button>

            <button
              onClick={() => handlePlayPart(2)}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left transition flex items-center gap-1.5 ${
                currentPart === 2 && speechState === 'playing'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-red-950/60 hover:bg-red-800/80 text-rose-100 border border-red-800/50'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-red-800 text-amber-300 flex items-center justify-center text-[10px]">2</span>
              <span className="truncate">2. Stimulus</span>
            </button>

            <button
              onClick={() => handlePlayPart(3)}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left transition flex items-center gap-1.5 ${
                currentPart === 3 && speechState === 'playing'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-red-950/60 hover:bg-red-800/80 text-rose-100 border border-red-800/50'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-red-800 text-amber-300 flex items-center justify-center text-[10px]">3</span>
              <span className="truncate">3. Pertanyaan</span>
            </button>

            <button
              onClick={() => handlePlayPart(4)}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left transition flex items-center gap-1.5 ${
                currentPart === 4 && speechState === 'playing'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-red-950/60 hover:bg-red-800/80 text-rose-100 border border-red-800/50'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-red-800 text-amber-300 flex items-center justify-center text-[10px]">4</span>
              <span className="truncate">4. Petunjuk</span>
            </button>

            <button
              onClick={() => handlePlayPart(5)}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium text-left transition flex items-center gap-1.5 col-span-2 sm:col-span-1 ${
                currentPart === 5 && speechState === 'playing'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : hasViewedDiscussion || hasViewedQuickTrick
                  ? 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/60'
                  : 'bg-red-950/60 hover:bg-red-800/80 text-rose-200 border border-red-800/50'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-bold">5</span>
              <span className="truncate">5. Pembahasan</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
