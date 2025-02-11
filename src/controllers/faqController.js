const faqService = require("../services/faqService");

const askQuestion = async (req, res) => {
    try {
        const { question, model } = req.body;
        if (!question) return res.status(400).json({ error: "Question is required" });
        if (!model) return res.status(400).json({ error: "Model AI is required" });

        const answer = await faqService.askQuestion(question, model);
        res.json({ answer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { askQuestion };
