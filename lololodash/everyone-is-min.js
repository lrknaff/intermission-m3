const _ = require('lodash');

const worker = (townList) => {
  const groups = {
    hot: [],
    warm: []
  }

  const tempCheck = (townList) => {
    return townList > 19;
  }

  _.forEach(townList, (town, name) => {
    if(_.every(town, tempCheck)) {
      groups.hot.push(name)
    } else if (_.some(town, tempCheck)) {
      groups.warm.push(name)
    }
  })

  return groups;
}

module.exports = worker;
