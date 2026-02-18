const encabezado = document.getElementById("encabezado");
const animaciones = document.getElementById("animaciones");
const contacto = document.getElementById("contacto");
const formulario = document.getElementById("targeta-contacto");
const salida = document.getElementById("salida");
const darkButton = document.getElementById('dark-button');
const iconoOscuro = document.getElementById('icono-oscuro');
const iconoClaro = document.getElementById('icono-claro');

// Scroll header
let posicion = 100;
window.addEventListener("scroll", function() {
    encabezado.classList.toggle("scrolled", window.scrollY > posicion);
});

// Reveal sections with IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const revealEls = document.querySelectorAll('main section, .proyecto1, .demostracion-skills');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if(e.isIntersecting){
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.15 });
    revealEls.forEach(el => { el.classList.add('reveal'); obs.observe(el); });
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

// Dark mode: persist in localStorage
function setDarkMode(active){
    if(active){
        document.body.classList.add('dark');
        localStorage.setItem('darkMode','1');
        if(iconoOscuro) iconoOscuro.style.display='none';
        if(iconoClaro) iconoClaro.style.display='inline-block';
    } else {
        document.body.classList.remove('dark');
        localStorage.removeItem('darkMode');
        if(iconoOscuro) iconoOscuro.style.display='inline-block';
        if(iconoClaro) iconoClaro.style.display='none';
    }
}

if(localStorage.getItem('darkMode')) setDarkMode(true);

if(darkButton){
    darkButton.addEventListener('click', () => {
        const active = document.body.classList.toggle('dark');
        setDarkMode(active);
    });
}

// Contact modal
if(contacto){
  contacto.addEventListener("click", function(e) {
    e.preventDefault && e.preventDefault();
    if (!formulario) return;
    if (formulario.open) {
        formulario.close();
        document.body.style.overflow = 'auto';
    } else {
        formulario.showModal();
        document.body.style.overflow = 'hidden';
        formulario.querySelector('a, button, input')?.focus();
    }
  });
}

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

// Close dialog with Escape key
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && formulario && formulario.open){
        formulario.close();
        document.body.style.overflow = 'auto';
    }
});