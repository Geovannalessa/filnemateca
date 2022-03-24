module.exports = {
    login: (req, res) => {
        console.log("modo adm ativado");
        res.render('login.ejs')
    }
}