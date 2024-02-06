import React from "react";
import { connect } from "react-redux";
import { delettask } from "../redux/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}

export default connect(mapStateToProps)(function Task(props) {
    debugger
    const newNavigate=useNavigate();
    const { taskcurent, dispatch } = props;
    const del = async () => {

        try {
            debugger
            const reaspons = await axios.delete(`http://localhost:5000/task/${taskcurent.taskId}`);
            if (reaspons.status == 200) {
                dispatch(delettask(taskcurent));
                alert("its remoove succsesfully...")
                newNavigate('/YourtaskList', { state: { userCurent:taskcurent.password  } });
            }
        }
        catch (error) {
            console.log(error);
        }

    }
    const edit=async()=>{
        try{
            const reaspons=await axios.put(`http://localhost:5000/task${taskcurent.taskId}`);
            if (reaspons.status == 200) {
                // dispatch(update(taskcurent,taskcurent.description));
                alert("its update succsesfully...")
            }
        }
        catch(error){

        }
    }
    // const getTaskByUser = async () => {

    // }
    // useEffect(()=>{
    // getTaskByUser()
    // },[])
    return (

        <>
            <h1>{taskcurent.name}</h1>
            <h1>{taskcurent.description}</h1>
            <h1>{taskcurent.deadline}</h1>
            <button onClick={edit}>EDIT</button>
            <button onClick={del}>DELETE</button>
        </>
    )


})
