const express = require('express');
const routers = express.Router();
const {registerUser, loginUser, currentUser} = require('../controllers/userController');
const validate = require('../middleware/validatehandler');


routers.post('/register', registerUser);

routers.post('/login', loginUser);

routers.get('/current', validate, currentUser);


module.exports = routers;