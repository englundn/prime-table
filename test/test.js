const expect = require('chai').expect;
const firstNPrimes = require('../index.js');

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
