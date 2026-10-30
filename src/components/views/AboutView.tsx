import React from 'react';
import { Sparkles, Award, BookOpen, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header Profil */}
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-900 font-bold text-xs uppercase tracking-wider">
          Dedikasi Pendidikan Fisika Indonesia
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          TENTANG <span className="text-red-700">MISTER JO</span>
        </h1>
        <p className="text-slate-600 text-base italic">
          "Memahami Cahaya, Menguasai Optika, Menaklukkan TKA!"
        </p>
      </div>

      {/* Profil Card Utama */}
      <div className="bg-gradient-to-br from-red-900 via-rose-950 to-red-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-amber-400 to-red-500 p-1 shrink-0 shadow-2xl">
            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center font-black text-4xl text-amber-400">
              JO
            </div>
          </div>
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-red-800 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/40">
              Senior Physics Educator & Pakar HOTS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Mister Jo — Fisika Jenius
            </h2>
            <p className="text-rose-200 text-sm sm:text-base leading-relaxed">
              Guru Fisika berdedikasi dengan pengalaman lebih dari satu dekade membimbing ribuan siswa SMA menembus perguruan tinggi negeri impian dan olimpiade sains nasional.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-red-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-red-950/70 p-4 rounded-2xl border border-red-800/40">
            <Award className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <div className="text-base font-bold text-white">Spesialis HOTS TKA</div>
            <div className="text-xs text-rose-300">Penyusun ribuan soal penalaran analitis</div>
          </div>
          <div className="bg-red-950/70 p-4 rounded-2xl border border-red-800/40">
            <BookOpen className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <div className="text-base font-bold text-white">Optika Geometri Murni</div>
            <div className="text-xs text-rose-300">Penguasaan mikroskop, teleskop, dan lup</div>
          </div>
          <div className="bg-red-950/70 p-4 rounded-2xl border border-red-800/40">
            <HeartHandshake className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <div className="text-base font-bold text-white">Bimbingan Ramah</div>
            <div className="text-xs text-rose-300">Narator suara interaktif bahasa Indonesia</div>
          </div>
        </div>
      </div>

      {/* Filosofi Pengajaran */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-xl font-black text-slate-900">Filosofi Merah Putih — Fisika Jenius</h3>
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          Aplikasi ini dikembangkan dengan semangat kemerdekaan berpikir para pelajar Indonesia. Belajar fisika bukanlah tentang menghafalkan rumus-rumus mati, melainkan melatih ketajaman nalar, membaca fenomena alam, menginterpretasi data eksperimen, dan menyusun solusi matematis yang logis.
        </p>
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          Materi <span className="font-bold text-red-800">Alat-Alat Optik dan Cacat Mata</span> merupakan salah satu materi paling sering muncul dalam Tes Kemampuan Akademik (TKA) dan seleksi masuk perguruan tinggi. Melalui 30 soal HOTS yang kami susun secara presisi, Anda dipersiapkan untuk menghadapi berbagai bentuk variasi soal, dari pilihan ganda klasik, pilihan ganda kompleks multi-pernyataan, hingga penalaran benar-salah.
        </p>
      </div>
    </div>
  );
};
