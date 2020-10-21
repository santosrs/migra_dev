const restify = require("restify");
const corsMiggleware = require("restify-cors-middleware");
const axios = require("axios");
const https = require("https");
var api_controller = require("./api_controller");

const cors = corsMiggleware({
    origins: ["*"],
    allowHeaders: ["*"],
});




axios.interceptors.request.use(function(config) {
    config.httpsAgent = new https.Agent({ rejectUnauthorized: false });
    return config;
});

var server = restify.createServer()

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post("/produtos/cadastrar", api_controller.cadastrar);

exports.server = server;