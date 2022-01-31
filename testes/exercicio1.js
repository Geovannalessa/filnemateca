/**1) Dados o array numerosDasCasas = [5,10,20,23,34], escreva o comando que retorna o array somente com os pares;
 */
let numerosDasCasas = [5, 10, 20, 23, 34];
// let ehPar = nu => nu % 2 == 0;
let casasPares = numerosDasCasas.filter(nu => nu % 2 == 0);
console.log(casasPares);