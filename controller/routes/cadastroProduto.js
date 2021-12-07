const produtoBanco = require('../../model/repositories/produto-bd');
module.exports = function (app) {
    app.post('/produto', async (req, res) => {
        mensagem = {};
        try {
            const produto = {
                nome: req.body.nome,
                estoque_maximo: req.body.estoqueMaximo,
                estoque_minimo: req.body.estoqueMinimo
            }
            await produtoBanco.insertProduto(produto);
            mensagem = {tipo: 'sucesso', texto: 'Produto cadastrado'};
        } catch (error) {
            console.log(error);
            mensagem = {tipo: 'erro', texto: 'Erro no Produto cadastrado'};
        } finally {
            const produtos = await produtoBanco.selectProduto();
            res.render('produto/index', {
                title: 'CadastroProduto',
                mensagem,
                produtos
            });
        }
    });

    app.get('/produto', async (req, res) => {
        const produtos = await produtoBanco.selectProduto();
        res.render('produto/index', {title: 'CadastroProduto', mensagem: null, produtos});
    });
}
