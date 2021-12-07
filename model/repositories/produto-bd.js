const db = require("../services/db");

async function insertProduto(produto) {
    const conn = await db.connect();
    const sql = 'INSERT INTO produtos(nome, estoque_maximo, estoque_minimo, createdAt, updatedAt) VALUES (?,?,?,?,?);';
    const values = [produto.nome, produto.estoque_maximo, produto.estoque_minimo, new Date(), new Date()];
    try {
        console.log('Cadastrando produto')
        return await conn.query(sql, values);
    } catch (ex) {
        throw ex;
    }
}

async function selectProduto() {
    const conn = await db.connect();
    console.log('Buscando Produto')
    const [rows] = await conn.query('SELECT * FROM produtos;');
    return rows;
}

async function deleteProduto(id) {
    const conn = await db.connect();
    const sql = 'DELETE FROM produtos where id=?;';
    return await conn.query(sql, [id]);
}

async function updateProduto(id, produto) {
    const conn = await db.connect();
    const sql = 'UPDATE produtos SET nome=?, estoque_maximo=? ,estoque_minimo=? WHERE id=?';
    const values = [produto.nome, produto.estoque_maximo, produto.estoque_minimo, id];
    return await conn.query(sql, values);
}

module.exports = {selectProduto, insertProduto, deleteProduto, updateProduto}

async function login(produto) {

    const conn = await db.connect();
    const sql = 'SELECT * FROM produtos WHERE nome =? and estoque_maximo=? and estoque_minimo=?';
    const values = [produto.nome, produto.estoque_maximo, produto.estoque_minimo];
    const [rows] = await Promise.apply(conn.query(sql, values));

    if (rows.length > 0)
        return rows[0];
    else return null;
}


function isEmptyObject(obj) {
    const teste = !Object.keys(obj).length;
    return teste;

}