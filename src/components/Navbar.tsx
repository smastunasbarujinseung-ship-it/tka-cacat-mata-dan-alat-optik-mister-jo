import React, { useState } from 'react';
import { Sparkles, Menu, X, BookOpen, Compass, BarChart3, HelpCircle, User, Award, Play } from 'lucide-react';
import { speechService } from '../utils/speech';

export type NavTab =
  | 'beranda'
  | 'petunjuk'
  | 'bank-rumus'
  | 'latihan'
  | 'evaluasi'
  | 'progres'
  | 'tentang';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  answeredCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  answeredCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems: { id: NavTab; label: string; speechAnnounce: string }[] = [
    { id: 'beranda', label: 'BERANDA', speechAnnounce: 'Membuka Beranda Fisika Jenius bersama Mister Jo.' },
    { id: 'petunjuk', label: 'PETUNJUK', speechAnnounce: 'Membuka Petunjuk Belajar Bersama Mister Jo.' },
    { id: 'bank-rumus', label: 'BANK RUMUS', speechAnnounce: 'Membuka Bank Rumus Kunci Optika Geometri.' },
    { id: 'latihan', label: 'LATIHAN 30 SOAL', speechAnnounce: 'Membuka Halaman Latihan 30 Soal HOTS.' },
    { id: 'evaluasi', label: 'EVALUASI', speechAnnounce: 'Membuka Hasil dan Evaluasi Belajar.' },
    { id: 'progres', label: 'PROGRES', speechAnnounce: 'Membuka Riwayat Progres Belajar.' },
    { id: 'tentang', label: 'TENTANG MISTER JO', speechAnnounce: 'Membuka Profil Mister Jo.' }
  ];

  const handleTabClick = (tab: NavTab, speechText: string) => {
    speechService.stop();
    onSelectTab(tab);
    setMobileMenuOpen(false);
    // Announce the menu transition naturally
    if (tab !== 'petunjuk') {
      speechService.speak(speechText);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-red-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleTabClick('beranda', 'Membuka Beranda Fisika Jenius')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-800 to-rose-950 flex items-center justify-center text-amber-400 font-black text-xl shadow-md border-2 border-amber-400/50 group-hover:scale-105 transition">
              FJ
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-xl text-slate-950 tracking-tight">
                  FISIKA <span className="text-red-700">JENIUS</span>
                </span>
                <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded font-black tracking-wider uppercase">
                  TKA 2026
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-semibold truncate">
                Mister Jo • Master Class Alat Optik
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {menuItems.map(item => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id, item.speechAnnounce)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold tracking-wide transition flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'text-slate-700 hover:text-red-700 hover:bg-red-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'latihan' && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black">
                      30
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact Tablet Nav Items */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            {menuItems.slice(0, 5).map(item => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id, item.speechAnnounce)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
                    isActive
                      ? 'bg-red-700 text-white'
                      : 'text-slate-700 hover:text-red-700 hover:bg-red-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Badges & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleTabClick('latihan', 'Membuka Latihan 30 Soal')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-800 border border-red-200 rounded-xl text-xs font-bold hover:bg-red-100 transition"
            >
              <Play className="w-3.5 h-3.5 fill-red-700" />
              <span>{answeredCount}/30 Selesai</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-1 shadow-lg animate-fadeIn">
          {menuItems.map(item => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id, item.speechAnnounce)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition flex items-center justify-between ${
                  isActive
                    ? 'bg-red-700 text-white'
                    : 'text-slate-700 hover:bg-red-50 hover:text-red-700'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'latihan' && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black">
                    30 Soal
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
