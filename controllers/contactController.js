const express =  require('express');
const app = express();

const getContacts = (req,res) => {
    res.status(200).json({message : 'Get all contacts'})
};

const createContact = (req,res) => {
    console.log(req.body)
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All the fields are mandatory")
    }
    res.status(201).json({message : ' contact created'})
};

const getContact = (req,res) => {
    res.status(201).json({message :`Get contact for ${req.params.id}`})
};

const updateContact = (req,res) => {
    res.status(201).json({message : `Contact id for ${req.params.id} is updated `})
};

const deleteContact = (req,res) => {
    res.status(201).json({message : `Contact id for ${req.params.id} got deleted `})
};


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact }