import { createSlice } from "@reduxjs/toolkit";

const initialState ={
        name: "",
        email: "",
        address: "",
        phoneNumber: ""
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action)=>{
            state =action.payload
            return state
        }
    }
})

export const {addCustomer} = customerSlice.actions
export default customerSlice.reducer