// juego.test.js
const { verificarIntento, calcularPuntaje } = require("./juego");

// ── verificarIntento ──────────────────────────────────────
test("intento correcto", () => {
  expect(verificarIntento(42, 42)).toBe("correcto");
});

test("intento es muy bajo, pista dice mayor", () => {
  expect(verificarIntento(50, 20)).toBe("mayor"); // Example: secret number is 50, guess is 20
});

test("intento es muy alto, pista dice menor", () => {
  expect(verificarIntento(50, 80)).toBe("menor"); // Example: secret number is 50, guess is 80
});

test("intento fuera de rango lanza excepción", () => {
  expect(() => verificarIntento(50, 102)).toThrow(
    "El número debe estar entre 1 y 100",
  );
});

test("intento no numérico lanza excepción", () => {
  expect(() => verificarIntento(50, "x")).toThrow(
    "El intento debe ser un número",
  );
});

// ── calcularPuntaje
test("3 intentos o menos dan puntaje 100", () => {
  expect(calcularPuntaje(3)).toBe(100); // Example: 3 attempts
});

test("entre 4 y 6 intentos dan puntaje 75", () => {
  expect(calcularPuntaje(4)).toBe(75); // Example: 4 attempts
  expect(calcularPuntaje(5)).toBe(75); // Example: 5 attempts
  expect(calcularPuntaje(6)).toBe(75); // Example: 6 attempts
});

test("entre 7 y 10 intentos dan puntaje 50", () => {
  expect(calcularPuntaje(7)).toBe(50); // Example: 7 attempts
  expect(calcularPuntaje(8)).toBe(50); // Example: 8 attempts
  expect(calcularPuntaje(9)).toBe(50); // Example: 9 attempts
  expect(calcularPuntaje(10)).toBe(50); // Example: 10 attempts
});

test("más de 10 intentos dan puntaje 25", () => {
  expect(calcularPuntaje(11)).toBe(25); // Example: 11 attempts
  expect(calcularPuntaje(15)).toBe(25); // Example: 15 attempts
});