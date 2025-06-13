import { Filme } from './1_filme'; 

describe('Filme', () => {
  it('deve avaliar corretamente com uma nota válida', () => {
    const filme = new Filme("In the Mood for Love", 2000, "Wong Kar Wai", 98);
    expect(filme.avaliar(5)).toBe(
      'Filme "In the Mood for Love" (2000) dirigido por Wong Kar Wai recebeu sua nota: 5/5.'
    );
  });

  it('deve rejeitar nota inválida (maior que 5)', () => {
    const filme = new Filme("In the Mood for Love", 2000, "Wong Kar Wai", 98);
    expect(filme.avaliar(9)).toBe(
      'Nota inválida para o filme "In the Mood for Love". Forneça uma nota entre 1 e 5.'
    );
  });
});

//teste