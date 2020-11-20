const sql = require('mssql');

const dbConfig = {
    user: 'usuariorv',
    password: '123456',
    server: 'localhost',
    database: 'MIGRADEV'
};

exports.cadastrar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        const resultado = await conexao.request()
            .input('nome', sql.VarChar, req.body.nome)
            .input('descricao', sql.VarChar, req.body.descricao)
            .query('insert into TB_PRODUTO (NOME,DESCRICAO) values (@nome, @descricao)')
        res.send(201, "Produto Cadastrado!!")
    } catch (error) {
        res.send(400, error.message)

    }
}