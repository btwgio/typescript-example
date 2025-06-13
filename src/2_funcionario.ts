export abstract class Funcionario {
  nome: string;
  cargo: string;

  constructor(nome: string, cargo: string) {
    this.nome = nome;
    this.cargo = cargo;
  }

  abstract getDetalhes(): string;

  static imprimirRelatorio(funcionario: Funcionario): string {
    return `Relatório do funcionário: ${funcionario.getDetalhes()}`;
  }
}

export class FuncionarioProprio extends Funcionario {
  setor: string;
  anosEmpresa: number;

  constructor(nome: string, cargo: string, setor: string, anosEmpresa: number) {
    super(nome, cargo);
    this.setor = setor;
    this.anosEmpresa = anosEmpresa;
  }

  getDetalhes(): string {
    return `${this.nome} foi contratado(a) diretamente pela empresa, cargo: ${this.cargo}, setor: ${this.setor}, com ${this.anosEmpresa} anos de contribuição na companhia.`;
  }
}

export class Terceirizado extends Funcionario {
  empresaTerceirizada: string;
  duracaoContratoMeses: number;

  constructor(nome: string, cargo: string, empresaTerceirizada: string, duracaoContratoMeses: number) {
    super(nome, cargo);
    this.empresaTerceirizada = empresaTerceirizada;
    this.duracaoContratoMeses = duracaoContratoMeses;
  }

  getDetalhes(): string {
    return `${this.nome} é terceirizado da empresa ${this.empresaTerceirizada}, cargo: ${this.cargo}, contrato de ${this.duracaoContratoMeses} meses.`;
  }
}