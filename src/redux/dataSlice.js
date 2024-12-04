import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],

}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getdata: () => { }

    }

})

export const { getdata } = dataSlice.actions

export default dataSlice.reducer
