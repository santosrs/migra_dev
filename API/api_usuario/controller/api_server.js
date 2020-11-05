var api_controller = require("./api_controller");
var restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["*"],
});

// CONFIG AXIOS GLOBALMENTE
const https = require("https");
const axios = require("axios");
axios.interceptors.request.use(function (config) {
  config.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  return config;
});

var server = restify.createServer();

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post("/api_usuario/cadastrar", api_controller.cadastrar);
server.get("/api_usuario/listar", api_controller.listar);
server.get("/api_usuario/buscar/:id", api_controller.buscar);
server.put("/api_usuario/atualizar", api_controller.atualizar);
server.del("/api_usuario/deletar/:id", api_controller.deletar);

exports.server = server;
