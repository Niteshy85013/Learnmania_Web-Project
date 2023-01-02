const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
    Fullname:{
        type: String
         
    },
    Course_Rating:{
        type:String
    },

    UI_Rating:{
        type:String
    },
    
    Feature_Rating:{
        type:String
    },
    desc:{
        type:String
         
    }
     
})

// Creating the collections
const Feedback = mongoose.model("Feedback",feedbackSchema);
module.exports = Feedback;