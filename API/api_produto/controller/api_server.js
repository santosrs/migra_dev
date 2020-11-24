const controller = require("./api_controller");
const restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["*"],
});

// CONFIG AXIOS GLOBALMENTE
const https = require("https");
const axios = require("axios");
axios.interceptors.request.use(function(config) {
    config.httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return config;
});

var server = restify.createServer();

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post("/api_produto/cadastrar", controller.cadastrar);
//server.del("/api_produto/deletar/:id", controller.deletar);
//server.put("/api_produto/atualizar", controller.atualizar);
exports.server = server;