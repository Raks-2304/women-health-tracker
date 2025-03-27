const { v4: uuidv4 } = require('uuid');

class HealthDataStore {
  constructor() {
    this.users = {};
  }

  createUser(username) {
    const userId = uuidv4();
    this.users[userId] = {
      id: userId,
      username,
      healthEntries: [],
      medicalHistory: {},
      personalInfo: {}
    };
    return userId;
  }

  addHealthEntry(userId, entryData) {
    if (!this.users[userId]) {
      throw new Error('User not found');
    }

    const entry = {
      id: uuidv4(),
      ...entryData,
      timestamp: new Date()
    };

    this.users[userId].healthEntries.push(entry);
    return entry;
  }

  getUserHealthData(userId) {
    if (!this.users[userId]) {
      throw new Error('User not found');
    }
    return this.users[userId];
  }

  updatePersonalInfo(userId, personalInfo) {
    if (!this.users[userId]) {
      throw new Error('User not found');
    }
    this.users[userId].personalInfo = {
      ...this.users[userId].personalInfo,
      ...personalInfo
    };
    return this.users[userId].personalInfo;
  }

  getMenstrualCycleData(userId) {
    const user = this.users[userId];
    if (!user) {
      throw new Error('User not found');
    }
    return user.healthEntries.filter(entry => entry.type === 'menstrualCycle');
  }
}

module.exports = new HealthDataStore();