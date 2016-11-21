const _ = require('lodash');

const worker = (itemList) => {
  return _.sortBy(itemList, 'quantity').reverse()
}

module.exports = worker;
