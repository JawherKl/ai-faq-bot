# 🤖 AI-powered FAQ Bot  

![openai-nodejs](https://github.com/JawherKl/ai-faq-bot/blob/main/images/ai-chat.jpg)

AI-powered FAQ Bot is a backend solution built with **Node.js (Express)** that integrates with **OpenAI** to provide AI-generated answers to user queries.  
It follows best practices for a scalable and maintainable backend, inspired by the structure of my other repository [ai-models-integration](https://github.com/JawherKl/ai-models-integration).  

---

## ✨ Features  
✅ **OpenAI Integration** – Uses AI to answer FAQ-style questions.  
✅ **Modular Architecture** – Well-structured with controllers, services, and config layers.  
✅ **Secure API** – Implements security best practices using `helmet` and `cors`.  
✅ **CommonJS Compatibility** – Uses `require` for backward compatibility.  
✅ **Environment-Based Config** – API keys and URLs are managed in `.env`.  
✅ **Logging & Error Handling** – Uses `morgan` for request logging and robust error handling.  

---

## 🏗️ Project Structure  
```
ai-faq-bot/
│── src/
│   ├── config/
│   │   ├── openConfig.js   # OpenAI (OpenAI) API configuration  
│   ├── controllers/
│   │   ├── faqController.js # Handles user requests  
│   ├── services/
│   │   ├── faqService.js # Calls OpenAI API  
│   ├── routes/
│   │   ├── faqRoutes.js # Defines API endpoints  
│── .env  # API keys and environment variables  
│── package.json  
│── server.js  # Main Express app  
```

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/JawherKl/ai-faq-bot.git  
cd ai-faq-bot
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory:  
```ini
PORT=3000
BASE_URL=https://openrouter.ai/api/v1
API_KEY=your-api-key-here
```

### **4️⃣ Start the Server**  
```sh
node server.js
```
The API will run at `http://localhost:3000`.

---

## 🎯 API Endpoints  

### 🔹 **Ask a Question (POST /api/faq/ask)**  
**Request:**  
```sh
curl -X POST http://localhost:3000/api/faq/ask \
     -H "Content-Type: application/json" \
     -d '{"model": "models-name-example","question": "What is OpenAI AI?"}'
```
**Response:**  
```json
{
  "answer": "OpenAI AI is an advanced AI model providing intelligent responses..."
}
```

---

## 🛠️ Technologies Used  
- **Node.js** (Express) – Backend framework  
- **OpenAI** – AI model for FAQ responses  
- **dotenv** – Environment variable management  
- **helmet, cors, morgan** – Security and logging  

---

## 📌 Future Improvements  
- ✅ Support **multiple AI models** (OpenAI, Cohere, etc.)  
- ✅ Implement **Redis caching** for frequent queries  
- ✅ Add **database support** (MongoDB, PostgreSQL) for logging questions  
- ✅ Deploy on **Railway, Render, or Vercel**  

---

## 💡 Contributing  
If you’d like to improve this project, feel free to fork the repo and submit a pull request!  

---

## 📄 License  
This project is open-source and available under the [MIT License](LICENSE).  

---

🚀 **Built with ❤️ by [JawherKl](https://github.com/JawherKl)**
