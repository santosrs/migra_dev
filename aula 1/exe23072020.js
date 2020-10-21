let pessoas = [{
        id: 1,
        nome: "Marcelo",
        idade: 26,
        sexo: "masculino",
    },
    {
        id: 2,
        nome: "Lucas",
        idade: 17,
        sexo: "masculino",
    },
    {
        id: 3,
        nome: "maria",
        idade: 20,
        sexo: "feminino",
    },
    {
        id: 4,
        nome: "Lídia",
        idade: 23,
        sexo: "feminino",
    },
    {
        id: 5,
        nome: "Ronaldo",
        idade: 54,
        sexo: "masculino",
    },
    {
        id: 6,
        nome: "Elisabete",
        idade: 55,
        sexo: "feminino",
    },
    {
        id: 7,
        nome: "Luigi",
        idade: 1,
        sexo: "masculino",
    },
    {
        id: 8,
        nome: "Andre",
        idade: 12,
        sexo: "masculino",
    },
    {
        id: 9,
        nome: "Larissa",
        idade: 18,
        sexo: "feminino",
    },
    {
        id: 10,
        nome: "Anderson",
        idade: 33,
        sexo: "masculino",
    },
    {
        id: 11,
        nome: "Débora",
        idade: 29,
        sexo: "feminino",
    },
    {
        id: 12,
        nome: "Pedro",
        idade: 3,
        sexo: "masculino",
    },
    {
        id: 13,
        nome: "Aline",
        idade: 28,
        sexo: "feminino",
    },
    {
        id: 14,
        nome: "Adrian",
        idade: 40,
        sexo: "masculino",
    },
];

//console.log(pessoas)

// FAÇA AS SEGUINTES FUNCOES:

//1 Filtrar todas as pessoas maiores de 18anos


//pessoas = maiorQue18(pessoas)

//function maiorQue18(pessoas) {
//  return pessoas.filter((x) => x.idade > 18);
//}

//console.log(pessoas)


//2 Inserir propriedade "ativo" nos objetos da lista,
// quando a idade for maior de 18 deixar a propriedade "ativo" como "true"
// se for menor que dezoito essa mesma propriedade será "false"

//function ativar(pessoas) {
//for (let index = 0; index < pessoas.length; index++) {
//if (pessoas[index].idade >= 18) {
//pessoas[index].ativo = true;
//} else {
//pessoas[index].ativo = false;
//}
//}
//ativar(pessoas)
//}
//console.log(pessoas)


//3 Inserir a propriedade "nomeMae" e um valor para todos que possuem o sexo masculino,
// se o sexo for feminino inserir a propriedade "nomePai" e um valor

//function adicionarPaiouMae(pessoas) {
//for (let index = 0; index < pessoas.length; index++) {
//if (pessoas[index].sexo >= "masculino") {
//pessoas[index].nomeMae = "Maria";
//} else {
// pessoas[index].nomePai = "Joao";
//}
//}
//}
//adicionarPaiouMae(pessoas)
//console.log(pessoas)

//4 Faça uma função para adicionar uma nova pessoa,
// passando como parametro dessa funcao um objeto pessoa e uma lista de pessoas
//pessoas = divisorpar(pessoas)

//let pessoaNova = {
//id: 15,
//nome: "Stark",
//idade: 20,
//sexo: "masculino",
//}

//adicionarNovaPessoa(pessoas, pessoaNova);

//function adicionarNovaPessoa(pessoas, pessoa) {
//let ultimoId = pessoas.pop().id + 1;


//pessoas.id = ultimoId;
//pessoas.push(pessoa)
//}

//console.log(pessoas)

// 5 Faça uma função que receberá como parametro um id e uma lista para poder deletar uma pessoa dessa lista

//function deletarPessoas(id, pessoas) {
// return pessoas.filter((pessoa) => pessoa.id != id);

//}

//pessoas = deletarPessoas(5, pessoas)

//console.log(pessoas)


// 6 faça uma função para filtrar a lista pelo id da pessoa, passando como parametro a lista de pessoas e o id

// function filtrarPessoas(pessoas,id){
//   return pessoas.filter((x) => 
//x.id
//== id);

// }
// pessoas = filtrarPessoas(pessoas,10)

// console.log(pessoas)

// function filterNormal(pessoas, id) {
//   let pessoasFiltradas = [];
//   for (let index = 0; index < pessoas.length; index++) {
//     const pessoa = pessoas[index];
//     if (
// 
//pessoa.id

//  != id) {
//       pessoasFiltradas.push(pessoa);
//     }
//   }
//   return pessoasFiltradas;
// }

// function deletarPessoa(id, listaPessoas) {
//   let pessoasFiltradas = listaPessoas.filter((pessoa) => 
// 
//pessoa.id

//  != id);
// }

// 7 faça uma função que altere as idades das pessoas, se a idade for par multiplicar a idade por 2 e somar mais 10

//function alterarIdade (pessoas){

// pessoas.map
//  ((x) => x.idade %2 == 0 ? x.idade = (x.idade *2) + 10 : x.idade = x.idade)
// }
//alterarIdade(pessoas)

//console.log(pessoas)
// var pessoasFiltradas = modIdade(pessoas)
//   console.log(pessoasFiltradas);

//modIdade(pessoas);
// function modIdade(pessoas){
//   pessoas.forEach(function (pessoa){
//     if (pessoa.idade % 2 == 0){
//       pessoa.idade = (pessoa.idade * 2 +10)
//     }
//   })
//   return pessoas.filter((x) => x.idade %2 == 0)

// }


//function divisorpar(pessoas) {
// pessoas.filter((x) => x.idade % 2 == 0); {
//    return pessoas.idade = ((pessoas.idade * 2 + 10);
//      }
// }

// console.log(pessoas)

//function valoresdobrados(pessoas)
//return pessoas = idade * 2

//console.log(pessoas)
//var pessoasFiltradas = modIdade(pessoas)
//console.log(pessoasFiltradas);

//function modIdade(pessoas) {
//pessoas.forEach(function(pessoa) {
//if (pessoa.idade % 2 == 0) {
//  pessoa.idade = (pessoa.idade * 2 + 10)
//}
//})

//return pessoas.filter((x) => x.idade % 2 == 0)

//}

//console.log(pessoas)

// 8 faça uma função que para cada pessoa acima de 18 anos tenha um objeto carro como propriedade(as propriedades do objeto pode ser do seu gosto)

//function CadastrarCarro(pessoas) {
// for (let index = 0; index < pessoas.length; index++) {
//   if (pessoas[index].idade >= 18) {
//   pessoas[index].carro = {
//       marca: "chevrolet",
//      modelo: "camaro",
//    ano: 1970,
//  cor: "azul",
//      placa: "XWT2J88",
// };
// }
// }
//}
//CadastrarCarro(pessoas)

///console.log(pessoas)



//
//function adicionarCarro(pessoas) {
//let pessoasMaiorIdade = pessoas.filter((x) => x.idade >= 18);


//pessoasMaiorIdade.map
//(
//(x) => (x.carro = { nome: "nome do carro", cor: "cor do carro" })
// );

// return pessoasMaiorIdade;
// }

// let pessoasComCarro = adicionarCarro(pessoas);

// console.log(pessoasComCarro);
// 9 Faça uma função que insira duas prorpiedades nos objetos pessoas (totalIdade,diferencaIdade)
// totalIdade = sera a soma de todas as idades
// diferencaIdade = totalIdade - idade da pessoa


//function inserirTotalIdadeDiferencaIdade (pessoas){
// let totalIdade = 0
//  for(let i=0; i<pessoas.length; i++){
//   totalIdade = totalIdade + pessoas[i].idade
// }
//for(let i=0; i<pessoas.length; i++){
// pessoas[i].totalIdade = totalIdade
//  pessoas[i].diferencaIdade = totalIdade - pessoas[i].idade
//  }
//}

//inserirTotalIdadeDiferencaIdade(pessoas)

//console.log(pessoas)