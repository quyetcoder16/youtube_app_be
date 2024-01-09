import express from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { authPasswordMiddleware } from "../middlewares/auth.middlewaves.js";

const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", authPasswordMiddleware, signIn);

export default authRouter;