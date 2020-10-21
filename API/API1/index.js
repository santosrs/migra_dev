var appConfigs = require("./app-services-configs");
var controller = require("./controller");

async function startup() {
    console.log("Iniciando a aplicação autenticacao-api");

    try {
        console.log("Iniciando o módulo aula01 web server");

        controller.server.server.listen(
            appConfigs.configs.config_api.http_port,
            function() {
                console.log(
                    "módulo iniciado em http://[::]:" +
                    appConfigs.configs.config_api.http_port
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