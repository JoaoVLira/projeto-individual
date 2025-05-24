create database verdaoForum;

use verdaoForum;

create table usuario (
    id int auto_increment primary key,
    nome varchar(50),
    email varchar(50),
    senha varchar(50),
    jogador_favorito varchar(50)
);

CREATE TABLE respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT,
    jogador_favorito VARCHAR(45),
    camiseta_favorita VARCHAR(45),
    formacao_favorita VARCHAR(30),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from usuario;

select * from respostas;