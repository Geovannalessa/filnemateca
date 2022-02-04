//importação da biblioteca express
const { response } = require('express');
const express = require('express');
const { path } = require('express/lib/application');


//criando um servidor
const servidor = express();

//criando as rotas do servidor 
servidor.get('/', (req, res) => {
    console.log('Alguém fez uma requisição.. uau arigato');
    res.send('Está aí o que você queria.. nn me abandone me teste again later :)')
})
servidor.get('/generos', (req, res) => {
    console.log('servidor de generos funcionando..');
    res.send('ola aqui ainda nn tem nenhum gêneros hehe');
})
servidor.get('/filme/:posicao', (req, res) => {
    console.log('esta sendo usado')
        //capturei a posiça~o do filme desejado
    let posicao = req.params.posicao;

    //carregar o array de filmes 
    const filmes = require('./database/filmes.json');

    //enviar para o cliente o filme da posicao desejada
    res.send(filmes[posicao])
})
servidor.get('/buscar/:trecho', (req, res) => {
    console.log('usando o servidor busca..');

    // 1: Salvar o trecho buscado na variável 'trecho';
    let trecho = req.params.trecho;

    // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'

    const filmes = require('./database/filmes.json');

    // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo. => (lembrem da função filmes.filter)

    const filmesTitulo = filmes.filter(function(valorDaBusca) {
            return valorDaBusca.titulo.includes(trecho);
        })
        //nesta constante eu fiz com que o cliente que digita-se qualquer coisa na barra de pesquisa retornasse os nomes dos titulos conrrespondentes. e como?
        //na contaste eu fiz com que recebe-se todos filmes só que ultilizando o filter com uma função recebendo como parametro um nome que vai ser por onde a funçao vai funcionar, e fiz com q retorna-se o parametro+todos os títulos dos filmes mas apenas as letras que o cliente for digitar na barra de pesquisa

    // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
    res.send(filmesTitulo)

    // res.send(req.params.trecho);
})
servidor.get('/buscarid/:trechoId', (req, res) => {
    console.log('servidor de busca por id está funcionando.....');
    let trechoId = req.params.trechoId;
    const filmes = require('./database/filmes.json');
    const filmesId = filmes.filter(function(idFilme) {
        return idFilme.id.includes(trechoId)
    })
    res.send(filmesId)
});
servidor.get('/buscargeneros/:trechoGeneros', (req, res) => {
    console.log('servidor gêneros está sendo usado! ;)');
    let trechoGeneros = req.params.trechoGeneros;
    const filmes = require('./database/filmes.json');
    const filmesGeneros = filmes.filter((genero) => genero.generos.includes(trechoGeneros))
    res.send(filmesGeneros);
})
servidor.listen(3000);
//como colocar a sinopse de todos os filmes?

// function paraBuscarTitulo(filme) {
//     if (filme.titulo.includes(trecho)) {
//         return true;
//     } else {
//         return false;
//     }
// }







//informações sobre o res --> 
//tem o .get envia os dados para o bowser e precisa de dois parâmetros a rota o que deve fazer após. Uma solicitação e uma resposta;
//.post para criar informações;
//.sendFile que envia arquivos existentes;Utiliza o path para criar uma rota(ele precisa ser importado, em uma const); e usar o .join() para mostrar o caminho; __dirname é uma constante node.js que se refere ao diretório que está sendo executado.