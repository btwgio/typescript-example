export class Filme implements AvaliarObra {
    titulo: string;
    ano: number;
    diretor: string;
    duracao: number;

    constructor(titulo: string, ano: number, diretor: string, duracao: number) {
        this.titulo = titulo;
        this.ano = ano;
        this.diretor = diretor;
        this.duracao = duracao; 

  }

  avaliar(nota: number): string {
    if (nota < 1 || nota > 5) {
      return `Nota inválida para o filme "${this.titulo}". Forneça uma nota entre 1 e 5.`;
    }
    return `Filme "${this.titulo}" (${this.ano}) dirigido por ${this.diretor} recebeu sua nota: ${nota}/5.`;
  }
}

//teste