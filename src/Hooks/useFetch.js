import { useEffect, useState } from "react";

export function useFetch(url){
const[data,setData]=useState([]);

useEffect(()=>{
async function fetchProducts(){
    const response=await fetch(url);
    const dat=await response.json();
    setData(dat);

}
fetchProducts();
},[url])
  
return {data};
}