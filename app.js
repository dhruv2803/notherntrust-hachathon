const express = require('express')
const path = require('path')
const app = express()
const func = require('./function.js')


app.get('/home', (req, res) => {
    const {symbol} = req.body.symbol
    res.send()
})

app.listen(8080,() => {
    console.log("App Starting")
})     