import { useContext, useEffect, useState } from "react"
import { cartContext } from "../context/CartContext"

export function Card({product}){
  const{addToCart,cartItems,removeCart}=useContext(cartContext);
  const[isInCart,setIsInCart]=useState(false);
  useEffect(()=>{
    const productIsInCart=cartItems.find((items)=>items.id===product.id)
    if(productIsInCart)
    {
        setIsInCart(true);
    }
    else
    {
        setIsInCart(false); 
    }
  },[cartItems])
    return(
        <div className="card d-flex flex-wrap w-25 text-center  m-4">
            <img style={{textAlign:'center'}} src={product.image} width="300" height="400" className="card-image-top ps-5"/>
             <div className="card-header" style={{height:'80px'}}>
                <p>{product.title}</p>
             </div>
             <div className="card-footer d-flex justify-content-between align-items-end ">
                <span className="badge bg-primary py-3" ><strong>Price:$</strong>{product.price}</span>
                {
                    !isInCart?(<span className="btn btn-primary" onClick={()=>addToCart(product)}>Add Cart</span>):(<span className="btn btn-danger" onClick={()=>removeCart(product)}>Remove</span>)
                }
                
             </div>
        </div>
    )

}