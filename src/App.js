/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatBotPage'; // Ensure this matches exact filename
import PeriodTrackerPage from './pages/PeriodTrackerPage';
import './styles/theme.css';
import ChatBPage from './pages/ChatBPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/period-tracker" element={<PeriodTrackerPage />} />
        <Route path="/chatbot" element={<ChatBPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatBotPage'; 
import ChatBPage from './pages/ChatBPage'; // Import the new chatbot page
import PeriodTrackerPage from './pages/PeriodTrackerPage';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/chatbot-b" element={<ChatBPage />} /> {/* New Route for ChatBPage */}
        <Route path="/period-tracker" element={<PeriodTrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
