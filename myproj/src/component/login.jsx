import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { addusser } from "../redux/action";
import Task from "./task";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function mapStateToProps(state) {
    return {
        userslist: state.users.userslist,
    };
}
export default connect(mapStateToProps)(function Login(props) {
    const newNavigate = useNavigate();
    const { userslist, dispatch } = props;
    let Firstname = useRef('');
    let Lastname = useRef('');
    let Tel = useRef('');
    let Email = useRef('');
    let Password = useRef('');

    useEffect(function () {
        console.log("userslist", userslist)
    }, [, userslist]);

    // useEffect(()=>{
    //     login();
    // }        
    // ,[])
    const login = async () => {
        alert("firsttttttttttt");
        try {
            debugger
            const creatNewUser = {
                firstName: Firstname.current.value,
                lastName: Lastname.current.value,
                tel: Tel.current.value,
                email:Email.current.value,
                password: Password.current.value,
            };
            alert("55555555555");

            const response = await axios.post('http://localhost:5000/users/',creatNewUser);

            alert("secondddd");
            if(response.status==200){
                dispatch(addusser(creatNewUser))
                alert(`wellcome ${Firstname.current.value}  ${Lastname.current.value}`);
                newNavigate('/YourtaskList', { state: { userCurent: Password.current.value } });
            }
        }
        catch (error) {
            console.error(error);
        }
     
    };
    return (
        <>

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
                <h1>Log In:</h1>
                <TextField className="standard-basic" label="first name" variant="standard" inputRef={Firstname} />
                <TextField className="standard-basic" label="last name" variant="standard" inputRef={Lastname} />
                <TextField className="standard-basic" label="tel" variant="standard" inputRef={Tel} />
                <TextField className="standard-basic" label="e-mail" variant="standard" inputRef={Email} />
                <TextField className="standard-basic" label="password" variant="standard" inputRef={Password} />
                <br></br>

                <Button onClick={login} variant="text">Add</Button>

            </Box>

            {/* <Task id={Password.current.value}></Task> */}

        </>
    )
})