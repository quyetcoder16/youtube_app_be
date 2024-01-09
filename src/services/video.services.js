import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getListVideoServices = async () => {
    const listVideo = await conn.video.findAll();
    if (listVideo) {
        return listVideo;
    } else {
        return false;
    }
}

export {
    getListVideoServices,
}