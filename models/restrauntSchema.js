const mongoose=require("mongoose");

const restrautCredentials=new mongoose.Schema({
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
const restrauntLoginModel=new mongoose.model("restrauntsCredential",restrautCredentials)
module.exports=restrauntLoginModel;