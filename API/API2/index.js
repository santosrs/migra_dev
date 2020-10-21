const restify = require('restify');

const servidor = restify.createServer();

function buscar(req, res, next) {
    res.send({ coisa: "coisa" });
    next();
}

function salvar(req, res, next) {
    console.log(req.body);
    res.send("sucesso!");
    next();
}

servidor.use(restify.plugins.bodyParser());

servidor.get('/', buscar);
servidor.post('/', salvar);

servidor.listen(8080, function() {
    console.log("foi!");
})