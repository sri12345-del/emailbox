import { createSlice } from "@reduxjs/toolkit";

const mailslice = createSlice({
    name: "mail",
    initialState: { data: [],unreadmsg:0 },
    reducers: {
        additem(state, action) { 
            let newval = { ...action.payload, tic:true}
            state.data = [...state.data, newval]
            state.unreadmsg=state.data.filter(val=>val.tic===true).length
        },
        addapiitem(state, action) {
            state.data = [...state.data, action.payload]
            state.unreadmsg=state.data.filter(val=>val.tic==true).length
        },
        readdata(state,action) {
            let newval = { ...action.payload, tic: false }
            state.data = state.data.map(val => val.id===action.payload.id?newval:val)
            state.unreadmsg=state.data.filter(val=>val.tic==true).length
            
        }
       
    }
    
})

export const mailaction = mailslice.actions

export default mailslice