import input from 'readline-sync';

// Dados do salário mínimo e IPCA
const salarios = [
  {ano: 2010, salario: 510.00},
  {ano: 2011, salario: 545.00},
  {ano: 2012, salario: 622.00},
  {ano: 2013, salario: 678.00},
  {ano: 2014, salario: 724.00},
  {ano: 2015, salario: 788.00},
  {ano: 2016, salario: 880.00},
  {ano: 2017, salario: 937.00},
  {ano: 2018, salario: 954.00},
  {ano: 2019, salario: 998.00},
  {ano: 2020, salario: 1045.00},
]
const ipca = [
  {ano: 2010, ipca: 5.91},
  {ano: 2011, ipca: 6.50},
  {ano: 2012, ipca: 6.08},
  {ano: 2013, ipca: 6.30},
  {ano: 2014, ipca: 6.32},
  {ano: 2015, ipca: 9.28},
  {ano: 2016, ipca: 6.29},
  {ano: 2017, ipca: 3.46},
  {ano: 2018, ipca: 3.75},
  {ano: 2019, ipca: 3.73},
  {ano: 2020, ipca: 3.20},
]


function listarOpcaoSelecionada() {
  console.log('Bem-vindo ao projeto Salário x Inflação!');
  console.log('Este projeto tem como objetivo comparar o crescimento do salário mínimo com a inflação (IPCA) ao longo dos anos.');
  console.log('1 - Listar salários mínimos');
  console.log('2 - Listar IPCA');
  console.log('3 - Comparar salário mínimo com IPCA');
  console.log('4 - Sair');
  console.log('Selecione uma opção: ');
  const opcao = input.questionInt('Opcao: ');
  if (opcao === 1) {
    listarSalarios();
  } else if (opcao === 2) {
    listarIPCA();
  } else if (opcao === 3) {
    compararSalarioComIPCA();
  } else if (opcao === 4) {
    console.log('Saindo...');
  } else {
    console.log('Opção inválida. Tente novamente.');
    listarOpcaoSelecionada();
  }

  function listarSalarios() {
    console.log('salarios minimos');
    for (let i = 0; i < salarios.length; i++) {
      console.log(`Ano: ${salarios[i].ano}, Salário Mínimo: R$ ${salarios[i].salario}`);
    }
  }

  function listarIPCA() {
    console.log('IPCA');
    for (let i = 0; i < ipca.length; i++) {
      console.log(`Ano: ${ipca[i].ano}, IPCA: ${ipca[i].ipca}%`);
    }
  }

  function compararSalarioComIPCA() {
    console.log('Comparação entre Salário Mínimo e IPCA e calcular a diferença do ano anterior com o atual');
    for (let i = 1; i < salarios.length; i++) {
      const anoAtual = salarios[i].ano;
      const salarioAtual = salarios[i].salario;
      const ipcaAtual = ipca[i].ipca;
      const salarioAnterior = salarios[i - 1].salario;
      const ipcaAnterior = ipca[i - 1].ipca;

      const diferencaSalario = salarioAtual - salarioAnterior;
      const diferencaIPCA = ipcaAtual - ipcaAnterior;
      const crescimento = diferencaIPCA.toFixed(2);

      console.log(`Ano: ${anoAtual}, Salário Mínimo: R$ ${salarioAtual}, IPCA: ${ipcaAtual}%, Diferença Salário: R$ ${diferencaSalario}, Diferença IPCA: ${crescimento}%`);
    }

  }

}

listarOpcaoSelecionada();
