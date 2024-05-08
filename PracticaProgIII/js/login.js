const usuario = $('#inputUsuario');
const clave = $('#inputClave');

$('form').validate({
    rules : {
        usuario : {
            required : true
        },
        clave : {
            required : true
        }
    },
    messages : {
        usuario : {
            required : "Usuario requerido"
        },
        clave : {
            required : "Clave requerida"
        }
    },
    submitHandler : function(form) {
        if (usuario.val() == "tup2022@tup.com.ar" && clave.val() == "123456") {
            window.location.href = "altaPiloto.html";
        } else {
            alert("Usuario o clave incorrectos");
        }
    }
})