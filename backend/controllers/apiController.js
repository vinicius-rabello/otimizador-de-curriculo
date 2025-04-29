const { parseData, sendToAi } = require("../services/apiServices");

function handleRequest(body) {
    const prompt = parseData(body.data);
    console.log("Prompt sent to AI:", prompt);
    const response = sendToAi(prompt);
    console.log("Response from AI:", response);
    return response;
};

module.exports = { handleRequest };