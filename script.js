document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load Dark Mode Preference
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("change", function () {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
    });
});

async function askAI() {
    const modelSelect = document.getElementById("modelSelect");
    const questionInput = document.getElementById("question");
    const responseText = document.getElementById("response-text");
    const rawJson = document.getElementById("raw-json");
    const responseCard = document.getElementById("response-card");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const askBtn = document.getElementById("askBtn");

    const selectedModel = modelSelect.value;
    const question = questionInput.value.trim();

    if (!question) {
        responseText.innerHTML = "<span class='text-danger'>Please enter a question.</span>";
        responseCard.style.display = "block";
        return;
    }

    askBtn.disabled = true;
    loadingSpinner.style.display = "inline-block";
    responseCard.style.display = "none";

    try {
        const response = await fetch("http://localhost:3000/api/faq/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ model: selectedModel, question })
        });

        const data = await response.json();
        responseText.innerHTML = marked.parse(data.answer);

        console.log("Raw JSON Data:", data);  // Debugging output
        rawJson.innerText = JSON.stringify(data, null, 2); // Assign JSON response
        responseCard.style.display = "block";

    } catch (error) {
        responseText.innerHTML = "<span class='text-danger'>Error fetching response.</span>";
        responseCard.style.display = "block";
        console.error("Error fetching AI response:", error);
    }

    askBtn.disabled = false;
    loadingSpinner.style.display = "none";
}
function toggleRawJson() {
    document.getElementById("rawResponse").classList.toggle("show");
}