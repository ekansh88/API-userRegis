const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        email:{
            type:String,
            require: [true, "enter id"]
        },
        password:{
            type:String,
            require: [true, "enter id"]
        }
    },
    {
        timestamps: true 
    }

)

const User = mongoose.model("User", userSchema);

module.exports = User;