
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userReg')
  .then(() => console.log('Connected!'));

const express = require("express");
const app = express();
app.use(express.json()); // to use json
app.use(express.urlencoded({extended:false})); // to use form

const User = require("./models/userReg")


app.get("/", (req, res)=>{
    res.send("response is sent by ekansh")
})

// find all data from db
app.get("/user", async(req, res)=>{
    try {
        const user = await User.find({});
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})




// find the data of a user by id
app.get("/user/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// update the data of a user by id
app.put("/user/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        
        if(!user){
            // cant find the user id in DB
            return res.status(404).json({message: "cant find the user with id &{id}"})
        }
        

        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})




// delete the data
app.delete("/user/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        
        if(!user){
            // cant find the user id in DB
            return res.status(404).json({message: "cant find and delete the user with id &{id}"})
        }
        
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

// create new data
app.post("/user", async(req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


app.listen(3000, ()=>{
    console.log("NODE API  is running on port 3000 and my name is ekansh");
})