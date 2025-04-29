const { AIClient } = require('./AIClient');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');

dotenv.config();

class deepseekClient extends AIClient {
    constructor() {
        super();
        this.client = new OpenAI({ baseURL: "https://openrouter.ai/api/v1", apiKey: process.env.DEEPSEEK_KEY });
    };

    async sendPrompt(prompt) {
        const response = await this.client.chat.completions.create({
            messages: [{role: "system", content: prompt}],
            model: "deepseek/deepseek-v3-base:free",
        });
        return response;
    }
};

module.exports = { deepseekClient };