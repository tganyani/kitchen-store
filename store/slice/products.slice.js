import { createSlice } from '@reduxjs/toolkit'
// import { products } from '../../products'
const initialState = []

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addProductToOrder: (state, action)=>{
            const foundProduct = state.filter(product => product.id === action.payload.id)
            if(foundProduct[0]){
                return state
            }
            else{
                return [...state,action.payload]
            }
        },
        removeProductFromOrder: (state, action)=>{
            return state.filter(product => String(product.id) !== action.payload)
        },
        updateProductQuanty: (state, action) => {
            return state.map(product => {
                if (String(product.id) === action.payload.id) {
                    return {
                        ...product, quantity: action.payload.quantity
                    }
                }
                else {
                    return product
                }
            })
        },
        
    },
   
}) 


export const {
    addProductToOrder, 
    removeProductFromOrder,
    updateProductQuanty,
} = productSlice.actions
export default productSlice.reducer