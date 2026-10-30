import React, { useState } from 'react';
import { BookOpen, Calculator, Search, Zap, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FORMULA_BANK, FormulaEntry } from '../../data/formulaBank';
import { MathView } from '../MathView';

export const FormulaBankView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [expandedId, setExpandedId] = useState<string>('miopi');

  // Quick Interactive Calculators State
  const [calcMiopiPr, setCalcMiopiPr] = useState<number>(100);
  const [calcHiperPP, setCalcHiperPP] = useState<number>(100);
  const [calcHiperSn, setCalcHiperSn] = useState<number>(25);
  const [calcLupF, setCalcLupF] = useState<number>(5);

  const categories = ['Semua', 'Cacat Mata & Refraksi', 'Mikroskop', 'Teropong Bintang', 'Lup (Kaca Pembesar)'];

  const filtered = FORMULA_BANK.filter(item => {
    const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fallbackText.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Bank Rumus */}
      <div className="text-center space-y-2">
        <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-900 font-bold text-xs uppercase tracking-wider">
          Ensiklopedi Optika Geometri
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          BANK RUMUS KUNCI <span className="text-red-700">OPTIKA TKA</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Rumus ilmiah standar fisika, konvensi tanda, penurunan sistematis, serta trik kilat Mister Jo untuk 10 submateri alat optik dan cacat mata.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
          <input
            type="text"
            placeholder="Cari rumus atau alat optik..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-red-700 text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Quick Parameter Simulator Widget */}
      <div className="bg-gradient-to-br from-slate-900 to-red-950 text-white p-5 sm:p-6 rounded-3xl border border-amber-500/30 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
          <Calculator className="w-5 h-5" />
          <span>Simulator Parameter Optik Cepat (Instant Calculator)</span>
        </div>
        <p className="text-xs text-rose-200/80">
          Ubah angka di bawah ini untuk melihat bagaimana rumus-rumus kunci optik bekerja secara langsung:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* 1. Kalkulator Miopi */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-3">
            <div className="text-xs font-bold text-rose-300 uppercase">1. Lensa Koreksi Miopi</div>
            <div className="flex items-center justify-between gap-2">
              <label className="text-xs text-slate-300">Titik Jauh (PR):</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="10"
                  max="1000"
                  step="5"
                  value={calcMiopiPr}
                  onChange={e => setCalcMiopiPr(Number(e.target.value) || 100)}
                  className="w-20 px-2 py-1 bg-slate-900 border border-slate-600 rounded text-amber-300 font-mono text-sm text-center"
                />
                <span className="text-xs text-slate-400">cm</span>
              </div>
            </div>
            <div className="p-2.5 bg-red-950/60 rounded-xl border border-red-800/50 text-center">
              <div className="text-[11px] text-slate-300">Kekuatan Lensa (P = -100/PR):</div>
              <div className="text-lg font-black text-amber-400 font-mono mt-0.5">
                {(-100 / calcMiopiPr).toFixed(2)} Dioptri
              </div>
              <div className="text-[10px] text-rose-300">f = -{calcMiopiPr} cm (Lensa Cekung)</div>
            </div>
          </div>

          {/* 2. Kalkulator Hipermetropi */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-3">
            <div className="text-xs font-bold text-amber-300 uppercase">2. Lensa Hipermetropi</div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs text-slate-300">Titik Dekat (PP):</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="25"
                    max="500"
                    step="5"
                    value={calcHiperPP}
                    onChange={e => setCalcHiperPP(Number(e.target.value) || 100)}
                    className="w-20 px-2 py-1 bg-slate-900 border border-slate-600 rounded text-amber-300 font-mono text-sm text-center"
                  />
                  <span className="text-xs text-slate-400">cm</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <label className="text-xs text-slate-300">Jarak Baca (Sn):</label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="15"
                    max="50"
                    step="5"
                    value={calcHiperSn}
                    onChange={e => setCalcHiperSn(Number(e.target.value) || 25)}
                    className="w-20 px-2 py-1 bg-slate-900 border border-slate-600 rounded text-amber-300 font-mono text-sm text-center"
                  />
                  <span className="text-xs text-slate-400">cm</span>
                </div>
              </div>
            </div>
            <div className="p-2.5 bg-red-950/60 rounded-xl border border-red-800/50 text-center">
              <div className="text-[11px] text-slate-300">Kuat Lensa (P = 100/Sn - 100/PP):</div>
              <div className="text-lg font-black text-amber-400 font-mono mt-0.5">
                {(100 / calcHiperSn - 100 / calcHiperPP >= 0 ? '+' : '') +
                  (100 / calcHiperSn - 100 / calcHiperPP).toFixed(2)}{' '}
                Dioptri
              </div>
            </div>
          </div>

          {/* 3. Kalkulator Lup */}
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-3">
            <div className="text-xs font-bold text-emerald-300 uppercase">3. Perbesaran Lup (Sn = 25 cm)</div>
            <div className="flex items-center justify-between gap-2">
              <label className="text-xs text-slate-300">Fokus Lup (f):</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="1"
                  max="50"
                  step="0.5"
                  value={calcLupF}
                  onChange={e => setCalcLupF(Number(e.target.value) || 5)}
                  className="w-20 px-2 py-1 bg-slate-900 border border-slate-600 rounded text-amber-300 font-mono text-sm text-center"
                />
                <span className="text-xs text-slate-400">cm</span>
              </div>
            </div>
            <div className="p-2.5 bg-red-950/60 rounded-xl border border-red-800/50 text-center space-y-1">
              <div className="text-[11px] text-slate-300">
                Relaks: <span className="font-bold text-amber-300">{(25 / calcLupF).toFixed(2)}x</span>
              </div>
              <div className="text-[11px] text-slate-300">
                Akom. Maks: <span className="font-bold text-emerald-300">{(25 / calcLupF + 1).toFixed(2)}x</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion / Daftar 10 Rumus Kunci Optika */}
      <div className="space-y-4">
        {filtered.map(entry => {
          const isExpanded = expandedId === entry.id;

          return (
            <div
              key={entry.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-red-300 transition"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? '' : entry.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wide">
                    {entry.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">{entry.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:block text-right">
                    <MathView latex={entry.latex} className="text-sm font-semibold" />
                  </div>
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-600">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50/50 space-y-5">
                  {/* Formula Display Box */}
                  <div className="p-4 bg-white rounded-2xl border border-red-100 shadow-inner text-center overflow-x-auto">
                    <MathView latex={entry.latex} displayMode className="text-base sm:text-lg" />
                  </div>

                  {/* Konsep & Penjelasan */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-slate-500 uppercase">Konsep Fisika & Pembentukan Bayangan</div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {entry.explanation}
                    </p>
                  </div>

                  {/* Tabel Variabel & Satuan */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-slate-500 uppercase">Besaran & Satuan Standar</div>
                    <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
                          <tr>
                            <th className="p-2.5">Simbol</th>
                            <th className="p-2.5">Nama Besaran / Keterangan</th>
                            <th className="p-2.5">Satuan Baku</th>
                          </tr>
                        </thead>
                        <tbody>
                          {entry.variables.map((v, i) => (
                            <tr key={i} className="border-b last:border-b-0 border-slate-100">
                              <td className="p-2.5 font-mono font-bold text-red-700">{v.symbol}</td>
                              <td className="p-2.5 text-slate-700">{v.meaning}</td>
                              <td className="p-2.5 font-mono text-slate-500">{v.unit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Konvensi Tanda */}
                  <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs sm:text-sm text-blue-950">
                    <span className="font-bold">Konvensi Tanda Penting: </span>
                    {entry.signConvention}
                  </div>

                  {/* Trik Cepat Mister Jo */}
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-950">
                    <div className="flex items-center gap-1.5 font-black text-amber-900 mb-1">
                      <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
                      Trik Cepat Mister Jo
                    </div>
                    {entry.quickTrick}
                  </div>

                  {/* Contoh Soal Numerik Singkat */}
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-slate-500 uppercase">Contoh Soal Singkat & Solusi</div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
                      {entry.exampleProblem.question}
                    </p>
                    <div className="text-xs font-mono bg-slate-50 p-2.5 rounded-lg border text-slate-700 space-y-1">
                      <div><span className="text-slate-400">Diketahui: </span>{entry.exampleProblem.given}</div>
                      <div><span className="text-slate-400">Rumus: </span>{entry.exampleProblem.formula}</div>
                      <div><span className="text-slate-400">Hitung: </span>{entry.exampleProblem.calculation}</div>
                      <div className="text-emerald-700 font-bold"><span className="text-slate-400 font-normal">Jawaban: </span>{entry.exampleProblem.answer}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
