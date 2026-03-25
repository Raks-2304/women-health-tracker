import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PeriodTrackerPage = () => {
  const navigate = useNavigate();
  
  // Load saved last period date from localStorage (if available)
  const savedDate = localStorage.getItem('lastPeriodDate') || '';
  
  const [lastPeriod, setLastPeriod] = useState(savedDate);
  const [nextPeriod, setNextPeriod] = useState('');

  // Calculate next period date (assuming a 28-day cycle)
  useEffect(() => {
    if (lastPeriod) {
      const date = new Date(lastPeriod);
      date.setDate(date.getDate() + 28);
      setNextPeriod(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
    }
  }, [lastPeriod]);

  // Handle date change
  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setLastPeriod(newDate);
    localStorage.setItem('lastPeriodDate', newDate);
  };

  return (
    <div className="home-page">
      <h1>Period Tracker</h1>
      <p className="tagline">Track your cycle and stay informed.</p>

      {/* Date Input */}
      <div className="tracker-container">
        <label>Last Period Date:</label>
        <input 
          type="date" 
          value={lastPeriod} 
          onChange={handleDateChange} 
          className="date-input"
        />
      </div>

      {/* Show predicted next period */}
      {nextPeriod && (
        <div className="result">
          <p>Estimated Next Period: <strong>{nextPeriod}</strong></p>
        </div>
      )}

      {/* Back to Home Button */}
      <div className="button-container">
        <button 
          className="pink-button" 
          onClick={() => navigate('/', { replace: true })}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PeriodTrackerPage;
