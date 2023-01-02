const express = require('express');
const {route} = require('express/lib/application')
const Courseshowroutes = express.Router();


Courseshowroutes.get('/courseshow',(req,res)=>{
    res.render('Randoms/courseshow');
})




module.exports = Courseshowroutes