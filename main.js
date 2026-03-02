// main.js
const readline = require('readline');
const { verificarIntento, calcularPuntaje } = require('./juego');
 
const secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
function preguntar() {
    rl.question('Adivina el número (1-100): ', (respuesta) => {
        const intento = Number(respuesta);
        intentos++;
        try {
            const resultado = verificarIntento(secreto, intento);
            if (resultado === 'correcto') {
                const puntaje = calcularPuntaje(intentos);
                console.log(`¡Correcto! Intentos: ${intentos}. Puntaje: ${puntaje}`);
                rl.close();
            } else {
                console.log(`Pista: el número es ${resultado}`);
                preguntar();
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            preguntar();
        }
    });
}
 
preguntar();
