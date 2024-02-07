import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addtask } from "../redux/action";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { colors } from "@mui/material";

function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}


export default connect(mapStateToProps)(function AddTask2(props) {
    const newNevigate = useNavigate();
    const { taskList, dispatch } = props;
    let Password = useRef('');
    let Name = useRef('');
    let Description = useRef('');
    let TaskId = useRef('');
    let TaskTypeId = useRef('');
    let Deadline = useRef('');
    useEffect(function () {
    }, [, taskList])
    const addtaski = async () => {
        
        if (Password.current.value != "" && TaskTypeId.current.value != "" && Name.current.value != "" && Description.current.value != "" && Deadline.current.value != "" && TaskId.current.value != "") {
            try {
                const newTask = {
                    password: Password.current.value,
                    typeTaskId: TaskTypeId.current.value,
                    name: Name.current.value,
                    description: Description.current.value,
                    deadline: Deadline.current.value,
                    taskId: TaskId.current.value,
                }
                const reaspons = await axios.post('http://localhost:5000/task', newTask);
                if (reaspons.status == 200) {
                    dispatch(addtask(newTask));
                    alert("task succsesfully added");
                    newNevigate('/YourtaskList', { state: { userCurent: Password.current.value } });

                }
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            alert("you have to all")
        }

    }
    return (
        <>

            <Box
                component="form"
                sx={{

                    padding: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '25ch' },
                    alignItems: 'center',
                }}
                noValidate
                autoComplete="off"
            >
                <h1>New Task</h1>
                <TextField className="standard-basic" label="password" variant="standard" type="password" inputRef={Password} />
                <br></br>
                <TextField id="standard-basic" label="Name" variant="standard" type="text" inputRef={Name} />
                <br></br>
                <TextField id="standard-basic" label="Description" variant="standard" type="text" inputRef={Description} />
                <br></br>
                <TextField id="standard-basic" label="TaskId" variant="standard" type="text" inputRef={TaskId} />
                <br></br>
                <TextField id="standard-basic" label="Deadline" variant="standard" type="date" inputRef={Deadline} />
                <br></br>
                <TextField id="standard-basic" label="TaskTypeId" variant="standard" type="text" inputRef={TaskTypeId} />
                <br></br>
                <Stack spacing={2} direction="row">
                    <Button onClick={addtaski} variant="text" sx={{ color: 'black' }}>Add</Button>
                </Stack>
            </Box>
        </>
    )

})