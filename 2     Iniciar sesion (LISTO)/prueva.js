(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          Swal.fire({
            title:"¡ERROR!",
            text: "Por favor rellenar el formulario correctamente",
            icon: "error",
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
                window.location = "horario1.html";
            })
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()