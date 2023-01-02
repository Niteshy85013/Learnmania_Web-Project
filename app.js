
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
var app = express();
const bodyparser = require('body-parser');


// Setting PORT
app.listen(process.env.PORT|5556,()=>{
    console.log("Server started")

});

// Using body Parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

 

// Setting Static Files
app.use('/static',express.static("public"))
// OR
// app.use(express.static("public"))
 

// Setting Templates engine
app.set('view engine','ejs')
// app.set("views","views")
// hbs.registerPartials("views/partials")

// DB Connection
mongoose.connect("mongodb://localhost/LearnMeniaPro", () => {
    console.log("DB connection")
})
mongoose.con

 

//setting ejs routes
const routes = require("./routes/index")
const Courseroutes = require("./routes/course")
const Adminroutes = require("./routes/admin")
const Dartroutes = require("./routes/dart-course")
const Flutteroutes = require("./routes/flutter-course")
const Kotlinroutes = require("./routes/kotlin-course")
const Javaroutes = require("./routes/java-course")
const Pythonroutes = require("./routes/python-course")
const Blogroutes = require("./routes/blog")
const Scheduleroutes = require("./routes/schedule")
const Contactroutes = require("./routes/contact")
const Loginroutes = require("./routes/login")
const Registerroutes = require("./routes/register")
const Courseshowroutes = require("./routes/courseshow")
const Notesroutes = require("./routes/notes")
const Feedbackroutes = require("./routes/feedback")
const Profileroutes = require("./routes/profile")
const FooterContactroutes = require("./routes/footercontact")
app.use('',routes)
app.use('',Courseroutes)
app.use('',Adminroutes)
app.use('',Dartroutes)
app.use('',Flutteroutes)
app.use('',Kotlinroutes)
app.use('',Javaroutes)
app.use('',Pythonroutes)
app.use('',Blogroutes)
app.use('',Scheduleroutes)
app.use('',Contactroutes)
app.use('',Registerroutes)
app.use('',Loginroutes)
app.use('',Courseshowroutes)
app.use('',Notesroutes)
app.use('',Feedbackroutes)
app.use('',Profileroutes)
app.use('',FooterContactroutes)





 

  