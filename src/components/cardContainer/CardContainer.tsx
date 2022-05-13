import React, { useEffect, useState } from "react";
import "./cardContainer.css";

//Components
import Card from "../card/Card";

//API calls
import getFeatured from "../../api/services/github-service";

//Repo Class
import Repo from "../../classes/Repo";
import RepoType from "../../types/Repo";

function CardContainer() {
    const emptyRepo = new Repo("", "", "", "");
    const [cardInfo, setCardInfo] = useState([emptyRepo]);

    const getRepos = async () => {
        let rawData = await getFeatured();
        const data = rawData.map(
            (d) =>
                new Repo(
                    d.data.name,
                    d.data.description,
                    d.data.html_url,
                    d.data.language
                )
        );

        console.log("data", data);
        setCardInfo(data);
    };

    useEffect(() => {
        if (cardInfo[0].name === "") getRepos();
    }, []);

    const getCards = () => {
        return cardInfo.map((i) => <Card info={i} />);
    };

    return <div className="container">{getCards()}</div>;
}

export default CardContainer;
