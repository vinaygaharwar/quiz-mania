import React, { useState } from 'react';
import StartScreen from './components/startScreen/StartScreen';
import QuizPage from './components/quizPage/QuizPage';
import ResultPage from './components/resultPage/ResultPage';
import RulesModal from './components/rulesModal/RulesModal';
import { questionsData } from './utility/questions';

const App = () => {
  const [step, setStep] = useState('start');
  const [userName, setUserName] = useState('');
  const [category, setCategory] = useState('');
  const [score, setScore] = useState(0);
  const [unanswered, setUnanswered] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const startQuiz = (name, selectedCategory) => {
    setUserName(name);
    setCategory(selectedCategory);
    setShowRules(true);
  };

  const closeRulesAndStartQuiz = () => {
    setShowRules(false);
    setStep('quiz');
  };

  const finishQuiz = (finalScore, unansweredCount) => {
    setScore(finalScore);
    setUnanswered(unansweredCount);
    setStep('result');
  };

  const retakeQuiz = () => {
    setStep('start');
    setUserName('');
    setCategory('');
    setScore(0);
    setUnanswered(0);
  };
  
  return (
    <>
      {step === 'start' && <StartScreen onStart={startQuiz} />}
      {showRules && <RulesModal onClose={closeRulesAndStartQuiz} />}
      {step === 'quiz' && (
        <QuizPage
          questions={questionsData[category]}
          onFinish={finishQuiz}
        />
      )}
      {step === 'result' && (
        <ResultPage
          userName={userName}
          score={score}
          total={questionsData[category].length}
          unanswered={unanswered}
          onRetake={retakeQuiz}
        />
      )}
    </>
  );
};

export default App;
