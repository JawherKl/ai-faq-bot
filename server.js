const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const faqRoutes = require("./src/routes/faqRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/faq", faqRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
