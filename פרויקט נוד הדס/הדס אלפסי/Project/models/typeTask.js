const mongoose=require('mongoose')
const typeTaskSchema=new mongoose.Schema({
    typeTaskId:Number,
    typeTaskName:String
})
module.exports=mongoose.model('TypeTasks',typeTaskSchema)