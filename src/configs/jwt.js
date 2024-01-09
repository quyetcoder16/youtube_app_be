import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createToken = (data) => {
    const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "5m" });
    return token;
}



export {
    createToken,
}