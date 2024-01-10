import { createToken } from "../configs/jwt.js";
import { createUserService, getUserByEmailServices } from "../services/user.services.js";
import bcrypt from "bcrypt"

const signUp = async (req, res) => {
    try {
        const { full_name, email, pass_word } = req.body;
        const checkEmail = await getUserByEmailServices(email);
        if (checkEmail) {
            res.status(400).send("email exist!");
        } else {
            const hashPass = bcrypt.hashSync(pass_word, 10);
            // console.log(hashPass);
            const newUser = {
                full_name,
                email,
                pass_word: hashPass
            };
            await createUserService(newUser);
            res.status(201).send("user created!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const signIn = (req, res) => {
    try {
        const user = req.user;
        const data = {
            user_id: user.user_id,
            full_name: user.full_name,
            email: user.email
        };
        const token = createToken(data);
        res.status(200).send(token);
    } catch (error) {
        res.status(500).send(error);
    }
}

const loginWithFacebook = async (req, res) => {
    // console.log(req.body);
    try {
        const { email, name, picture, userID } = req.body;
        // console.log(req.body);
        // console.log(email, name, picture.data.url);
        console.log(req.body);
        const user = await getUserByEmailServices(email);
        if (user) {
            const token = createToken({
                user_id: user.user_id,
                full_name: user.full_name,
                email: user.email
            });
            res.status(200).send(token);
        } else {
            await createUserService({
                email,
                full_name: name,
                face_app_id: userID,
                // avatar: picture.data.url
            });
            let user = await getUserByEmailServices(email);
            const token = createToken({
                user_id: user.user_id,
                full_name: user.full_name,
                email: user.email
            });
            console.log(token)
            res.status(200).send(token);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    signUp,
    signIn,
    loginWithFacebook,
}