const express = require('express')
const testSubjectRouter = require('./testSubjects/testSubjects-router')
const server = express()

server.use(express.json())

server.use('/api/testSubjects', testSubjectRouter)

server.get('/', (req, res)=>{
    res.send(`<h2>Api for testing Backend</h2>`)
})

module.exports = server