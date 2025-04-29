const { parseData, sendToAi } = require("../services/apiServices");

async function handleRequest(body) {
    const prompt = parseData(body.resume, body.jobDescription);
    const response = await sendToAi(prompt);
    console.log("Response from AI:", response.choices[0].message.content);
    return { "data": response.text };
};

module.exports = { handleRequest };