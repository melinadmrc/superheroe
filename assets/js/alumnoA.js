// Alumno A

// Variables
const nombreHeroe = "Iron Man";
const esVengador = true;

// Elementos del DOM
const nombre = document.getElementById("hero-nombre");
const equipo = document.getElementById("hero-equipo");
const boton = document.getElementById("btn-cargar");

// Evento
boton.addEventListener("click", function () {
    nombre.innerText = nombreHeroe;

    // Convertimos boolean a texto claro
    if (esVengador === true) {
        equipo.innerText = "Sí";
    } else {
        equipo.innerText = "No";
    }
});