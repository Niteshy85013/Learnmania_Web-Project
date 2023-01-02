const express = require('express');
const {route} = require('express/lib/application')
const Javaroutes = express.Router();


Javaroutes.get('/java-course',(req,res)=>{
    res.render('modules/java_courses');
})

module.exports = Javaroutes