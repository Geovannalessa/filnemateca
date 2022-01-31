//3) Dados o array nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo"], escreva o comando que retorna um array somente com nomes com mais de 5 caracteres.
var nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo"];
// var maiorQueCinco = palavra => palavra.length > 5;
console.log(nomes.filter(palavra => palavra.length > 5));