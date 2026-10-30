import React, { useState } from 'react';
import { RotateCcw, CheckCircle2, XCircle, AlertCircle, Clock, BookOpen, Trash2, ArrowRight } from 'lucide-react';
import { ALL_QUESTIONS } from '../../data/questions';
import { UserAnswer } from '../../types';

interface ProgressViewProps {
  answers: Record<number, UserAnswer>;
  onJumpToQuestion: (id: number) => void;
  onResetProgress: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  answers,
  onJumpToQuestion,
  onResetProgress
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const answeredList = ALL_QUESTIONS.map(q => {
    const ans = answers[q.id];
    return {
      question: q,
      answer: ans
    };
  });

  const totalAnswered = Object.values(answers).filter(a => a.submitted).length;

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Progres */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-900 font-bold text-xs uppercase tracking-wider">
            Rekam Jejak Belajar Offline
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
            PROGRES BELAJAR <span className="text-red-700">TKA OPTIKA</span>
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Semua riwayat jawaban, evaluasi nilai, dan status pembahasan tersimpan otomatis di browser Anda.
          </p>
        </div>

        {/* Tombol Reset Seluruh Progres */}
        <button
          onClick={() => setShowConfirmModal(true)}
          className="px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 font-bold text-sm rounded-xl transition flex items-center gap-2 shadow-sm"
        >
          <Trash2 className="w-4 h-4 text-rose-600" />
          <span>Reset Seluruh Progres</span>
        </button>
      </div>

      {/* Ringkasan Kilat */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase">Total Soal Selesai</div>
          <div className="text-3xl font-black text-slate-900 font-mono mt-1">
            {totalAnswered} / {ALL_QUESTIONS.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {((totalAnswered / ALL_QUESTIONS.length) * 100).toFixed(0)}% telah Anda jawab
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase">Kategori Pembahasan Dibuka</div>
          <div className="text-3xl font-black text-blue-700 font-mono mt-1">
            {Object.values(answers).filter(a => a.viewedDiscussion).length} Soal
          </div>
          <div className="text-xs text-slate-400 mt-1">Solusi ilmiah telah dipelajari</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase">Trik Cepat Dilihat</div>
          <div className="text-3xl font-black text-amber-600 font-mono mt-1">
            {Object.values(answers).filter(a => a.viewedQuickTrick).length} Soal
          </div>
          <div className="text-xs text-slate-400 mt-1">Strategi kilat dikuasai</div>
        </div>
      </div>

      {/* Tabel Rinci 30 Soal */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Daftar Status 30 Soal HOTS</h2>
          <span className="text-xs text-slate-500">Klik 'Buka Soal' untuk menuju ke soal yang diinginkan</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Submateri</th>
                <th className="p-3.5">Tipe Soal</th>
                <th className="p-3.5">Tingkat</th>
                <th className="p-3.5">Status Pengerjaan</th>
                <th className="p-3.5">Skor</th>
                <th className="p-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {answeredList.map(({ question: q, answer: ans }) => {
                const isSubmitted = ans?.submitted;
                const isCorrect = ans?.isFullyCorrect;
                const isPartial = !isCorrect && (ans?.score || 0) > 0;

                return (
                  <tr key={q.id} className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50/70 transition">
                    <td className="p-3.5 font-bold font-mono text-slate-900">
                      {String(q.id).padStart(2, '0')}
                    </td>
                    <td className="p-3.5 font-medium text-slate-800">
                      <div>{q.subtopicTitle}</div>
                      <div className="text-xs text-slate-400 truncate max-w-xs">{q.title}</div>
                    </td>
                    <td className="p-3.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {q.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span className="text-[11px] font-semibold text-slate-600">
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="p-3.5">
                      {isSubmitted ? (
                        isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Benar
                          </span>
                        ) : isPartial ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                            <AlertCircle className="w-3.5 h-3.5" />
                            Parsial
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                            <XCircle className="w-3.5 h-3.5" />
                            Belum Tepat
                          </span>
                        )
                      ) : (
                        <span className="text-xs text-slate-400 italic">Belum dikerjakan</span>
                      )}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-slate-800">
                      {isSubmitted ? `${(ans.score * 100).toFixed(0)} / 100` : '-'}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => onJumpToQuestion(q.id)}
                        className="px-3 py-1 bg-red-50 hover:bg-red-700 hover:text-white text-red-700 font-bold text-xs rounded-lg transition"
                      >
                        Buka Soal
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal Reset Progres */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-xl font-black text-slate-900">Konfirmasi Reset Progres</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Apakah Anda yakin ingin menghapus seluruh progres belajar? Semua jawaban dan nilai yang tersimpan akan dihapus secara permanen.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="w-1/2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowConfirmModal(false);
                }}
                className="w-1/2 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl shadow transition"
              >
                Ya, Hapus Semua
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
