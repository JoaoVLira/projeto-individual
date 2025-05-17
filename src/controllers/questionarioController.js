var questionarioModel = require("../models/questionarioModel");

function inserir(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html


    var jogador = req.body.jogadorServer;
    var camiseta = req.body.camisetaServer;
    var formacao = req.body.formacaoServer;

    // Faça as validações dos valores
    if (jogador == undefined) {
        res.status(400).send("Seu jogador favorito está undefined!");
    } else if (camiseta == undefined) {
        res.status(400).send("Sua camiseta favorita está undefined!");
    } else if (formacao == undefined) {
        res.status(400).send("Sua formação favorita está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        questionarioModel.inserir(jogador, camiseta, formacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    inserir
}