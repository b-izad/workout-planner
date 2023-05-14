import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const words = [
    'Regular exercise and workout routines are crucial for maintaining a healthy lifestyle.',
    'It helps improve physical fitness, boost energy levels, and enhance overall well-being.',
    'Our website offers a comprehensive workout planning tool that can help you create a personalized workout plan based on your goals, preferences, and fitness level.',
    'Whether you\'re looking to build strength, lose weight, or improve endurance, our workout planner can generate a plan tailored to your needs. Start planning your fitness journey today! Click the button below to create your workout plan.'
  ];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharacterIndex = 0;
    let typedText = '';

    const typingInterval = setInterval(() => {
      if (currentCharacterIndex <= words[currentWordIndex].length) {
        typedText = words
          .slice(0, currentWordIndex + 1)
          .map((word, index) => (index === currentWordIndex ? word.slice(0, currentCharacterIndex) : word))
          .join(' ');
        setText(typedText);
        currentCharacterIndex++;
      } else if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
        currentCharacterIndex = 0;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 5);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome to our Workout Planner</h2>
      <p>{text}</p>
      {isTypingComplete && (
        <div>
          <p>{words[words.length - 1]}</p>
          <Link to="/workout-form" className="btn">Create Workout Plan</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
