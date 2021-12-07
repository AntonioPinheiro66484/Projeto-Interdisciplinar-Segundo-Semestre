//cliente.js
const Sequelize = require('sequelize');
const {DataTypes} = require("sequelize"); // Import the built-in data types
const database = require('../db-orm');

const Cliente = database.define('clientes', {
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
    idade: {
        type: Sequelize.INTEGER
    },
    senha: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: DataTypes.NOW
    },
});

(async () => {
    try {
        await database.sync();
        console.log("Tabela de clientes criada");
    } catch (error) {
        console.log("Erro ao criar tabela de clientes criada");
    }
})()

module.exports = Cliente;
