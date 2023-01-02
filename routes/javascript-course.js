const express = require('express');
const {route} = require('express/lib/application')
const Javascriptroutes = express.Router();


Javascriptroutes.get('/javascript-course',(req,res)=>{
    res.render('modules/javascript_course');
})

module.exports = Javascriptroutes