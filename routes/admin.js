const express = require('express');
const {route} = require('express/lib/application')
const Adminroutes = express.Router();


Adminroutes.get('/admin',(req,res)=>{
    res.render('admin');
})

module.exports = Adminroutes