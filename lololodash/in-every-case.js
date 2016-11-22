const _ = require('lodash');

const worker = (townList) => {
  return _.forEach(townList, (item) => {
    if (item.population > 1) {
      item.size = 'big'
    } else if (item.population < 0.5) {
      item.size = 'small'
    } else {
      item.size = 'med'
    }
  })
}

module.exports = worker;
