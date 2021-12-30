const mongoose=require("mongoose");

const userinfo=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    mobilenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    password:{
      type:String,
      required:true
    }
})
const userregistModel=new mongoose.model("userinfo",userinfo)
module.exports=userregistModel;