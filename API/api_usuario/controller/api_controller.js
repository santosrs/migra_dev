exports.cadastrar = async function(req, res, next) {
    try {
        let usuario = req.body;
        // cadastrar no banco de dados
        res.send(201, "Usuario cadastrado!!");
    } catch (error) {
        res.send(400, {
            status: false,
            error_code: 400,
            message: error.message
        });
    }
}
exports.listar = async function(req, res, next) {
    try {
        let usuario = [{
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
                nome: "Joao",
                email: "joao@teste.com",
                senha: "teste2112",
            },
        ];
        // iremos buscar os usuarios cadastrados do banco
        res.send(usuarios);
    } catch (error) {
        res.send(400, {
            status: false,
            error_code: 400,
            message: error.message
        });
    }
}