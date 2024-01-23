import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);


const ProductContext=({ children })=>{
      //list of products
    const [products,setProducts] = useState([]);
    //loading State
    const [loading,setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true);
        async function getProducts(){
            const apiRes = await fetch('https://dummyjson.com/products');
            const finalResults = await apiRes.json();
            if(finalResults){
                setTimeout(()=>{
                    setLoading(false);
                },2000);
               
                setProducts(finalResults.products);
            }
        }
        getProducts();
    },[])
    console.log(products);
  
    return(
        <Context.Provider value={{products,loading}}>
            {children}
        </Context.Provider>
    )
}
export default ProductContext;