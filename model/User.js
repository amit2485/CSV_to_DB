const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    }, 
    address:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zipcode:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("User",UserSchema)