const { geminiClient } = require('./geminiClient');
const { deepseekClient } = require('./deepseekClient');

function AIFactory(provider) {
    switch(provider) {
        case 'gemini':
            return new geminiClient();
        case 'deepseek':
            return new deepseekClient();
        default:
            throw new Error(`Unsupported AI provider: ${provider}`);
    }
}

module.exports = { AIFactory };