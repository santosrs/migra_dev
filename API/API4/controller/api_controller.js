exports.cadastrar = async function(req, res, next) {
    try {
        let body = req.body;
        console.log(body);
        res.send("RECEBI O BODY!!!");
    } catch (error) {
        console.log(erro.message);
    }
};