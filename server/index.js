import express from 'express'
import Connection from './db/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import router from './router/route.js';


const app=express();
const PORT=8000;

app.use(cors())
app.use(express.json());
app.use('/',router)

dotenv.config()
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASS;

Connection(USERNAME,PASSWORD);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});

