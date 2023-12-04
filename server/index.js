const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
const dbConnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongo connected ......")
    }
    catch(error){
        console.log(error)
    }
}

dbConnect();

app.get("/register" ,(req,res)=>{
    res.json('done');
})

const PORT = 4000;
app.listen(PORT ,()=>{
    console.log(`server is running at ${PORT}`)
});