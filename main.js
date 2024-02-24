// document.addEventListener('DOMContentLoaded', function () {
//   const formulario = document.querySelector('form');

//   formulario.addEventListener('submit', function (event) {
//     //validación para el número de ficha
//     const ficha = document.getElementById('ficha');
//     if (!ficha.value.trim()) {
//       alert('Por favor, ingresa el número de ficha.');
//       event.preventDefault();
//       return;
//     }

//     //validación para el nombre
//     const nombre = document.getElementById('nombre');
//     if (!nombre.value.trim()) {
//       alert('Por favor, ingresa el nombre.');
//       event.preventDefault();
//       return;
//     }
//     if (!/^[a-zA-Z]+$/.test(nombre.value.trim())) {
//       alert('El nombre solo debe contener letras.');
//       event.preventDefault();
//       return;
//     }

//     //validación para el apellido
//     const apellido = document.getElementById('apellido');
//     if (!apellido.value.trim()) {
//       alert('Por favor, ingresa el apellido.');
//       event.preventDefault();
//       return;
//     }
//     if (!/^[a-zA-Z]+$/.test(apellido.value.trim())) {
//       alert('El apellido solo debe contener letras.');
//       event.preventDefault();
//       return;
//     }

//     //validación para el correo electrónico
//     const correo = document.getElementById('correo');
//     if (!correot.value.trim()) {
//       alert('Por favor, ingresa el correo electrónico.');
//       event.preventDefault();
//       return;
//     }
//     if (!correo.checkValidity()) {
//       alert('Por favor, ingresa un correo electrónico válido.');
//       event.preventDefault();
//       return;
//     }

//     //validación para el teléfono
//     const telefono = document.getElementById('télefono');
//     if (!telefono.value.trim()) {
//       alert('Por favor, ingresa el número de teléfono.');
//       event.preventDefault();
//       return;
//     }
//     if (!/^\d{10}$/.test(telefono.value.trim())) {
//       alert('El número de teléfono debe contener exactamente 10 dígitos.');
//       event.preventDefault();
//       return;
//     }
//   });
// });

//capturar las variables
const ficha = document.getElementById("ficha")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")

//expresiones regulares
let cod = "^[a-z]{3}_[0-9]{5}$"; // let permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando, no es global

//validar la ficha 

const validar = function () {
  let texto = ficha.value
  console.log(texto);

  if (texto.match(cod) != null) { // != siginifica desigualdad 
    alert("valido")               // y match devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
  } else {
    alert("invalido")
  }
}

ficha.addEventListener("blur", validar)


