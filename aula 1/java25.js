
let tipo = ['Cachorro', 'Gato']

let racasCachorro = ['Poodle', 'Beagle', 'Vira-lata']

let racasGato = ['Siames', 'Angora', 'Vira-lata']

let Servicos = [{
  Nome: 'Banho',
  Valor: 20
}, 
{
  Nome: 'Tosa',
  Valor: 30
},
{
  Nome: 'Banho e Tosa',
  Valor: 50
}
]

let produtos = [{
  Nome: 'racao Adulto',
  Valor: 50
},
{
  Nome: 'racao Filhote',
  Valor: 30
}
]

let pet = {
  NOME: 'banze',
  IDADE: 13,
  TIPO: tipo[0],
  raca: racasCachorro[2],
  servicos: Servicos[0].Nome + ' valor : ' + Servicos[0].Valor,
  produtos: produtos[1].Nome + ' valor : ' + produtos[1].Valor,
  Total: Servicos[0].Valor + produtos[1].Valor
}

console.log (pet)