import express from 'express';
import mongoose from 'mongoose';

export const Connection=async(USERNAME,PASSWORD)=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@company.ygjud.mongodb.net/?retryWrites=true&w=majority&appName=company`
    try{
        await mongoose.connect(URL)
        console.log('DB connected successfully')

    }
    catch(error){
        console.log('Error while connecting the DB', error.message)
    }
}

export default Connection