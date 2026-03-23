// Alumno B

// Arreglo de poderes
const poderes = ["Vuelo", "Fuerza", "Telepatía"];

// Elementos del DOM
const poder = document.getElementById("hero-poder");
const boton = document.getElementById("btn-cargar");

// Evento
boton.addEventListener("click", function () {
    // Último elemento del arreglo
    const ultimoPoder = poderes[poderes.length - 1];

    poder.innerText = ultimoPoder;
});