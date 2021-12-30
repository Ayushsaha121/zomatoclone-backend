const express = require('express')
const app = express()
const port = 3000
const db=require('./db/conn')
const loginModel=require('./models/userSchema')
const userregistModel=require('./models/userregistration')
const restregistModel=require('./models/registrationrestraunts')
const restrauntLoginModel=require('./models/restrauntSchema')
const foodModel=require('./models/fooditems')
app.use(express.json())
app.post("/login",async(req,res)=>{
  try{
    console.log(req.body)
     const loginCheck=new loginModel(req.body)
     const response=await loginCheck.save()
     res.send({
      code:200,
      result:response
     })
  }catch(e){
     res.send(e)
  }
})

app.post("/restrauntschema",async(req,res)=>{
  try{
     const login=new restrauntLoginModel(req.body)
     const response=await login.save()
     res.send({
      code:200,
      result:response
     })
  }catch(e){
     res.send(e)

  }

})

app.post("/userregistration",async(req,res)=>{
  try{
    console.log(req.body)
     const regCheck=new userregistModel(req.body)
     const response=await regCheck.save()
     res.send({
      code:200,
      result:response
     })
  }catch(e){
     res.send(e)
  }
})

app.post("/restrauntregistration",async(req,res)=>{
  try{
    console.log(req.body)
     const regsCheck=new restregistModel(req.body)
     const response=await regsCheck.save()
     res.send({
      code:200,
      result:response
     })
  }catch(e){
     res.send(e)
  }
})

app.post("/food items",async(req,res)=>{
  try{
    console.log(req.body)
     const foodCheck=new foodModel(req.body)
     const response=await foodCheck.save()
     res.send({
      code:200,
      result:response
     })
  }catch(e){
     res.send(e)
  }
})

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
}) 