const sql = require('mssql');

const dbConfig = {
    user: 'usuariorv',
    password: '123456',
    server: 'localhost',
    database: 'MIGRADEV'

};

const moment = require("moment");
const axios = require("axios");
const config = require("./api_config.js");
const { model } = require("./api_model");




exports.cadastrar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        await conexao.request()
            .input('nome', sql.VarChar, req.body.nome)
            .input('email', sql.VarChar, req.body.email)
            .input('senha', sql.VarChar, req.body.senha)
            .query('insert into TB_USUARIO(NOME,EMAIL,SENHA) VALUES(@nome, @email, @senha)')

        //CADASTRAR NO BANCO DE DADOS
        res.send(201, "Usuario cadastrado!!");
    } catch (error) {
        res.send(400, { status: false, error_code: 400, message: error.message });
    }
};

exports.listar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        let usuarios = await conexao.request().query('SELECT * FROM TB_USUARIO');
        //iremos buscar os usuarios cadastrados do banco


        res.send(usuarios.recordsets);
    } catch (error) {
        res.send(400, { status: false, error_code: 400, message: error.message });
    }
};

exports.buscar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        let idUsuario = req.params.id;
        let usuario = await conexao.request().input('id', idUsuario).query('select * from TB_USUARIO WHERE ID = @id');
        console.log(usuario)
        if (usuario.recordset.length == 0) {
            res.send("Usuário não encontrado");
        } else {
            res.send(usuario.recordsets);
        }
    } catch (error) {
        res.send(400, { status: false, error_code: 400, message: error.message });

    }
};

exports.deletar = async function(req, res, next) {
    try {
        const conexao = await sql.connect(dbConfig);
        let idUsuario = req.params.id;
        let usuarioEncontrado = await conexao.request().input('id', idUsuario).query('select * from TB_USUARIO WHERE ID = @id');
        if (usuarioEncontrado.recordset.length == 0) {
            res.send("Usuário não encontrado");
        } else {
            let usuario = await conexao.request().input('id', idUsuario).query('DELETE from TB_USUARIO WHERE ID = @id');
            res.send("Usuário Deletado");
        }
    } catch (error) {
        res.send(400, { status: false, error_code: 400, message: error.message });

    }
};