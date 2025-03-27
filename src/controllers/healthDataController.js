const HealthDataStore = require('../models/healthDataModel');
const dataAnalysisService = require('../services/dataAnalysisService');

class HealthDataController {
  registerUser(username) {
    return HealthDataStore.createUser(username);
  }

  addHealthEntry(userId, entryData) {
    const entry = HealthDataStore.addHealthEntry(userId, entryData);
    
    // Trigger any additional analysis or notifications
    this.processHealthEntry(userId, entry);
    
    return entry;
  }

  getUserHealthData(userId) {
    return HealthDataStore.getUserHealthData(userId);
  }

  updatePersonalInfo(userId, personalInfo) {
    return HealthDataStore.updatePersonalInfo(userId, personalInfo);
  }

  getMenstrualCycleData(userId) {
    return HealthDataStore.getMenstrualCycleData(userId);
  }

  processHealthEntry(userId, entry) {
    try {
      // Perform additional analysis based on entry type
      switch(entry.type) {
        case 'menstrualCycle':
          this.analyzeMenstrualCycle(userId, entry);
          break;
        case 'mood':
          this.analyzeMoodTrends(userId, entry);
          break;
        case 'symptoms':
          this.checkSymptomPatterns(userId, entry);
          break;
      }
    } catch (error) {
      console.error('Error processing health entry:', error);
    }
  }

  analyzeMenstrualCycle(userId, entry) {
    const cycleData = this.getMenstrualCycleData(userId);
    const analysis = dataAnalysisService.analyzeCycleTrends(cycleData);
    
    // Could trigger notifications or recommendations based on analysis
    if (analysis.irregularitiesDetected) {
      // Potential notification mechanism
      console.log('Menstrual cycle irregularities detected');
    }
  }

  analyzeMoodTrends(userId, entry) {
    const userData = this.getUserHealthData(userId);
    const moodTrends = dataAnalysisService.analyzeMoodTrends(userData.healthEntries);
    
    // Potential mental health insights
    if (moodTrends.potentialIssues) {
      console.log('Potential mood-related health concerns');
    }
  }

  checkSymptomPatterns(userId, entry) {
    const userData = this.getUserHealthData(userId);
    const symptomAnalysis = dataAnalysisService.analyzeSymptomPatterns(userData.healthEntries);
    
    // Potential health risk identification
    if (symptomAnalysis.riskFlags) {
      console.log('Potential health risks identified');
    }
  }
}

module.exports = new HealthDataController();