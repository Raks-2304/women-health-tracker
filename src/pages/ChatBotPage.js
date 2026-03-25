/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="home-page">
      <h1>Chatbot</h1>
      <div className="button-container">
        <button 
          className="pink-button" 
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;



import React from "react";
import { useNavigate } from "react-router-dom";

const ChatbotPage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Chatbot</h1>

      {/* ✅ Chatbot iframe *//*}
      <iframe
        src="https://your-chatbot-url.com" // Replace with your chatbot URL
        width="100%"
        height="500px"
        style={{ border: "none", borderRadius: "10px", marginTop: "20px" }}
        title="Chatbot"
      ></iframe>

      <div className="button-container">
        <button className="pink-button" onClick={() => navigate("/", { replace: true })}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;*/


/*import React from "react";
import { useNavigate } from "react-router-dom";

const ChatbotPage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Women's Wellness Chatbot</h1>
      
      <div className="quote-section">
        <h3>Your Personal Health Companion</h3>
        <p>Get confidential, supportive guidance on women's health, wellness, and period tracking.</p>
      </div>

      <iframe
        src="https://webchat.dialogflow.com/embed/YOUR_WOMEN_WELLNESS_BOT_ID"
        width="100%"
        height="600px"
        style={{ 
          border: "none", 
          borderRadius: "15px", 
          marginTop: "20px",
          boxShadow: "0 4px 6px rgba(255, 105, 180, 0.2)"
        }}
        title="Women's Wellness Chatbot"
      ></iframe>

      <div className="quote-section">
        <h3>What Can I Help You With?</h3>
        <p>• Period Tracking Insights
        • Reproductive Health Questions
        • Wellness Advice
        • Nutrition Guidance
        • Mental Health Support</p>
      </div>

      <div className="button-container">
        <button 
          className="pink-button" 
          onClick={() => navigate("/", { replace: true })}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WellnessChatbot = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: 'menstrualCycle',
      text: 'How regular is your menstrual cycle?',
      options: [
        'Very Regular (28-30 days)',
        'Somewhat Irregular',
        'Highly Irregular',
        'Not Sure'
      ]
    },
    {
      id: 'painLevel',
      text: 'How would you describe your menstrual pain?',
      options: [
        'No Pain',
        'Mild Discomfort',
        'Moderate Pain',
        'Severe Pain'
      ]
    },
    {
      id: 'exerciseFrequency',
      text: 'How often do you exercise?',
      options: [
        'Daily',
        '3-4 times a week',
        '1-2 times a week',
        'Rarely/Never'
      ]
    },
    {
      id: 'sleepQuality',
      text: 'How would you rate your sleep quality?',
      options: [
        'Excellent',
        'Good',
        'Average',
        'Poor'
      ]
    },
    {
      id: 'stressLevel',
      text: 'How would you describe your current stress levels?',
      options: [
        
        'Low',
        'Moderate',
        'High',
        
      ]
    }
  ];

  const handleAnswer = (answer) => {
    const currentQuestionId = questions[currentQuestion].id;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestionId]: answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const navigate = useNavigate();

  const generateHealthInsights = () => {
    return (
      <div className="quote-section">
        <h3>Your Wellness Insights</h3>
        {Object.entries(answers).map(([question, answer]) => (
          <p key={question}>
            <strong>{questions.find(q => q.id === question).text}</strong>: {answer}
          </p>
        ))}
        <div className="wellness-recommendations">
          <h4>Personalized Recommendations:</h4>
          <ul>
            <li>Consider consulting a gynecologist for cycle tracking</li>
            <li>Practice stress-reduction techniques like meditation</li>
            <li>Maintain a balanced diet and regular exercise routine</li>
            <li>Prioritize quality sleep and relaxation</li>
          </ul>
        </div>
      </div>
    );
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="home-page">
        <h1>Wellness Assessment</h1>
        {generateHealthInsights()}
        <div className="button-container">
          <button 
            className="pink-button" 
            onClick={resetQuestionnaire}
          >
            Retake Assessment
          </button>
          <button 
            className="pink-button" 
            onClick={() => navigate('/', { replace: true })}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">
      <h1>Women's Wellness Questionnaire</h1>
      <div className="quote-section">
        <h3>Question {currentQuestion + 1} of {questions.length}</h3>
        <p>{questions[currentQuestion].text}</p>
      </div>
      
      <div className="button-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="pink-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="quote-section">
        <p>Your responses help us provide personalized wellness insights.</p>
      </div>
    </div>
  );
};

export default WellnessChatbot;
