import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show:false
};

const modalPost = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        handleClose:(state)=>{
            state.show=false
        },
        handleShow:(state)=>{
            state.show=true
        }
}
}
)

export const {handleClose,handleShow} = modalPost.actions

export default modalPost.reducer