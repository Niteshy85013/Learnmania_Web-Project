const express = require('express');
const {route} = require('express/lib/application')
const Scheduleroutes = express.Router();


Scheduleroutes.get('/schedule',(req,res)=>{
    res.render('Schedules/schedule');
})

 
module.exports = Scheduleroutes