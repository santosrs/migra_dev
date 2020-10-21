let produtos = [{
    id: 1,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 2,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 3,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 4,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 5,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 6,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 7,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 8,
    tipoProduto: 1,
    descricao: 'lapis',
    valor: 1,
}, {
    id: 9,
    tipoProduto: 2,
    descricao: 'caderno',
    valor: 10,
}, {
    id: 10,
    tipoProduto: 2,
    descricao: 'caderno',
    valor: 10,
}, {
    id: 11,
    tipoProduto: 2,
    descricao: 'caderno',
    valor: 10,
}, {
    id: 12,
    tipoProduto: 2,
    descricao: 'caderno',
    valor: 10,
}, {
    id: 13,
    tipoProduto: 3,
    descricao: 'fichario',
    valor: 15,
}, {
    id: 14,
    tipoProduto: 3,
    descricao: 'fichario',
    valor: 15,
}, {
    id: 15,
    tipoProduto: 3,
    descricao: 'fichario',
    valor: 15,
}, {
    id: 16,
    tipoProduto: 4,
    descricao: 'caneta',
    valor: 2,
}, {
    id: 17,
    tipoProduto: 4,
    descricao: 'caneta',
    valor: 2,
}, {
    id: 18,
    tipoProduto: 4,
    descricao: 'caneta',
    valor: 2,
}, {
    id: 19,
    tipoProduto: 4,
    descricao: 'caneta',
    valor: 2,
}, {
    id: 20,
    tipoProduto: 4,
    descricao: 'caneta',
    valor: 2,
}, ];
console.log(produtos);

function cadastrarProduto(produto) {

    produtos.push(produto);


}

let novoProduto = {
    id: 21,
    tipoProduto: 5,
    descricao: 'tinta',
    valor: 0.10,

}

cadastrarProduto(novoProduto)

console.log(produtos)


function cadastrarProduto(produto) {
    let novoid = produtos.map((x) => x.id).pop() + 1

    produto.id = novoid
    produtos.push(produto);
}

cadastrarProduto(novoProduto)

cadastrarProduto(novoProduto2)

console.log(produtos)