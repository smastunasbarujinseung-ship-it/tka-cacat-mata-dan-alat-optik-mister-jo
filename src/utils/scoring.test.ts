import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateAnswer, calculateOverallStats } from './scoring';
import { Question } from '../types';

const mockPgQuestion: Question = {
  id: 1,
  subtopicId: 'miopi',
  subtopicTitle: 'Cacat Mata Miopi',
  type: 'pg',
  difficulty: 'Menengah',
  title: 'Koreksi Titik Jauh Miopi',
  stimulus: { type: 'scenario', text: 'Pasien miopi memiliki PR = 200 cm.' },
  narration: { part1Intro: '', part2Stimulus: '', part3Question: '', part4Hint: '', part5Discussion: '' },
  questionText: 'Berapakah kuat lensa?',
  options: [
    { key: 'A', text: '-0.5 D' },
    { key: 'B', text: '-1.0 D' },
    { key: 'C', text: '+0.5 D' },
    { key: 'D', text: '-2.0 D' },
    { key: 'E', text: '+2.0 D' }
  ],
  correctKey: 'A',
  discussion: {
    concept: 'Miopi',
    known: ['PR = 200 cm = 2 m'],
    asked: 'P',
    keyFormula: 'P = -1/PR',
    formulaReason: 'Koreksi lensa cekung',
    steps: ['P = -1/2 = -0.5 D'],
    finalResult: '-0.5 D',
    interpretation: 'Lensa divergen -0.5 dioptri'
  },
  quickTrick: {
    title: 'Trik Cepat',
    rule: 'P = -100/PR (cm)',
    step: 'P = -100/200 = -0.5 D',
    formula: 'P = -100/PR'
  }
};

const mockPgkQuestion: Question = {
  id: 2,
  subtopicId: 'hipermetropi',
  subtopicTitle: 'Cacat Mata Hipermetropi',
  type: 'pgk',
  difficulty: 'Sulit',
  title: 'Analisis Pembiasan Hipermetropi',
  stimulus: { type: 'scenario', text: 'Mata hipermetropi dengan PP = 50 cm membaca pada jarak 25 cm.' },
  narration: { part1Intro: '', part2Stimulus: '', part3Question: '', part4Hint: '', part5Discussion: '' },
  questionText: 'Manakah pernyataan yang benar?',
  options: [
    { key: 'A', text: 'Lensa yang dibutuhkan adalah lensa cembung (+)' },
    { key: 'B', text: 'Kuat lensa yang diperlukan adalah +2 Dioptri' },
    { key: 'C', text: 'Jarak fokus lensa adalah 50 cm' },
    { key: 'D', text: 'Bayangan yang dibentuk kacamata bersifat nyata dan tegak' },
    { key: 'E', text: 'Kuat lensa yang diperlukan adalah +4 Dioptri' }
  ],
  correctKeys: ['A', 'B', 'C'],
  discussion: {
    concept: 'Hipermetropi',
    known: ['PP = 50 cm', 'Sn = 25 cm'],
    asked: 'Pernyataan benar',
    keyFormula: '1/f = 1/Sn - 1/PP',
    formulaReason: 'Lensa kacamata positif',
    steps: ['1/f = 1/25 - 1/50 = 1/50 cm -> f = 50 cm', 'P = 100/50 = +2 D'],
    finalResult: 'A, B, C benar',
    interpretation: 'Bayangan kacamata bersifat maya, bukan nyata'
  },
  quickTrick: {
    title: 'Trik Cepat Hipermetropi',
    rule: 'P = 100/Sn - 100/PP',
    step: 'P = 4 - 2 = +2 D',
    formula: 'P = 4 - 100/PP'
  }
};

test('evaluateAnswer: PG correct answer returns score 1.0', () => {
  const result = evaluateAnswer(mockPgQuestion, { pgChoice: 'A' });
  assert.equal(result.score, 1.0);
  assert.equal(result.isFullyCorrect, true);
  assert.equal(result.feedback, 'Benar');
});

test('evaluateAnswer: PG incorrect answer returns score 0.0', () => {
  const result = evaluateAnswer(mockPgQuestion, { pgChoice: 'B' });
  assert.equal(result.score, 0.0);
  assert.equal(result.isFullyCorrect, false);
  assert.equal(result.feedback, 'Belum tepat');
});

test('evaluateAnswer: PGK partial correct score', () => {
  // 3 correct: A, B, C. User picks A and B.
  const result = evaluateAnswer(mockPgkQuestion, { pgkChoices: ['A', 'B'] });
  assert.equal(result.score, Number((2 / 3).toFixed(3)));
  assert.equal(result.isFullyCorrect, false);
  assert.equal(result.feedback, 'Hampir benar');
});

test('evaluateAnswer: PGK full correct score', () => {
  const result = evaluateAnswer(mockPgkQuestion, { pgkChoices: ['A', 'B', 'C'] });
  assert.equal(result.score, 1.0);
  assert.equal(result.isFullyCorrect, true);
  assert.equal(result.feedback, 'Benar');
});

test('calculateOverallStats accurately aggregates score and categories', () => {
  const stats = calculateOverallStats([mockPgQuestion, mockPgkQuestion], {
    1: {
      submitted: true,
      score: 1.0,
      isFullyCorrect: true,
      pgChoice: 'A',
      viewedDiscussion: false,
      viewedQuickTrick: false
    },
    2: {
      submitted: true,
      score: 0.667,
      isFullyCorrect: false,
      pgkChoices: ['A', 'B'],
      viewedDiscussion: false,
      viewedQuickTrick: false
    }
  });

  assert.equal(stats.totalQuestions, 2);
  assert.equal(stats.totalAttempted, 2);
  assert.equal(stats.totalFullyCorrect, 1);
  assert.equal(stats.totalPartiallyCorrect, 1);
  assert.ok(stats.percentage > 80);
});
