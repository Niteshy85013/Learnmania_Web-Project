const mongoose = require("mongoose");

const footer_contactSchema = mongoose.Schema({
    news_email:{
        type:String
    }
     
})
// Creating the collections
const footercontact = mongoose.model("Footer_Contact",footer_contactSchema);
module.exports = footercontact;
