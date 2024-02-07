
// const taskid=[
//     {number:1,name:'באג'},
//     {number:2,name:'משימה'},
// ]

// const task = [
//     { id: 1,taskid:1, name: "hadas", description: "open project", deadline: "10/10/2003" },
//     { id: 2, taskid:2,name: "yael", description: "sing", deadline: "18/12/2023" },
//     { id: 3, taskid:1,name: "dan", description: "to wash the dishes", deadline: "1/1/2030" }
// ];
const Tasks = require('../models/task');
exports.getTasksbyPassword = async (req, res) => {
    const { password } = req.params;
    try {
        const tasks = await Tasks.find({ password });
        if (!tasks) {
            res.status(404).json({ message: 'any task not found' });
        }
        else {
            res.json(tasks);
        }

    } catch (error) {
        console.error('Failed to get tasks:', error);
        res.status(500).json({ message: 'Failed to get tasks' })
    }
};


exports.getAllTask = async (req, res) => {
    const task = await Tasks.find();
    console.log(("ggggggggggggggggg"));
    console.log(task);
    res.json(task);
}


exports.addtask = async (req, res) => {
    const newTask = await Tasks.create(req.body);
    res.json(newTask);

};


//מחיקת משימה לפי ID
exports.deletetaskByTaskId = async (req, res) => {
    const taskId = req.params.taskId;

    try {
        const deleteTask = await Tasks.findOneAndDelete({ taskId: taskId })
        if (!deleteTask) {
            res.status(404).json({ message: 'task not found' })
        }
        else {
            res.status(200).json({ message: 'task delete successfully' })
        }

    } catch (error) {
        console.error('Failed to get tasks:', error)
        res.status(500).json({ message: 'Failed to get tasks' })
    }
}
//עידכון משימה
exports.updateTaskByTaskId = async (req, res) => {
    const taskId = req.params;
    const description = req.body;
    try {
        const updateDescription = await Tasks.findOneAndUpdate(
            taskId,
            description,
           { new:true}
        )
        if (!updateDescription) {
            res.status(404).json({ message: 'task not found' })
        }
        else {
            res.status(200).json({ message: 'description update succssefukky' })
        }
    } catch {
        console.error('failed to update description', error)
        res.status(500).json('failed to update description')
    }

}








// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/hadasalfasi/FinalReactNodeProject.git
// git push -u origin main