const express = require('express');
const {route} = require('express/lib/application')
const User = require("../models/User")
const Loginroutes = express.Router();


Loginroutes.get('/login',(req,res)=>{
    res.render('Authentication/login');
})


Loginroutes.post('/login',async(req,res)=>{
    try{

        const username = req.body.username;
        const password = req.body.password;

        const userusername = await User.findOne({username:username});
         
        if(userusername.password ===password){
            res.status(201).render("modules/courses")
        }else{
            res.send("invalid Username of Password");
        }

    }catch (error){
        res.status(400).send("invalid Username of Password")

    }
})

module.exports = Loginroutes