import { Question, SubTopicId, SubTopicInfo } from '../types';
import { questionsBatch1 } from './questionsBatch1';
import { questionsBatch2 } from './questionsBatch2';
import { questionsBatch3 } from './questionsBatch3';

export const ALL_QUESTIONS: Question[] = [
  ...questionsBatch1,
  ...questionsBatch2,
  ...questionsBatch3
];

export const SUBTOPICS: SubTopicInfo[] = [
  {
    id: 'miopi',
    title: 'Cacat Mata Miopi',
    shortDesc: 'Rabun jauh: bayangan jatuh di depan retina, dikoreksi lensa cekung (divergen).',
    keyFormulaLatex: 'P = -\\frac{1}{PR\\text{ (meter)}} = -\\frac{100}{PR\\text{ (cm)}}',
    color: 'from-rose-600 to-red-700'
  },
  {
    id: 'hipermetropi',
    title: 'Cacat Mata Hipermetropi',
    shortDesc: 'Rabun dekat: bayangan jatuh di belakang retina, dikoreksi lensa cembung (konvergen).',
    keyFormulaLatex: 'P = \\frac{100}{S_n} - \\frac{100}{PP} = 4 - \\frac{100}{PP\\text{ (cm)}}',
    color: 'from-amber-600 to-orange-700'
  },
  {
    id: 'presbiopi',
    title: 'Cacat Mata Presbiopi',
    shortDesc: 'Mata tua: berkurangnya daya akomodasi elastisitas lensa kristalina pada usia lanjut.',
    keyFormulaLatex: 'P_{baca} = \\frac{100}{s} - \\frac{100}{PP}, \\quad \\text{Add} = P_{baca} - P_{jauh}',
    color: 'from-purple-600 to-pink-700'
  },
  {
    id: 'mikroskop-tanpa-akomodasi',
    title: 'Mikroskop Tanpa Akomodasi',
    shortDesc: 'Pengamatan relaks: bayangan lensa objektif jatuh tepat pada titik fokus depan okuler.',
    keyFormulaLatex: 'M = \\left|\\frac{s\'_{ob}}{s_{ob}}\\right| \\times \\frac{S_n}{f_{ok}}, \\quad d = s\'_{ob} + f_{ok}',
    color: 'from-red-600 to-rose-800'
  },
  {
    id: 'mikroskop-akomodasi-maks',
    title: 'Mikroskop Akomodasi Maksimum',
    shortDesc: 'Perbesaran maksimum: bayangan akhir jatuh di titik dekat normal mata pengamat (-Sn).',
    keyFormulaLatex: 'M = \\left|\\frac{s\'_{ob}}{s_{ob}}\\right| \\times \\left(\\frac{S_n}{f_{ok}} + 1\\right), \\quad d = s\'_{ob} + s_{ok}',
    color: 'from-red-700 to-rose-900'
  },
  {
    id: 'teropong-tanpa-akomodasi',
    title: 'Teropong Bintang Tanpa Akomodasi',
    shortDesc: 'Teleskop refraktor relaks: berkas bintang sejajar keluar sebagai berkas sinar sejajar.',
    keyFormulaLatex: 'M = \\frac{f_{ob}}{f_{ok}}, \\quad L = f_{ob} + f_{ok}',
    color: 'from-blue-600 to-indigo-800'
  },
  {
    id: 'teropong-akomodasi-maks',
    title: 'Teropong Bintang Akomodasi Maksimum',
    shortDesc: 'Akomodasi maksimum teropong: perbesaran sudut meningkat dengan tabung memendek.',
    keyFormulaLatex: 'M = \\frac{f_{ob}}{f_{ok}} \\left(1 + \\frac{f_{ok}}{S_n}\\right), \\quad d = f_{ob} + s_{ok}',
    color: 'from-indigo-600 to-violet-800'
  },
  {
    id: 'lup-tanpa-akomodasi',
    title: 'Lup Tanpa Akomodasi',
    shortDesc: 'Kaca pembesar mata relaks: objek diletakkan tepat di fokus lup, bayangan di tak hingga.',
    keyFormulaLatex: 'M = \\frac{S_n}{f}, \\quad s = f, \\quad s\' = -\\infty',
    color: 'from-emerald-600 to-teal-800'
  },
  {
    id: 'lup-jarak-tertentu',
    title: 'Lup Berakomodasi Jarak Tertentu',
    shortDesc: 'Akomodasi parsial pada jarak kerja x: kompromi antara perbesaran dan kelelahan mata.',
    keyFormulaLatex: 'M = \\frac{S_n}{f} + \\frac{S_n}{x}, \\quad \\frac{1}{s} = \\frac{1}{f} + \\frac{1}{x}',
    color: 'from-cyan-600 to-blue-800'
  },
  {
    id: 'lup-akomodasi-maks',
    title: 'Lup Berakomodasi Maksimum',
    shortDesc: 'Perbesaran sudut terbesar yang mungkin dicapai lup dengan bayangan maya di titik dekat -Sn.',
    keyFormulaLatex: 'M = \\frac{S_n}{f} + 1, \\quad s = \\frac{f \\cdot S_n}{f + S_n}',
    color: 'from-amber-600 to-red-800'
  }
];

export function getQuestionById(id: number): Question | undefined {
  return ALL_QUESTIONS.find(q => q.id === id);
}

export function getQuestionsBySubtopic(subtopicId: SubTopicId): Question[] {
  return ALL_QUESTIONS.filter(q => q.subtopicId === subtopicId);
}
