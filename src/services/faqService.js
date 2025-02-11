const openai = require("../config/openConfig");

const askQuestion = async (question, model) => {
  try {
    const response = await openai.chat.completions.create({
      model: model,
      messages: [{ role: "user", content: question }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI API Error:", error.response?.data || error.message);
    throw new Error("Failed to get response from AI API");
  }
};

module.exports = { askQuestion };