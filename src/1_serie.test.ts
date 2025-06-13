import { Serie } from './1_serie';

describe('Serie', () => {
  it('deve avaliar corretamente com uma nota válida', () => {
    const serie = new Serie("Breaking Bad", 2008, 5, 62);
    expect(serie.avaliar(5)).toBe(
      'Série "Breaking Bad" (2008) com 5 temporadas e 62 episódios recebeu sua nota: 5/5.'
    );
  });

  it('deve rejeitar nota inválida (maior que 10)', () => {
    const serie = new Serie("Breaking Bad", 2008, 5, 62);
    expect(serie.avaliar(7)).toBe(
      'Nota inválida para a série "Breaking Bad". Forneça uma nota entre 1 e 5.'
    );
  });

  it('deve rejeitar nota inválida (negativa)', () => {
    const serie = new Serie("Fleabag", 2016, 2, 12);
    expect(serie.avaliar(-1)).toBe(
      'Nota inválida para a série "Fleabag". Forneça uma nota entre 1 e 5.'
    );
  });
});
