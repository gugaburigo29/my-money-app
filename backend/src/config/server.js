const cors = require('./cors')

const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port, function () {
    console.log(`Backend rodando. http://localhost:${port}`)
})

module.exports = server
