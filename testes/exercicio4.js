//4) Dados o array pessoas = [

// escreva o comando que retorna todas pessoas com salário maior que 8000.
var pessoas = [{
        nome: "Natália",
        salario: 15000
    },
    {
        nome: "Sérgio Moura",
        salario: 13000
    },
    {
        nome: "Silvia",
        salario: 10000
    },
    {
        nome: "João",
        salario: 8000
    }
];
// let salarioMaior = (salar) => {
//     return salar.salario > 8000;
// };
console.log(pessoas.filter(salar => salar.salario > 8000))