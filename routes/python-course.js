const express = require('express');
const {route} = require('express/lib/application')
const Pythonroutes = express.Router();


Pythonroutes.get('/python-course',(req,res)=>{
    res.render('modules/python_course');
})


module.exports = Pythonroutes