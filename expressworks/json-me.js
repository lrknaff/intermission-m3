const express = require('express')
const fs = require('fs')
const app = express()

app.get('/books', (req, res) => {
  let filename = process.argv[3]
  fs.readFile(filename, (e, data) => {
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
