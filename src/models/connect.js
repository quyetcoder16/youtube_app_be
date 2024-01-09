import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
});


const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("connect to database successful!");
    } catch (error) {
        console.log(error);
    }
}

export {
    sequelize,
}