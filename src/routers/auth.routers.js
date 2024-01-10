import express from "express";
import { loginWithFacebook, signIn, signUp } from "../controllers/auth.controllers.js";
import { authPasswordMiddleware } from "../middlewares/auth.middlewaves.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", authPasswordMiddleware, signIn);
authRouter.post("/login-with-facebook", loginWithFacebook);

export default authRouter;