// Mostrar u ocultar la contraseña al hacer clic en el checkbox
$(document).ready(function() {
    $('#mostrarContrasena').click(function() {
      if ($(this).is(':checked')) {
        $('#contrasena').attr('type', 'text');
        $('#verificarContrasena').attr('type', 'text');
      } else {
        $('#contrasena').attr('type', 'password');
        $('#verificarContrasena').attr('type', 'password');
      }
    });

    // Verificar la igualdad de las contraseñas antes de enviar el formulario
    $('#registroForm').submit(function(event) {
      var contrasena = $('#contrasena').val();
      var verificarContrasena = $('#verificarContrasena').val();
      if (contrasena !== verificarContrasena) {
        event.preventDefault();
        $('#errorContrasena').text('Las contraseñas no coinciden');
      }
    });
  });




const defaultfile = 'avatar(2).png';

const file = document.getElementById('foto');
const img = document.getElementById('img');
file.addEventListener('change', e =>{
    if(e.target.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            img.src = e.target.result;
        }
       reader.readAsDataURL(e.target.files[0]);
    }else{
        img.src = defaultfile;
    }
});



