const express = require('express');
const router = express.Router();
const Register = require("../models/registerModel")

router.get("/regformFO", (req,res)=>{
    res.render("regformFO")
});


router.post("/regformFO", async(req,res)=>{
    console.log(req.body)
    try{
        const user = new Register(req.body);
        const userName = await Register.findOne({uniquenumber:req.body.uniquenumber})
        // if(userName){
        //     return res.send("this unique id already exists")
        // }
        // else{
        //     await Register.register(user,req.body.password,(error)=>{
        //         if(error){
        //             throw error
        //         }
        //         res.redirect("/login")
        //     })
        // }
        await user.save()
        res.redirect('/regformFO')
    
    }
    catch(error){
        res.status(400).send("sorry it seems there is trouble accessing this page")
        console.log(error)
    }
})

module.exports = router


