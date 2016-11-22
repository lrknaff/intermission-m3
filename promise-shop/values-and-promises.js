'use strict';
require('es6-promise')

function attachTitle(arg) {
  return 'DR. ' + arg;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log)
