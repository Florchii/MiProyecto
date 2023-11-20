console.log("El archivo JavaScript está vinculado");
// código JavaScript 


// Función cambiar el parrafo
function cambiarTexto() {
    let parrafo = document.getElementById("parrafoCambiante");
    parrafo.textContent = " Birria, Cochinita pibil, Conchas mexicanas, etc.";
  }
  


  const EDAD_MINIMA = 18;
    let edad = prompt('Ingresa tu edad:');
    console.log('edad ingresada: ', edad);
   //edad en numero
    edad = parseInt(edad);

    if (isNaN(edad)) {
      alert('Por favor, ingresa una edad válida.');
    } else {
      if (edad < EDAD_MINIMA) {
        alert('Lo siento, eres menor de edad. No puedes acceder a esta página.');
        document.body.innerHTML = '<h1 style="color: red; background-color: white; padding: 50px; text-align:center;" >Acceso denegado</h1>';
      } else {
        alert('¡Bienvenido! Puedes acceder a esta página.');
      }
    }
    
  
