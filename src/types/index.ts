export type QuestionType = 'pg' | 'pgk' | 'bs';

export type SubTopicId =
  | 'miopi'
  | 'hipermetropi'
  | 'presbiopi'
  | 'mikroskop-tanpa-akomodasi'
  | 'mikroskop-akomodasi-maks'
  | 'teropong-tanpa-akomodasi'
  | 'teropong-akomodasi-maks'
  | 'lup-tanpa-akomodasi'
  | 'lup-jarak-tertentu'
  | 'lup-akomodasi-maks';

export type Difficulty = 'Menengah' | 'Sulit' | 'Sangat Sulit';

export interface DiagramConfig {
  type: 'eye-miopi' | 'eye-hipermetropi' | 'eye-presbiopi' | 'microscope' | 'telescope' | 'lup' | 'table-curve';
  label?: string;
  f1?: number;
  f2?: number;
  s?: number;
  sPrime?: number;
  sn?: number;
  pr?: number;
  pp?: number;
  rays?: boolean;
}

export interface QuestionStimulus {
  type: 'scenario' | 'table' | 'diagram' | 'experiment';
  text: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
  diagram?: DiagramConfig;
}

export interface NarrationParts {
  part1Intro: string;
  part2Stimulus: string;
  part3Question: string;
  part4Hint: string;
  part5Discussion: string;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface TrueFalseStatement {
  id: number;
  text: string;
  isCorrect: boolean; // true = BENAR, false = SALAH
  explanation: string;
}

export interface QuestionDiscussion {
  concept: string;
  known: string[];
  asked: string;
  keyFormula: string;
  formulaReason: string;
  steps: string[];
  finalResult: string;
  interpretation: string;
  distractorAnalysis?: string;
}

export interface QuickTrick {
  title: string;
  rule: string;
  step: string;
  formula: string;
}

export interface Question {
  id: number;
  subtopicId: SubTopicId;
  subtopicTitle: string;
  type: QuestionType;
  difficulty: Difficulty;
  title: string;
  stimulus: QuestionStimulus;
  narration: NarrationParts;
  questionText: string;
  options?: QuestionOption[]; // for 'pg' and 'pgk'
  correctKey?: 'A' | 'B' | 'C' | 'D' | 'E'; // for 'pg'
  correctKeys?: ('A' | 'B' | 'C' | 'D' | 'E')[]; // for 'pgk'
  statements?: TrueFalseStatement[]; // for 'bs' (3 statements)
  discussion: QuestionDiscussion;
  quickTrick: QuickTrick;
}

export interface UserAnswer {
  pgChoice?: 'A' | 'B' | 'C' | 'D' | 'E';
  pgkChoices?: ('A' | 'B' | 'C' | 'D' | 'E')[];
  bsChoices?: Record<number, boolean>; // statement id -> true (Benar) or false (Salah)
  submitted: boolean;
  score: number; // 0.0 to 1.0
  isFullyCorrect: boolean;
  viewedDiscussion: boolean;
  viewedQuickTrick: boolean;
  timestamp?: number;
}

export interface ProgressState {
  answers: Record<number, UserAnswer>;
  currentQuestionId: number;
  totalTimeSpentSeconds: number;
  lastActiveDate: string;
}

export interface SubTopicInfo {
  id: SubTopicId;
  title: string;
  shortDesc: string;
  keyFormulaLatex: string;
  color: string;
}
