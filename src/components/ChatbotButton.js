import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="pink-button" 
      onClick={() => navigate('/chatbot')}
    >
      Chat with AI
    </button>
  );
};

export default ChatbotButton;