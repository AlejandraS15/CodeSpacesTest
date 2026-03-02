// juego.js
 
function verificarIntento(secreto, intento) {
    if (typeof intento !== 'number' || isNaN(intento)) {
        throw new Error("El intento debe ser un número");
    }
    if (intento < 1 || intento > 100) {
        throw new Error("El número debe estar entre 1 y 100");
    }
    if (intento < secreto) return "mayor";
    if (intento > secreto) return "menor";
    return "correcto";
}
 
function calcularPuntaje(intentos) {
    if (intentos <= 3) return 100;
    if (intentos <= 6) return 75;
    if (intentos <= 10) return 50;
    return 25;
}
 
module.exports = { verificarIntento, calcularPuntaje };
