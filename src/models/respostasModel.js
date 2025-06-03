var database = require("../database/config");

function obterDadosJogadores() {
    var instrucao = `
        SELECT jogador_favorito AS jogador, COUNT(*) AS votos
        FROM respostas
        GROUP BY jogador_favorito
        ORDER BY votos DESC;
    `;
    return database.executar(instrucao);
}

function obterDadosCamisas() {
    var instrucao = `
        SELECT camiseta_favorita AS camisetas, COUNT(*) AS votos
        FROM respostas
        GROUP BY camiseta_favorita
        ORDER BY votos DESC;
    `;
    return database.executar(instrucao);
}

function obterDadosFormacoes() {
    var instrucao = `
        SELECT formacao_favorita AS formacoes, COUNT(*) AS votos
        FROM respostas
        GROUP BY formacao_favorita
        ORDER BY votos DESC;
    `;
    return database.executar(instrucao);
}

function obterDadosIdolos() {
    var instrucao = `
        SELECT idolo_favorito AS idolos, COUNT(*) AS votos
        FROM respostas
        GROUP BY idolo_favorito
        ORDER BY votos DESC;
    `;
    return database.executar(instrucao);
}

function obterDadosKpi(idUsuario){
    var instrucao = `
        SELECT jogador_favorito, camiseta_favorita, formacao_favorita, idolo_favorito
        FROM respostas
        WHERE fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}


module.exports = {
    obterDadosJogadores,
    obterDadosCamisas,
    obterDadosFormacoes,
    obterDadosIdolos,
    obterDadosKpi
};
