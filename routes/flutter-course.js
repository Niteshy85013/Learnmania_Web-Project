const express = require('express');
const {route} = require('express/lib/application')
const Flutteroutes = express.Router();


Flutteroutes.get('/flutter-course',(req,res)=>{
    res.render('modules/flutter_course');
})

module.exports = Flutteroutes