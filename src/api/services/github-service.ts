import axios from "axios";
import http from "../github-calls";

const getFeatured = () => {
    return axios.all([
        http.get("androidtwinstickshooter"),
        http.get("gamedb-react"),
        http.get("weathersite-react"),
        http.get("reactjs-moviewebsite"),
    ]);
};

export default getFeatured;
