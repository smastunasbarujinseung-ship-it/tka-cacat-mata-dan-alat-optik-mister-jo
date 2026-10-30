import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, HelpCircle, Zap, BookOpen, ChevronRight, ChevronLeft, Eye, Award } from 'lucide-react';
import { Question, UserAnswer } from '../types';
import { evaluateAnswer } from '../utils/scoring';
import { MathView } from './MathView';
import { OpticalDiagram } from './OpticalDiagram';
import { NarratorControl } from './NarratorControl';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  userAnswer?: UserAnswer;
  onSaveAnswer: (answer: UserAnswer) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  userAnswer,
  onSaveAnswer,
  onNext,
  onPrev
}) => {
  // Local state for interactive choices before or after submission
  const [selectedPg, setSelectedPg] = useState<'A' | 'B' | 'C' | 'D' | 'E' | undefined>(userAnswer?.pgChoice);
  const [selectedPgk, setSelectedPgk] = useState<('A' | 'B' | 'C' | 'D' | 'E')[]>(userAnswer?.pgkChoices || []);
  const [selectedBs, setSelectedBs] = useState<Record<number, boolean>>(userAnswer?.bsChoices || {});
  const [showDiscussion, setShowDiscussion] = useState<boolean>(userAnswer?.viewedDiscussion || false);
  const [showQuickTrick, setShowQuickTrick] = useState<boolean>(userAnswer?.viewedQuickTrick || false);

  // Sync state when question changes
  React.useEffect(() => {
    setSelectedPg(userAnswer?.pgChoice);
    setSelectedPgk(userAnswer?.pgkChoices || []);
    setSelectedBs(userAnswer?.bsChoices || {});
    setShowDiscussion(userAnswer?.viewedDiscussion || false);
    setShowQuickTrick(userAnswer?.viewedQuickTrick || false);
  }, [question.id, userAnswer]);

  const handlePgSelect = (key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setSelectedPg(key);
  };

  const handlePgkToggle = (key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (selectedPgk.includes(key)) {
      setSelectedPgk(selectedPgk.filter(k => k !== key));
    } else {
      setSelectedPgk([...selectedPgk, key]);
    }
  };

  const handleBsToggle = (statementId: number, value: boolean) => {
    setSelectedBs(prev => ({
      ...prev,
      [statementId]: value
    }));
  };

  const handleSubmit = () => {
    const evalResult = evaluateAnswer(question, {
      pgChoice: selectedPg,
      pgkChoices: selectedPgk,
      bsChoices: selectedBs
    });

    const newAnswer: UserAnswer = {
      pgChoice: selectedPg,
      pgkChoices: selectedPgk,
      bsChoices: selectedBs,
      submitted: true,
      score: evalResult.score,
      isFullyCorrect: evalResult.isFullyCorrect,
      viewedDiscussion: showDiscussion,
      viewedQuickTrick: showQuickTrick,
      timestamp: Date.now()
    };

    onSaveAnswer(newAnswer);
  };

  const handleToggleDiscussion = () => {
    const nextVal = !showDiscussion;
    setShowDiscussion(nextVal);
    if (userAnswer) {
      onSaveAnswer({ ...userAnswer, viewedDiscussion: nextVal });
    }
  };

  const handleToggleQuickTrick = () => {
    const nextVal = !showQuickTrick;
    setShowQuickTrick(nextVal);
    if (userAnswer) {
      onSaveAnswer({ ...userAnswer, viewedQuickTrick: nextVal });
    }
  };

  // Evaluation summary if already submitted
  const evalResult = userAnswer?.submitted
    ? evaluateAnswer(question, {
        pgChoice: userAnswer.pgChoice,
        pgkChoices: userAnswer.pgkChoices,
        bsChoices: userAnswer.bsChoices
      })
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden text-slate-800">
      {/* Header Soal & Metadata Bar */}
      <div className="bg-gradient-to-r from-red-800 via-rose-900 to-red-900 p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="bg-amber-400 text-slate-950 font-black text-sm sm:text-base px-3.5 py-1.5 rounded-xl shadow-md tracking-wider">
            SOAL {String(question.id).padStart(2, '0')} DARI {totalQuestions}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-rose-100 bg-red-950/60 px-3 py-1 rounded-lg border border-red-700/50">
            {question.subtopicTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tipe Soal */}
          <span
            className={`text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${
              question.type === 'pg'
                ? 'bg-blue-600 text-white'
                : question.type === 'pgk'
                ? 'bg-purple-600 text-white'
                : 'bg-emerald-600 text-white'
            }`}
          >
            {question.type === 'pg'
              ? 'Pilihan Ganda'
              : question.type === 'pgk'
              ? 'Pilihan Ganda Kompleks'
              : 'Benar / Salah'}
          </span>

          {/* Tingkat Kesulitan */}
          <span
            className={`text-xs px-2.5 py-1 rounded-md font-bold ${
              question.difficulty === 'Menengah'
                ? 'bg-amber-500 text-slate-950'
                : question.difficulty === 'Sulit'
                ? 'bg-orange-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {question.difficulty}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        {/* Mister Jo TTS Audio Player */}
        <NarratorControl
          narration={question.narration}
          hasViewedDiscussion={showDiscussion}
          hasViewedQuickTrick={showQuickTrick}
        />

        {/* Judul & Stimulus */}
        <div className="bg-slate-50 border-l-4 border-red-700 rounded-r-xl p-4 sm:p-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5">{question.title}</h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {question.stimulus.text}
          </p>

          {/* Tabel Stimulus jika ada */}
          {question.stimulus.tableData && (
            <div className="mt-4 overflow-x-auto border border-slate-200 rounded-xl shadow-sm bg-white">
              {question.stimulus.tableData.caption && (
                <div className="bg-red-50 text-red-900 font-bold px-4 py-2 text-sm border-b border-red-100">
                  {question.stimulus.tableData.caption}
                </div>
              )}
              <table className="w-full text-left text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold">
                    {question.stimulus.tableData.headers.map((h, i) => (
                      <th key={i} className="p-3 border-r last:border-r-0 border-slate-200">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {question.stimulus.tableData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 border-r last:border-r-0 border-slate-200 text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Diagram Optik Matematis jika ada */}
          {question.stimulus.diagram && <OpticalDiagram config={question.stimulus.diagram} />}
        </div>

        {/* Naskah Pertanyaan */}
        <div className="bg-red-50/70 border border-red-200 rounded-xl p-4 sm:p-5">
          <div className="text-xs uppercase font-extrabold text-red-700 tracking-wider mb-1">
            Pertanyaan Penalaran
          </div>
          <p className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            {question.questionText}
          </p>
        </div>

        {/* Pilihan Jawaban Sesuai Bentuk Soal */}
        <div className="space-y-3">
          {/* 1. Tipe PILIHAN GANDA (PG) */}
          {question.type === 'pg' && question.options && (
            <div className="grid gap-3">
              {question.options.map(opt => {
                const isSelected = selectedPg === opt.key;
                const isSubmitted = userAnswer?.submitted;
                const isCorrect = question.correctKey === opt.key;

                let borderBg = 'border-slate-200 hover:border-red-300 hover:bg-red-50/30';
                if (isSelected) {
                  borderBg = 'border-red-600 bg-red-50/60 ring-2 ring-red-500/30';
                }
                if (isSubmitted) {
                  if (isCorrect) {
                    borderBg = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/40';
                  } else if (isSelected && !isCorrect) {
                    borderBg = 'border-rose-500 bg-rose-50';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handlePgSelect(opt.key)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3.5 ${borderBg}`}
                  >
                    <span
                      className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center font-bold text-base transition ${
                        isSelected
                          ? 'bg-red-700 text-white'
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-slate-800 pt-1 leading-snug">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 2. Tipe PILIHAN GANDA KOMPLEKS (PGK) */}
          {question.type === 'pgk' && question.options && (
            <div className="space-y-3">
              <div className="text-xs text-purple-700 font-semibold bg-purple-50 p-2.5 rounded-lg border border-purple-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Pilihlah seluruh pernyataan yang benar (dapat lebih dari satu jawaban). Penilaian parsial adil.</span>
              </div>
              <div className="grid gap-3">
                {question.options.map(opt => {
                  const isChecked = selectedPgk.includes(opt.key);
                  const isSubmitted = userAnswer?.submitted;
                  const isCorrectKey = question.correctKeys?.includes(opt.key);

                  let borderBg = 'border-slate-200 hover:border-purple-300 hover:bg-purple-50/20';
                  if (isChecked) {
                    borderBg = 'border-purple-600 bg-purple-50/60 ring-2 ring-purple-500/30';
                  }
                  if (isSubmitted) {
                    if (isCorrectKey) {
                      borderBg = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/40';
                    } else if (isChecked && !isCorrectKey) {
                      borderBg = 'border-rose-500 bg-rose-50';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handlePgkToggle(opt.key)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3.5 ${borderBg}`}
                    >
                      <span
                        className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center font-bold text-base transition ${
                          isChecked
                            ? 'bg-purple-700 text-white'
                            : 'bg-slate-100 text-slate-700 border border-slate-300'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="text-base sm:text-lg font-medium text-slate-800 pt-1 leading-snug">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. Tipe BENAR - SALAH (BS) */}
          {question.type === 'bs' && question.statements && (
            <div className="space-y-4">
              <div className="text-xs text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Tentukan BENAR atau SALAH untuk masing-masing dari ketiga pernyataan berikut:</span>
              </div>
              <div className="space-y-3">
                {question.statements.map((stmt, idx) => {
                  const currentVal = selectedBs[stmt.id];
                  const isSubmitted = userAnswer?.submitted;
                  const isRightChoice = currentVal === stmt.isCorrect;

                  return (
                    <div
                      key={stmt.id}
                      className={`p-4 rounded-xl border-2 bg-white transition ${
                        isSubmitted
                          ? isRightChoice
                            ? 'border-emerald-400 bg-emerald-50/40'
                            : 'border-rose-300 bg-rose-50/40'
                          : 'border-slate-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="w-7 h-7 shrink-0 rounded-full bg-red-100 text-red-900 font-bold flex items-center justify-center text-sm">
                            {idx + 1}
                          </span>
                          <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
                            {stmt.text}
                          </p>
                        </div>

                        {/* Tombol Pilihan Benar / Salah */}
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => handleBsToggle(stmt.id, true)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition ${
                              currentVal === true
                                ? 'bg-emerald-600 border-emerald-700 text-white shadow-md'
                                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                            }`}
                          >
                            BENAR
                          </button>
                          <button
                            type="button"
                            onClick={() => handleBsToggle(stmt.id, false)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition ${
                              currentVal === false
                                ? 'bg-rose-600 border-rose-700 text-white shadow-md'
                                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
                            }`}
                          >
                            SALAH
                          </button>
                        </div>
                      </div>

                      {/* Penjelasan pernyataan jika sudah disubmit */}
                      {isSubmitted && (
                        <div className="mt-3 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-600">
                          <span className="font-bold text-slate-800">
                            Kunci: {stmt.isCorrect ? 'BENAR' : 'SALAH'} —{' '}
                          </span>
                          {stmt.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: Periksa Jawaban, Pembahasan, Trik Cepat */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-red-700 to-rose-700 hover:from-red-800 hover:to-rose-800 text-white font-bold text-base rounded-xl shadow-md transition flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Periksa Jawaban</span>
            </button>

            <button
              onClick={handleToggleDiscussion}
              className={`px-4 py-3 rounded-xl font-bold text-sm border-2 transition flex items-center gap-2 ${
                showDiscussion
                  ? 'bg-blue-50 border-blue-600 text-blue-900'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>{showDiscussion ? 'Tutup Pembahasan' : 'Buka Pembahasan'}</span>
            </button>

            <button
              onClick={handleToggleQuickTrick}
              className={`px-4 py-3 rounded-xl font-bold text-sm border-2 transition flex items-center gap-2 ${
                showQuickTrick
                  ? 'bg-amber-50 border-amber-500 text-amber-900'
                  : 'bg-amber-100 hover:bg-amber-200 border-amber-400 text-amber-900'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>⚡ Trik Cepat Mister Jo</span>
            </button>
          </div>

          {/* Navigasi Soal Sebelumnya & Selanjutnya */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={currentIndex <= 0}
              className="p-3 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none rounded-xl text-slate-700 font-bold flex items-center gap-1 transition"
              title="Soal Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>
            <button
              onClick={onNext}
              disabled={currentIndex >= totalQuestions - 1}
              className="p-3 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none rounded-xl text-slate-700 font-bold flex items-center gap-1 transition"
              title="Soal Berikutnya"
            >
              <span className="hidden sm:inline">Berikutnya</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Kotak Umpan Balik Hasil Pengecekan */}
        {evalResult && (
          <div
            className={`p-4 sm:p-5 rounded-2xl border-2 transition ${
              evalResult.feedback === 'Benar'
                ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                : evalResult.feedback === 'Hampir benar'
                ? 'bg-amber-50 border-amber-400 text-amber-950'
                : evalResult.feedback === 'Coba analisis kembali'
                ? 'bg-blue-50 border-blue-400 text-blue-950'
                : 'bg-rose-50 border-rose-400 text-rose-950'
            }`}
          >
            <div className="flex items-start gap-3">
              {evalResult.feedback === 'Benar' ? (
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
              ) : evalResult.feedback === 'Hampir benar' ? (
                <Award className="w-7 h-7 text-amber-600 shrink-0" />
              ) : (
                <XCircle className="w-7 h-7 text-rose-600 shrink-0" />
              )}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black text-lg">{evalResult.feedback}!</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/80 border">
                    Skor: {(evalResult.score * 100).toFixed(0)} / 100
                  </span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed">{evalResult.detail}</p>
              </div>
            </div>
          </div>
        )}

        {/* Section PEMBAHASAN MISTER JO */}
        {showDiscussion && (
          <div className="bg-slate-50 border-2 border-blue-300 rounded-2xl p-5 sm:p-7 space-y-4 shadow-sm animate-fadeIn">
            <div className="flex items-center justify-between border-b pb-3 border-blue-200">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-700" />
                <h3 className="text-xl font-black text-blue-950">PEMBAHASAN MISTER JO</h3>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full">
                Metode Ilmiah Standar TKA
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">1. Konsep yang Diuji</div>
                <div className="text-base font-semibold text-slate-900 mt-0.5">
                  {question.discussion.concept}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase">2. Yang Ditanyakan</div>
                <div className="text-base font-semibold text-slate-900 mt-0.5">
                  {question.discussion.asked}
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase mb-1">3. Informasi yang Diketahui</div>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-700 font-medium">
                {question.discussion.known.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-blue-200">
              <div className="text-xs font-bold text-blue-700 uppercase mb-1">4. Rumus Kunci & Alasan Memilih</div>
              <div className="p-3 bg-blue-50/50 rounded-lg my-2 text-center overflow-x-auto">
                <MathView latex={question.discussion.keyFormula} displayMode />
              </div>
              <p className="text-sm text-slate-600 italic mt-1">
                {question.discussion.formulaReason}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase">5. Langkah Perhitungan Rinci</div>
              <div className="space-y-2 text-sm sm:text-base text-slate-800">
                {question.discussion.steps.map((st, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 leading-relaxed font-mono text-sm">
                    {st}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl">
              <div className="text-xs font-bold text-emerald-800 uppercase">6. Hasil Akhir & Interpretasi Fisika</div>
              <div className="text-lg font-black text-emerald-950 mt-1">
                {question.discussion.finalResult}
              </div>
              <p className="text-sm text-emerald-800 mt-1 leading-relaxed">
                {question.discussion.interpretation}
              </p>
            </div>

            {question.discussion.distractorAnalysis && (
              <div className="text-xs sm:text-sm text-slate-500 bg-slate-100 p-3 rounded-xl border">
                <span className="font-bold text-slate-700">Analisis Pengecoh: </span>
                {question.discussion.distractorAnalysis}
              </div>
            )}
          </div>
        )}

        {/* Section ⚡ TRIK CEPAT MISTER JO */}
        {showQuickTrick && (
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-400 rounded-2xl p-5 sm:p-7 space-y-3 shadow-md animate-fadeIn">
            <div className="flex items-center gap-2 border-b pb-2.5 border-amber-300">
              <Zap className="w-6 h-6 text-amber-600 fill-amber-500" />
              <h3 className="text-xl font-black text-amber-950">{question.quickTrick.title}</h3>
            </div>
            <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200">
              <div className="text-xs font-bold text-amber-800 uppercase">Prinsip & Pola Logika</div>
              <p className="text-sm sm:text-base font-semibold text-slate-800 mt-1">
                {question.quickTrick.rule}
              </p>
            </div>
            <div className="p-3 bg-amber-100/70 rounded-xl text-center overflow-x-auto border border-amber-300">
              <MathView latex={question.quickTrick.formula} displayMode />
            </div>
            <div className="p-3.5 bg-amber-950 text-amber-200 rounded-xl text-sm sm:text-base font-mono">
              <span className="text-amber-400 font-bold">Langkah Kilat: </span>
              {question.quickTrick.step}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
