const express = require('express');
const router = express.Router();
const Register = require("../models/registerModel")

router.get("/register", (req,res)=>{
    res.render("register")
});


router.post("/register", async(req,res)=>{
    console.log(req.body)
    try{
        const user = new Register(req.body);
        let userName = await Register.findOne({email:req.body.email})
        if(userName){
            return res.send("this unique id already exists")
        }
        else{
            await Register.register(user,req.body.password,(error)=>{
                if(error){
                    throw error
                }
                res.redirect("/login")
            })
        }
    
    }
    catch(error){
        res.status(400).send("sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})

module.exports = router


