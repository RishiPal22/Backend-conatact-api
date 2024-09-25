const express =  require('express');
const app = express();
const asynchandler = require('express-async-handler')

const getContacts = asynchandler( async (req,res) => {
    res.status(200).json({message : 'Get all contacts'})
});

const createContact =asynchandler( async  (req,res) => {
    console.log(req.body)
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(404);
        throw new Error("All the fields are mandatory")
    }
    res.status(201).json({message : ' contact created'})
});

const getContact = asynchandler( async (req,res) => {
    res.status(201).json({message :`Get contact for ${req.params.id}`})
});

const updateContact = asynchandler( async (req,res) => {
    res.status(201).json({message : `Contact id for ${req.params.id} is updated `})
});

const deleteContact = asynchandler( async (req,res) => {
    res.status(201).json({message : `Contact id for ${req.params.id} got deleted `})
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact }