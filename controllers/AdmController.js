module.exports = {
    mostralogin: (req, res) => {
        res.render('login.ejs');
    },
    login: (req, res) => {
        //carregar o array de usuarios
        const usuarios = require("../database/usuarios.json");

        //capturar o email e a senha digitados pelo visitante
        let dados = req.body;
        res.send(dados);
        //verificar se usuario é cadastrado

        //procuro no array de ususarios se eciste algum com login e senha digitados

        //caso exista o usuario com o email e senha dados, retornar OK!
        //caso não exista, dar mensagem, "usuario inexistente"


        res.send('ola again aqui é a página msm de login')
    }
}