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
        if (userMessage.toLowerCase().includes("en que le puedo ayudar")) {
          return "Tengo problemas de ansiedad";
        } else if (userMessage.toLowerCase().includes("le puedo resetar algunos medicamentos o tratamiento")) {
          return "esta seguro doctor que me puedo curar.";
        } else if (userMessage.toLowerCase().includes("100% asegurado")) {
          return "Gracias doctor Raul.";
        } else if (userMessage.toLowerCase().includes("carliñox")) {
          return "que es carliñox";
        } else {
          return "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?";
        }
      }
});