var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function inserir(usuario, jogador, camiseta, formacao, idolo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserir():", usuario, jogador, camiseta, formacao, idolo);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO respostas (fk_usuario, jogador_favorito, camiseta_favorita, formacao_favorita, idolo_favorito) VALUES (${usuario}, '${jogador}', '${camiseta}', '${formacao}', '${idolo}');
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarRespostaExistente(fkUsuario) {
    var instrucaoSql = `
        SELECT * FROM respostas WHERE fk_usuario = ${fkUsuario};
    `;
    return database.executar(instrucaoSql);
}

function atualizar(fkUsuario, jogador, camiseta, formacao, idolo) {
    var instrucaoSql = `
        UPDATE respostas
        SET jogador_favorito = '${jogador}',
            camiseta_favorita = '${camiseta}',
            formacao_favorita = '${formacao}',
            idolo_favorito = '${idolo}'
        WHERE fk_usuario = ${fkUsuario};
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    inserir,
    atualizar,
    verificarRespostaExistente
};