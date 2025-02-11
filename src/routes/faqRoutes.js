const express = require("express");
const { askQuestion } = require("../controllers/faqController");

const router = express.Router();

router.post("/ask", askQuestion);

module.exports = router;
