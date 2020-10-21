const sql = require('mssql');

const dbConfig = {
    user: 'usuariorv',
    password: '123456',
    server: 'localhost',
    database: 'migra_dev'

};
exports.cadastrar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);

        const resultado = await conexao.request()
            .input('nome', sql.VarChar, req.body.nome) // binding
            .query('insert into produto (nome) values (@nome)');


        res.send(resultado)
    } catch (erro) {
        console.log(erro.message);
    }
};

exports.buscar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);

        const resultado = await conexao.request()

        .query('select * from produto');


        res.send(resultado)
    } catch (erro) {
        console.log(erro.message);
    }
};