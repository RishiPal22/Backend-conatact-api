const express = require('express');
const asynchandler = require('express-async-handler');
const user = require('../models/userModel');

const registerUser = asynchandler(async(req,res) => {
    const {username, email, password} = req.body
    if(!username || !email || !password){
        res.status(400).json("All the fields are mandatory!");
    }
    res.json("Register for user")
});

const loginUser = asynchandler(async(req,res) => {
    res.json("Login for user")
});

const currentUser = asynchandler(async(req,res) => {
    res.json("Current details for user")
});

module.exports = {registerUser,loginUser, currentUser }