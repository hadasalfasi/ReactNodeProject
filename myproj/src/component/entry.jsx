import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
// import Login from './component/login';
import login from "./login";
import Login from "./login";
import { produce } from 'immer';
import { Link, useNavigate } from 'react-router-dom';
import YourtaskList from "./YourTaskList";
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import { getUserList } from "../redux/action";
function mapStateToProps(state) {
    return {
        userslist: state.users.userslist,
    };
}
export default connect(mapStateToProps)(function Entry(props) {
    // useEffect(() => {
    //     connected();
    // }, [])

    const newNavigate = useNavigate();
    const { userslist, dispatch } = props;
    let FirstName = useRef('');
    let Password = useRef('');
    const [flag1, setFlag] = useState(false);

    let flag = 0;
    // const updateUsers = async () => {
    //     try {
    //         const reaspons = await axios.get(`http://localhost:5000/task/${userCurent}`);
    //         if (reaspons.status == 200) {
    //             dispatch(getTaskList(reaspons.data));
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    const connected = async () => {
        if (FirstName.current.value != "" && Password.current.value != "") {
            try {
                const reaspons = await axios.get('http://localhost:5000/users')
                console.log(reaspons.data);
                if (reaspons.status == 200) {
                    console.log("before");
                    console.log(userslist);
                    dispatch(getUserList(reaspons.data));
                    console.log("after");
                    console.log(userslist);

                    for (var i in reaspons.data) {
                        if (reaspons.data[i].firstName == FirstName.current.value && reaspons.data[i].password == Password.current.value) {
                            alert(`wellcome ${FirstName.current.value}`);

                            newNavigate('/YourtaskList', { state: { userCurent: Password.current.value } });
                            flag = 1;
                        }
                    }
                    if (flag == 0) {
                        alert(`You not exsist`);
                        newNavigate('/Login');
                    }
                }
            }
            catch (error) {
                console.log(error);

            }
        }
        else{
            alert("All fields are required")
        }

    }
    return (
        <>


            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch', color: 'black' },
                    alignItems: 'center',
                    padding: "3%",
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <h1>Connect</h1>
                <form>
                    <TextField className="standard-basic" label="First Name" variant="standard" inputRef={FirstName} required />
                </form>
                <br></br>
                <TextField className="standard-basic" label="Password" variant="standard" inputRef={Password} required />
                <br></br>
                {/* <Stack spacing={2} direction="row"> */}
                <Button onClick={connected} variant="text">Connect</Button>
                {/* </Stack> */}
            </Box>

            {/* <button onClick={connected}>Connect</button> */}
            {/* {flag1&&<Login></Login>} */}
            {/* {flag==1&&<YourtaskList id={Password.current.value}></YourtaskList>} */}
        </>
    );
})