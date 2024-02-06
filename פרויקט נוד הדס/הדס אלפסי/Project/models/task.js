const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    password:Number,
    typeTaskId:Number,
    name:String,
    description:String,
    deadline:Date,
    taskId:Number
})
module.exports=mongoose.model('Tasks',taskSchema);
