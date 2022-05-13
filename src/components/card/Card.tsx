import React from "react";
import "./card.css";
import Repo from "../../types/Repo";

interface RepoInterface {
    name: string;
    description: string;
    html_url: string;
    language: string;
}

function Card(props: { info: Repo }) {
    console.log(props.info.name);
    return (
        <div className="card-container-div">
            <h2 className="card-title">{props.info.name}</h2>
        </div>
    );
}

export default Card;
