//intento de validacion de un correo

const email = document.getElementById("correo");

email.addEventListener("input", function (blur) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "Por favor ingrese una direccion de correo"
    );
  } else {
    email.setCustomValidity("");
  }
});