  let pessoas = [{
          id: 1,
          nome: "Marcelo",
          idade: 26,
      },
      {
          id: 2,
          nome: "Lucas",
          idade: 17,
      },
      {
          id: 3,
          nome: "maria",
          idade: 20,
      },
      {
          id: 4,
          nome: "Lídia",
          idade: 22,
      },
      {
          id: 5,
          nome: "Ronaldo",
          idade: 54,
      },
      {
          id: 6,
          nome: "Elisabete",
          idade: 55,
      },
      {
          id: 7,
          nome: "Luigi",
          idade: 1,
      },
      {
          id: 8,
          nome: "Andre",
          idade: 12,
      },
      {
          id: 9,
          nome: "Larissa",
          idade: 18,
      },
      {
          id: 10,
          nome: "Anderson",
          idade: 33,
      },
      {
          id: 11,
          nome: "Débora",
          idade: 29,
      },
      {
          id: 12,
          nome: "Pedro",
          idade: 3,
      },
      {
          id: 13,
          nome: "Aline",
          idade: 28,
      },
      {
          id: 14,
          nome: "Adrian",
          idade: 40,
      },
  ];
  console.log(pessoas);

  let maioresDe18 = [];

  for (let index = 0; index < pessoas.length; index++) {
      if (pessoas[index].idade >= 18) {
          maioresDe18.push(pessoas[index]);
      }
  }

  console.log(maioresDe18);

  let maioresDe18 = pessoas.filter((x) => x.idade >= 18);

  let menoresDe18 = pessoas.filter((pessoa) => pessoa.idade < 18);
  console.log(maioresDe18);
  console.log(menoresDe18);

  pessoas.map(function(x) {
      if (x.idade >= 19) {
          x.maiorIdade = true;
      } else {
          x.maiorIdade = false;
      }
  });

  pessoas.map((x) =>
      x.idade >= 18 ? (x.maiorIdade = true) : (x.maiorIdade = false)
  );

  let maiorIdade = pessoas.map((x) => x.maiorIdade == true);

  console.log(pessoas);

  let pessoasAgrupadas = pessoas.reduce(
      function(valorAcumulador, valorArray) {
          let propMaiorOuMenor = valorArray.idade >= 10 ? "maiores" : "menores";

          valorAcumulador[propMaiorOuMenor].push(valorArray);
          return valorAcumulador;
      }, { menores: [], maiores: [] }
  );

  console.log(pessoasAgrupadas);

  let pessoasAgrupadas = pessoas.reduce(
      function(valorRetorno, valorDoArray) {
          let propridadeDoRetorno =
              valorDoArray.idade >= 18 ? "maiorIdade" : "menorIdade";

          valorRetorno[propridadeDoRetorno].push(valorDoArray);
          return valorRetorno;
      }, { maiorIdade: [], menorIdade: [] }
  );

  console.log(pessoasAgrupadas);