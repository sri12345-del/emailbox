import { createSlice } from "@reduxjs/toolkit";

const mailslice = createSlice({
    name: "mail",
    initialState: { data: [] },
    reducers: {
        additem(state, action) {
            state.data=[...state.data,action.payload]
        }
    }
    
})

export const mailaction = mailslice.actions

export default mailslice