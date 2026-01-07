const oscuro = document.getElementById("dark-button");
const iconoOscuro = document.getElementById("icono-oscuro");
const iconoClaro = document.getElementById("icono-claro");


function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.classList.add("dark");
        iconoOscuro.style.display = "none";
        iconoClaro.style.display = "block";
    } else {
        document.body.classList.remove("dark");
        iconoOscuro.style.display = "block";
        iconoClaro.style.display = "none";
    }
}


const temaGuardado = localStorage.getItem("tema");
if (temaGuardado) {
    aplicarTema(temaGuardado);
} else {
    const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    aplicarTema(sistemaOscuro ? "dark" : "light");
}


oscuro.addEventListener("click", function () {
    const temaActual = document.body.classList.contains("dark") ? "dark" : "light";
    const nuevoTema = temaActual === "dark" ? "light" : "dark";
    aplicarTema(nuevoTema);
    localStorage.setItem("tema", nuevoTema);
});