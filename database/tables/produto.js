//produto.js
const Sequelize = require('sequelize');
const database = require('../db-orm');

const Produto = database.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estoque_maximo: {
        type: Sequelize.INTEGER
    },
    estoque_minimo: {
        type: Sequelize.INTEGER
    }
});

(async () => {
    try {
        await database.sync();
        console.log("Tabela de produtos criada");
    } catch (error) {
        console.log("Erro ao criar tabela de produtos criada");
    }
})()

module.exports = Produto;
