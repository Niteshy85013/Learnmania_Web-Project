const mongoose = require("mongoose");



var noteSchema = new mongoose.Schema({
    
    course: {
        type: String,
        required: 'This field is required.'
    },
    title: {
        type: String,
        required: 'This field is required.'
    },
    desc:{
        type: String,
        required: 'This field is required.'

    },
    dateAdded:{
        type: Date,
        default: Date.now,
    }
});


// Creating the collections
module.exports = mongoose.model("Note",noteSchema);
 
