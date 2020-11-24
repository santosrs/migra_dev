const { request } = require('https');
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
};

exports.deletar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        let idProduto = req.params.id;
        let produtoEncontrado = await conexao.request()
            .input('id', idProduto)
            .query('select * from TB_PRODUTO where ID = @id');
        if (produtoEncontrado.recordset.length == 0) {
            res.send("Produto não encontrado!!");
        } else {
            let Produto = await conexao.request()
                .input('id', idProduto)
                .query('delete from TB_PRODUTO WHERE ID = @id');
            res.send("Produto Deletado!!");
        }

    } catch (error) {
        res.send(400, error.message)
    }

};

exports.atualizar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        let idProduto = req.body.id;
        let ProdutosEncontrado = await conexao.request()
            .input('id', idProduto)
            .query('select * from TB_PRODUTO where ID = @id');
        if (ProdutosEncontrado.recordset.length == 0) {
            res.send('Produto não Encontrado!!');
        } else {
            let Produtos = await conexao.request()
                .input('id', idProduto)
                .input('nome', sql.VarChar, req.body.nome)
                .input('descricao', sql.VarChar, req.body.descricao)
                .query('update TB_PRODUTO SET NOME = coalesce(@nome,NOME) , DESCRICAO = COALESCE(@descricao,DESCRICAO)  where ID = @id');
            res.send("Produto Atualizado!!");
        }
    } catch (error) {
        res.send(400, error.message)
    }
};

exports.listar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        let listarproduto = await conexao.request()
            .query('SELECT * FROM TB_PRODUTO');
        res.send(listarproduto.recordsets);

    } catch (error) {
        res.send(400, error.message)
    }

};


exports.buscar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        let idProduto = req.params.id;
        let buscarproduto = await conexao.request()
            .input('id', idProduto)
            .query('SELECT * FROM TB_PRODUTO WHERE ID = @id')

        if (buscarproduto.recordset.length == 0) {
            res.send("Usuário não encontrado");
        } else {
            res.send(buscarproduto.recordsets);
        }

    } catch (error) {
        res.send(400, error.message)
    }
};