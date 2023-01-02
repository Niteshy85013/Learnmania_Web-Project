const express = require('express');
const {route} = require('express/lib/application')
const Blogroutes = express.Router();


Blogroutes.get('/blog',(req,res)=>{
    res.render('Randoms/blog');
})

module.exports = Blogroutes