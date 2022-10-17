const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let stingifiedNumber = n.toString().split('');
  
  while(stingifiedNumber.length > 1) {
    let calculatedNumber = stingifiedNumber.reduce((acc, number) => acc = Number(acc) + Number(number), 0);
    stingifiedNumber = calculatedNumber.toString().split('');
  }
  
  return Number(stingifiedNumber[0]);
}

module.exports = {
  getSumOfDigits
};
