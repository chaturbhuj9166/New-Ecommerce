import instance from "../aixosConfig";
import { useEffect,useState } from "react";
import ProductCard from "../components/ProductCard"

function Products(params) {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState([])


useEffect(()=>{
    getProducts();
},[])

async function getProducts(params) {
    setLoading(true)
    const response=await instance.get("/product")

    setProducts(response.data)
    setLoading(false)
}
return(
<>
{products.length>0&&products.map((product)=>{
    return <ProductCard key={product._id}product={product} />
})}

</>
)
}
export default Products