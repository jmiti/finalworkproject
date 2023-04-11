// const express = require ("express");
// const router = express.Router();
// const passport = require ("passport");
// // imported model
// const Register = require("../models/registerModel")

// router.get("/login",(req,res)=>{
//     res.render("login")
// });



// router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), async(req,res)=>{
//     req.session.user = req.user
//     let userExist = await Register.findOne({email: req.user.email,password: req.user.password});
//     console.log("this user exists", userExist)
//     console.log("this is the user session:", req.session)
//     res.redirect("/login")
// })



// module.exports = router