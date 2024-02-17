//import sumar from "./sumador";

import saludar from "./saludar";
import sayHello from "./sayHello";
const nombre_input = document.querySelector("#nombre");
const edad_input=document.querySelector("#edad");
const genero_input=document.querySelector("#genero");
const idioma_input=document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad=edad_input.value;
  const genero=genero_input.value;
  const idioma=idioma_input.value;
  var fechaHoraActual = new Date();
  var opciones = { timeZone: 'America/La_Paz' }; 
  var horaCochabamba = fechaHoraActual.toLocaleTimeString('es-BO', opciones);
  if(idioma=="ingles")
  {
    div.innerHTML = "<p> Hello, " +  sayHello(nombre,edad,genero,horaCochabamba,idioma)+"</p>";
  }
  else{
    div.innerHTML = "<p> Hola, " +  saludar(nombre,edad,genero,horaCochabamba,idioma)+"</p>";
  }
 
});
