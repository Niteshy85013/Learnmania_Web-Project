const express = require('express');
const {route} = require('express/lib/application')
const Notesroutes = express.Router();
const Note = require("../models/notes")
// const ejsLint = require('ejs-lint');


Notesroutes.get('/notes',(req,res)=>{

    
    res.render('Notes/notes');
})


Notesroutes.get('/add-note',(req,res)=>{
    res.render('Notes/add-note');
})

Notesroutes.post("/note", async(req,res)=>{
    const notData = new Note({
        
        course: req.body.course,
        title: req.body.title,
        desc: req.body.desc

    });
    await notData.save();
    const response = {message: `title: ${req.body.title}`+"Added Success."}; 
    res.render('Notes/notes');
        // if(err){
        //     res.json({ message: err.message, type: "danger"});
        // }else{
        //     req.session.message = {
        //         type: "success",
        //         message: "Notes added successfully"
        //     };
            
});
    
 
module.exports = Notesroutes