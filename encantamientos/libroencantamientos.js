//Encantamientos
//Encantamiento de reescritura, quita las letras que uno quiera y reescribe la palabra, en este caso quita la a, o mejor dicho, se la salta, podria utilizarla para quitar los espacios de una palabra, o seleccionar las letras que yo quiera

function seleccionarCaracter(palabra, letra) {
  let resultado = " ";
  for (let key in palabra) {
    if (palabra[key] == letra) {
      continue;
    } else {
      resultado += palabra[key];
    }
  }
  document.write(resultado);
}
//Ejemplo
let letraa = "Hola a todos";
seleccionarCaracter(letraa, "a");

//------------------------------------------------------
// saber cuantas vocales

function seleccionadorVocales(palabra) {
  let vocal = 0;
  for (let key in palabra) {
    if (
      palabra[key] == "a" ||
      palabra[key] == "e" ||
      palabra[key] == "i" ||
      palabra[key] == "o" ||
      palabra[key] == "u"
    ) {
      vocal++;
    }
  }
  document.write("Cantidad de vocales " + vocal);
}

//Ejemplo
let cuantasVocales = "Cuantas vocales tienes";
seleccionadorVocales(cuantasVocales);
//-----------------------------------------------------------------------

//Crear persona, ejemplo POO
class Persona {
  nombre = "Homero";
  apellido = "Simpson";
  direccion = "Ave. Siempreviva 742";
  telefono = 5553472;
  email = "nomejodas@hotmail.com";

  trabajar() {
    return "Trabaja en la planta nuclear";
  }
  estudiar() {
    return "Primaria de Springfield";
  }
}

const homero = new Persona();
//Ecantamiento de tiempo jajajajajajaja

//Trae la fecha actual
let fecha = new Date();
document.write(fecha.getDay() + fecha.getHours);
