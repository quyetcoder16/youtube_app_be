import bcrypt from "bcrypt"
import { getUserByEmailServices } from "../services/user.services.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authPasswordMiddleware = async (req, res, next) => {
    try {
        const { email, pass_word } = req.body;
        const user = await getUserByEmailServices(email);
        if (!user) {
            res.status(404).send("email not found!");
        } else {
            // console.log(user.pass_word);
            const checkPass = bcrypt.compareSync(pass_word, user.pass_word);
            // console.log(checkPass);
            if (checkPass) {
                req.user = user;
                next();
            } else {
                res.status(400).send("password invalid!");
            }
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const verifyToken = (req, res, next) => {
    try {
        const { token } = req.headers;
        const checkToken = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(checkToken);
        if (checkToken) {
            req.user = checkToken;
            next();
        } else {
            res.status(400).send("token invalid!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    authPasswordMiddleware,
    verifyToken,
}