const express = require('express');
const predictionController = require('../controllers/predictionController');

const router = express.Router();

// Predict Menstrual Cycle
router.post('/menstrual-cycle', (req, res) => {
  const { userId, lastCycleDate } = req.body;
  
  try {
    const prediction = predictionController.predictNextMenstrualCycle(userId, lastCycleDate);
    res.json(prediction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Predict Fertility Window
router.post('/fertility-window', (req, res) => {
  const { userId, cycleData } = req.body;
  
  try {
    const fertilityPrediction = predictionController.predictFertilityWindow(userId, cycleData);
    res.json(fertilityPrediction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Health Risk Prediction
router.post('/health-risks', (req, res) => {
  const { userId, healthData } = req.body;
  
  try {
    const riskPrediction = predictionController.predictHealthRisks(userId, healthData);
    res.json(riskPrediction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;