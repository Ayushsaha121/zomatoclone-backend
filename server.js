const express = require('express')
const app = express()
const port = 3000
const db=require('./db/conn')
const loginModel=require('./models/userSchema')
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
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
}) 