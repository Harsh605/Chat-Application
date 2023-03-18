import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    iss:{
        type:String
    },
    nbf:{
        type:Number
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email_verified:{
        type:Boolean
    },
    name:{
        type:String
    },
    picture:{
        type:String,
        required:true

    },
    given_name:{
        type:String,
        required:true
    },
    family_name:{
        type:String
    },
    iat:{
        type:Number
    },
    exp:{
        type:Number
    },
    jti:{
        type:String
    },

})

const user= mongoose.model('user',userSchema)    //user is collection name here jo is naam se collection bna dega

export default user;