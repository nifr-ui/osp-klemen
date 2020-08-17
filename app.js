const compression = require('compression')
const express = require('express')
const helmet = require('helmet');
const app = express()
app.use(compression())

const port = 3001
const router = express.Router()
const bodyParser= require('body-parser');


app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/public/views')
app.use('/', router)
//app.use(helmet());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))