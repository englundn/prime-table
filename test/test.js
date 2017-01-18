const expect = require('chai').expect;
const { firstNPrimes, primeProductMatrix, makePrimeTable, Table } = require('../index.js');

describe('firstNPrimes', () => {
  it('should return an array', () => {
    expect(Array.isArray(firstNPrimes(0))).to.equal(true);
  });
  it('should return an array of length n', () => {
    expect(firstNPrimes(0).length).to.equal(0);
    expect(firstNPrimes(1).length).to.equal(1);
    expect(firstNPrimes(10).length).to.equal(10);
    expect(firstNPrimes(100).length).to.equal(100);
  });
  it('should return an array of primes', () => {
    expect(firstNPrimes(10)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});

describe('primeProductMatrix', () => {
  const testMatrix1 = primeProductMatrix(1);
  const testMatrix10 = primeProductMatrix(10);
  it('should return an array', () => {
    expect(Array.isArray(testMatrix1)).to.equal(true);
    expect(Array.isArray(testMatrix10)).to.equal(true);
  });
  it('should return an array of arrays', () => {
    expect(Array.isArray(testMatrix1[0])).to.equal(true);
    for (let i = 0; i < 10; i += 1) {
      expect(Array.isArray(testMatrix10[i])).to.equal(true);
    }
  });
  it('should return a matrix of products of primes', () => {
    expect(testMatrix1).to.eql([[4]]);
    expect(testMatrix10).to.eql(
      [[4, 6, 10, 14, 22, 26, 34, 38, 46, 58],
      [6, 9, 15, 21, 33, 39, 51, 57, 69, 87],
      [10, 15, 25, 35, 55, 65, 85, 95, 115, 145],
      [14, 21, 35, 49, 77, 91, 119, 133, 161, 203],
      [22, 33, 55, 77, 121, 143, 187, 209, 253, 319],
      [26, 39, 65, 91, 143, 169, 221, 247, 299, 377],
      [34, 51, 85, 119, 187, 221, 289, 323, 391, 493],
      [38, 57, 95, 133, 209, 247, 323, 361, 437, 551],
      [46, 69, 115, 161, 253, 299, 391, 437, 529, 667],
      [58, 87, 145, 203, 319, 377, 493, 551, 667, 841]]);
  });
});

describe('makePrimeTable', () => {
  const primeTable1 = makePrimeTable(1);
  const primeTable10 = makePrimeTable(10);
  it('should return a cli-table', () => {
    expect(primeTable1 instanceof Table).to.equal(true);
    expect(primeTable10 instanceof Table).to.equal(true);
  });
  it('should have the appropriate contents', () => {
    expect(primeTable1.length).to.equal(1);
    expect(primeTable10.length).to.equal(10);
    expect(primeTable1.options.head).to.eql(['', 2]);
    expect(primeTable10.options.head).to.eql(['', 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});
