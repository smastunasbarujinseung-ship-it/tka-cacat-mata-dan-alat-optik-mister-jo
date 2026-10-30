import React from 'react';
import { Play, Sparkles, BookOpen, Calculator, Award, Compass, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SUBTOPICS, ALL_QUESTIONS } from '../../data/questions';
import { MathView } from '../MathView';
import { SubTopicId } from '../../types';

interface HomeViewProps {
  onStartExercise: (subtopicId?: SubTopicId) => void;
  onNavigate: (view: 'beranda' | 'petunjuk' | 'bank-rumus' | 'latihan' | 'evaluasi' | 'progres' | 'tentang') => void;
  answeredCount: number;
  totalScore: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onStartExercise,
  onNavigate,
  answeredCount,
  totalScore
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner Merah Putih Fisika Jenius */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-rose-950 to-red-950 text-white p-6 sm:p-10 md:p-12 shadow-2xl border border-amber-500/30">
        {/* Optical Ray Accent Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <line x1="0" y1="200" x2="800" y2="200" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 0 100 Q 400 200 800 100" fill="none" stroke="#ef4444" strokeWidth="2" />
            <path d="M 0 300 Q 400 200 800 300" fill="none" stroke="#ef4444" strokeWidth="2" />
            <circle cx="400" cy="200" r="180" stroke="#fbbf24" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-800/80 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>TKA FISIKA MASTER CLASS 2026 • ALAT OPTIK & CACAT MATA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            FISIKA JENIUS <span className="text-amber-400">MISTER JO</span>
          </h1>

          <p className="text-lg sm:text-xl text-rose-100 italic font-medium leading-relaxed">
            "Memahami Cahaya, Menguasai Optika, Menaklukkan TKA!"
          </p>

          <p className="text-sm sm:text-base text-rose-200/90 leading-relaxed max-w-2xl">
            Aplikasi web interaktif latihan 30 soal HOTS penalaran tingkat tinggi. Dilengkapi narator bimbingan audio suara Mister Jo (TTS Bahasa Indonesia), visualisasi diagram optik SVG presisi, bank rumus lengkap, dan trik kilat ujian.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onStartExercise()}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base rounded-2xl shadow-lg transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2.5"
            >
              <Play className="w-5 h-5 fill-slate-950" />
              <span>Mulai Latihan 30 Soal</span>
            </button>

            <button
              onClick={() => onNavigate('bank-rumus')}
              className="px-5 py-3.5 bg-red-950/80 hover:bg-red-800/80 border border-amber-400/40 text-amber-300 font-bold text-base rounded-2xl shadow transition flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>Bank Rumus Kunci</span>
            </button>

            <button
              onClick={() => onNavigate('petunjuk')}
              className="px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-2xl transition"
            >
              Petunjuk Penggunaan
            </button>
          </div>
        </div>

        {/* Floating Quick Stats Card */}
        <div className="mt-8 pt-6 border-t border-red-800/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-red-950/60 p-3.5 rounded-2xl border border-red-800/40">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">30</div>
            <div className="text-xs text-rose-200 mt-0.5">Soal HOTS Numerik</div>
          </div>
          <div className="bg-red-950/60 p-3.5 rounded-2xl border border-red-800/40">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">10</div>
            <div className="text-xs text-rose-200 mt-0.5">Submateri Lengkap</div>
          </div>
          <div className="bg-red-950/60 p-3.5 rounded-2xl border border-red-800/40">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">{answeredCount}/30</div>
            <div className="text-xs text-rose-200 mt-0.5">Soal Dikerjakan</div>
          </div>
          <div className="bg-red-950/60 p-3.5 rounded-2xl border border-red-800/40">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">{totalScore.toFixed(0)}%</div>
            <div className="text-xs text-rose-200 mt-0.5">Skor Akumulasi</div>
          </div>
        </div>
      </div>

      {/* Profil Guru Mister Jo Highlight */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-red-100 flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-red-800 via-rose-700 to-amber-500 p-1 shrink-0 shadow-lg">
          <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center font-black text-3xl text-amber-400">
            JO
          </div>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider">
            Pengajar & Master Educator
          </div>
          <h2 className="text-2xl font-black text-slate-900">Mister Jo — Fisika Jenius Indonesia</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            "Fisika bukanlah sekadar deretan rumus matematika yang harus dihafal membabi buta, melainkan seni berpikir logis dan bernalar tentang bagaimana alam semesta bekerja. Di masterclass ini, saya mendampingi kalian menguasai setiap sudut optika geometri hingga kalian mampu menaklukkan TKA dengan percaya diri."
          </p>
        </div>
      </div>

      {/* Grid 10 Submateri Pembelajaran */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black text-slate-900">10 Submateri Optika & Cacat Mata</h3>
            <p className="text-sm text-slate-500">Masing-masing memuat 3 soal HOTS dengan 3 variasi tipe soal berbeda</p>
          </div>
          <button
            onClick={() => onNavigate('bank-rumus')}
            className="text-red-700 hover:text-red-800 font-bold text-sm flex items-center gap-1 transition"
          >
            <span>Buka Semua Rumus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUBTOPICS.map((sub, idx) => (
            <div
              key={sub.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-red-400 hover:shadow-lg transition flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    3 Soal HOTS
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition">
                  {sub.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sub.shortDesc}
                </p>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-center overflow-x-auto text-xs">
                  <MathView latex={sub.keyFormulaLatex} />
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onStartExercise(sub.id)}
                  className="w-full py-2 bg-red-50 hover:bg-red-700 hover:text-white text-red-700 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Latihan Materi Ini</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
