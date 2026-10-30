import { Question, SubTopicId, UserAnswer } from '../types';

export interface EvaluationResult {
  score: number; // 0.0 to 1.0
  isFullyCorrect: boolean;
  feedback: 'Benar' | 'Hampir benar' | 'Belum tepat' | 'Coba analisis kembali';
  detail: string;
}

export function evaluateAnswer(
  question: Question,
  userAnswer: {
    pgChoice?: 'A' | 'B' | 'C' | 'D' | 'E';
    pgkChoices?: ('A' | 'B' | 'C' | 'D' | 'E')[];
    bsChoices?: Record<number, boolean>;
  }
): EvaluationResult {
  if (question.type === 'pg') {
    if (!userAnswer.pgChoice) {
      return { score: 0, isFullyCorrect: false, feedback: 'Belum tepat', detail: 'Belum ada opsi yang dipilih.' };
    }
    const isCorrect = userAnswer.pgChoice === question.correctKey;
    return {
      score: isCorrect ? 1.0 : 0.0,
      isFullyCorrect: isCorrect,
      feedback: isCorrect ? 'Benar' : 'Belum tepat',
      detail: isCorrect
        ? `Luar biasa! Pilihan (${userAnswer.pgChoice}) tepat sesuai penalaran fisika.`
        : `Pilihan (${userAnswer.pgChoice}) belum tepat. Pelajari kembali hubungan variabel pada soal.`
    };
  }

  if (question.type === 'pgk') {
    const selected = userAnswer.pgkChoices || [];
    const correct = question.correctKeys || [];
    if (selected.length === 0) {
      return { score: 0, isFullyCorrect: false, feedback: 'Belum tepat', detail: 'Pilih minimal satu pernyataan.' };
    }

    const correctSelectedCount = selected.filter(k => correct.includes(k)).length;
    const incorrectSelectedCount = selected.filter(k => !correct.includes(k)).length;

    // Fair partial scoring:
    // (Correct - Incorrect) / Total Correct, clamped between 0 and 1
    const rawScore = (correctSelectedCount - incorrectSelectedCount) / correct.length;
    const finalScore = Math.max(0, Math.min(1.0, Number(rawScore.toFixed(3))));
    const isFullyCorrect = finalScore === 1.0 && selected.length === correct.length;

    let feedback: 'Benar' | 'Hampir benar' | 'Belum tepat' | 'Coba analisis kembali' = 'Belum tepat';
    if (isFullyCorrect) {
      feedback = 'Benar';
    } else if (finalScore >= 0.5) {
      feedback = 'Hampir benar';
    } else if (finalScore > 0) {
      feedback = 'Coba analisis kembali';
    } else {
      feedback = 'Belum tepat';
    }

    return {
      score: finalScore,
      isFullyCorrect,
      feedback,
      detail: isFullyCorrect
        ? `Sempurna! Semua pernyataan yang Anda pilih (${selected.join(', ')}) adalah benar.`
        : `Skor parsial: ${(finalScore * 100).toFixed(0)}%. Anda memilih ${correctSelectedCount} dari ${correct.length} kunci benar dengan ${incorrectSelectedCount} pilihan keliru.`
    };
  }

  if (question.type === 'bs') {
    const statements = question.statements || [];
    const choices = userAnswer.bsChoices || {};
    let correctCount = 0;

    statements.forEach(stmt => {
      if (choices[stmt.id] === stmt.isCorrect) {
        correctCount++;
      }
    });

    const finalScore = Number((correctCount / statements.length).toFixed(3));
    const isFullyCorrect = correctCount === statements.length;

    let feedback: 'Benar' | 'Hampir benar' | 'Belum tepat' | 'Coba analisis kembali' = 'Belum tepat';
    if (isFullyCorrect) {
      feedback = 'Benar';
    } else if (correctCount === 2) {
      feedback = 'Hampir benar';
    } else if (correctCount === 1) {
      feedback = 'Coba analisis kembali';
    } else {
      feedback = 'Belum tepat';
    }

    return {
      score: finalScore,
      isFullyCorrect,
      feedback,
      detail: isFullyCorrect
        ? 'Tepat sekali! Seluruh 3 pernyataan berhasil dianalisis dengan benar.'
        : `Berhasil mengidentifikasi ${correctCount} dari ${statements.length} pernyataan.`
    };
  }

  return { score: 0, isFullyCorrect: false, feedback: 'Belum tepat', detail: '' };
}

export interface SubTopicMastery {
  subtopicId: SubTopicId;
  title: string;
  total: number;
  attempted: number;
  earnedScore: number;
  percentage: number;
  isMastered: boolean;
}

export interface OverallStats {
  totalQuestions: number;
  totalAttempted: number;
  totalFullyCorrect: number;
  totalPartiallyCorrect: number;
  totalWrong: number;
  totalEarnedScore: number;
  percentage: number;
  category: 'MASTER OPTIKA' | 'SANGAT BAIK' | 'BAIK' | 'PERLU PENGUATAN' | 'AYO BELAJAR LAGI BERSAMA MISTER JO';
  subtopicMasteries: SubTopicMastery[];
  masteredSubtopics: string[];
  needImprovementSubtopics: string[];
  recommendations: string[];
}

export function calculateOverallStats(
  questions: Question[],
  answers: Record<number, UserAnswer>
): OverallStats {
  const totalQuestions = questions.length;
  let totalAttempted = 0;
  let totalFullyCorrect = 0;
  let totalPartiallyCorrect = 0;
  let totalWrong = 0;
  let totalEarnedScore = 0;

  const subtopicMap: Record<string, { title: string; total: number; attempted: number; earnedScore: number }> = {};

  questions.forEach(q => {
    if (!subtopicMap[q.subtopicId]) {
      subtopicMap[q.subtopicId] = {
        title: q.subtopicTitle,
        total: 0,
        attempted: 0,
        earnedScore: 0
      };
    }
    subtopicMap[q.subtopicId].total += 1;

    const ans = answers[q.id];
    if (ans && ans.submitted) {
      totalAttempted++;
      totalEarnedScore += ans.score;
      if (ans.isFullyCorrect) {
        totalFullyCorrect++;
      } else if (ans.score > 0) {
        totalPartiallyCorrect++;
      } else {
        totalWrong++;
      }
      subtopicMap[q.subtopicId].attempted += 1;
      subtopicMap[q.subtopicId].earnedScore += ans.score;
    }
  });

  const percentage = totalQuestions > 0 ? Number(((totalEarnedScore / totalQuestions) * 100).toFixed(1)) : 0;

  let category: OverallStats['category'];
  if (percentage >= 90) {
    category = 'MASTER OPTIKA';
  } else if (percentage >= 80) {
    category = 'SANGAT BAIK';
  } else if (percentage >= 70) {
    category = 'BAIK';
  } else if (percentage >= 60) {
    category = 'PERLU PENGUATAN';
  } else {
    category = 'AYO BELAJAR LAGI BERSAMA MISTER JO';
  }

  const subtopicMasteries: SubTopicMastery[] = Object.entries(subtopicMap).map(([id, data]) => {
    const pct = data.total > 0 ? Number(((data.earnedScore / data.total) * 100).toFixed(1)) : 0;
    return {
      subtopicId: id as SubTopicId,
      title: data.title,
      total: data.total,
      attempted: data.attempted,
      earnedScore: Number(data.earnedScore.toFixed(2)),
      percentage: pct,
      isMastered: pct >= 75
    };
  });

  const masteredSubtopics = subtopicMasteries.filter(s => s.isMastered).map(s => s.title);
  const needImprovementSubtopics = subtopicMasteries.filter(s => !s.isMastered && s.attempted > 0).map(s => s.title);

  const recommendations: string[] = [];
  if (needImprovementSubtopics.length > 0) {
    recommendations.push(
      `Fokuskan penguatan pada materi: ${needImprovementSubtopics.slice(0, 3).join(', ')}. Buka kembali Bank Rumus dan cermati contoh soal di materi tersebut.`
    );
  }
  if (percentage < 70) {
    recommendations.push('Perhatikan konsistensi satuan (cm vs m) saat menghitung kuat lensa P = 1/f.');
    recommendations.push('Ingat perbedaan mendasar panjang teropong dan mikroskop untuk mata berakomodasi vs tanpa akomodasi.');
  } else {
    recommendations.push('Pertahankan ketelitian membaca stimulus data numerik dan grafik!');
    recommendations.push('Gunakan Trik Cepat Mister Jo untuk menghemat 30-45 detik di setiap soal ujian TKA.');
  }

  return {
    totalQuestions,
    totalAttempted,
    totalFullyCorrect,
    totalPartiallyCorrect,
    totalWrong,
    totalEarnedScore: Number(totalEarnedScore.toFixed(2)),
    percentage,
    category,
    subtopicMasteries,
    masteredSubtopics,
    needImprovementSubtopics,
    recommendations
  };
}
