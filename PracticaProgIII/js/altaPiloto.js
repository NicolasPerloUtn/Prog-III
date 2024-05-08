$('form').validate({
    containerErrors : '#containerErrors',
    errorLabelContainer : '#containerErrors',
    wrapper : 'li',
    rules : {
        nombre : {
            required : true,
            maxlength : 30
        },
        apellido : {
            required : true,
            maxlength : 30
        },
        cantHoras : {
            required : true,
            min : 50
        },
        radio : {
            required : true
        },
        nacionalidad : {
            required : true
        }
    },
    messages : {
        nombre : {
            required : "Nombre requerido",
            maxlength : "El maximo es 30 caracteres"
        },
        apellido : {
            required : "Apellido requerido",
            maxlength : "El maximo es 30 caracteres"
        },
        cantHoras : {
            required : "Cantidad de horas requerido",
            min : "Como minimo 50 horas"
        },
        radio : {
            required : "Tipo vuelo requerido"
        },
        nacionalidad : {
            required : "Nacionalidad requerida"
        }
    },
    submitHandler : function(form) {
        alert('Formulario enviado correctamente');
    }
})

