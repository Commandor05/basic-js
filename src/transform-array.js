const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformedArray = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      transformedArray.push(arr[i + 1]);
      continue;
    }
    
    if (arr[i] === '--discard-prev') {
      transformedArray.pop();
      continue;
    }
    
    transformedArray.push(arr[i]);
  }
  arr = transformedArray;
  return arr;
}

module.exports = {
  transform
};
