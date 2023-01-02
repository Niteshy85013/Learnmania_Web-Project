const { application } = require('express');
const express = require('express');
const {route} = require('express/lib/application')
const Contactroutes = express.Router();
const Contact = require("../models/contact-message")

// Contactroutes.get('/contact',(req,res)=>{
//     res.render('partials/home');
// })

Contactroutes.post("/contact",async(req,res)=>{
        const contData = new Contact(req.body)
        await contData.save();
        res.render('index')

})
module.exports = Contactroutes