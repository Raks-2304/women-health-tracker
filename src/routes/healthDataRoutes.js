const express = require('express');
const { body, validationResult } = require('express-validator');
const healthDataController = require('../controllers/healthDataController');

const router = express.Router();

// Validation middleware
const validateHealthEntry = [
  body('type').isString().notEmpty(),
  body('data').isObject().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// User Registration
router.post('/register', 
  body('username').isString().isLength({ min: 3, max: 50 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username } = req.body;
    const userId = healthDataController.registerUser(username);
    res.status(201).json({ userId });
  }
);

// Add Health Entry
router.post('/:userId/entry', validateHealthEntry, (req, res) => {
  const { userId } = req.params;
  const { type, data } = req.body;
  
  try {
    const entry = healthDataController.addHealthEntry(userId, { type, data });
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get User Health Data
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  
  try {
    const userData = healthDataController.getUserHealthData(userId);
    res.json(userData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update Personal Information
router.put('/:userId/personal-info', (req, res) => {
  const { userId } = req.params;
  const personalInfo = req.body;
  
  try {
    const updatedInfo = healthDataController.updatePersonalInfo(userId, personalInfo);
    res.json(updatedInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Menstrual Cycle Data
router.get('/:userId/menstrual-cycle', (req, res) => {
  const { userId } = req.params;
  
  try {
    const cycleData = healthDataController.getMenstrualCycleData(userId);
    res.json(cycleData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;