import unArray from '@norathefurry/unarray';
import isPrime from './isPrime';

const getPrimeFactors = a => {
  const v = [];
  for (let i = 1; i < a + 10; i++) {
    if (a % i == 0 && i != 1) {
      v[v.length] = i;
    }
  }
  const pairs = [];
  v.forEach(i => {
    v.forEach(b => {
      if (i * b == a) {
        const t = [];
        const l = i => {
          if (isPrime(i)) t.push(i);
          else getPrimeFactors(i).forEach(a => t.push(a));
        };
        l(i);
        l(b);
        pairs[pairs.length] = t;
      }
    });
  });

  return unArray(pairs[0]);
};

export default getPrimeFactors;
