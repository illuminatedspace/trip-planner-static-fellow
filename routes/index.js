const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res, next) => {
  res.send('hello there!')
})

module.exports = router
