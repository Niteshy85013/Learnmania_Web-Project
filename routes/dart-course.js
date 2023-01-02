const express = require('express');
const {route} = require('express/lib/application')
const Dartroutes = express.Router();


Dartroutes.get('/dart-course',(req,res)=>{
    res.render('modules/dart_course');
})

module.exports = Dartroutes