const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser')
const formidable= require('formidable')

//connecting node.js with mongodb
mongoose.connect('mongodb://localhost:27017/myapp')
.then(response=>{
    console.log('DB connected')
}).catch(err=>console.log("Unable to connect"));




const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    photo:{
        type:Buffer,
        contentType:String
    },
    mobile:{
        type:Number,
        required:true
    }
}) 


const User=mongoose.model('User',userSchema)




//middleware

app.use(bodyParser.json())
app.use(cors())
const userData=(req,res)=>{
const form=new formidable.IncomingForm();
form.parse(req,(err,fields,file)=>{
    console.log(fields)
    console.log(file)
})
}


//router
app.post('/userdashboard',userData);
const port=6000

app.listen(port,()=>{
    console.log('App is running at $(port)')
})