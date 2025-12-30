import Cart from "../models/Cart.js";
 
export async function addToCart(req,res) {
    try{
        const data =req.body;
        data.userId=req.userId;
        const productInCart=new Cart(data)
        await productInCart.save();
        return res.status(200).json({message:"product add in cart",product:productInCart})
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}