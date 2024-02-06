require("dotenv").config()
const cors=require('cors');
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const Task=require('./routes/task')
const Users=require("./routes/users")
const bodyParser=require('body-parser')
app.use(cors());
app.use(bodyParser.json());
app.use('/task',Task);
app.use('/users',Users);
const CONACTION_URL='mongodb+srv://Task:123@atlascluster.h7qfseh.mongodb.net/?retryWrites=true&w=majority'

const PORT=5000;

mongoose.connect(CONACTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
.catch((error)=>console.log(error.message));


