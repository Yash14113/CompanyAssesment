import mongoose from "mongoose";


const RegisterSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20
    },
    
    age:{
        type:Number,
        trim:true,
        required:true,

    },
    company:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },
    
    role:{
        type:String,
        trim:true,
        required:true,
    }

});

export const Register=mongoose.model('register',RegisterSchema)
