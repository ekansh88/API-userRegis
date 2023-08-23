const mongoose = require('mongoose');

// these are all modules of user , their post and their comments and like
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
// new post by the email that is registered
const userPost = mongoose.Schema(
    {
        email:{
            type:String,
            require: [true, "enter id"]
        },
        path:{
            type:String,
            require: [true, "enter id"]
        }
    },
    {
        timestamps: true 
    }

)

// incresing the like and adding comment in the post
const postLikeComment = mongoose.Schema(
    {
        postId:{
            type:String,
            require: [true, "enter id"]
        },
        like:{
            type:Number,
            require: [true, "enter id"]
        },
        comment:{
            type:String,
            require: [true, "enter id"]
        }
    },
    {
        timestamps: true 
    }

)

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", userPost);
const PostLikeComment = mongoose.model("PostLikeComment", postLikeComment);

module.exports = User;
module.exports = Post;
module.exports = PostLikeComment;
