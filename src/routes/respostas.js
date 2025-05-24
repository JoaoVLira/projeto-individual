var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController")

router.get("/obterDadosJogadores", function (req, res) {
    respostasController.obterDadosJogadores(req, res);
})

router.get("/obterDadosCamisas", function (req, res) {
    respostasController.obterDadosCamisas(req, res);
})

router.get("/obterDadosFormacoes", function (req, res) {
    respostasController.obterDadosFormacoes(req, res);
})

module.exports = router;