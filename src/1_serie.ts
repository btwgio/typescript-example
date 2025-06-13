export class Serie implements AvaliarObra {
    titulo: string;
    ano: number;
    temporadas: number;
    episodios: number;

    constructor(titulo: string, ano: number, temporadas: number, episodios: number) {
        this.titulo = titulo;
        this.ano = ano;
        this.temporadas = temporadas;
        this.episodios = episodios; 
    }
    
  avaliar(nota: number): string {
    if (nota < 1 || nota > 5) {
      return `Nota inválida para a série "${this.titulo}". Forneça uma nota entre 1 e 5.`;
    }
    return `Série "${this.titulo}" (${this.ano}) com ${this.temporadas} temporadas e ${this.episodios} episódios recebeu sua nota: ${nota}/5.`;
  }
}


//teste