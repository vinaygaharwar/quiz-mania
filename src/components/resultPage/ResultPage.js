import React from 'react';
import './ResultPage.css';

const ResultPage = ({ userName, score, total, unanswered, onRetake }) => {
  const percent = Math.round((score / total) * 100);
  const incorrect = total - score - unanswered;

  const getFeedback = () => {
    if (percent >= 80) return 'Great job!';
    if (percent >= 50) return 'Good effort!';
    return 'Keep practicing!';
  };

  const getFeedbackTitle = () => {
    if (percent >= 80) return 'CONGRATULATION';
    return 'KEEP PRACTICING!';
  };

  const getIcon = () => {
    if (percent >= 80) return '✅';
    return '😕';
  };

  return (
    <div className="result-container">
      <div className="result-icon">{getIcon()}</div>
      <p className="result-subtitle">
        You successfully completed the Quiz {percent < 80 ? 'but you need to' : 'and holds'}
      </p>
      <p className="result-title">{getFeedbackTitle()}</p>

      {percent >= 80 ? (
        <div className="result-score-text">
          <p>Your Score</p>
          <div className="result-score">{percent}%</div>
          <h3>{getFeedback()}</h3>
        </div>
      ) : (
        <div className="result-circle-score">
          <p>Your Score</p>
          <div className="circle">{percent}%</div>
        </div>
      )}

      <div className="result-breakdown">
        <div className="total-question">
        <p>Out of {total} question</p>
        </div>
        <div className="score">
        <p><span className="correct">{score}</span> Correct</p>
        <p><span className="incorrect">{incorrect}</span> Incorrect</p>
        <p><span className="unanswered">{unanswered}</span> Not answered</p>
        </div>
      </div>

      <button className="retake-btn" onClick={onRetake}>Retake Quiz</button>
    </div>
  );
};

export default ResultPage;
