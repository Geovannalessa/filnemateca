// 2) Dados o array saldos = [10,100,22,25,34], escreva o comando que retorna o array somente com os múltiplos de 5;

let saldos = [10, 100, 22, 25, 34];
let multCinco = (n) => {
    return n % 5 == 0
}
console.log(saldos.filter(multCinco));