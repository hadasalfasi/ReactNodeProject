// import React from "react";
import * as React from 'react';
import { connect } from "react-redux";
import { delettask } from "../redux/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";





import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { green } from '@mui/material/colors';
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}

export default connect(mapStateToProps)(function Task(props) {
  
    const newNavigate=useNavigate();
    const { taskcurent, dispatch } = props;
    const del = async () => {

        try {
          
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
            {/* <h1>{taskcurent.name}</h1> */}
            {/* <h1>{taskcurent.description}</h1> */}
            {/* <h1>{taskcurent.deadline}</h1> */}
            {/* <button onClick={edit}>EDIT</button>
            <button onClick={del}>DELETE</button> */}

      <Paper
        sx={{
          p: 2,
          margin: '3%',
          maxWidth: 300,
          marginLeft:65,
          flexGrow: 1,
        //   backgroundColor:'black',
        //   backgroundColor: (theme) =>
        //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          {/* <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                {taskcurent.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {taskcurent.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {taskcurent.deadline}
                </Typography>
              </Grid>
              <Grid item>

                
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center' ,paddingLeft:'14%'}} >
                <Button onClick={del} color="inherit" variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button onClick={edit} color="inherit" variant="contained" endIcon={<BorderColorIcon />}>
                    Edit
                </Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
              {taskcurent.taskId}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  
  
        </>
   )

})
























 



