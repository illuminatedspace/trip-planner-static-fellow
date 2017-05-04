const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')

const router = require('./routes')

const app = express()
module.exports = app

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + './public'))

app.use('/', router)

app.use((err, req, res, next) => {
  console.error(err.stack)
  const error = {
    message: err.message || "oops",
    status: err.status || 500
  }
  res.render('error', error)
})
