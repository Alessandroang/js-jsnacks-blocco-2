// Genero un numero casuale compreso tra 1 e 100

const numeroCasuale = Math.floor(Math.random() * 100) + 1;
// console.log(numeroCasuale);

// Verifico se il numero è pari o dispari

if (numeroCasuale % 2 == 0) {
  // Il numero è pari quindi lo stampo
  console.log(numeroCasuale);
} else {
  // Il numero è dispari quindi stampo quello successivo
  console.log(numeroCasuale + 1);
}
