const express = require('express')
const app = express()
const port = 3000
const db=require('./db/conn')
// routers
const userRoute=require('./routers/userRoute');
const storeRoute=require('./routers/storeRoute');
app.use(express.json())
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
}) 

