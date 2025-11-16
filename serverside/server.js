import express from 'express'
import env from 'dotenv'
import donorRoutes from './routes/donor.js'
import connection from './connection.js'
env.config()
const app=express()
app.use(express.static('../clientside'))
app.use(express.json())
app.use('/donor',donorRoutes)
connection().then(()=>{
app.listen(process.env.PORT,()=>{
console.log(`http://localhost:${process.env.PORT}`);
})
}).catch((err)=>{
    console.log(err);
    
})