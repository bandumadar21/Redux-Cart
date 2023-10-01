import { useDispatch, useSelector } from "react-redux"
import { addCart,removeCart } from "../store/cartSlice";

import { useEffect, useState } from "react";

export function Card({product}){
    const dispatch=useDispatch(); 

  const [isInCart,setIsInCart]=useState(false);
  const cartItems=useSelector(state=>state.cartState.cartItems);
 
  useEffect(()=>{
    const checkCart=cartItems.find(item=>item.id===product.id);
    if(checkCart)
    {
        setIsInCart(true);
    }
    else
    {
        setIsInCart(false)
    }
  },[cartItems,product.id])

    return(
        <div className="card d-flex flex-wrap w-25 text-center  m-4">
            <img style={{textAlign:'center'}} src={product.image} alt="not found" width="300" height="400" className="card-image-top ps-5"/>
             <div className="card-header" style={{height:'80px'}}>
                <p>{product.title}</p>
             </div>
             <div className="card-footer d-flex justify-content-between align-items-end ">
                <span className="badge bg-primary py-3" ><strong>Price:$</strong>{product.price}</span>
                {
                    !isInCart?( <span className="btn btn-primary" onClick={()=>dispatch(addCart(product))} >Add to Cart</span>):( <span className="btn btn-danger" onClick={()=>dispatch(removeCart(product))} >Remove Cart</span>)
                }
              
             </div>
        </div>
    )

}