import { Router } from "express";
import { checkForlogin } from "../middlewares/auth.js";

const checkRouter = Router();

checkRouter.get("/login", checkForlogin);

export default checkRouter;