const mongoose=require("mongoose");

const foodreq=new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    price:{
        type:Number,
        required:true
    },
    id:{
        type:Number,
        required:true
    },

    restrauntname:{
      type:String,
      required:true
    }
})
const foodModel=new mongoose.model("foodrequire",foodreq)
module.exports=foodModel;