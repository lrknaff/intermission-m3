const _ = require('lodash');

const worker = (variable) => {
  let ouput = "Hello <%= name %> (logins: <%= login.length %>)"
  return _.template(ouput)(variable);
}

module.exports = worker;
