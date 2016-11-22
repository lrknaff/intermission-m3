'use strict';
require('es6-promise')

const firstPromise = first()

const secondPromise = firstPromise.then((val) => {
  return second(val)
})

secondPromise.then(console.log)
