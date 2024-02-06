// import React from "react";
import { produce } from 'immer';
const initialState = {
    userslist: [
        // {firstname:'hadas',lastname:'alfasi',tel:'0548402064',email:'hadas3089@gmail.com',password:111},
        // {firstname:'dvori',lastname:'mako',tel:'05556772035',email:'dvora@gmail.com',password:222},
        // {firstname:'efrat',lastname:'gefen',tel:'0583227919',email:'efrat@gmail.com',password:333},
    ],

}


export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            { state.userslist.push(action.payload) }
            break;
        case 'GET_USER_LIST':
            {
                 state.userslist = action.payload }
            break;
    }
}, initialState)
