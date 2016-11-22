const _ = require('lodash');

const worker = (list) => {
 return _
 .chain(list)
 .map((item) => {
   return (item + 'chained')
   .toUpperCase()
 })
 .sortBy()
 .value()
}

module.exports = worker;
