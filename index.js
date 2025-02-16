//importação da biblioteca express
const express = require('express');
const path = require('path');
const session = require('express-session')
const middlewareGlobal = require('./middlewares/middlewareGlobal');
//Importando os roteadores
const FilmesRouter = require('./routers/FilmesRouter');
const AdmRouter = require("./routers/AdmRouter");
//criando um servidor
const servidor = express();

//Configuração do Template Engine
servidor.set('view engine', 'ejs');
// o engine que voce ira usar é o ejs

//configurando a parta public como contedora dos arquivos estáticos *precisa ser adicionada antes do filmes router
servidor.use(express.static(path.join(__dirname, 'public')));

servidor.use(session({ secret: "SEGREDO", saveUninitialized: false, resave: true }));

// põe as insformações do formulario req.body
servidor.use(express.urlencoded({ extended: false }));

servidor.use(middlewareGlobal);

//usando o FilmesRouter
servidor.use('/', FilmesRouter);
servidor.use('/', AdmRouter);
// o '/' identifica qual o roteador vai ser usado no arquivo FilmesRouter

servidor.listen(3000);







//informações sobre o res --> 
//tem o .get envia os dados para o bowser e precisa de dois parâmetros a rota o que deve fazer após. Uma solicitação e uma resposta;
//.post para criar informações;
//.sendFile que envia arquivos existentes;Utiliza o path para criar uma rota(ele precisa ser importado, em uma const); e usar o .join() para mostrar o caminho; __dirname é uma constante node.js que se refere ao diretório que está sendo executado.