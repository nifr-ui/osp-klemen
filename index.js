const express = require('express')
//const pug = require('pug')
const app = express()
const port = 3000
const path = require('path')
const router = express.Router()
const bodyParser= require('body-parser');


app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/public/views')
app.use('/', router)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})



//app.set('view engine', 'pug')
app.listen(port, () => console.log(`Example app listening on port ${port}!`))