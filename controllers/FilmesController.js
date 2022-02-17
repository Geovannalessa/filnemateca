const FilmesController = {
    index: (req, res) => {
        console.log('pergunta.. uau arigato');
        res.send('resposta.. nn me abandone me teste again later :)');
    },
    listarFilmes: (req, res) => {
        console.log('listando filmes..');
        const filmes = require('../database/filmes.json');
        res.send(filmes);
    },
    buscarPorTrecho: (req, res) => {
        console.log('usando o servidor busca..');

        // 1: Salvar o trecho buscado na variável 'trecho';
        let trecho = req.params.trecho;

        // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'

        const filmes = require('../database/filmes.json');

        // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo. => (lembrem da função filmes.filter)

        const filmesTitulo = filmes.filter(function(valorDaBusca) {
                return valorDaBusca.titulo.includes(trecho);
            }).
            //nesta constante eu fiz com que o cliente que digita-se qualquer coisa na barra de pesquisa retornasse os nomes dos titulos conrrespondentes. e como?
            //na contaste eu fiz com que recebe-se todos filmes só que ultilizando o filter com uma função recebendo como parametro um nome que vai ser por onde a funçao vai funcionar, e fiz com q retorna-se o parametro+todos os títulos dos filmes mas apenas as letras que o cliente for digitar na barra de pesquisa

        // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
        res.send(filmesTitulo)

        // res.send(req.params.trecho);
    },
    buscarPorGenero: (req, res) => {
        console.log('servidor gêneros está sendo usado! ;)');
        let trechoGeneros = req.params.trechoGeneros;
        const filmes = require('../database/filmes.json');
        const filmesGeneros = filmes.filter((genero) => genero.generos.includes(trechoGeneros))
        res.send(filmesGeneros);
    },
    buscarPelaPosicao: (req, res) => {
        console.log('esta sendo usado posição de um filme (ºoº)')
            //capturei a posição do filme desejado
        let posicao = req.params.posicao;

        //carregar o array de filmes 
        const filmes = require('../database/filmes.json');

        //enviar  
        let filme = filmes[posicao];
        res.render('filme.ejs', { filme });
        //res.render vai enviar a view, usando primeiro o arquivo que ira enviar. e passa para a pos
    },
    buscarPorId: (req, res) => {
        console.log('servidor de busca por id está funcionando.....');
        let trechoId = req.params.trechoId;
        const filmes = require('../database/filmes.json');
        const filmesId = filmes.filter(function(idFilme) {
            return idFilme.id.includes(trechoId)
        })
        res.send(filmesId)
    },
}
module.exports = FilmesController;
// função listarFilmes
// função pelaPosição
// função buscarPorTrecho
// função buscarPorId 
// função buscarPorGenero