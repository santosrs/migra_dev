var appConfigs = require("./app-services-configs");
var controller = require("./controller");

async function startup() {


    try {
        console.log("Iniciando o módulo api_produto web server");

        controller.api_server.server.listen(
            appConfigs.configs.api_produto.http_port,
            function() {
                console.log(
                    "módulo iniciado em http://[::]:" +
                    appConfigs.configs.api_produto.http_port
                );
            }
        );
    } catch (err) {
        console.log("Erro ao iniciar api alu01");
        console.error(err);
        process.exit(1);
    }
}

startup();