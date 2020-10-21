let pedido1 = {
    numeroDePedido: 01,
    dataDoPedido: "28/05/2020",
    preçoUnitario: 10,
    quantidade: 2
 }


 let pedido2 = {
    numeroDePedido: 02,
    dataDoPedido: "30/05/2020",
    preçoUnitario: 20,
    quantidade: 5
 }

 let pedidos = [pedido1, pedido2]

 let total = 0

  for (let i = 0; i < pedidos.length; i ++  ){
    total = total + pedidos[i].preçoUnitario * pedidos[i].quantidade
 }
 console.log(total)