const express = require('express');
const router = express.Router();
const Register = require("../models/registerModel")

router.get("/Register", async(req,res)=>{
    const FOdata= await Register.find()
    console.log(FOdata)
    res.render("Register", {data:FOdata})
});

//this is the register route for the agric officer
// router.post("/registerfarmerone", async(req,res)=>{
//     try{
//         const FOreg= new Register(req.body);
//         let username= await Register.findOne({username:req.body.username})
//         if(username){
//             return res.send("this unique id already exists")
//         }
//         else{
//             await Register.register(user,req.body.password,(error)=>{
//                 if(error){
//                     throw error
//                 }
//                 const FOdata= Register.find({})
//                  res.redirect("/Register")
//             })
//         }
    
//     }
//     catch(error){
//         res.status(400).send("sorry it seems there is trouble accessing this page")
//         console.log(error)
//     }
//     })

    module.exports= router
