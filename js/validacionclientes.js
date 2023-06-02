(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
              Swal.fire({
                  title:"¡ERROR!",
                  text: "Por favor, complete las casillas en blanco para acceder a Live&Life",
                  icon: "error",
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  },
                  confirmButtonText: "ACEPTAR",
                  backdrop: true,
                  timer: "5000",
                  timerProgressBar: true,
                  allowEscapeKey:true,
                  allowEnterKey:true,
                  allowOutsideClick:false,
                  stopKeydownPropagation:false,
                  buttonStyling: true,
                  showCloseButton: true,
                  confirmButtonColor: "#07c8be",
              })
            }else{
              event.preventDefault()
              event.stopPropagation()  
              Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
                ).then(function(){
                    window.location = "../PL1/TEST/Agendar Cita.html";
                })

            }
            form.classList.add('was-validated')
          },false)
        })
    })()
    
function myFunction(){
  var x = document.getElementById("password");
  if (x.type == "password"){
      x.type="text";
  }else{
      x.type="password";
  }
}