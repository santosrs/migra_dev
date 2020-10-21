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


function ativar(pessoas) {
    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].idade >= 18) {
            pessoas[index].ativo = true;
        } else {
            pessoas[index].ativo = false;
        }
    }
    ativar(pessoas)
}
console.log(pessoas)