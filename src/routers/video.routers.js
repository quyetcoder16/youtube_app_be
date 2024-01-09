import express from "express";
import { getListVideo } from "../controllers/video.controllers.js";
import { verifyToken } from "../middlewares/auth.middlewaves.js";

const videoRouter = express.Router();

videoRouter.get("/get-list-video", verifyToken, getListVideo);

export default videoRouter;