import unArray from '@norathefurry/unarray';
import isPrime from './isPrime';
import removeDupes from './removeDupes';

export const getAllPossiblePrimeFactors = (a: number) => {
  let negative: boolean = a < 0;
  if (negative) a = -a;
  const v: number[] = [];
  for (let i = 1; i <= a; i++) {
    if (a % i == 0 && i != 1) {
      v[v.length] = i;
    }
  }
  const pairs: number[][] = [];
  v.forEach(i => {
    v.forEach(b => {
      if (i * b == a) {
        const t: number[] = [];
        const l = (i: number) => {
          if (isPrime(i)) t.push(i);
          else getPrimeFactors(i).forEach((a: number) => t.push(a));
        };
        l(i);
        l(b);
        if (negative) t[0] = -t[0];
        pairs[pairs.length] = unArray(t);
      }
    });
  });

  return pairs;
};

export const getPrimeFactors = (a: number) => {
  let negative: boolean = a < 0;
  if (negative) a = -a;
  const v: number[] = [];
  for (let i = 1; i <= a; i++) {
    if (a % i == 0 && i != 1) {
      v[v.length] = i;
    }
  }
  for (let ind = 0; ind < v.length; ind++) {
    const i = v[ind];
    for (let ind2 = 0; ind2 < v.length; ind2++) {
      const b = v[ind2];

      if (i * b == a) {
        const t: number[] = [];
        const l = (i: number) => {
          if (isPrime(i)) t.push(i);
          else getPrimeFactors(i).forEach((a: number) => t.push(a));
        };
        l(i);
        l(b);
        return removeDupes(unArray(t));
      }
    }
  }

  return [a];
};

export default getPrimeFactors;
