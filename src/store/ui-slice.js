import { createSlice } from "@reduxjs/toolkit";

const uiState = {cartIsVisible:false};
const uiSlice = createSlice({
    name: 'ui',
    initialState: uiState,
    reducers:{
        toggleCart(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
}});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;