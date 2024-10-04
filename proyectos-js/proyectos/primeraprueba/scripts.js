//Con esto empezaremos las Katas

let palabra = "JavaScript";
document.write(" <br>");
document.write("La palabra es: ", palabra);
document.write(" <br>");
//ver tamaño de un texto
document.write("Cantidad de letras: " + palabra.length);
document.write(" <br>");
//ver cantidad los carácteres dentro de un rango
document.write("vista de letras: " + palabra.substring(0, 4));
document.write(" <br>");
// Cambiar valores en un texto
let saludo = "Hola a todos";
//Reemplazar valores por otros
saludo = saludo.replace("Hola", "adios");
document.write(saludo);

//Poner en mayusculas
//Tambien se puede concatenar con ,
document.write("Cambio a mayusculas ", palabra.toUpperCase());

document.write(" <br>");
//Poner en minusculas
document.write("Cambio a minusculas ", palabra.toLowerCase());
document.write(" <br>");

//Unir dos palabras
let palabra2 = "Curso de ";
document.write("Unir dos palabras ", palabra2.concat(palabra));

document.write(" <br>");
//acortar espacio entre texto
let palabra3 = "     Hola    es       esta  vaina    ";
document.write(palabra3.trimStart()); //espacios a la derecha
document.write(palabra3.trimEnd()); //espacios a la izquierda
document.write(palabra3.trim()); //espacios a ambos lados

//Cortar cantidad de carácteres de una palabra
document.write(" <br>");
document.write(palabra.split("Script")); //Corta del texto la palabra indicada
//////////////////////////////////////////////////
document.write(" <br>");
document.write(" <br>");
//Declaracion de un array
let numeros = [];
numeros = [15, 80, 650, 50.3, -10];

document.write(numeros[0]);
document.write(" <br>");
document.write(numeros[1]);
document.write(" <br>");
document.write(numeros);
document.write(" <br>");

//ver todo el arreglo
for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  document.write(element + ", ");
}
document.write(" <br>");
//cambiar por cualquier elemento del array, ejemplo
numeros[0] = 14;
document.write(numeros[0]);
document.write(" <br>");
let frutas = ["Manzana", "Peras", "Limon"];
document.write(frutas);
document.write(" <br>");
//Métodos de los arrays
//ver cantidad de elementos
document.write("Cantidad " + frutas.length);
document.write(" <br>");
//Saber el ultimo elemento del array
document.write("ultimo elemento del array ", frutas[frutas.length - 1]);
document.write(" <br>");
//convertir array numeros a texto
document.write("convertir en texto", numeros.toString());
document.write(" <br>");
//Unir tipos de arrays
let letras = ["a", "b", "c"];
let numeros2 = [1, 2, 3];
document.write("Unir arreglos, alfanumérico ", letras.concat(numeros2));
document.write(" <br>");
//Borrar el ultimo elemento del array
let numeros3 = [1, 2, 3];
numeros3.pop();
document.write(numeros3);
document.write(" <br>");
//agregar elemento al final del array
numeros3.push(3);
document.write(numeros3);
document.write(" <br>");
//Eliminar primer elemento
numeros3.shift();
document.write(numeros3);
document.write(" <br>");
//Insertar elemnto al inicio
numeros3.unshift(1);
document.write(numeros3);
document.write(" <br>");
//Eliminar elementos a partir de una ubicación
numeros3.splice(2, 1); //el segundo número es cuantos elementos debe eliminar
document.write(numeros3);
document.write(" <br>");
numeros3.push(3);
document.write(numeros3);
document.write(" <br>");
//Copiar un array
let cantidades = [100, 200, 500, 300];
let copia = cantidades.slice(0, 3); //de que a que posición
document.write(copia);
document.write(" <br>");
//Organizar alfabéticamente el array
document.write(frutas.sort());
document.write(" <br>");
//Ver arrays en reversa
document.write(cantidades.reverse());
document.write(" <br>");
//
