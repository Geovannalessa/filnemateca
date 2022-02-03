const numeros = [2, 6, 7, 10, 25, 17, 6, 18, 100, 20];

//exibir os número que são maiores ou iguais a 20.
// Escreva uma função que recebe um número como
// parâmetro e retorna true se o número for maior 20
// e false caso contrário

//let maiorQueVinte = nu => nu > 20 ? true : false;
//ou return nu > 20; // ou nu > 20;

// let filtrados = numeros.filter(maiorQueVinte);
let filtrados = numeros.filter(nu => nu > 20);
console.log(filtrados);
//filter está usando a função em dentro dela e aplicando no array de numero para achar os numeros
//**************************************************************************/