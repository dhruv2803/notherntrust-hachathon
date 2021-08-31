const express = require('express');
const path = require('path');
const app = express();
const cleanDataBySymbol=require('./functions/cleanDataBySymbol.js');
const data=require("./functions/dataclean.js");

app.post('/home', (req, res) => {
    if(req.body.symbol!=''){
      const data=cleanDataBySymbol(req.body.symbol);
      res.status(200).json(data);
    }
    // const {symbol} = req.body.symbol
    // res.status(200).json()
})

app.listen(8080,() => {
    console.log("App Starting at port 8000")
})     