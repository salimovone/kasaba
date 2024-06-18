import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    smallSidebar: true,
}

export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        minimizeSidebar: (state)=>{
            state.smallSidebar = !state.smallSidebar
        }
    }
})

export const {minimizeSidebar} = settingSlice.actions
export default settingSlice.reducer