const express = require("express");
const errorhandler = require('./middleware/errorhandler')
const app = express();
const dotenv = require("dotenv")
const Connectdb = require('./config/dbConnection')
const router = require('./routes/contactroutes')
const routers = require('./routes/userroutes')

dotenv.config()
Connectdb();
const PORT = process.env.PORT || 5001;

app.use(express.json())    //  THIS IS BODY PARSER HELPS TO LOG THE MSSGS TO PROPER FORMAT. 
app.use('/api/contact', router )
app.use(errorhandler)
app.use('/api/users', routers)

app.listen(PORT, () => {
    // console.log("Connection string:", process.env.CONNECTION_STRING )
    console.log(`server is running on Port ${PORT}`)
});
