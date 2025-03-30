const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: "gemma:2b",
            prompt: userMessage,
            stream: false
        });

        res.json({ reply: response.data.response });
    } catch (error) {
        console.error("Error communicating with Ollama:", error.message);
        res.status(500).json({ error: "Failed to get a response from the chatbot." });
    }
});

app.listen(PORT, () => {
    console.log(`Chatbot server running at http://localhost:${PORT}`);
});
