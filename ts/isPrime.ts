export const isPrime = (n: number) => {
  if (n < 0) n = -n;
  if (n == 1) return false;

  if (n <= 3) return n > 1;

  if (n % 2 === 0 || n % 3 === 0) return false;

  let count = 5;

  while (Math.pow(count, 2) <= n) {
    if (n % count === 0 || n % (count + 2) === 0) return false;

    count += 6;
  }

  return true;
};
export const isPrime_old = (n: number) => {
  if (n < 0) n = -n;
  if (n == 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
export default isPrime;
