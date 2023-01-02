const mongoose = require('mongoose');



var userSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },
     
    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    
    phone:{
        type:String

    },
    // image:{
    //     type:String

    // }
     
});

// Creating the collections
const User = mongoose.model("Student",userSchema);
module.exports = User;