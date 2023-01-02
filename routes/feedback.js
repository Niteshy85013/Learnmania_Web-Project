const express = require('express');
const {route} = require('express/lib/application')
const Feedbackroutes = express.Router();
const Feedback = require("../models/feedback")

Feedbackroutes.get('/feedback',(req,res)=>{
    res.render('Randoms/feedback');
})


Feedbackroutes.post("/feedback-form",async(req,res)=>{
    const feedData = new Feedback(req.body)
    await feedData.save();
    res.render('modules/courses')

})
module.exports = Feedbackroutes