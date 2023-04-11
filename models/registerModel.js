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
            unique:true
        },

        contact:{
            type:String,
            trim:true,
            
        },
    
        dob:{
            type:String,
            trim:true,
            default:null
            
        },

        gender:{
            type:String,
            trim:true,
        },

        
        ward:{
            type:String,
            trim:true,
            default:null
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
        uniquenumber:{
            type:String,
            trim:true,
            default:null
        
        },
        role:{
            type:String,
            trim:true,
            default:null
        
        },
        ninnumber:{
            type:String,
            trim:true,
            default:null
        
        },
        phonenumber:{
            type:String,
            trim:true,
            default:null
        
        },
        residenttype:{
            type:String,
            trim:true,
            default:null
        
        },
        periodofstay:{
            type:String,
            trim:true,
            default:null
        
        },
        regdate:{
            type:String,
            trim:true,
            default:null
        
        },
        streetname:{
            type:String,
            trim:true,
            default:null
        
        },
        housenumber:{
            type:String,
            trim:true,
            default:null
        
        },
        


        
})
registerSchema.plugin(passportLocalMongoose, );
module.exports = mongoose.model("Register",registerSchema)