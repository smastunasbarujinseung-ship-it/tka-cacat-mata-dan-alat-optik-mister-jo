import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, AlertTriangle, ArrowRight, BookOpen, RotateCcw, TrendingUp, Sparkles } from 'lucide-react';
import { ALL_QUESTIONS } from '../../data/questions';
import { calculateOverallStats } from '../../utils/scoring';
import { UserAnswer, SubTopicId } from '../../types';

interface EvaluationViewProps {
  answers: Record<number, UserAnswer>;
  onStartExercise: (subtopicId?: SubTopicId) => void;
  onNavigate: (view: 'beranda' | 'bank-rumus' | 'latihan' | 'progres') => void;
}

export const EvaluationView: React.FC<EvaluationViewProps> = ({
  answers,
  onStartExercise,
  onNavigate
}) => {
  const stats = calculateOverallStats(ALL_QUESTIONS, answers);

  useEffect(() => {
    if (stats.percentage >= 80) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  }, [stats.percentage]);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'MASTER OPTIKA':
        return 'from-amber-500 to-yellow-600 text-slate-950';
      case 'SANGAT BAIK':
        return 'from-emerald-600 to-teal-700 text-white';
      case 'BAIK':
        return 'from-blue-600 to-indigo-700 text-white';
      case 'PERLU PENGUATAN':
        return 'from-orange-500 to-red-600 text-white';
      default:
        return 'from-rose-700 to-red-900 text-white';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Skor & Kategori */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-red-100 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-900 font-bold text-xs uppercase tracking-wider">
          Laporan Hasil & Evaluasi Belajar TKA
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          EVALUASI KOMPREHENSIF <span className="text-red-700">MISTER JO</span>
        </h1>

        {/* Skor Utama */}
        <div className="py-4">
          <div className="inline-block p-8 rounded-3xl bg-slate-950 text-white shadow-2xl border-4 border-amber-400">
            <div className="text-xs uppercase font-extrabold text-amber-400 tracking-widest mb-1">
              SKOR AKHIR TKA OPTIKA
            </div>
            <div className="text-6xl sm:text-7xl font-black text-amber-300 font-mono tracking-tight">
              {stats.percentage.toFixed(1)}%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-2">
              {stats.totalEarnedScore.toFixed(1)} dari {stats.totalQuestions} Poin Maksimal
            </div>
          </div>
        </div>

        {/* Badge Kategori */}
        <div>
          <div
            className={`inline-block px-6 py-2.5 rounded-2xl font-black text-lg sm:text-xl shadow-lg bg-gradient-to-r ${getCategoryColor(
              stats.category
            )}`}
          >
            🏆 {stats.category}
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          {stats.category === 'MASTER OPTIKA'
            ? 'Luar biasa jenius! Pemahaman konsep dan kalkulasi optika geometri Anda telah berada di level penguasaan tertinggi TKA.'
            : stats.category === 'SANGAT BAIK'
            ? 'Hebat! Anda menguasai sebagian besar materi dengan ketelitian yang tinggi. Tingkatkan latihan pada sedikit materi minor.'
            : stats.category === 'BAIK'
            ? 'Bagus! Dasar-dasar optika sudah Anda pahami dengan baik. Cermati trik cepat dan ketelitian manipulasi pecahan aljabar.'
            : stats.category === 'PERLU PENGUATAN'
            ? 'Terus semangat! Masih ada beberapa konsep optika yang tertukar, terutama konvensi tanda dan panjang teropong/mikroskop.'
            : 'Jangan berkecil hati! Buka Bank Rumus Kunci, pelajari contoh pembahasannya, dan ulangi latihan soal bersama Mister Jo!'}
        </p>
      </div>

      {/* Ringkasan Statistik Soal */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
          <div className="text-3xl font-black text-slate-900 font-mono">
            {stats.totalAttempted} / {stats.totalQuestions}
          </div>
          <div className="text-xs text-slate-500 font-semibold mt-1">Soal Dikerjakan</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-emerald-200 text-center shadow-sm bg-emerald-50/20">
          <div className="text-3xl font-black text-emerald-600 font-mono">
            {stats.totalFullyCorrect}
          </div>
          <div className="text-xs text-emerald-800 font-semibold mt-1">Benar Penuh</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center shadow-sm bg-amber-50/20">
          <div className="text-3xl font-black text-amber-600 font-mono">
            {stats.totalPartiallyCorrect}
          </div>
          <div className="text-xs text-amber-800 font-semibold mt-1">Skor Parsial</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-rose-200 text-center shadow-sm bg-rose-50/20">
          <div className="text-3xl font-black text-rose-600 font-mono">
            {stats.totalWrong}
          </div>
          <div className="text-xs text-rose-800 font-semibold mt-1">Belum Tepat</div>
        </div>
      </div>

      {/* Diagnostik Penguasaan 10 Submateri */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Penguasaan per Submateri (10 Topik)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Evaluasi ketuntasan berdasarkan nilai 3 soal di setiap submateri (Standar tuntas: ≥ 75%)
            </p>
          </div>
          <TrendingUp className="w-6 h-6 text-red-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.subtopicMasteries.map(sub => {
            const isTuntas = sub.isMastered;

            return (
              <div
                key={sub.subtopicId}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2 hover:border-red-300 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {sub.title}
                  </span>
                  <span
                    className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${
                      isTuntas
                        ? 'bg-emerald-100 text-emerald-800'
                        : sub.attempted > 0
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isTuntas ? 'TUNTAS' : sub.attempted > 0 ? 'PERLU PENGUATAN' : 'BELUM DIKERJAKAN'}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      isTuntas ? 'bg-emerald-500' : 'bg-red-600'
                    }`}
                    style={{ width: `${Math.min(100, Math.max(0, sub.percentage))}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>
                    Dikerjakan: {sub.attempted} / {sub.total} Soal
                  </span>
                  <span className="font-bold text-slate-800 font-mono">
                    {sub.percentage.toFixed(0)}% (Skor {sub.earnedScore}/{sub.total})
                  </span>
                </div>

                <div className="pt-1 text-right">
                  <button
                    onClick={() => onStartExercise(sub.subtopicId)}
                    className="text-xs text-red-700 hover:text-red-900 font-bold hover:underline"
                  >
                    Buka Soal Submateri Ini →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rekomendasi Belajar Personal Mister Jo */}
      <div className="bg-gradient-to-r from-red-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/40 space-y-4">
        <div className="flex items-center gap-2 text-amber-400 font-black text-lg">
          <Sparkles className="w-5 h-5" />
          <span>Rekomendasi Belajar Mister Jo</span>
        </div>

        <ul className="space-y-2.5 text-sm sm:text-base text-rose-100">
          {stats.recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                {i + 1}
              </span>
              <span>{rec}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onStartExercise()}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow transition flex items-center gap-2"
          >
            <span>Lanjutkan Latihan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('bank-rumus')}
            className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Buka Bank Rumus Kunci</span>
          </button>
        </div>
      </div>
    </div>
  );
};
