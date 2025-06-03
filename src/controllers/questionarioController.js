var questionarioModel = require("../models/questionarioModel");

var questionarioModel = require("../models/questionarioModel");

function inserir(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var usuario = req.body.usuarioServer;
    var jogador = req.body.jogadorServer;
    var camiseta = req.body.camisetaServer;
    var formacao = req.body.formacaoServer;
    var idolo = req.body.idoloServer;

    // Faça as validações dos valores
    if (jogador == undefined) {
        res.status(400).send("Seu jogador favorito está undefined!");
    } else if (camiseta == undefined) {
        res.status(400).send("Sua camiseta favorita está undefined!");
    } else if (formacao == undefined) {
        res.status(400).send("Sua formação favorita está undefined!");
    } else if (idolo == undefined) {
        res.status(400).send("Seu ídolo favorito está undefined!");
    } else {

        questionarioModel.verificarRespostaExistente(usuario)
            .then(function (resposta) {
                if (resposta.length > 0) {
                    return questionarioModel.atualizar(usuario, jogador, camiseta, formacao, idolo);
                } else {
                    return questionarioModel.inserir(usuario, jogador, camiseta, formacao, idolo);
                }
            })
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao salvar a resposta! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    inserir
};
