const express = require('express');
const { route } = require('express/lib/application')
const Registerroutes = express.Router();
const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')



Registerroutes.get('/register', (req, res) => {
    res.render('Authentication/register');
})


Registerroutes.post('/register', async(req, res) => {
    try {
        const registeruser = new User({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            address: req.body.address,
            password: req.body.password,
            phone: req.body.phone

        })

       await registeruser.save();
       res.render("Authentication/login")

    } catch (error) {
        res.status(400).send(error);
    }







})

 

module.exports = Registerroutes