const express = require('express');
const {route} = require('express/lib/application')
const Profileroutes = express.Router();
// const Note = require("../models/notes")

Profileroutes.get('/profile',(req,res)=>{
    res.render('profile');
})
module.exports = Profileroutes