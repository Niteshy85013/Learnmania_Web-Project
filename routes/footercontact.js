const { application } = require('express');
const express = require('express');
const {route} = require('express/lib/application')
const FooterContactroutes = express.Router();
const footercontact = require("../models/footer-contact")

// FooterContactroutes.get('/footer',(req,res)=>{
//     res.render('partials/footer');
// })

FooterContactroutes.post("/footer",async(req,res)=>{
        const contData = new footercontact(req.body)
        await contData.save();
        res.render('index')

})
module.exports = FooterContactroutes