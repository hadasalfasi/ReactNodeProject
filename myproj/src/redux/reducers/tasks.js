import { produce } from "immer";

const initialState = {
    taskList: [
        // password:Number,
        // typeTaskId:Number,
        // name:String,
        // description:String,
        // deadline:Date,
        // taskId:Number
        // { Password: 111, typeTaskId: 12, name: "hadas", description: "to finish my proj", deadline: '10/10/2024', taskId: 456 },
        // { Password: 111, typeTaskId: 2, name: "hadas", description: "to go to sleep", deadline: '02/5/2024', taskId: 6966 }
    ],
    // taskType:
    //     [
    //         { taskTypeId: 1, taskTypeName: "משימה" },
    //         { taskTypeId: 2, taskTypeName: "bugg" },
    //     ]
}
export default produce((state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            { state.taskList.push(action.payload) }
            break;
        case "DELETE_TASK":
            {
                const indexToDelete = state.taskList.findIndex(task => task.taskId == action.payload.taskId);
                if (indexToDelete !== -1) {
                    state.taskList.splice(indexToDelete, 1);
                }
            }
            break;
        case "GET_TASK_LIST":
            { state.taskList = action.payload }
            break;
        case "UPDATE_TASK":
            {
                const indexToEdit = state.taskList.findIndex(task => task.taskId === action.payload.taskId);
                if (indexToEdit !== -1) {
                    state.taskList[indexToEdit].description = action.payload.updatedDescription;
                }
            }
            break;
    }
}, initialState)



//

//       // Check if the task with the given taskId exists
//

