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
    //por o servidor para 'ouvir' as requisiçoes
servidor.get('/filme', (req, res) => {
    console.log('outro servidor filme sendo usado..');
    res.send("Meu último filme q vi foi o primeiro Mortal Kombat ;3")
})
servidor.get('/generos', (req, res) => {
    console.log('servidor de generos funcionando..');
    res.send('ola aqui ainda nn tem nenhum gêneros hehe');
})
servidor.listen(3000);


//informações sobre o res --> 
//tem o .get envia os dados para o bowser e precisa de dois parâmetros uma solicitação e uma resposta;
//.post para criar informações;
//.sendFile que envia arquivos existentes;Utiliza o path para criar uma rota(ele precisa ser importado, em uma const); e usar o .join() para mostrar o caminho; __dirname é uma constante node.js que se refere ao diretório que está sendo executado.