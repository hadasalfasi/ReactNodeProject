const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    password:String,
    typeTaskId:String,
    name:String,
    description:String,
    deadline:Date,
    taskId:String
})
module.exports=mongoose.model('Tasks',taskSchema);
