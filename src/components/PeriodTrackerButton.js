import React from 'react';
import { useNavigate } from 'react-router-dom';

const PeriodTrackerButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="pink-button" 
      onClick={() => navigate('/period-tracker')}
    >
      Period Tracker
    </button>
  );
};

export default PeriodTrackerButton;