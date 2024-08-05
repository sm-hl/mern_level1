const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // send simple code
  // res.send('<h1>Hello World!</h1>')
  // send file html
  res.sendFile('./views/home.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})