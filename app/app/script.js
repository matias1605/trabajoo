document.addEventListener("DOMContentLoaded", function() {
    var carliñox = document.getElementById("carliñox");
    var userInput = document.getElementById("userInput");
    var sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function() {
        var userMessage = userInput.value;
        if (userMessage.trim() !== "") {
            appendMessage("user", userMessage);
            setTimeout(function() {
                var botMessage = getBotResponse(userMessage);
                appendMessage("bot", botMessage);
            }, 500);
            userInput.value = "";
        }
    });

    function appendMessage(sender, message) {
        var messageContainer = document.createElement("div");
        var messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.innerHTML = `<div class="message-content">${message}</div>`;
        messageContainer.appendChild(messageElement);
        carliñox.appendChild(messageContainer);
        carliñox.scrollTop = carliñox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Lógica para generar la respuesta
        if (userMessage.toLowerCase().includes("hola")) {
            return "¡Hola! ¿Cómo puedo ayudarte?";
        } else if (userMessage.toLowerCase().includes("quien eres")) {
            return "soy chino el pesuñento";
        } else if (userMessage.toLowerCase().includes("adiós")) {
            return "¡Hasta luego! Si tienes más preguntas, no dudes en preguntar.";
        } else {
            return "Lo siento, no entiendo tu pregunta. ¿Puedes ser más específico?";
        }
    }
});