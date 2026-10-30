import React from 'react';
import { NavTab } from './Navbar';
import { SUBTOPICS } from '../data/questions';
import { SubTopicId } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onSelectSubtopic: (subtopicId: SubTopicId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onSelectSubtopic }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t-4 border-red-700 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Slogan */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-700 text-amber-300 font-black flex items-center justify-center text-sm">
                FJ
              </div>
              <span className="font-black text-white text-base tracking-wide">
                FISIKA JENIUS <span className="text-red-600">TKA 2026</span>
              </span>
            </div>
            <p className="text-amber-400 font-semibold italic text-sm">
              "Memahami Cahaya, Menguasai Optika, Menaklukkan TKA!"
            </p>
            <p className="text-slate-400 leading-relaxed">
              Program pelatihan intensif 30 Soal HOTS Alat-Alat Optik dan Cacat Mata bersama pengajar Master Educator Mister Jo.
            </p>
          </div>

          {/* Navigasi Menu */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Menu Utama</h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onSelectTab('beranda')} className="hover:text-amber-400 transition">
                  Beranda Fisika Jenius
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('petunjuk')} className="hover:text-amber-400 transition">
                  Petunjuk Penggunaan & TTS
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('bank-rumus')} className="hover:text-amber-400 transition">
                  Bank Rumus Kunci Optika
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('latihan')} className="hover:text-amber-400 transition">
                  Latihan 30 Soal HOTS
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('evaluasi')} className="hover:text-amber-400 transition">
                  Hasil & Evaluasi Belajar
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('progres')} className="hover:text-amber-400 transition">
                  Riwayat Progres Belajar
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('tentang')} className="hover:text-amber-400 transition">
                  Tentang Mister Jo
                </button>
              </li>
            </ul>
          </div>

          {/* Submateri 1-5 */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Submateri Bagian I</h4>
            <ul className="space-y-1.5">
              {SUBTOPICS.slice(0, 5).map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectSubtopic(s.id)}
                    className="hover:text-rose-400 transition text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Submateri 6-10 */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Submateri Bagian II</h4>
            <ul className="space-y-1.5">
              {SUBTOPICS.slice(5, 10).map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectSubtopic(s.id)}
                    className="hover:text-rose-400 transition text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p>© 2026 FISIKA JENIUS • MISTER JO. Dilengkapi Web SpeechSynthesis API & KaTeX.</p>
          <p className="text-[11px]">Tema: Merah Putih — Fisika Jenius • Kompatibel IFP & Mobile</p>
        </div>
      </div>
    </footer>
  );
};
