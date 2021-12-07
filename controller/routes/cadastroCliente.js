const seguranca = require('../../model/components/seguranca');
const clienteBanco = require('../../model/repositories/cliente-bd');
module.exports = function (app) {
    app.post('/cliente', async (req, res) => {
        mensagem = {};
        try {
            const cliente = {
                nome: req.body.nome,
                idade: req.body.idade,
                senha: seguranca.ocultarSenha(req.body.senha)
            }
            await clienteBanco.insertCliente(cliente);
            mensagem = {tipo: 'sucesso', texto: 'Cliente cadastrado'};
        } catch (error) {
            mensagem = {tipo: 'erro', texto: 'Erro no cadastrado'};
        } finally {
            const clientes = await clienteBanco.selectCliente();
            res.render('cliente/index', {
                title: 'Cadastro',
                mensagem,
                clientes
            });
        }
    });

    app.get('/cliente', async (req, res) => {
        const clientes = await clienteBanco.selectCliente();
        res.render('cliente/index', {title: 'Cadastro', mensagem: null, clientes});
    });
}