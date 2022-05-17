import axios from "axios";
import http from "../github-calls";

const getFeatured = () => {
    return axios.all([
        http.get("gamedb-react"),
        http.get("weathersite-react"),
        http.get("MovieDBWinforms"),
        http.get("MockProductWebsite"),
    ]);
};

export default getFeatured;
