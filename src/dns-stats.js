const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsCalculation = domains.reduce((acc, domain) => {
    let subDomains = domain.split('.').reverse();
    let compound = '';
    for (let i = 0; i < subDomains.length; i++) {
      compound += `.${subDomains[i]}`;
 
      if (`${compound}` in acc) {
        acc[`${compound}`] = acc[`${compound}`] + 1; 
      } else {
        acc[`${compound}`] =  1;
      }      
    }
    
    return acc;   
  }, {});

  return domainsCalculation;
}

module.exports = {
  getDNSStats
};
