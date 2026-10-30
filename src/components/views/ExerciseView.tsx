import React, { useState, useEffect } from 'react';
import { Filter, Clock, Maximize2, Minimize2, ZoomIn, ZoomOut, CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { ALL_QUESTIONS } from '../../data/questions';
import { QuestionCard } from '../QuestionCard';
import { Question, SubTopicId, UserAnswer } from '../../types';

interface ExerciseViewProps {
  currentQuestionId: number;
  answers: Record<number, UserAnswer>;
  onSaveAnswer: (questionId: number, answer: UserAnswer) => void;
  onChangeQuestion: (questionId: number) => void;
  initialSubtopicFilter?: SubTopicId;
}

export const ExerciseView: React.FC<ExerciseViewProps> = ({
  currentQuestionId,
  answers,
  onSaveAnswer,
  onChangeQuestion,
  initialSubtopicFilter
}) => {
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>(initialSubtopicFilter || 'all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unanswered' | 'answered'>('all');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSizeMode, setFontSizeMode] = useState<'normal' | 'large' | 'ifp'>('normal');

  // Timer
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Filtered Questions
  const filteredQuestions = ALL_QUESTIONS.filter(q => {
    const matchSubtopic = selectedSubtopic === 'all' || q.subtopicId === selectedSubtopic;
    const isAnswered = answers[q.id]?.submitted;
    const matchStatus =
      statusFilter === 'all' ||
      (statusFilter === 'answered' && isAnswered) ||
      (statusFilter === 'unanswered' && !isAnswered);
    return matchSubtopic && matchStatus;
  });

  const currentQuestionIndex = ALL_QUESTIONS.findIndex(q => q.id === currentQuestionId);
  const activeQuestion = ALL_QUESTIONS[currentQuestionIndex >= 0 ? currentQuestionIndex : 0];

  const handleNext = () => {
    if (currentQuestionIndex < ALL_QUESTIONS.length - 1) {
      onChangeQuestion(ALL_QUESTIONS[currentQuestionIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      onChangeQuestion(ALL_QUESTIONS[currentQuestionIndex - 1].id);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const fontClass =
    fontSizeMode === 'ifp'
      ? 'text-xl'
      : fontSizeMode === 'large'
      ? 'text-lg'
      : 'text-base';

  return (
    <div className={`space-y-6 animate-fadeIn ${fontClass}`}>
      {/* Top Toolbar: IFP Controls & Timer */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        {/* Timer & Soal Terjawab */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-red-50 text-red-900 px-3.5 py-1.5 rounded-xl border border-red-200 font-mono font-bold text-sm">
            <Clock className="w-4 h-4 text-red-700" />
            <span>Waktu: {formatTimer(secondsElapsed)}</span>
          </div>

          <div className="text-xs sm:text-sm font-semibold text-slate-600">
            Terjawab:{' '}
            <span className="font-bold text-slate-900">
              {Object.values(answers).filter(a => a.submitted).length} / 30
            </span>
          </div>
        </div>

        {/* IFP Screen & Font Controls */}
        <div className="flex items-center gap-2">
          {/* Font Size Selector */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-700">
            <button
              onClick={() => setFontSizeMode('normal')}
              className={`px-2.5 py-1 rounded-lg transition ${
                fontSizeMode === 'normal' ? 'bg-white shadow text-red-700' : 'hover:bg-slate-200'
              }`}
            >
              Standar
            </button>
            <button
              onClick={() => setFontSizeMode('large')}
              className={`px-2.5 py-1 rounded-lg transition ${
                fontSizeMode === 'large' ? 'bg-white shadow text-red-700' : 'hover:bg-slate-200'
              }`}
            >
              Besar
            </button>
            <button
              onClick={() => setFontSizeMode('ifp')}
              className={`px-2.5 py-1 rounded-lg transition ${
                fontSizeMode === 'ifp' ? 'bg-red-700 shadow text-white' : 'hover:bg-slate-200'
              }`}
              title="Interactive Flat Panel Mode Layar Besar"
            >
              IFP 4K
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 transition"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Mode Layar Penuh (IFP)'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Grid Navigasi 30 Nomor Soal */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5 uppercase tracking-wider text-red-800">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Navigasi 30 Nomor Soal:
          </span>

          {/* Filter Status */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2 py-0.5 rounded text-[11px] ${
                statusFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              Semua (30)
            </button>
            <button
              onClick={() => setStatusFilter('unanswered')}
              className={`px-2 py-0.5 rounded text-[11px] ${
                statusFilter === 'unanswered' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              Belum
            </button>
            <button
              onClick={() => setStatusFilter('answered')}
              className={`px-2 py-0.5 rounded text-[11px] ${
                statusFilter === 'answered' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              Sudah
            </button>
          </div>
        </div>

        {/* Buttons Grid 1 - 30 */}
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-1.5 sm:gap-2">
          {ALL_QUESTIONS.map(q => {
            const ans = answers[q.id];
            const isActive = q.id === activeQuestion.id;
            const isSubmitted = ans?.submitted;
            const isCorrect = ans?.isFullyCorrect;
            const isPartial = !isCorrect && (ans?.score || 0) > 0;

            let btnColor = 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100';
            if (isSubmitted) {
              if (isCorrect) {
                btnColor = 'bg-emerald-600 text-white border-emerald-700 shadow-sm';
              } else if (isPartial) {
                btnColor = 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm';
              } else {
                btnColor = 'bg-rose-600 text-white border-rose-700 shadow-sm';
              }
            }

            return (
              <button
                key={q.id}
                onClick={() => onChangeQuestion(q.id)}
                className={`h-9 rounded-xl font-bold text-xs sm:text-sm border-2 transition flex items-center justify-center ${btnColor} ${
                  isActive ? 'ring-4 ring-red-500/40 scale-105 z-10 font-black' : ''
                }`}
                title={`Soal ${q.id}: ${q.subtopicTitle}`}
              >
                {String(q.id).padStart(2, '0')}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
            <span>Benar Penuh</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span>Skor Parsial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-600"></span>
            <span>Belum Tepat</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-100 border border-slate-300"></span>
            <span>Belum Dikerjakan</span>
          </div>
        </div>
      </div>

      {/* Active Question Card */}
      <QuestionCard
        question={activeQuestion}
        currentIndex={currentQuestionIndex}
        totalQuestions={ALL_QUESTIONS.length}
        userAnswer={answers[activeQuestion.id]}
        onSaveAnswer={newAns => onSaveAnswer(activeQuestion.id, newAns)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
