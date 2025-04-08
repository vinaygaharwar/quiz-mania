import React, { useEffect, useState } from 'react';
import './QuizPage.css';

const QuizPage = ({ questions, onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [unanswered, setUnanswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNext();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [current]);

  const handleOptionClick = (index) => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === null) setUnanswered((u) => u + 1);
    else if (selected === questions[current].answer) setScore((s) => s + 1);

    const nextIndex = current + 1;
    if (nextIndex < questions.length) {
      setCurrent(nextIndex);
      setSelected(null);
      setTimeLeft(10);
    } else {
      onFinish(
        score + (selected === questions[current].answer ? 1 : 0),
        unanswered + (selected === null ? 1 : 0)
      );
    }
  };

  const handleExit = () => {
    onFinish(score, unanswered);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="logo">QUIZ<span>Mania</span></div>
        <button className="exit-button" onClick={handleExit}>Exit Quiz</button>
      </div>

      <div className="progress-container">
        <div className="progress-count"><span>{current + 1}</span> /{questions.length}</div>
        <div className="timer-box">0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</div>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-block">
        <div className="question"><strong>{current + 1}. </strong>{questions[current].question}</div>
        <ul className="options">
          {questions[current].options.map((opt, index) => (
            <li
              key={index}
              className={`option ${selected === index ? 'selected' : ''}`}
              onClick={() => handleOptionClick(index)}
            >
              <input
                type="radio"
                name="option"
                checked={selected === index}
                onChange={() => handleOptionClick(index)}
              />
              <span>{opt}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="actions">
        <button className={`next-btn ${selected === null ? 'disabled' : ''}`} onClick={handleNext} disabled={selected === null}>
          {current + 1 === questions.length ? 'Finish' : 'Next'}
        </button>
        <button className="skip-btn" onClick={handleNext}>Skip this question</button>
      </div>
    </div>
  );
};

export default QuizPage;
