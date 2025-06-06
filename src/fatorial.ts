export function fatorial(n: number): number {
  if (n < 0) {
    throw new Error("O fatorial não é definido para números negativos.");
  }

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
