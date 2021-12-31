const mongoose=require('mongoose');

const url="mongodb+srv://admin123:admin123@zomato.wdcps.mongodb.net/zomatoclone?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected Successfully");
}).catch((e)=>{
    console.log("Database connection failed",e)
})