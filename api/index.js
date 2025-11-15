require ('dotenv') . config()
const express=require('express')
const PORT=process.env.PORT
const app=express()
const cors=require('cors')
app.use(cors())
// console.log(process.env)
app.get('/api',(req,res)=>{
   res.json({ message: "hello from server" });
})



app.listen(PORT,()=>console.log(`stater server ${PORT}`))