import React, { useState } from 'react';
import './FlippableCard.css'; // Create a CSS file for styles

const FlippableCard = ({ question, options, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flippable-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="front">
        <h2>Question</h2>
        <p>{question}</p>
        <ul>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
      <div className="back">
        <h2>Answer</h2>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FlippableCard;
