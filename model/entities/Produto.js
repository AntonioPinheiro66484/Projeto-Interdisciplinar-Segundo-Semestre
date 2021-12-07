function Produto(nome, estoque_maximo, estoque_minimo, id) {
    this.id = id;
    this.nome = nome;
    this.estoque_maximo = estoque_maximo;
    this.estoque_minimo = estoque_minimo;
}

module.exports = Produto;