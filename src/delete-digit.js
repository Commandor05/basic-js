const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringedNumber = n.toString();
  const length = stringedNumber.length;
  let secondDigit = 0;
  let result = 0;
  
  if (length > 1) {
    secondDigit = Number(stringedNumber[1]);
    result = n % Math.pow(10, length - 1) ;
    result = secondDigit === 0 ? result + Math.pow(10, length - 2) : result;
  }
  
  return result;
}

module.exports = {
  deleteDigit
};
