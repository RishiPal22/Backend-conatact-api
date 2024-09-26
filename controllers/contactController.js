const express =  require('express');
const app = express();
const Contact = require('../models/contactModels')
const asynchandler = require('express-async-handler')

const getContacts = asynchandler( async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
});

const createContact =asynchandler( async  (req,res) => {
    console.log(req.body)
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(404);
        throw new Error("All the fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact)
});

const getContact = asynchandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404).json({message: "No contact found for this ID"})
    }
    
    res.status(201).json(contact)
});

const updateContact = asynchandler( async (req,res) => {
    res.status(201).json({message : `Contact id for ${req.params.id} is updated `})
});

const deleteContact = asynchandler( async (req,res) => {
    res.status(201).json({message : `Contact id for ${req.params.id} got deleted `})
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact }