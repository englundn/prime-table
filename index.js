const firstNPrimes = (n) => {
  const max = Math.ceil(2 * n * Math.log(n + 1)) + 10;
  const numArray = new Array(max);
  const primeArray = [];

  for (let i = 2; i < max; i += 1) {
    numArray[i] = true;
  }

  for (let i = 2; i <= Math.sqrt(max); i += 1) {
    if (numArray[i]) {
      let j = i * i;
      while (j < max + 1) {
        numArray[j] = false;
        j += i;
      }
    }
  }
  for (let i = 0; i <= max; i += 1) {
    if (numArray[i]) {
      primeArray.push(i);
    }
  }
  return primeArray.slice(0, n);
};

module.exports = firstNPrimes;
