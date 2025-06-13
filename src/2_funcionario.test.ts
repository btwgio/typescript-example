import { FuncionarioProprio, Terceirizado, Funcionario } from './2_funcionario';

describe('Funcionário', () => {
  it('deve imprimir relatório correto para funcionário próprio', () => {
    const funcionarioProprio = new FuncionarioProprio("Alice", "Desenvolvedora", "TI", 3);
    const resultado = Funcionario.imprimirRelatorio(funcionarioProprio);
    expect(resultado).toBe(
      "Relatório do funcionário: Alice foi contratado(a) diretamente pela empresa, cargo: Desenvolvedora, setor: TI, com 3 anos de contribuição na companhia."
    );
  });

  it('deve imprimir relatório correto para terceirizado', () => {
    const terceirizado = new Terceirizado("Bob", "Analista", "Empresa X", 12);
    const resultado = Funcionario.imprimirRelatorio(terceirizado);
    expect(resultado).toBe(
      "Relatório do funcionário: Bob é terceirizado da empresa Empresa X, cargo: Analista, contrato de 12 meses."
    );
  });

  it('deve permitir alterar atributos e refletir no relatório', () => {
    const funcionarioProprio = new FuncionarioProprio("Carlos", "Fullstack", "Desenvolvimento", 1);
    funcionarioProprio.anosEmpresa = 5;
    const resultado = Funcionario.imprimirRelatorio(funcionarioProprio);
    expect(resultado).toBe(
      "Relatório do funcionário: Carlos foi contratado(a) diretamente pela empresa, cargo: Fullstack, setor: Desenvolvimento, com 5 anos de contribuição na companhia."
    );
  });
});
