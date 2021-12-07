const db = require("../services/db");

async function insertCliente(cliente) {
    const conn = await db.connect();
    const sql = 'INSERT INTO clientes(nome, senha, idade, createdAt, updatedAt) VALUES (?,?,?,?,?);';
    const values = [cliente.nome, cliente.senha, cliente.idade, new Date(), new Date()];
    try {
        console.log('Cadastrando cliente')
        return await conn.query(sql, values);
    } catch (ex) {
        throw ex;
    }
}

async function selectCliente() {
    const conn = await db.connect();
    console.log('Buscando cliente')
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}

async function deleteCliente(id) {
    const conn = await db.connect();
    const sql = 'DELETE FROM clientes where id=?;';
    return await conn.query(sql, [id]);
}

async function updateCliente(id, cliente) {
    const conn = await db.connect();
    const sql = 'UPDATE clientes SET nome=?, senha=? WHERE id=?';
    const values = [cliente.nome, cliente.senha, id];
    return await conn.query(sql, values);
}

module.exports = {selectCliente, insertCliente, deleteCliente, updateCliente}


async function login(cliente) {

    const conn = await db.connect();
    const sql = 'SELECT * FROM clientes WHERE nome =? and senha=?';
    const values = [cliente.nome, cliente.senha];
    const [rows] = await Promise.apply(conn.query(sql, values));

    if (rows.length > 0)
        return rows[0];
    else return null;
}

function isEmptyObject(obj) {
    const teste = !Object.keys(obj).length;
    return teste;

}