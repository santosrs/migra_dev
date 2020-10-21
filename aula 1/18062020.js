

let cliente = {
    ID:1,
    nome: 'Severino',
    idade: 30,
    CPF: 45687656789,
    Cargo: 'Desenvolvedor',
    DataRegistro: new Date(),
    endereco:{
      rua:'rua XPTO',
      bairro:'Cangaiba',
      numero: 44,
      CEP: 88776655,
      Cidade:'São Paulo',
      Estado: 'São Paulo'
    },
    nacionalidade:'Brasileiro',
    carro:{
        marca:'ford',
        modelo: 'fusion',
        ano: 2019,
        cor: 'preto',
        novo: true 
    },
    servicos:[
      {
        nome:'Volante',
        corCostura:'Cinza',
        corCouro: 'preto',
        material: 'natural',
        valor: 200
      },
      {
        nome:'Lateral',
        corCostura:'vermelho',
        corCouro: 'branco',
        material: 'sintético',
        valor: 90
      }
    ]
  }