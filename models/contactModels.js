const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },

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