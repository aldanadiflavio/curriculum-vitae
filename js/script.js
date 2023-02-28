// Obtener el enlace ancla
const enlaceAncla = document.getElementById("exp-laboral");

// Agregar un evento de clic al enlace ancla
enlaceAncla.addEventListener("click", function(event) {
  // Prevenir el comportamiento predeterminado del enlace ancla
  event.preventDefault();

  // Obtener el destino del enlace ancla
  const destino = this.getAttribute("href");

  // Desplazarse suavemente al destino
  document.querySelector(destino).scrollIntoView({
    behavior: "smooth"
  });
});