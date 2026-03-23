// Alumno B

const poderes = ["Vuelo", "Fuerza", "Telepatía"];

const poder = document.getElementById("hero-poder");
const botonB = document.getElementById("btn-cargar");

botonB.addEventListener("click", function () {
    poder.innerText = poderes[2];
});