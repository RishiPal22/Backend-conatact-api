const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const asynchandler = require('express-async-handler');
const user = require('../models/userModel');

const registerUser = asynchandler(async(req,res) => {
    const {username, email, password} = req.body
    if(!username || !email || !password){
        res.status(400).json("All the fields are mandatory!");
    }
    const emailcheck = await user.findOne({email})
    if(emailcheck){
        res.status(400)
        throw new Error("Username alerady exists.")
    }else{
        const hashedpassword = await bcrypt.hash(password, 10)
        const reguser = await user.create({
            username,
            email,
            password: hashedpassword
        });
        if(reguser){
            res.status(201).json("User created")
            console.log(reguser)
        }
        else{
            res.status(400)
            throw new Error("Something went wrong try again later")
        }
    }
});

const loginUser = asynchandler(async(req,res) => {
    const {email,password} = req.body
    if(!email || !password){
        res.status(400).json("All the fields are mandatory!")
    }
    else{
        const User = await user.findOne({email})
        if(User && (await bcrypt.compare(password, User.password))){
            const accessToken = jwt.sign({
                user1:{
                    username: User.username,
                    email: User.email,
                    id: User.id
                },
                    
            }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"}
        );
           
            res.status(201).json({accessToken});          
        }
        else{
            res.status(400)
            throw new Error("email or password is not valid")
        }
    }
});

const currentUser = asynchandler(async(req,res) => {
    res.json(apple)
});

module.exports = {registerUser,loginUser, currentUser }