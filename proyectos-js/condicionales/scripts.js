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
