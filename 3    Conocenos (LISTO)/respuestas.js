function getBotResponse(input) {
    //Mini juego
    if (input == "Juguemos piedra, papel o tijera") {
        return "Está bien";
    }else if (input == "piedra") {
        return "papel";
    }else if (input == "Me ganaste") {
        return "Es un gusto enorme jugar contigo";
    } else if (input == "papel") {
        return "tijera";
    } else if (input == "tijera") {
        return "piedra";
    }

    // Respuestas simples
    if (input == "hola" || input == "hola, ¿que tal?" || input == "hola, que tal?" || input == "hola, como estas?") {
        return "Bienvenido a Mente Limpia, pregunta cualquier duda que tengas!";
    } else if (input == "Hasta luego" || input == "Adios") {
        return "Un gusto poder conversar contigo. !Hablamos después!";
    } else if (input == "Yo estoy bien") {
        return "Yo estoy contento de escuchar eso";
    } else if (input == "¿Me podrias contar un chiste?") {
        return "Un gato empieza a ladrar en el tejado de una casa. Otro gato, sorprendido, le dice: Estás loco gato, ¿por qué ladras en vez de maullar? El gatito le responde: ¿A caso no puedo aprender otro idioma?";
    } else if (input == "Muy bien y tu?") {
        return "Yo estoy de maravilla";
    } else if (input == "Que puedes hacer?" || input == "¿Que puedes hacer?") {
        return "Yo chateo con personas y las ayudo usando mi A.I. Además, yo les brindo variedad de información, bromas, diversión y resolver sus dudas sobre todo";
    } else if (input == "¿Cual es la suma de 60 mas 40?" || input == "Cual es la suma de 60 mas 40?" || input == "cual es la suma de 60 mas 40?") {
        return "El resultado es 100";
    } else {
        return "Intenta preguntar otra cosa más";
    }
}