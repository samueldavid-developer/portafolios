const encabezado = document.getElementById("encabezado");
const animaciones = document.getElementById("animaciones");
const contacto = document.getElementById("contacto");
const formulario = document.getElementById("targeta-contacto");
const salida = document.getElementById("salida");

// Scroll header
let posicion = 100;
window.addEventListener("scroll", function() {
    encabezado.classList.toggle("scrolled", window.scrollY > posicion);
});

// Color animation
let colors = ["#457b9d", "#9d4edd", "#ffbf69"];
let contador = 0;
document.addEventListener('DOMContentLoaded', function() {
    animaciones.style.color = colors[0];
    setInterval(() => {
        contador = (contador + 1) % colors.length;
        animaciones.style.color = colors[contador];
    }, 2000);
});

// Contact modal
contacto.addEventListener("click", function() {
    if (formulario.open) {
        formulario.close();
        document.body.style.overflow = 'auto';
    } else {
        formulario.showModal();
        document.body.style.overflow = 'hidden';
    }
});

salida.addEventListener("click", function() {
    formulario.close();
    document.body.style.overflow = 'auto';
});

formulario.addEventListener("click", function(e) {
    if (e.target === formulario) {
        formulario.close();
        document.body.style.overflow = 'auto';
    }
});