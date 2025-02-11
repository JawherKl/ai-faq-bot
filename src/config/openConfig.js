const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({
  baseURL: process.env.BASE_URL, // OpenAI API URL
  apiKey: process.env.API_KEY,   // Your API Key
});

module.exports = openai;
