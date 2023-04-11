const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const passport = require("passport");

const mongoose= require("mongoose");
const bodyParser= require("body-parser");
const config = require("./config/database")
const Register = require("./models/registerModel")
const session= require("express-session");

// const registerRoutes = require("./Routes/registerRoutes")
// const loginRoutes = require("./Routes/loginRoutes")
// const agricOfficerRoutes = require("./Routes/agricOfficerRoutes")
const regformFORoutes = require("./Routes/regformFORoutes")




app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// creating a connection between the controller and database
mongoose.connect(config.database,{
    //useNEW collects data then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db= mongoose.connection
// checking if db has connected
db.once("open", ()=>{
console.log("connected to db")
})
db.on("error",(err)=>{
console.error(err)
})

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));


app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))


// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(Register.createStrategy());
passport.serializeUser(Register.serializeUser());
passport.deserializeUser(Register.deserializeUser());


app.use(express.static("public"))

// app.use("/", registerRoutes)
// app.use("/", loginRoutes)
// app.use("/", agricOfficerRoutes)
app.use("/", regformFORoutes)








// this should always be the last line in your server file
app.listen(3000, () => console.log('listening on port 3000'));