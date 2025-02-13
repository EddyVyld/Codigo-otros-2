/* Cambie todas las declaraciones que iniciaban con var por let */
/* Casi ninguna declaracion tiene ; y se las agregue */

const formulario = document.querySelector("form"); // IMPORTANTE: Quite # para que coincida con la clase del documento HTML

formulario.onsubmit = function(e) {

  e.preventDefault(); // prevent no existe, es preventDefault despues del evento
  
  let name = formulario.elements[0];  // Lo recomendable es utilizar un nombre especifico, de "n" paso a name
  let age = formulario.elements[1]; // Mismo caso, "e" lo cambie por age
  let nationality = formulario.elements[2]; // "na" lo cambie por nationality 

  // A partir de aqui modifique las variables de las declaraciones aqui abajo

  let nombre = name.value;
  let edad = age.value;

  let i = nationality.selectedIndex;
  let nacionalidad = nationality.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    name.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error");
  }

if (nombre.length > 0 
  && (edad >= 18       // Agregue mayor o igual a 18 para que no se les excluya
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad); 
  }
}

/* let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";

let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar); */

/* Se repite borrar aqui abajo dentro de la funcion y este borrar no funcionaba porque fuera de la funcion */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

let lista = document.getElementById("lista-de-invitados");

let elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");// Cambie el .added por .add
lista.appendChild(elementoLista);

/* let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")

spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 

elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio) */

/* Lo de arriba se repetia aqui abajo, pero de diferente forma */

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span");
let inputNombre = document.createElement("input");
let espacio = document.createElement("br");

spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;;

elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";  

let corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}  