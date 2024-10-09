let palabra = "JavaScript";
let resultado = " ";

for (let key in palabra) {
  if (palabra[key] == "a") {
    continue;
  } else {
    resultado += palabra[key];
  }
}
document.write(resultado);
document.write("<br>");

function nombreSaludo() {
  let nombre = prompt("Ingresa tu nombre");
  document.write("Hola " + nombre);
}

document.write("<br>");

function sumarNumeros(n1, n2) {
  n1 = parseInt(prompt("Ingrese el número 1"));
  n2 = parseInt(prompt("Ingese el número2"));
  return n1 + n2;
}
