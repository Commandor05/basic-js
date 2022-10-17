const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let teamName = [];
  
  if(!Array.isArray(members)) {
     return false;
  }
  
  teamName = members.reduce((accum, item) => {
    
    if ((typeof item) !== "string" || item.trim().length === 0) {
      return accum;
    }

    const member = item.trim();
    const firstChar = member[0].toUpperCase();
    
    return [...accum, firstChar];
  }, []);
  
  
  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
