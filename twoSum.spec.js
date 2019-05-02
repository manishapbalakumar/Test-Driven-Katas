const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('the function returns an array', () => {
    expect(twoSum([])).to.be.an('array');
  });

  it('returns an empty array if the array length is less than two', () => {
    expect(twoSum([4], 10)).to.be.an('array').that.is.empty;
    expect(twoSum([], 10)).to.be.an('array').that.is.empty;
  });

  it('returns an emtpy array if no indices add up to the target', () => {
    expect(twoSum([6, 8, 4], 100)).to.be.an('array').that.is.empty;
  });

  it('returns the two indices that sum to the target', () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });
});
