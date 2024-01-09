import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getUserByEmailServices = async (email) => {
    const user = await conn.users.findOne({
        where: {
            email
        }
    });
    if (user) {
        return user;
    } else {
        return false;
    }
}

const createUserService = async (newUser) => {
    await conn.users.create(newUser);
}

export {
    getUserByEmailServices,
    createUserService,
}