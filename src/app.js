const express = require('express');
const cors = require('cors');
const healthDataRoutes = require('./routes/healthDataRoutes');
const predictionRoutes = require('./routes/predictionRoutes');
const axios = require('axios');  // Import axios for chatbot requests

const CHATBOT_URL = "http://192.168.64.45:3000/chat";
 // ✅ Updated with Laptop 2's IP

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  initializeMiddlewares() {
    this.app.use(cors({
      origin: '*',  // ✅ Allow requests from any frontend (adjust if needed)
      methods: ['GET', 'POST']
    }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeRoutes() {
    // ✅ Default Route to Verify Server is Running
    this.app.get("/", (req, res) => {
        res.send("Backend is working! 🚀");
    });

    this.app.use('/api/health', healthDataRoutes);
    this.app.use('/api/predict', predictionRoutes);

    // ✅ Route to Send Messages to Chatbot on Laptop 2
    this.app.post("/api/chat", async (req, res) => {
      try {
        const userMessage = req.body.message;
        const response = await axios.post(CHATBOT_URL, { message: userMessage });

        res.json(response.data);
      } catch (error) {
        console.error("Error communicating with chatbot:", error.message);
        res.status(500).json({ error: "Failed to connect to chatbot" });
      }
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const app = new App();
app.listen();

module.exports = app;
