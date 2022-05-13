import axios from "axios";

const GithubAPI = axios.create({
    baseURL: "https://api.github.com/repos/EmilWallin/",

    headers: {
        //prettier-ignore
        "Authorization": `Token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
});

export default GithubAPI;
