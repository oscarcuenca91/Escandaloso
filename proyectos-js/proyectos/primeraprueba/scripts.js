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
