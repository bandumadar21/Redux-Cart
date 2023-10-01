import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const cartSlice=createSlice({
name:"cart",
initialState:{
    cartItems:[],
    total:0
},
reducers:{
    addCart(state,action){
   const updatedCartList=state.cartItems.concat(action.payload);
   const total=state.total+action.payload.price;
   return {...state,total:total,cartItems:updatedCartList};
    },
    removeCart(state,action){
    const updatedCartList=state.cartItems.filter(item=>item.id!==action.payload.id);
    const total=state.total-action.payload.price;
    return {...state,total:total,cartItems:updatedCartList};
    }
}
});
export const {addCart,removeCart}=cartSlice.actions;
export const CartReducer=cartSlice.reducer;