import axios from "axios";

export default {
    async index() {
        return await axios.get("/api/admin/user").then(({ data }) => data);
    },
};
