import mongoose from "mongoose";


const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:20
    },
    
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true

    },
    email:{
        type:String,
        require:true,
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    
    password:{
        type:String,
        require:true,
        min:8,
        max:12,
        trim:true,
        required:true,
    }

});

export const User=mongoose.model('User',UserSchema)
