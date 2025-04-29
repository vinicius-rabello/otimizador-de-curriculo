const { AIClient } = require('./AIClient');
const { GoogleGenAI } = require('@google/genai');
const dotenv = require('dotenv');

dotenv.config();

class geminiClient extends AIClient {
    constructor() {
        super();
        this.client = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
    };

    async sendPrompt(prompt) {
        const response = await this.client.models.generateContent({
            model: "gemini-1.5-flash",
            contents: prompt,
        });
        return response;
    }
};

module.exports = { geminiClient };