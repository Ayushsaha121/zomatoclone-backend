const mongoose=require("mongoose");

const userScheme=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    }
})
const loginModel=new mongoose.model("userlogin",userScheme)
module.exports=loginModel;