import React, { useEffect } from 'react';
import { Volume2, Play, CheckCircle2, Award, Zap, HelpCircle, Monitor, Smartphone, Tablet, RefreshCw } from 'lucide-react';
import { NarratorControl } from '../NarratorControl';
import { speechService } from '../../utils/speech';

export const INSTRUCTIONS_SPEECH_TEXT =
  'Halo, para pejuang TKA! Selamat datang di Fisika Jenius bersama Mister Jo. Di aplikasi ini kalian akan berlatih 30 soal penalaran tingkat tinggi tentang alat-alat optik dan cacat mata. Kalian tidak hanya mengerjakan soal, tetapi juga akan dibimbing memahami stimulus, mengenali rumus, menyusun langkah perhitungan, dan menganalisis jawaban. Setiap soal dilengkapi narasi, pembahasan ilmiah, serta trik cepat untuk membantu kalian menghemat waktu saat ujian. Ada tiga jenis soal yang akan kalian hadapi: pilihan ganda, pilihan ganda kompleks, dan benar-salah. Kalian juga dapat mempelajari bank rumus kunci, melihat hasil evaluasi, dan melanjutkan progres belajar kapan saja. Jangan takut salah. Kesalahan adalah bagian dari proses belajar. Mari kita buktikan bahwa Fisika bukan sekadar menghafal rumus, melainkan kemampuan berpikir dan bernalar. Selamat belajar. Salam Fisika Jenius!';

interface InstructionsViewProps {
  onStartExercise: () => void;
}

export const InstructionsView: React.FC<InstructionsViewProps> = ({ onStartExercise }) => {
  // Read instructions aloud automatically on page entrance
  useEffect(() => {
    speechService.speak(INSTRUCTIONS_SPEECH_TEXT);
    return () => {
      speechService.stop();
    };
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      {/* Header Petunjuk */}
      <div className="text-center space-y-2">
        <span className="px-3 py-1 rounded-full bg-red-100 text-red-900 font-bold text-xs uppercase tracking-wider">
          Panduan Lengkap
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          Petunjuk Belajar Bersama <span className="text-red-700">Mister Jo</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Panduan interaktif untuk memaksimalkan latihan 30 Soal HOTS Penalaran Fisika TKA 2026
        </p>
      </div>

      {/* Audio Narrator Bar */}
      <NarratorControl customText={INSTRUCTIONS_SPEECH_TEXT} />

      {/* Naskah Petunjuk Utama */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 space-y-6">
        <div className="p-5 rounded-2xl bg-rose-50/70 border-l-4 border-red-700 text-slate-800 text-base sm:text-lg leading-relaxed italic">
          "{INSTRUCTIONS_SPEECH_TEXT}"
        </div>

        {/* 3 Bentuk Soal TKA */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-black text-slate-900">3 Bentuk Soal yang Diujikan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white font-bold text-xs uppercase">
                1. Pilihan Ganda (10 Soal)
              </span>
              <h3 className="font-bold text-slate-900">Single Choice (A - E)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Terdapat 5 pilihan opsi. Hanya ada 1 opsi yang paling benar. Bernilai 1 poin jika benar dan 0 jika salah.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2">
              <span className="px-2.5 py-0.5 rounded bg-purple-600 text-white font-bold text-xs uppercase">
                2. PG Kompleks (10 Soal)
              </span>
              <h3 className="font-bold text-slate-900">Multi-Select (A - E)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pilih seluruh pernyataan yang benar (bisa 2, 3, atau lebih). Penilaian parsial adil: skor dihitung dari rasio jawaban benar dikurangi jawaban salah yang dipilih.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-white font-bold text-xs uppercase">
                3. Benar - Salah (10 Soal)
              </span>
              <h3 className="font-bold text-slate-900">3 Pernyataan Analitis</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Setiap soal memuat 3 pernyataan optika. Anda menentukan status BENAR atau SALAH untuk tiap butir. Setiap butir benar menyumbang sepertiga poin.
              </p>
            </div>
          </div>
        </div>

        {/* Fitur Utama Pembelajaran */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-black text-slate-900">Fitur Utama Pembelajaran</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <Volume2 className="w-6 h-6 text-red-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900">Narator Suara Mister Jo</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Dilengkapi kontrol jeda, ulangi, dan kecepatan. Anda dapat memilih mendengarkan pengantar, stimulus, pertanyaan, atau pembahasan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <Zap className="w-6 h-6 text-amber-600 shrink-0 mt-0.5 fill-amber-500" />
              <div>
                <h3 className="font-bold text-slate-900">⚡ Trik Cepat Mister Jo</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Formula praktis dan pola cepat untuk menyelesaikan soal numerik dalam 15-30 detik saat ujian tanpa kehilangan logika fisika.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <RefreshCw className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900">Penyimpanan Progres Otomatis</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Progres Anda tersimpan di browser secara offline. Anda dapat menutup tab dan melanjutkannya kembali kapan pun tanpa kehilangan data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <Monitor className="w-6 h-6 text-purple-700 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900">Siap Layar Besar IFP & Ponsel</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Dirancang khusus agar nyaman digunakan guru di Interactive Flat Panel (IFP) sekolah serta fleksibel dipelajari mandiri lewat smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Latihan */}
        <div className="pt-4 text-center">
          <button
            onClick={onStartExercise}
            className="px-8 py-4 bg-gradient-to-r from-red-700 to-rose-700 hover:from-red-800 hover:to-rose-800 text-white font-black text-lg rounded-2xl shadow-xl transition transform hover:scale-105 active:scale-95 inline-flex items-center gap-3"
          >
            <Play className="w-6 h-6 fill-white" />
            <span>Mulai Berlatih Sekarang Bersama Mister Jo!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
