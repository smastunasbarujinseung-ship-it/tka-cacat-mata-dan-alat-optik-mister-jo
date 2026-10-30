import React from 'react';
import { DiagramConfig } from '../types';

interface OpticalDiagramProps {
  config: DiagramConfig;
}

export const OpticalDiagram: React.FC<OpticalDiagramProps> = ({ config }) => {
  const { type, label } = config;

  // 1. Diagram Cacat Mata Miopi
  if (type === 'eye-miopi') {
    return (
      <div className="bg-slate-950 p-4 rounded-xl border border-rose-900/50 shadow-inner my-3 text-slate-100">
        <div className="text-xs font-semibold text-rose-400 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            {label || 'Diagram Pembiasan Mata Miopi (Rabun Jauh)'}
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Optika Fisis Retinal</span>
        </div>
        <svg viewBox="0 0 600 220" className="w-full h-auto max-h-56 select-none font-sans">
          <defs>
            <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="lensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="glassesGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#be123c" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Sumbu Optik Utama */}
          <line x1="20" y1="110" x2="580" y2="110" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />

          {/* Bola Mata */}
          <ellipse cx="440" cy="110" rx="90" ry="80" fill="url(#eyeGrad)" stroke="#64748b" strokeWidth="2" />
          {/* Kornea */}
          <path d="M 360 70 A 50 50 0 0 1 360 150" fill="none" stroke="#38bdf8" strokeWidth="3" />
          {/* Lensa Mata */}
          <ellipse cx="380" cy="110" rx="10" ry="42" fill="url(#lensGrad)" stroke="#38bdf8" strokeWidth="2" />
          {/* Retina di belakang */}
          <path d="M 500 60 A 85 85 0 0 1 500 160" fill="none" stroke="#e11d48" strokeWidth="4" />
          <text x="505" y="75" fill="#f43f5e" fontSize="11" fontWeight="bold">Retina</text>

          {/* Kacamata Lensa Cekung (Koreksi) */}
          <path d="M 230 65 Q 240 110 230 155 L 245 155 Q 235 110 245 65 Z" fill="url(#glassesGrad)" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="200" y="55" fill="#fb7185" fontSize="11" fontWeight="bold">Lensa Cekung (-)</text>

          {/* Sinar Sejajar Datang dari Jauh */}
          <line x1="30" y1="85" x2="230" y2="85" stroke="#fbbf24" strokeWidth="2" />
          <line x1="30" y1="135" x2="230" y2="135" stroke="#fbbf24" strokeWidth="2" />

          {/* Sinar Divergen oleh Kacamata Cekung */}
          <line x1="245" y1="85" x2="380" y2="78" stroke="#fbbf24" strokeWidth="2" strokeDasharray="none" />
          <line x1="245" y1="135" x2="380" y2="142" stroke="#fbbf24" strokeWidth="2" strokeDasharray="none" />

          {/* Sinar Dibiaskan Lensa Mata Jatuh Tepat di Retina */}
          <line x1="380" y1="78" x2="520" y2="110" stroke="#34d399" strokeWidth="2.5" />
          <line x1="380" y1="142" x2="520" y2="110" stroke="#34d399" strokeWidth="2.5" />
          <circle cx="520" cy="110" r="4" fill="#34d399" />
          <text x="470" y="130" fill="#34d399" fontSize="10" fontWeight="bold">Fokus Terkoreksi</text>

          {/* Titik Fokus Tanpa Kacamata (Jatuh di Depan Retina) */}
          <circle cx="465" cy="110" r="3.5" fill="#f87171" stroke="#fff" strokeWidth="1" />
          <text x="420" y="95" fill="#f87171" fontSize="10">Fokus Tanpa Kacamata (Di Depan Retina)</text>

          {/* Label Titik Jauh PR */}
          <line x1="120" y1="90" x2="120" y2="130" stroke="#94a3b8" strokeWidth="1" />
          <text x="90" y="145" fill="#cbd5e1" fontSize="10">Titik Jauh (PR)</text>
        </svg>
      </div>
    );
  }

  // 2. Diagram Cacat Mata Hipermetropi
  if (type === 'eye-hipermetropi') {
    return (
      <div className="bg-slate-950 p-4 rounded-xl border border-amber-900/50 shadow-inner my-3 text-slate-100">
        <div className="text-xs font-semibold text-amber-400 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {label || 'Diagram Pembiasan Mata Hipermetropi (Rabun Dekat)'}
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Optika Refraksi Konvergen</span>
        </div>
        <svg viewBox="0 0 600 220" className="w-full h-auto max-h-56 select-none font-sans">
          <defs>
            <linearGradient id="convexGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Sumbu Optik */}
          <line x1="20" y1="110" x2="580" y2="110" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />

          {/* Bola Mata Pipih */}
          <ellipse cx="440" cy="110" rx="80" ry="78" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          {/* Lensa Mata Kurang Cembung */}
          <ellipse cx="380" cy="110" rx="7" ry="40" fill="#38bdf8" opacity="0.6" stroke="#38bdf8" strokeWidth="2" />
          {/* Retina */}
          <path d="M 495 65 A 75 75 0 0 1 495 155" fill="none" stroke="#f59e0b" strokeWidth="4" />
          <text x="500" y="80" fill="#f59e0b" fontSize="11" fontWeight="bold">Retina</text>

          {/* Objek Buku di Jarak Baca Sn (25 cm) */}
          <line x1="90" y1="110" x2="90" y2="80" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow)" />
          <circle cx="90" cy="80" r="3" fill="#ef4444" />
          <text x="70" y="70" fill="#fca5a5" fontSize="11" fontWeight="bold">Buku (Sn = 25 cm)</text>

          {/* Kacamata Lensa Cembung (+) */}
          <path d="M 230 65 Q 242 110 230 155 Q 218 110 230 65 Z" fill="url(#convexGrad)" stroke="#f59e0b" strokeWidth="2" />
          <text x="195" y="55" fill="#fcd34d" fontSize="11" fontWeight="bold">Lensa Cembung (+)</text>

          {/* Sinar dari Buku Divergen ke Kacamata */}
          <line x1="90" y1="80" x2="230" y2="82" stroke="#fcd34d" strokeWidth="2" />
          <line x1="90" y1="80" x2="230" y2="138" stroke="#fcd34d" strokeWidth="2" />

          {/* Sinar Dibiaskan Konvergen ke Lensa Mata */}
          <line x1="230" y1="82" x2="380" y2="90" stroke="#fcd34d" strokeWidth="2" />
          <line x1="230" y1="138" x2="380" y2="130" stroke="#fcd34d" strokeWidth="2" />

          {/* Sinar Masuk Retina Terkoreksi */}
          <line x1="380" y1="90" x2="510" y2="110" stroke="#10b981" strokeWidth="2.5" />
          <line x1="380" y1="130" x2="510" y2="110" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="510" cy="110" r="4" fill="#10b981" />

          {/* Fokus Tanpa Kacamata (Jatuh di Belakang Retina) */}
          <line x1="380" y1="90" x2="560" y2="110" stroke="#f87171" strokeDasharray="3 3" strokeWidth="1.5" />
          <line x1="380" y1="130" x2="560" y2="110" stroke="#f87171" strokeDasharray="3 3" strokeWidth="1.5" />
          <circle cx="560" cy="110" r="4" fill="#f87171" />
          <text x="470" y="195" fill="#f87171" fontSize="10">Tanpa Kacamata: Fokus di Belakang Retina</text>
        </svg>
      </div>
    );
  }

  // 3. Diagram Presbiopi
  if (type === 'eye-presbiopi') {
    return (
      <div className="bg-slate-950 p-4 rounded-xl border border-purple-900/50 shadow-inner my-3 text-slate-100">
        <div className="text-xs font-semibold text-purple-400 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            {label || 'Diagram Presbiopi & Desain Lensa Kacamata Bifokal'}
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Sklerosis Lensa Mata</span>
        </div>
        <svg viewBox="0 0 600 200" className="w-full h-auto max-h-52 select-none font-sans">
          {/* Garis batas segmen kacamata */}
          <rect x="80" y="30" width="180" height="140" rx="30" fill="#1e1b4b" stroke="#818cf8" strokeWidth="3" />
          <line x1="80" y1="105" x2="260" y2="105" stroke="#a5b4fc" strokeDasharray="4 4" strokeWidth="2" />

          {/* Segmen Atas (Jauh) */}
          <text x="170" y="65" textAnchor="middle" fill="#c7d2fe" fontSize="12" fontWeight="bold">SEGMEN ATAS (JAUH)</text>
          <text x="170" y="85" textAnchor="middle" fill="#a5b4fc" fontSize="11">Koreksi Miopi: P = -100/PR</text>

          {/* Segmen Bawah (Baca) */}
          <rect x="120" y="115" width="100" height="45" rx="12" fill="#4338ca" stroke="#c084fc" strokeWidth="2" />
          <text x="170" y="133" textAnchor="middle" fill="#f5d0fe" fontSize="11" fontWeight="bold">SEGMEN BACA (+)</text>
          <text x="170" y="150" textAnchor="middle" fill="#e9d5ff" fontSize="10">P = 100/s - 100/PP</text>

          {/* Skema Penurunan Jangkauan Akomodasi */}
          <line x1="320" y1="100" x2="570" y2="100" stroke="#64748b" strokeWidth="3" />
          {/* Titik Baca 25 cm */}
          <circle cx="360" cy="100" r="5" fill="#ef4444" />
          <text x="360" y="80" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Sn (25 cm)</text>

          {/* Titik Dekat PP Lansia (Mundur) */}
          <circle cx="450" cy="100" r="6" fill="#eab308" />
          <text x="450" y="125" textAnchor="middle" fill="#fde047" fontSize="10" fontWeight="bold">PP Mundur (75-100 cm)</text>
          <path d="M 370 90 Q 410 75 440 90" fill="none" stroke="#eab308" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Titik Jauh PR */}
          <circle cx="550" cy="100" r="5" fill="#38bdf8" />
          <text x="550" y="80" textAnchor="middle" fill="#7dd3fc" fontSize="10" fontWeight="bold">PR (Miopi/∞)</text>
          <text x="445" y="165" textAnchor="middle" fill="#94a3b8" fontSize="10">Jarak Kerja Visual Berkurang Akibat Sklerosis Otot Siliaris</text>
        </svg>
      </div>
    );
  }

  // 4. Diagram Mikroskop
  if (type === 'microscope') {
    return (
      <div className="bg-slate-950 p-4 rounded-xl border border-red-900/50 shadow-inner my-3 text-slate-100">
        <div className="text-xs font-semibold text-red-400 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            {label || 'Diagram Pembentukan Bayangan pada Mikroskop Senyawa'}
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Objektif + Okuler</span>
        </div>
        <svg viewBox="0 0 600 230" className="w-full h-auto max-h-60 select-none font-sans">
          {/* Sumbu Optik Utama */}
          <line x1="20" y1="115" x2="580" y2="115" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />

          {/* Lensa Objektif (fokus pendek) */}
          <ellipse cx="140" cy="115" rx="8" ry="50" fill="#38bdf8" opacity="0.7" stroke="#0284c7" strokeWidth="2" />
          <text x="140" y="55" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="bold">Lensa Objektif</text>
          <text x="140" y="180" textAnchor="middle" fill="#94a3b8" fontSize="10">f_ob pendek</text>

          {/* Lensa Okuler (fokus lebih panjang) */}
          <ellipse cx="460" cy="115" rx="12" ry="75" fill="#a855f7" opacity="0.6" stroke="#9333ea" strokeWidth="2" />
          <text x="460" y="30" textAnchor="middle" fill="#d8b4fe" fontSize="11" fontWeight="bold">Lensa Okuler</text>
          <text x="460" y="205" textAnchor="middle" fill="#94a3b8" fontSize="10">f_ok sebagai Lup</text>

          {/* Benda / Preparat (di depan objektif sedikit di luar f_ob) */}
          <line x1="80" y1="115" x2="80" y2="90" stroke="#ef4444" strokeWidth="3" />
          <polygon points="76,90 84,90 80,82" fill="#ef4444" />
          <text x="80" y="75" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">Benda</text>

          {/* Bayangan Nyata Pertama oleh Objektif (Terbalik, Diperbesar di antara lensa) */}
          <line x1="320" y1="115" x2="320" y2="165" stroke="#f59e0b" strokeWidth="2.5" />
          <polygon points="316,165 324,165 320,173" fill="#f59e0b" />
          <text x="320" y="190" textAnchor="middle" fill="#fcd34d" fontSize="10" fontWeight="bold">Bayangan Objektif (Nyata, Terbalik)</text>

          {/* Berkas Sinar Objektif */}
          <line x1="80" y1="82" x2="140" y2="82" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="140" y1="82" x2="320" y2="173" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="80" y1="82" x2="140" y2="115" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="140" y1="115" x2="320" y2="173" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Sinar Okuler ke Mata */}
          <line x1="320" y1="173" x2="460" y2="155" stroke="#c084fc" strokeWidth="1.5" />
          <line x1="460" y1="155" x2="560" y2="135" stroke="#c084fc" strokeWidth="2" />
          <line x1="320" y1="173" x2="460" y2="185" stroke="#c084fc" strokeWidth="1.5" />
          <line x1="460" y1="185" x2="560" y2="195" stroke="#c084fc" strokeWidth="2" />

          {/* Simbol Mata Pengamat */}
          <path d="M 550 150 Q 565 165 550 180" fill="none" stroke="#e2e8f0" strokeWidth="3" />
          <circle cx="555" cy="165" r="4" fill="#38bdf8" />
          <text x="560" y="145" fill="#cbd5e1" fontSize="10">Mata</text>

          {/* Dimensi Panjang Tabung d */}
          <line x1="140" y1="215" x2="460" y2="215" stroke="#fb7185" strokeWidth="1.5" />
          <text x="300" y="210" textAnchor="middle" fill="#fda4af" fontSize="11" fontWeight="bold">Panjang Tabung d = s\'_ob + s_ok</text>
        </svg>
      </div>
    );
  }

  // 5. Diagram Teropong Bintang
  if (type === 'telescope') {
    return (
      <div className="bg-slate-950 p-4 rounded-xl border border-blue-900/50 shadow-inner my-3 text-slate-100">
        <div className="text-xs font-semibold text-blue-400 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            {label || 'Diagram Sinar Teropong Bintang (Teleskop Bias Kepler)'}
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Berkas Bintang Sejajar</span>
        </div>
        <svg viewBox="0 0 600 220" className="w-full h-auto max-h-56 select-none font-sans">
          {/* Sumbu Optik Utama */}
          <line x1="20" y1="110" x2="580" y2="110" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />

          {/* Lensa Objektif (fokus besar, diameter besar) */}
          <ellipse cx="110" cy="110" rx="14" ry="70" fill="#38bdf8" opacity="0.6" stroke="#0ea5e9" strokeWidth="2.5" />
          <text x="110" y="30" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="bold">Objektif (f_ob besar)</text>

          {/* Lensa Okuler (fokus kecil) */}
          <ellipse cx="480" cy="110" rx="8" ry="40" fill="#818cf8" opacity="0.6" stroke="#6366f1" strokeWidth="2" />
          <text x="480" y="55" textAnchor="middle" fill="#a5b4fc" fontSize="11" fontWeight="bold">Okuler (f_ok kecil)</text>

          {/* Berkas Sinar Sejajar dari Bintang Jauh (miring terhadap sumbu) */}
          <line x1="20" y1="60" x2="110" y2="80" stroke="#fbbf24" strokeWidth="2" />
          <line x1="20" y1="110" x2="110" y2="110" stroke="#fbbf24" strokeWidth="2" />
          <line x1="20" y1="160" x2="110" y2="140" stroke="#fbbf24" strokeWidth="2" />

          {/* Titik Fokus Bersama / Bayangan Nyata Terbalik */}
          <line x1="390" y1="110" x2="390" y2="145" stroke="#ef4444" strokeWidth="2.5" />
          <polygon points="386,145 394,145 390,152" fill="#ef4444" />
          <text x="390" y="170" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">F_ob berimpit F_ok</text>

          {/* Sinar Berkonvergensi ke Fokus */}
          <line x1="110" y1="80" x2="390" y2="152" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="110" y1="110" x2="390" y2="152" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="110" y1="140" x2="390" y2="152" stroke="#fbbf24" strokeWidth="1.5" />

          {/* Sinar Keluar dari Okuler sebagai Berkas Sejajar Lebar (Tanpa Akomodasi) */}
          <line x1="390" y1="152" x2="480" y2="130" stroke="#34d399" strokeWidth="1.5" />
          <line x1="390" y1="152" x2="480" y2="110" stroke="#34d399" strokeWidth="1.5" />
          <line x1="480" y1="130" x2="570" y2="150" stroke="#34d399" strokeWidth="2" />
          <line x1="480" y1="110" x2="570" y2="130" stroke="#34d399" strokeWidth="2" />

          {/* Panjang Teropong L */}
          <line x1="110" y1="195" x2="480" y2="195" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="295" y="190" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="bold">L = f_ob + f_ok (Panjang Teropong)</text>
        </svg>
      </div>
    );
  }

  // 6. Diagram Lup
  return (
    <div className="bg-slate-950 p-4 rounded-xl border border-emerald-900/50 shadow-inner my-3 text-slate-100">
      <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {label || 'Diagram Pembentukan Bayangan pada Lup (Kaca Pembesar)'}
        </span>
        <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Lensa Cembung Tunggal</span>
      </div>
      <svg viewBox="0 0 600 200" className="w-full h-auto max-h-52 select-none font-sans">
        {/* Sumbu Optik */}
        <line x1="20" y1="100" x2="580" y2="100" stroke="#475569" strokeDasharray="4 4" strokeWidth="1.5" />

        {/* Lensa Cembung Lup */}
        <ellipse cx="320" cy="100" rx="12" ry="70" fill="#10b981" opacity="0.6" stroke="#059669" strokeWidth="2.5" />
        <text x="320" y="20" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontWeight="bold">Lensa Lup (Cembung)</text>

        {/* Benda Nyata (di antara O dan F atau di F) */}
        <line x1="240" y1="100" x2="240" y2="70" stroke="#ef4444" strokeWidth="3" />
        <polygon points="236,70 244,70 240,62" fill="#ef4444" />
        <text x="240" y="55" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Benda (s ≤ f)</text>

        {/* Titik Fokus Lup F */}
        <circle cx="210" cy="100" r="3.5" fill="#fbbf24" />
        <text x="210" y="120" textAnchor="middle" fill="#fde047" fontSize="10">Fokus (F)</text>
        <circle cx="430" cy="100" r="3.5" fill="#fbbf24" />
        <text x="430" y="120" textAnchor="middle" fill="#fde047" fontSize="10">Fokus (F\')</text>

        {/* Bayangan Maya Diperbesar Tegak di Belakang Benda */}
        <line x1="120" y1="100" x2="120" y2="25" stroke="#38bdf8" strokeDasharray="4 4" strokeWidth="3" />
        <polygon points="115,25 125,25 120,15" fill="#38bdf8" />
        <text x="120" y="10" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontWeight="bold">Bayangan Maya, Tegak, Diperbesar</text>

        {/* Berkas Sinar Istimewa */}
        <line x1="240" y1="62" x2="320" y2="62" stroke="#fbbf24" strokeWidth="1.5" />
        <line x1="320" y1="62" x2="430" y2="100" stroke="#fbbf24" strokeWidth="1.5" />
        <line x1="430" y1="100" x2="520" y2="130" stroke="#fbbf24" strokeWidth="2" />
        <line x1="320" y1="62" x2="120" y2="15" stroke="#fbbf24" strokeDasharray="3 3" strokeWidth="1.5" />

        {/* Sinar Menembus Pusat Optik O */}
        <line x1="240" y1="62" x2="320" y2="100" stroke="#34d399" strokeWidth="1.5" />
        <line x1="320" y1="100" x2="520" y2="195" stroke="#34d399" strokeWidth="2" />
        <line x1="320" y1="100" x2="120" y2="15" stroke="#34d399" strokeDasharray="3 3" strokeWidth="1.5" />

        {/* Mata Pengamat di Depan Lensa */}
        <path d="M 500 135 Q 520 150 500 165" fill="none" stroke="#e2e8f0" strokeWidth="3" />
        <circle cx="508" cy="150" r="4" fill="#38bdf8" />
        <text x="525" y="155" fill="#cbd5e1" fontSize="10">Mata</text>
      </svg>
    </div>
  );
};
