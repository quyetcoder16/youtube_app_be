import { getListVideoServices } from "../services/video.services.js";

const getListVideo = async (req, res) => {
    try {
        // console.log(req.user);
        const listVideo = await getListVideoServices();
        res.status(200).send(listVideo);
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    getListVideo,
}