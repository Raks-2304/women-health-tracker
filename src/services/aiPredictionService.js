class AIPredictionService {
    predictMenstrualCycle(cycleData, lastCycleDate) {
      if (cycleData.length < 3) {
        return {
          success: false,
          message: 'Insufficient historical data for accurate prediction'
        };
      }
  
      // Calculate average cycle length
      const cycleLengths = this.calculateCycleLengths(cycleData);
      const averageCycleLength = this.calculateAverage(cycleLengths);
  
      // Predict next cycle date
      const lastCycle = new Date(lastCycleDate);
      const predictedNextCycle = new Date(lastCycle.getTime() + averageCycleLength * 24 * 60 * 60 * 1000);
  
      return {
        success: true,
        averageCycleLength,
        lastCycleDate,
        predictedNextCycle,
        variability: this.calculateStandardDeviation(cycleLengths)
      };
    }
  
    predictFertilityWindow(cycleData, personalInfo) {
      if (cycleData.length < 3) {
        return {
          success: false,
          message: 'Insufficient historical data for fertility prediction'
        };
      }
  
      // Basic fertility window calculation (simplified)
      const cycleLengths = this.calculateCycleLengths(cycleData);
      const averageCycleLength = this.calculateAverage(cycleLengths);
  
      // Estimate fertile window (typically 5-6 days around ovulation)
      const ovulationDay = Math.round(averageCycleLength * 0.5);
      const fertileWindowStart = ovulationDay - 5;
      const fertileWindowEnd = ovulationDay + 1;
  
      return {
        success: true,
        fertileWindowStart,
        fertileWindowEnd,
        ovulationDay,
        personalFactors: {
          age: personalInfo.age,
          contraceptionMethod: personalInfo.contraceptionMethod
        }
      };
    }
  
    assessHealthRisks(healthData, medicalHistory) {
      // Risk assessment based on current health data and medical history
      const riskFactors = {
        chronicConditions: medicalHistory.chronicConditions || [],
        familyHistory: medicalHistory.familyHistory || []
      };
  
      const currentHealthIndicators = {
        bmi: healthData.bmi,
        bloodPressure: healthData.bloodPressure,
        symptoms: healthData.symptoms || []
      };
  
      // Basic risk scoring mechanism
      const riskScore = this.calculateRiskScore(riskFactors, currentHealthIndicators);
  
      return {
        riskScore,
        riskLevel: this.classifyRiskLevel(riskScore),
        recommendedActions: this.generateRecommendations(riskScore)
      };
    }
  
    // Utility methods
    calculateAverage(numbers) {
      return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }
  
    calculateStandardDeviation(numbers) {
      const avg = this.calculateAverage(numbers);
      const squareDiffs = numbers.map(value => Math.pow(value - avg, 2));
      return Math.sqrt(this.calculateAverage(squareDiffs));
    }
  
    calculateCycleLengths(cycleData) {
      return cycleData.map((entry, index, array) => {
        if (index === 0) return 0;
        const prevEntry = array[index - 1];
        return (new Date(entry.timestamp) - new Date(prevEntry.timestamp)) / (1000 * 60 * 60 * 24);
      }).filter(length => length > 0);
    }
  
    calculateRiskScore(riskFactors, healthIndicators) {
      let score = 0;
  
      // Chronic conditions
      score += riskFactors.chronicConditions.length * 2;
  
      // Family history
      score += riskFactors.familyHistory.length * 1.5;
  
      // BMI risk
      if (healthIndicators.bmi < 18.5 || healthIndicators.bmi > 30) {
        score += 3;
      }
  
      // Blood pressure risk
      if (healthIndicators.bloodPressure.systolic > 140 || 
          healthIndicators.bloodPressure.diastolic > 90) {
        score += 4;
      }
  
      // Symptom severity
      score += healthIndicators.symptoms.length;
  
      return score;
    }
  
    classifyRiskLevel(riskScore) {
      if (riskScore < 3) return 'Low Risk';
      if (riskScore < 6) return 'Moderate Risk';
      if (riskScore < 10) return 'High Risk';
      return 'Very High Risk';
    }
  
    generateRecommendations(riskScore) {
      const recommendations = [];
  
      if (riskScore < 3) {
        recommendations.push('Continue current health practices');
        recommendations.push('Regular health check-ups');
      } else if (riskScore < 6) {
        recommendations.push('Consult healthcare provider');
        recommendations.push('Consider lifestyle modifications');
      } else if (riskScore < 10) {
        recommendations.push('Immediate medical consultation recommended');
        recommendations.push('Comprehensive health screening');
        recommendations.push('Potential medication or treatment plan');
      } else {
        recommendations.push('Urgent medical intervention required');
        recommendations.push('Comprehensive diagnostic tests');
        recommendations.push('Specialized medical care');
      }
  
      return recommendations;
    }
  }
  
  module.exports = new AIPredictionService();