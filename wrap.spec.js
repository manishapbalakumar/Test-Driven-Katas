const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns a single character if a single character was provided', () => {
    expect(wrap('a', 10)).to.equal('a');
  });
  it('Returns the string if the string is less than or equal to the maxLen', () => {
    expect(wrap('asdfgewgsf', 10)).to.equal('asdfgewgsf');
  });
  it('Returns the string if the string is less than or equal to the maxLen', () => {
    expect(wrap('asdfgewgsf', 10)).to.equal('asdfgewgsf');
  });
  it('Returns the string on two lines if the string is greater than the maxLen and less than or equal to twice the maxLen', () => {
    expect(wrap('asdfgewgsf asdfgewgsf', 10)).to.equal(
      'asdfgewgsf\nasdfgewgsf'
    );
  });
  it('Returns the string on multiple lines if the string is greater than the maxLen', () => {
    expect(wrap('asdfgewgsf asdfgewgsf asdfgewgsf', 10)).to.equal(
      'asdfgewgsf\nasdfgewgsf\nasdfgewgsf'
    );
  });
});
