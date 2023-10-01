import { useDispatch, useSelector } from "react-redux"
import { removeCart } from "../store/cartSlice";

export function Cart(){
  const dispatch=useDispatch();
   const products=useSelector(state=>state.cartState.cartItems);
   const total=useSelector(state=>state.cartState.total);
    return(
   
      
        <div className="text-center">
               <h3 className="mt-4">Cart Items/<span>Total:${total.toFixed()}</span></h3>
            <table className="mt-2 table table-bordered"> 
            <tr className="bg-dark text-white w-100" style={{height:'50px'}}>
                <th>product Image</th>
                <th>title</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
           {
           
         
             products.map((product)=>(
                <tr className="mt-2">
                    <td><img src={product.image} alt="not found" width="100" height="100"/></td>
                    <td>{product.title}</td>
                    <td className="me-5" >${product.price}</td>
                    <td className="btn btn-danger me-3 py-2 mt-4" onClick={()=>dispatch(removeCart(product))}>Remove</td>
                    <br/>
                </tr>   
             ))
           }
         </table> 
        </div>
    )
}