import { ProgressState, UserAnswer } from '../types';

const STORAGE_KEY = 'FISIKA_JENIUS_TKA_2026_PROGRESS';

const DEFAULT_STATE: ProgressState = {
  answers: {},
  currentQuestionId: 1,
  totalTimeSpentSeconds: 0,
  lastActiveDate: new Date().toISOString()
};

export function loadProgress(): ProgressState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      answers: parsed.answers || {},
      currentQuestionId: typeof parsed.currentQuestionId === 'number' ? parsed.currentQuestionId : 1,
      totalTimeSpentSeconds: typeof parsed.totalTimeSpentSeconds === 'number' ? parsed.totalTimeSpentSeconds : 0,
      lastActiveDate: parsed.lastActiveDate || new Date().toISOString()
    };
  } catch (e) {
    console.warn('Gagal memuat progres dari localStorage:', e);
    return DEFAULT_STATE;
  }
}

export function saveProgress(state: Partial<ProgressState>): void {
  if (typeof window === 'undefined') return;
  try {
    const current = loadProgress();
    const updated: ProgressState = {
      ...current,
      ...state,
      lastActiveDate: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Gagal menyimpan progres ke localStorage:', e);
  }
}

export function saveUserAnswer(questionId: number, answer: UserAnswer): void {
  const current = loadProgress();
  const updatedAnswers = {
    ...current.answers,
    [questionId]: answer
  };
  saveProgress({
    answers: updatedAnswers,
    currentQuestionId: questionId
  });
}

export function clearAllProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Gagal menghapus progres dari localStorage:', e);
  }
}
