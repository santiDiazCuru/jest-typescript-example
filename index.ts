export function sum(...a: number[]): any {
  return a.reduce((acc, val) => acc + val, 0);
}
