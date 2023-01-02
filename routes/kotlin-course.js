const express = require('express');
const {route} = require('express/lib/application')
const Kotlinroutes = express.Router();


Kotlinroutes.get('/kotlin-course',(req,res)=>{
    res.render('modules/kotlin_course');
})

module.exports = Kotlinroutes