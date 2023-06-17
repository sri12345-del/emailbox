import { createSlice } from "@reduxjs/toolkit"

const authslice = createSlice({
    name: "auth",
    initialState: { token: "" },
    reducers: {
        addtoken(state, action) {
            state.token = action.payload
        }
       
    }
})

export const authaction = authslice.actions

export default authslice