const filmes = require('../database/filmes.json');
const fs = require('fs');


const services = {
    listarTodos:() =>  {
        return filmes;
    },
    carregarPeloId: (id) =>{
        let filme = filmes.find(f => f.id == id);
        if(filme === undefined){
            throw(`Filme inexistente`)
        }
        return filme;
    },
    buscar: (trecho) => {
        let encontrados = filmes.filter(
            f => f.titulo.toUpperCase().includes(trecho.toUpperCase())
        )
        return encontrados;
    },
    salvar: () => {
        fs.writeFileSync(`${__dirname}/../database/filmes.json`, JSON.stringify(filmes,null,4))
    },
    adicionar: filme => {
        filmes.push(filme);
        services.salvar();
    }
}

module.exports = services;