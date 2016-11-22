'use strict';
require('es6-promise')

const promise = new Promise((fulfill, reject) => {
  console.log('MAIN PROGRAM')
  fulfill('PROMISE VALUE');
})

promise.then(console.log);
