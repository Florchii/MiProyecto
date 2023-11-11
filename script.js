console.log("El archivo JavaScript está vinculado");
// código JavaScript 

// alert de inicio 
let nombre = prompt("Por favor, ingresa tu nombre:", "Usuario");
alert("Hola, " + nombre + "!");

// Función cambiar el parrafo
function cambiarTexto() {
    let parrafo = document.getElementById("parrafoCambiante");
    parrafo.textContent = "Tipos de receta como Birria, Cochinita pibil, Conchas mexicanas, etc.";
  }
  