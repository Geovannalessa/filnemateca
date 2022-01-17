const filmes = require('../database/filmes.json');
const uniqid = require('uniqid');
const fs = require('fs');

// let f = filmes[3]
// console.log(f.titulo)
// console.log(f.generos[0], f.id);
const services = {
    listar: function() {
        return filmes;
    },
    getTitulos: function() {
        let titulos = [];
        for (let f of filmes) {
            // console.log(f.titulo);
            titulos.push(f.titulo)
        }
        return titulos;
    },
    create: function(cartaz, titulo, censura, trailer, sinopse) {
        //1: gerar o id do novo filme;
        let id = uniqid();

        //2: criar um objeto literal com as informações do novo filme;
        let novoFilme = {
                id,
                cartaz,
                titulo,
                generos,
                censura,
                trailer,
                sinopse
            }
            //3: adicionar o objeto criado ao array de filmes;
        filmes.push(novoFilme);
        //4: salvar o conteúdo do array filmes no arquivo filmes.json.
        fs.writeFileSync(__dirname + '/../database/filmes.json', JSON.stringify(filme, null, 4))
    },
    apagar: function() {},
    editar: function() {}
};
services.create(
        "Miranha.jpg",
        "Homem Aranha: Sem Volta para Casa",
        10,
        "http://youy",
        "Sinopse do filme que dizem que é bom", ["Ação", "Ficção", "Comédia"]
    )
    // console.log(services.getTitulos());
    // module.exports = services;