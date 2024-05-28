import { createSlice } from "@reduxjs/toolkit"

const infoSlice = createSlice({
  name: "info",
  initialState: {
    value: "value123"
  },
  reducers: {
    setInfo: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setInfo } = infoSlice.actions
export default infoSlice.reducer
