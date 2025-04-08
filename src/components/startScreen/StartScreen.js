import React, { useState } from 'react';
import './StartScreen.css';

const StartScreen = ({ onStart }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Javascript Basic',
    'Angular Basic',
    'React.js Advance',
    'Flutter',
  ];

  const handleSubmit = () => {
    if (name && category) {
      onStart(name, category);
    } else {
      alert('Please enter your name and select a category');
    }
  };

  return (
    <div className="start-container">
      <div className="start-card">
        <h1 className="title">
          Welcome to <span className="highlight">QUIZ<span className="bold">Mania</span></span>
        </h1>

        <div className="rules-box">
          Please read all the rules about this quiz before you start.{' '}
          <a href="#" className="rules-link">Quiz rules</a>
        </div>

        <label className="input-label">Full name</label>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-input"
        />

        <p className="input-label">Please select topic to continue</p>
        <div className="category-grid">
          {categories.map((cat) => (
            <label key={cat} className={`category-option ${category === cat ? 'selected' : ''}`}>
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={() => setCategory(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        <button onClick={handleSubmit} className="start-button">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
