import axios from "axios";

export default {
    async index() {
        return await axios.get("/api/test").then(({ data }) => data);
    },
};
