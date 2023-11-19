import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: null,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInData:(state,action)=>{
            state.currentUser = action.payload
        }
    }
})


export const {signInData} =userSlice.actions;

export default userSlice.reducer;