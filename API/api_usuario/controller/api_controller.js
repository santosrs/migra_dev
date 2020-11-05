const moment = require("moment");
const axios = require("axios");
const config = require("./api_config.js");
const { model } = require("./api_model");

exports.cadastrar = async function (req, res, next) {
  try {
    let usuario = req.body;
    //CADASTRAR NO BANCO DE DADOS
    res.send(201, "Usuario cadastrado!!");
  } catch (error) {
    res.send(400, { status: false, error_code: 400, message: error.message });
  }
};

exports.listar = async function (req, res, next) {
  try {
    //iremos buscar os usuarios cadastrados do banco
    let usuarios = [
      {
        id: 1,
        nome: "Marcelo",
        email: "marcelo@teste.com",
        senha: "teste2112",
      },
      {
        id: 2,
        nome: "Maria",
        email: "maria@teste.com",
        senha: "teste2112",
      },
      {
        id: 3,
        nome: "Jose",
        email: "jose@teste.com",
        senha: "teste2112",
      },
    ];

    res.send(usuarios);
  } catch (error) {
    res.send(400, { status: false, error_code: 400, message: error.message });
  }
};

exports.buscar = async function (req, res, nex) {
  try {
    let idUsuario = req.params.id;

    let usuarios = [
      {
        id: 1,
        nome: "Marcelo",
        email: "marcelo@teste.com",
        senha: "teste2112",
      },
      {
        id: 2,
        nome: "Maria",
        email: "maria@teste.com",
        senha: "teste2112",
      },
      {
        id: 3,
        nome: "Jose",
        email: "jose@teste.com",
        senha: "teste2112",
      },
    ];

    let usuario = usuarios.find((x) => x.id == idUsuario);

    if (!usuario) {
      res.send("Usuário não encontrado");
    }

    res.send(usuario);
  } catch (error) {
    res.send(400, { status: false, error_code: 400, message: error.message });
  }
};

exports.atualizar = async function (req, res, next) {
  try {
    let usuarios = [
      {
        id: 1,
        nome: "Marcelo",
        email: "marcelo@teste.com",
        senha: "teste2112",
      },
      {
        id: 2,
        nome: "Maria",
        email: "maria@teste.com",
        senha: "teste2112",
      },
      {
        id: 3,
        nome: "Jose",
        email: "jose@teste.com",
        senha: "teste2112",
      },
    ];

    let dados = req.body;

    //buscar no dbanco de dados
    let usuario = usuarios.find((x) => x.id == dados.id);

    usuario.nome = dados.novoNome;

    //atualizar no banco de dados

    res.send({ mensagem: "usuario atualizado!", usuario });
  } catch (error) {
    res.send(400, { status: false, error_code: 400, message: error.message });
  }
};

exports.deletar = async function (req, res, next) {
  try {
    let usuarios = [
      {
        id: 1,
        nome: "Marcelo",
        email: "marcelo@teste.com",
        senha: "teste2112",
      },
      {
        id: 2,
        nome: "Maria",
        email: "maria@teste.com",
        senha: "teste2112",
      },
      {
        id: 3,
        nome: "Jose",
        email: "jose@teste.com",
        senha: "teste2112",
      },
    ];
    let id = req.params.id;

    usuarios = usuarios.filter((x) => x.id != id);

    res.send(usuarios);
  } catch (error) {
    res.send(400, { status: false, error_code: 400, message: error.message });
  }
};
