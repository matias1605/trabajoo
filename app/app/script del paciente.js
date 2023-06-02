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
        if (userMessage.toLowerCase().includes("buenos dias doctor")) {
          return "Como se encuentra paciente usuerrname";
        } else if (userMessage.toLowerCase().includes("tengo bipolaridad")) {
          return "unnn podemos tratarlo con asistencia psiquiatrica";
        } else if (userMessage.toLowerCase().includes("pero puedo escoger los medios para que me pueda haser el alcanse del tratamiento")) {
          return "si, usted puede escoger el tipo de asistencia.";
        } else if (userMessage.toLowerCase().includes("esta bien doctor gracias por la consulta")) {
          return "esta bien no se preocupe nosotros estamos para serbir a nuestros pacientes";
        } else if (userMessage.toLowerCase().includes("gato")) {
          return "Los gatos son animales muy adorables.";
        } else if (userMessage.toLowerCase().includes("comida")) {
          return "Mi comida favorita es la información binaria.";
        } else if (userMessage.toLowerCase().includes("suma")) {
          return "1+1 =2 en binario es 10 .";
        } else if (userMessage.toLowerCase().includes("deporte")) {
          return "El fútbol es mi deporte favorito.";
        } else if (userMessage.toLowerCase().includes("programar")) {
          return "Programar es una habilidad muy útil en el mundo actual.";
        } else {
          return "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?";
        }
      }
});