'use strict';
require('es6-promise')

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300)
})

function onReject(error) {
  console.log(error.message)
}

promise.then(null, onReject)
