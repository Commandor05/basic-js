const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  result = '';
  const seasones = new Map([
    ['spring', [2, 3, 4]],
    ['summer', [5, 6, 7]],
    ['autumn', [8, 9, 10]],
    ['winter', [0, 1 , 11]]
  ]);
  
  
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  
  
  if (!(date instanceof Date) || !(typeof date.getMonth === 'function') || (date.toString !== Date.prototype.toString)){
    throw new Error('Invalid date!');
  }
  
  try {  
    const month = date.getMonth();

    for (let [season, monthIndexes] of seasones) {
      if (monthIndexes.includes(month)) {
        result = season;
        break;
      }
    }
  } catch(e) {
    throw new Error('Invalid date!');
  }
  
  return result;
}

module.exports = {
  getSeason
};
