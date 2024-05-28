import { configureStore } from "@reduxjs/toolkit"
import infoReducer from "./info"

export default configureStore({
  reducer: {
    info: infoReducer
  }
})
