var respostasModel = require("../models/respostasModel");

function obterDadosJogadores(req, res) {
    respostasModel.obterDadosJogadores()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro no controller:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosCamisas(req, res) {
    respostasModel.obterDadosCamisas()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar camisas:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosFormacoes(req, res) {
    respostasModel.obterDadosFormacoes()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar formações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosIdolos(req, res) {
    respostasModel.obterDadosIdolos()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar formações:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterDadosKpi(req, res){
    var idUsuario = req.query.idUsuario

    respostasModel.obterDadosKpi(idUsuario)
        .then(function (resultado){
            res.status(200).json(resultado);
        })
        .catch(function (erro){
            console.error("Erro ao trazer as preferências do usuário: ", erro);
            res.status(500).json(erro.sqlMessage);
        })
}


module.exports = {
    obterDadosJogadores,
    obterDadosCamisas,
    obterDadosFormacoes,
    obterDadosIdolos,
    obterDadosKpi
}
