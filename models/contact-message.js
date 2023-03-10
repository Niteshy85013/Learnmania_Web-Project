const mongoose = require("mongoose");
const validator = require("validator");


const contactSchema = mongoose.Schema({
    fullname:{
        type: String
         
    },
    email:{
        type:String
    },
    desc:{
        type:String
         
    }
     
})

//phone:{
//     type:String,
//     required:true,
//     min:10,

// }
contactSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Creating the collections
const Contact = mongoose.model("Contact",contactSchema);
module.exports = Contact;