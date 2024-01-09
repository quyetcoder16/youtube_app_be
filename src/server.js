import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rootRouters from "./routers/root.routers.js";
import { sequelize } from "./models/connect.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(rootRouters);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server is running on port : ", PORT);
});

// await sequelize.sync({ alter: true });