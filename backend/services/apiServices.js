const { AIFactory } = require('./AIFactory');
const client = AIFactory(provider='deepseek');
const dotenv = require('dotenv');

dotenv.config();

const BASE_PROMPT = process.env.BASE_PROMPT;

function parseData(resume, jobDescription) {
    const prompt = BASE_PROMPT.replace("{{resume}}", resume).replace("{{jobDescription}}", jobDescription);
    return prompt;
}

async function sendToAi(prompt) {
    const response = await client.sendPrompt(prompt)
    return response;
}

module.exports = { parseData, sendToAi };