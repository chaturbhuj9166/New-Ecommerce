import { Router } from "express";
import { checkAuth } from "../middlewares/auth.js";
import {addToCart} from "../controllers/Cart.js"

const cartRouter =Router();
cartRouter.post("/add",checkAuth,addToCart);

export default cartRouter;
