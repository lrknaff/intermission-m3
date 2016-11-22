const _ = require('lodash');

const worker = (objects) => {
  let average,
      underperform,
      overperform;

  objects = _.sortBy(objects, 'income');

  average = _.reduce(objects, (sum, num) => {
    return sum + num.income;
  }, 0);

  average = average / objects.length;

  underperform = _.filter(objects, (num) => {
    return num.income <= average
  })

  overperform = _.filter(objects, (num) => {
    return num.income > average;
  })

  return {
    average,
    underperform,
    overperform
  }
}

module.exports = worker;
