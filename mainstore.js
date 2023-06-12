import { configureStore } from "@reduxjs/toolkit"
import authslice from "./authslice"
import mailslice from "./mailitemslice"

const store = configureStore({
    reducer:{auth:authslice.reducer,mail:mailslice.reducer}
})

export default store