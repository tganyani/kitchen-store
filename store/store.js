import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slice/products.slice'
import customerReducer from './slice/customer.slice'

export const store = configureStore({
    reducer:{
        product:productsReducer,
        customer: customerReducer
    }
})