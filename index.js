let username = prompt("Ingrese un nombre de usuario");
let nombre = prompt("Ingrese su nombre :");
let apellido = prompt("Ingrese su apellido :");
let edad = prompt("Ingrese su edad :");
let ciudad = prompt(" Ingrese la ciudad en donde come empanadas :");
let empanadas = parseInt(prompt("Ingrese la cantidad de empanadas que come :"));
let pizza = parseInt(prompt("Ingrese la cantidad de pizza que come :"));

// otra opción let empanadas = parseInt( prompt("Ingrese la cantidad de empanadas:" );

let cantidadMascotas = empanadas + pizza;
let nombreCompleto = nombre + " " + apellido;
alert("Gracias por registrarse " + username + ". Su nombre es " + nombreCompleto + ". Tiene " + edad + " y es de "
 + ciudad + " . La cantidad de dinero que gasta en comer empanadas " + cantidadPlata);