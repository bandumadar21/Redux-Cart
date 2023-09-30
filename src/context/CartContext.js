import { createContext, useReducer } from "react"
import { Reducer } from "../reducers/reducers";

    const initialState={
        cartItems:[],
        total:0
    }
    export const cartContext=createContext(initialState);
   export const  CartProvider=({children})=>{
    const [state,dispatch]=useReducer(Reducer,initialState);
   const addToCart=(product)=>{
    const updateContextCart=state.cartItems.concat(product);
    updateTotal(updateContextCart);
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            products:updateContextCart
        }
    })
   }
   const removeCart=(product)=>{
    const updatedItemsList=state.cartItems.filter((items)=>items.id!==product.id);
    updateTotal(updatedItemsList);
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:{
            products:updatedItemsList
        }
    })
   }
   const updateTotal=(products)=>{
    let total=0;
    products.forEach(product =>total=total+product.price);
    dispatch({
        type:"UPDATE_TOTAL",
        payload:{
            total
        }
    })
   }
    const value={
        total:state.total,
        cartItems: state.cartItems,
        addToCart,
        removeCart
    }   
    return(
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
          );
    }
      
          
        
