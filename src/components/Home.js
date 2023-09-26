import { useFetch } from "../Hooks/useFetch"
import { Card } from "./Card";

export function Home(){
 const{data:products}=useFetch("https://fakestoreapi.com/products");
    return(
        <div className="d-flex flex-wrap justify-content-center">
            {
          products.map((product)=>(
               
                    <Card key={product.id} product={product}/>
              
            ))
            }
        </div>
    )
}