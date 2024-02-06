import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import Task from "./task";
import { addtask, getTaskList } from "../redux/action";
import AddTask2 from "./addtask";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import { Link,useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import task from "./task";
import { useNavigate } from "react-router-dom";
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}
// useEffect(()=>{
//     login();
// }        
// ,[])

export default connect(mapStateToProps)(function YourtaskList(props) {

    useEffect(() => {
        getYourTask()
    }, [])
    const newnevigate=useNavigate();
    const [flagi, setFlag] = useState(false);
    const { taskList, dispatch } = props;
    const location = useLocation();
    const userCurent = location.state.userCurent;
    const setflagi = (() => {
        // setFlag(true);
        newnevigate('/addTask');
    })
    const getYourTask = async () => {
        debugger
        try {
            
            // alert("in get your task")
            const reaspons = await axios.get(`http://localhost:5000/task/${userCurent}`);
            
            if (reaspons.status == 200) {

                dispatch(getTaskList(reaspons.data));
                console.log(taskList);
            }
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {
                // taskList.map((task) => {
                //     <Task taskcurent={task}></Task>
                // })
                taskList.map((task)=>{
                    return(
                        <><Task taskcurent={task}></Task></>
                    )
                })
            }
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', color: 'black' },
                    padding: "100px",
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '25ch' },
                    alignItems: 'center',
                }}
                noValidate
                autoComplete="off"
            >

                <br></br>

                {/* <Button variant="text">Edit</Button>
                <Button variant="text">Remoove</Button> */}
                <Button onClick={setflagi} variant="text">TO ADD NEW TASK</Button>
            </Box>

            {flagi && <AddTask2></AddTask2>}
        </>
    )
    // git init
    //  README.md
    // git commit -m "first commit"
    // git branch -M main
    // git remote add origin https://github.com/hadasalfasi/ReactNodeProject.git
    // git push -u origin main

})