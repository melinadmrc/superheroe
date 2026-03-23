// Alumno A

const nombreHeroe = "Iron Man";
const esVengador = true;

const nombre = document.getElementById("hero-nombre");
const equipo = document.getElementById("hero-equipo");
const botonA = document.getElementById("btn-cargar");

botonA.addEventListener("click", function () {
    nombre.innerText = nombreHeroe;

    if (esVengador === true) {
        equipo.innerText = "Sí";
    } else {
        equipo.innerText = "No";
    }
});