const request = require("supertest");
const express = require("express");
const faqRoutes = require("../src/routes/faqRoutes");

const app = express();
app.use(express.json());
app.use("/api/faq", faqRoutes);

describe("FAQ API", () => {
    it("should return an error when question is missing", async () => {
        const res = await request(app).post("/api/faq/ask").send({});
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("error");
    });
});
