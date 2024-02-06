const express=require('express');
const router=express.Router();
const Task=require('../models/task');
const{getAllTask,addtask,getTasksbyPassword,deletetaskByTaskId,updateTaskByTaskId}=require('../controllers/task')
// router.get('/',getAllTask);
router.post('/',addtask);
router.get('/:password',getTasksbyPassword);
router.delete('/:taskId',deletetaskByTaskId);
router.put('/:taskId',updateTaskByTaskId);
module.exports=router;
