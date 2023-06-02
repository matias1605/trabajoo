// ES6 Modules or TypeScript

//Calificación
var contador;
function calificar(item) {
    console.log(item);
    contador=item.id[0]; //captura el primer caracter
    let nombre= item.id.substring(1); //4 'estrella' captura todo menos el primer caracter 
    for(let i=0;i<5;i++){
        if(i<contador){
            document.getElementById((i+1)+nombre).style.color="orange";
        }else{
            document.getElementById((i+1)+nombre).style.color="black";

        }
    }
}
function Mensaje(){
    swal({
        title: "¡Buen trabajo!",
        text: "Gracias por calificarnos",
        imageUrl:"./image",
      });
}

//Modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
myInput.focus()
})

//Quiz
function check()
{
    var  ncontador_total = 0, opciones, r1, r2, r3, r4;
   switch (quiz.question1.value) {
         case 'r1' : 
            ncontador_total = ncontador_total + 0 ;
            break;
         case 'r2' : 
            ncontador_total = ncontador_total + 1 ;
            break;
         case 'r3' : 
            ncontador_total = ncontador_total + 2 ;
            break;
         case 'r4' : ncontador_total = ncontador_total + 3 ;
             break;
        
   };

   switch (quiz.question2.value) {
         case 'r1' : 
            ncontador_total = ncontador_total + 0 ;
            break;
         case 'r2' : 
            ncontador_total = ncontador_total + 1 ;
            break;
         case 'r3' : 
            ncontador_total = ncontador_total + 2 ;
            break;
         case 'r4' : ncontador_total = ncontador_total + 3 ;
             break;
        
   };
   switch (quiz.question3.value) {
         case 'r1' : 
            ncontador_total = ncontador_total + 0 ;
            break;
         case 'r2' : 
            ncontador_total = ncontador_total + 1 ;
            break;
         case 'r3' : 
            ncontador_total = ncontador_total + 2 ;
            break;
         case 'r4' : ncontador_total = ncontador_total + 3 ;
             break;
        
   };
   switch (quiz.question4.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question5.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question6.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question7.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question8.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question9.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question10.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question11.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question12.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question13.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question14.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question15.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question16.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question17.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question18.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question19.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question20.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };
    switch (quiz.question21.value) {
        case 'r1' : 
        ncontador_total = ncontador_total + 0 ;
        break;
        case 'r2' : 
        ncontador_total = ncontador_total + 1 ;
        break;
        case 'r3' : 
        ncontador_total = ncontador_total + 2 ;
        break;
        case 'r4' : ncontador_total = ncontador_total + 3 ;
            break;
    
    };

   if(ncontador_total<=21){
    swal({
        title: "¡Quiz terminado!",
        text: "Obtuviste Ansiedad Leve,"+"Puntos totales: "+ncontador_total+ " .Te recomendamos contactarte con nosotros",
        icon: "success",
        button: "Contactanos",
      }).then(function() {
        window.location = "ELECCIÓN.html";
    });
   }else if(ncontador_total<=35){
    swal({
        title: "¡Quiz terminado!",
        text: "Obtuviste Ansiedad Moderada,"+"Puntos totales: "+ncontador_total+ " .Te recomendamos contactarte con nosotros",
        icon: "success",
        button: "Contactanos",
      }).then(function() {
        window.location = "ELECCIÓN.html";
    });
   }else{
    swal({
        title: "¡Quiz terminado!",
        text: "Obtuviste Ansiedad Fuerte,"+"Puntos totales: "+ncontador_total+ " .Te recomendamos contactarte con nosotros",
        icon: "success",
        button: "Contactanos",
      }).then(function() {
        window.location = "ELECCIÓN.html";
    });
   }
}
