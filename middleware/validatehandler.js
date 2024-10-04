const jwt = require('jsonwebtoken');
const asynchandler = require("express-async-handler");

const validate = asynchandler(async (req,res,next)=>{
    let token;
    let auth = req.headers.authorization || req.headers.Authorization
    if(auth && auth.startsWith("Bearer")){
        token = auth.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
            if(err){
                res.status(400)
                throw new Error(" User is not authorized.")
            }
            apple = decoded.user1
            // res.json(decoded)
            next();
            
        });
        if(!token){
            res.status(400).json("User is not authorized or the token is missing.")
        }
    }
})

module.exports = validate;