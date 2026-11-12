/* Archivo extra no tenemos que usar en el proyecto, solo para cumplir la práctica */

function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

function sumar(a, b) {
    return a + b;
}

const frutas = ["manzana", "pera", "plátano", "naranja"];

frutas.forEach(function (fruta) {
    console.log("Fruta: " + fruta);
});

console.log(saludar("mundo"));
console.log("2 + 3 =", sumar(2, 3));