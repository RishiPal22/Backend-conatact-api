const express = require('express');
const routers = express.Router();
const {registerUser, loginUser, currentUser} = require('../controllers/userController')


routers.post('/register', registerUser);

routers.post('/login', loginUser);

routers.get('/current', currentUser);


module.exports = routers;