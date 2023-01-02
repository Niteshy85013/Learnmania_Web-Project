const express = require('express');
const {route} = require('express/lib/application')
const Courseroutes = express.Router();


Courseroutes.get('/course',(req,res)=>{
    res.render('modules/courses');
})

module.exports = Courseroutes