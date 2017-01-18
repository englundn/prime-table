const Table = require('cli-table');

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

const primeProductMatrix = (n, primeArray) => {
  const nPrimesArray = primeArray || firstNPrimes(n);
  const matrix = new Array(n);
  for (let i = 0; i < n; i += 1) {
    matrix[i] = new Array(n);
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      matrix[i][j] = matrix[j][i] = nPrimesArray[i] * nPrimesArray[j];
    }
  }
  return matrix;
};

const makePrimeTable = (n) => {
  const nPrimesArray = firstNPrimes(n);
  const nPrimesMatrix = primeProductMatrix(n, nPrimesArray);
  const primeTable = new Table({ head: [''].concat(nPrimesArray) });
  for (let i = 0; i < n; i += 1) {
    const newRow = {};
    newRow[nPrimesArray[i]] = nPrimesMatrix[i];
    // const rowHeader = nPrimesArray[i];
    primeTable.push(newRow);
  }
  return primeTable;
};

module.exports = { firstNPrimes, primeProductMatrix, makePrimeTable, Table };
