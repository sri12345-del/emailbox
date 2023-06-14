import { configureStore } from "@reduxjs/toolkit"
import authslice from "./authslice"
import mailslice from "./mailitemslice"
import sentmailslice from "./sentMailslice"

const store = configureStore({
    reducer:{auth:authslice.reducer,mail:mailslice.reducer,sentmail:sentmailslice.reducer}
})

export default store