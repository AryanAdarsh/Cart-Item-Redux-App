import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import productSlice from './product-slice';


const store = configureStore({
    reducer: {ui: uiSlice, product: productSlice}});

export default store;