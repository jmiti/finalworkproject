const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const registerSchema = new mongoose.Schema({
    lastname:{
        type:String,
        trim:true
    },

    firstname:{
        type:String,
        trim:true
    },

        email:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },

        contact:{
            type:String,
            trim:true,
            
        },
    
        dob:{
            type:String,
            trim:true,
            
        },

        male:{
            type:String,
            trim:true,
        },

        female:{
            type:String,
            trim:true,
        },

        ward:{
            type:String,
            trim:true,
        
        },

        password:{
            type:String,
            trim:true,
            unique:true,
            required:true,
        },

        confirmpassword:{
            type:String,
            trim:true,
        
        },

        checkme:{
            type:String,
            trim:true,
        
        },

        
})
registerSchema.plugin(passportLocalMongoose, {usernameField: "email"});
module.exports = mongoose.model("Register",registerSchema)