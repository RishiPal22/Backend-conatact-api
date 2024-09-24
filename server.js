const express = require("express");
const app = express();
const dotenv = require("dotenv")
const router = require('./routes/contactroutes')

dotenv.config()
const PORT = process.env.PORT || 5001;

app.use(express.json())    //  THIS IS BODY PARSER HELPS TO LOG THE MSSGS. 
app.use('/api/contact', router )

app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
});
