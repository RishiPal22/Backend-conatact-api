const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({

    name:{
        type: String,
        required: [true, "Your name please"]
        
    },

    email:{
        type: String,
        required: [true, "Your email please"]
        
    },
    phone:{
        type: String,
        required: [true, "Your phone please"]
        
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Contact', contactSchema);