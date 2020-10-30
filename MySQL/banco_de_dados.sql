CREATE TABLE `Postagem` (
	`Id` INT NOT NULL AUTO_INCREMENT,
	`Titulo` varchar(255) NOT NULL,
	`Data` DATETIME(255) NOT NULL,
	`Descricao` varchar(500) NOT NULL,
	`Usuario_id` INT NOT NULL,
	`Tema_id` INT NOT NULL,
	`Status` BOOLEAN NOT NULL,
	`Regiao` varchar NOT NULL,
	PRIMARY KEY (`Id`)
);

CREATE TABLE `usuario` (
	`id` INT NOT NULL,
	`email/usuario` varchar(255) NOT NULL,
	`Nome` varchar(255) NOT NULL,
	`senha` varchar(20) NOT NULL,
	`Ong` BOOLEAN NOT NULL,
	`Cnpj` varchar(14) NOT NULL,
	`Cpf` varchar(11) NOT NULL,
	`Rua` varchar NOT NULL,
	`Bairro` varchar NOT NULL,
	`complemento` varchar NOT NULL,
	`Cidade` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Tema` (
	`id` INT NOT NULL,
	`tema` varchar NOT NULL,
	`Ativo` BOOLEAN NOT NULL,
	`Perecível` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk0` FOREIGN KEY (`Usuario_id`) REFERENCES `usuario`(`id`);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk1` FOREIGN KEY (`Tema_id`) REFERENCES `Tema`(`id`);

