export function addusser(newUser)
{
    return{type:'ADD_USERS',payload:newUser}
}
export function addtask(newTask)
{
    return{type:'ADD_TASK',payload:newTask}
}
export function delettask(deleteTask)
{
    return{type:'DELETE_TASK',payload:deleteTask}
}
export function getTaskList(tasklist)
{
    return{type:'GET_TASK_LIST',payload:tasklist}
}
export function getUserList(userlist)
{
  
    return{type:'GET_USER_LIST',payload:userlist}
}
export function updateTask(taskId)
{
    return{type:'UPDATE_TASK',payload:taskId}
}


