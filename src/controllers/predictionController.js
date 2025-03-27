const aiPredictionService = require('../services/aiPredictionService');
const HealthDataStore = require('../models/healthDataModel');

class PredictionController {
  predictNextMenstrualCycle(userId, lastCycleDate) {
    const userData = HealthDataStore.getUserHealthData(userId);
    const cycleData = userData.healthEntries.filter(entry => entry.type === 'menstrualCycle');

    return aiPredictionService.predictMenstrualCycle(cycleData, lastCycleDate);
  }

  predictFertilityWindow(userId, cycleData) {
    const userData = HealthDataStore.getUserHealthData(userId);
    const personalInfo = userData.personalInfo;

    return aiPredictionService.predictFertilityWindow(cycleData, personalInfo);
  }

  predictHealthRisks(userId, healthData) {
    const userData = HealthDataStore.getUserHealthData(userId);
    const medicalHistory = userData.medicalHistory;

    return aiPredictionService.assessHealthRisks(healthData, medicalHistory);
  }
}

module.exports = new PredictionController();