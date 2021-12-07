async function connect(){
    console.log("MySQL!");
    //Confirma se está conecetado com a variavel global
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:abc123@localhost:3306/webii");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {connect}