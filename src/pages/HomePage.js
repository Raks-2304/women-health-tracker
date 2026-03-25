/*import React from 'react';
import ChatbotButton from '../components/ChatbotButton';
import PeriodTrackerButton from '../components/PeriodTrackerButton';
import QuoteGenerator from '../components/QuoteGenerator';
import '../styles/theme.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>SHETrack</h1>
      <p className="tagline">Smart Health Tracking for Women</p>
      <QuoteGenerator />
      <div className="button-container">
        <ChatbotButton />
        <PeriodTrackerButton />
      </div>
    </div>
  );
};

export default HomePage;*/

import React from 'react';
import ChatbotButton from '../components/ChatbotButton';
import PeriodTrackerButton from '../components/PeriodTrackerButton';
import QuoteGenerator from '../components/QuoteGenerator';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/theme.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>SHETrack</h1>
      <p className="tagline">Smart Health Tracking for Women</p>
      <QuoteGenerator />
      <div className="button-container">
        <ChatbotButton />
        <PeriodTrackerButton />
        
        {/* New button for ChatBPage */}
        <Link to="/chatbot-b">
          <button className="pink-button">Chatbot B</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
