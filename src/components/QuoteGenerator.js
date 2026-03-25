import React, { useState, useEffect } from 'react';

const quotes = [
  "Believe in yourself and all that you are.",
  "Your strength is greater than any struggle.",
  "Every day is a new beginning.",
  "Embrace your uniqueness.",
  "You are capable of amazing things."
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const generateQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    };

    generateQuote();
    const interval = setInterval(generateQuote, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-section">
      <h3>Daily Inspiration</h3>
      <p>"{quote}"</p>
    </div>
  );
};

export default QuoteGenerator;