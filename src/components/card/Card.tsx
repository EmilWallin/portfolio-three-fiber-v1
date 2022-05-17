import React from "react";
import "./card.css";
import Repo from "../../types/Repo";
import Language from "../language/Language";

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
            <a href={props.info.html_url} target="_blank" rel="noreferrer">
                <div>
                    <h2 className="card-title">{props.info.name}</h2>
                    <div className="card-description">
                        {props.info.description}
                    </div>
                    <Language language={props.info.language} />
                </div>
            </a>
        </div>
    );
}

export default Card;
