import React, { useEffect, useState } from "react";
import instance from "../aixosConfig";
import { useParams } from "react-router-dom";
import { PiCurrencyInrLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Cart from "./Cart";

const SingleProduct = () => {
    const navigate = useNavigate()
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const {isloggedIn}=useAuth()

  const getSingleData = async () => {
    try {
      const response = await instance.get("/product");
      const foundProduct = response.data.find(
        (item) => item.slug === slug
      );
      setProduct(foundProduct || null);
    } catch (error) {
      console.error(error.message);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };
//   function handleToCard() {
//     const user=localStorage.getItem("auth_Token")
//     if(user){
       
//         navigate("/cart")
//     }else{
//       alert("User not login forst login")
//       navigate("/register")
//   }
// }

async function AddtoCart(productId) {
 if(!isloggedIn)navigate("/login")
  else{
const response =await instance.post(
  "/cart/add",
  {productId:productId,quantity:1},
  {withCredentials:true}
);
console.log(response);

}
  
}


  useEffect(() => {
    if (slug) getSingleData();
  }, [slug]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!product) return <p className="not-found">Product not found</p>;

  return (
    <div className="singleProduct">
      <div className="singleProductContainer">

        <div className="singleProductImage">
          <img
            src={`http://localhost:3000/${product.image}`}
            alt={product.name}
          />
        </div>

        <div className="singleProductDetails">
          <h1>{product.name}</h1>

          <p className="category">{product.category}</p>

          <p className="price">
            <PiCurrencyInrLight />
            {product.discountedPrice ? (
              <>
                <del>{product.originalPrice}</del>
                <span>{product.discountedPrice}</span>
              </>
            ) : (
              <span>{product.originalPrice}</span>
            )}
          </p>

          <p className="description">{product.description}</p>
        </div>
  <button onClick={()=>AddtoCart(product_id)}>Add to card</button>
      </div>
    </div>
  );
};

export default SingleProduct;
