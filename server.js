const http = require('http')
const server = http.createServer()
const db = require('./db')

server.on('request', require('./app'))

//import db, sync force true, then server.listen, .catch

db.db.sync({force: true})
.then(() => server.listen(1337, () => {
  console.log('You are now tuning into 1337 radio')
}))
.catch(console.error())
