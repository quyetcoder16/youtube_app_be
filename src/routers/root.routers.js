import express from "express";
import videoRouter from "./video.routers.js";
import authRouter from "./auth.routers.js";

const rootRouters = express.Router();

rootRouters.use("/video", videoRouter);
rootRouters.use("/auth", authRouter);

export default rootRouters;