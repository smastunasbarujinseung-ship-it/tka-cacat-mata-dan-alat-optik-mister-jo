/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { InstructionsView } from './components/views/InstructionsView';
import { FormulaBankView } from './components/views/FormulaBankView';
import { ExerciseView } from './components/views/ExerciseView';
import { EvaluationView } from './components/views/EvaluationView';
import { ProgressView } from './components/views/ProgressView';
import { AboutView } from './components/views/AboutView';
import { loadProgress, saveUserAnswer, clearAllProgress } from './utils/storage';
import { ALL_QUESTIONS } from './data/questions';
import { SubTopicId, UserAnswer } from './types';
import { speechService } from './utils/speech';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('beranda');
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, UserAnswer>>({});
  const [subtopicFilter, setSubtopicFilter] = useState<SubTopicId | undefined>(undefined);

  // Load offline saved progress on mount
  useEffect(() => {
    const saved = loadProgress();
    setAnswers(saved.answers);
    if (saved.currentQuestionId && saved.currentQuestionId >= 1 && saved.currentQuestionId <= 30) {
      setCurrentQuestionId(saved.currentQuestionId);
    }

    // Check for autostart query parameter (for direct test automation)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('autostart') === '1') {
        setCurrentTab('latihan');
      }
    }
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartExercise = (subtopicId?: SubTopicId) => {
    speechService.stop();
    setSubtopicFilter(subtopicId);
    if (subtopicId) {
      const firstQ = ALL_QUESTIONS.find(q => q.subtopicId === subtopicId);
      if (firstQ) {
        setCurrentQuestionId(firstQ.id);
      }
    }
    setCurrentTab('latihan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveAnswer = (qId: number, ans: UserAnswer) => {
    const updated = {
      ...answers,
      [qId]: ans
    };
    setAnswers(updated);
    saveUserAnswer(qId, ans);
  };

  const handleChangeQuestion = (id: number) => {
    speechService.stop();
    setCurrentQuestionId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetProgress = () => {
    clearAllProgress();
    setAnswers({});
    setCurrentQuestionId(1);
    speechService.stop();
  };

  const answeredCount = Object.values(answers).filter(a => a.submitted).length;
  const totalEarned = Object.values(answers).reduce((sum, a) => sum + (a.score || 0), 0);
  const totalScorePct = ALL_QUESTIONS.length > 0 ? (totalEarned / ALL_QUESTIONS.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-red-200 selection:text-red-950">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        answeredCount={answeredCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'beranda' && (
          <HomeView
            onStartExercise={handleStartExercise}
            onNavigate={handleSelectTab}
            answeredCount={answeredCount}
            totalScore={totalScorePct}
          />
        )}

        {currentTab === 'petunjuk' && (
          <InstructionsView onStartExercise={() => handleStartExercise()} />
        )}

        {currentTab === 'bank-rumus' && <FormulaBankView />}

        {currentTab === 'latihan' && (
          <ExerciseView
            currentQuestionId={currentQuestionId}
            answers={answers}
            onSaveAnswer={handleSaveAnswer}
            onChangeQuestion={handleChangeQuestion}
            initialSubtopicFilter={subtopicFilter}
          />
        )}

        {currentTab === 'evaluasi' && (
          <EvaluationView
            answers={answers}
            onStartExercise={handleStartExercise}
            onNavigate={handleSelectTab}
          />
        )}

        {currentTab === 'progres' && (
          <ProgressView
            answers={answers}
            onJumpToQuestion={qId => {
              setCurrentQuestionId(qId);
              setCurrentTab('latihan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onResetProgress={handleResetProgress}
          />
        )}

        {currentTab === 'tentang' && <AboutView />}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onSelectSubtopic={subId => handleStartExercise(subId)}
      />
    </div>
  );
}
