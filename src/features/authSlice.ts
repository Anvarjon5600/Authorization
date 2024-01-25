import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {User} from '../models/User';
// Inference in TS is like a blueprint that defined the structure and shape of an object. 
//It enhances code clarity, promote consistency and enable type Checking making code more robost. 
export interface AuthState{
    user: null | User;

}

const initialState:AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        // define actions on reducers. 
        // state indicates current state
        // action should have payload property of type User. 
        // Payload property of the action should be of type 'USER'
        login: (state, action:PayloadAction<User>)=>{
            state.user = action.payload;
        },
        // logout action:
        logout: (state)=> {
            state.user = null;
        },
    }
})

// Action Creators are generated for each case reducer function
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;