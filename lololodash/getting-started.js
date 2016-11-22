const _ = require('lodash');

const worker = (userList) => {
  return _.filter(userList, {active: true})
}

module.exports = worker;
