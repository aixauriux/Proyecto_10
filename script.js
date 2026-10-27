
// Seleccionar los botones y los contenidos
const botonesPestana = document.querySelectorAll(".boton-pestana");
const contenidosPestana = document.querySelectorAll(".contenido-pestana");

// Escuchar los clics de cada botón
botonesPestana.forEach(function(boton) {
    boton.addEventListener("click", function() {

        // Quitar la clase activa de todos los botones
        botonesPestana.forEach(function(elemento) {
            elemento.classList.remove("activa");
        });

        // Ocultar todos los contenidos
        contenidosPestana.forEach(function(contenido) {
            contenido.classList.remove("activo");
        });

        // Activar el botón seleccionado
        boton.classList.add("activa");

        // Mostrar el contenido seleccionado
        const pestanaSeleccionada = boton.getAttribute("data-pestana");

        document.getElementById(pestanaSeleccionada)
            .classList.add("activo");
    });
});
