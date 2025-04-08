import React from 'react';
import './RulesModal.css';

const RulesModal = ({ onClose }) => {
  return (
    <div className="rules-modal-overlay">
      <div className="rules-modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <p className="modal-title">Quiz rules</p>

        <div className="rules-section">
          <p className="rule-heading">10-Second Timer</p>
          <ul>
            <li>Each question comes with a 10-second timer.</li>
            <li>If you don’t answer within the time limit, the app will automatically move to the next question.</li>
          </ul>
        </div>

        <div className="rules-section">
          <p className="rule-heading">Manual Navigation</p>
          <ul>
            <li>You can navigate to the next question manually before the timer expires.</li>
            <li>Use the "Next" button to move ahead if you’re ready before the timer runs out.</li>
          </ul>
        </div>

        <div className="rules-section">
          <p className="rule-heading">Final Score and Performance Message</p>
          <ul>
            <li>After all questions are answered, your final score will be displayed.</li>
            <li>
              Based on your performance, you will receive a personalized message:
              <ul>
                <li>Great job!: If you score <strong>above 80%</strong>.</li>
                <li>Well done!: If you score <strong>between 60% and 80%</strong>.</li>
                <li>Keep practicing!: If you score <strong>below 60%</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
