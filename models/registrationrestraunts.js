const mongoose=require("mongoose");

const restrauntinfo=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    storeid:{
        type:Number,
        reqired:true,
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
    },

    discription:{
        type:String,
        required:true
    }

})
const restregistModel=new mongoose.model("restrauntCredentials",restrauntinfo)
module.exports=restregistModel;