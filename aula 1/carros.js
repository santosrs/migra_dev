// let carros = [
//   {
//     id: 1,
//     marca: "ford",
//     modelo: "fusion",
//     ano: 2015,
//     cor: "preto",
//     ativo: true,
//     placa: "XPTO-2121",
//   },
//   {
//     id: 2,
//     marca: "chevrolet",
//     modelo: "celta",
//     ano: 2010,
//     cor: "vermelho",
//     ativo: true,
//     placa: "XPTT-2222",
//   },
//   {
//     id: 3,
//     marca: "honda",
//     modelo: "civic",
//     ano: 2008,
//     cor: "azul",
//     ativo: true,
//     placa: "XPSS-3322",
//   },
//   {
//     id: 4,
//     marca: "land Rover",
//     modelo: "EVOQUE",
//     ano: 2020,
//     cor: "rosa",
//     ativo: true,
//     placa: "XPTO-2121",
//   },
//   {
//     id: 5,
//     marca: "honda",
//     modelo: "FIT",
//     ano: 2019,
//     cor: "vermelho",
//     ativo: true,
//     placa: "SSRT-1616",
//   },
// ];

// // let carrosNovos = carros.filter((x) => x.ano > 2015);

// // carros.map(function (banana) {
// //   if (banana.cor == "vermelho") {
// //     banana.apelido = "Relampago Mcqueen";
// //   }
// //   return x;
// // });

// let carrosAgrupados = carros.reduce(
//   function (valorRetorno, valorAtual) {
//     if (valorAtual.cor == "vermelho") {
//       valorRetorno.carrosVemelhos.push(valorAtual);
//     } else {
//       valorRetorno.carrosOutraCor.push(valorAtual);
//     }

//     return valorRetorno;
//   },
//   {
//     carrosVemelhos: [],
//     carrosOutraCor: [],
//   }
// );

// // carros.map((x) =>
// //   x.cor == "vermelho" ? x.apelido == "Relampago Mcqueen" : null
// // );

// console.log(carrosAgrupados);

// let carros = [
//   {
//     id: 1,
//     marca: "ford",
//     modelo: "fusion",
//     ano: 2015,
//     cor: "preto",
//     ativo: true,
//     placa: "XPTO-2121",
//   },
//   {
//     id: 2,
//     marca: "chevrolet",
//     modelo: "celta",
//     ano: 2010,
//     cor: "vermelho",
//     ativo: true,
//     placa: "XPTT-2222",
//   },
//   {
//     id: 3,
//     marca: "honda",
//     modelo: "civic",
//     ano: 2008,
//     cor: "azul",
//     ativo: true,
//     placa: "XPSS-3322",
//   },
//   {
//     id: 4,
//     marca: "land Rover",
//     modelo: "EVOQUE",
//     ano: 2020,
//     cor: "rosa",
//     ativo: true,
//     placa: "XPTO-2121",
//   },
//   {
//     id: 5,
//     marca: "honda",
//     modelo: "FIT",
//     ano: 2019,
//     cor: "vermelho",
//     ativo: true,
//     placa: "SSRT-1616",
//   },
// ];

// let carrosAgrupados = carros.reduce(
//   function (valorRetorno, valorAtual) {
//     if (valorAtual.cor == "preto") {
//       valorRetorno.carrosPretos.push(valorAtual);
//     } else if (valorAtual.cor == "vermelho") {
//       valorRetorno.carrosVermelhos.push(valorAtual);
//     } else {
//       valorRetorno.carrosOutraCor.push(valorAtual);
//     }
//     return valorRetorno;
//   },
//   {
//     carrosPretos: [],
//     carrosVermelhos: [],
//     carrosOutraCor: [],
//   }
// );

// console.log(carrosAgrupados);