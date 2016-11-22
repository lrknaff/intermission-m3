'use strict';
const qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then((id) => {
  return qhttp.read("http://localhost:7001/" + id);
})
.then((json) => {
  console.log(JSON.parse(json))
})
.then(null, console.error)
.done()
