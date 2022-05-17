import React from "react";
import CardContainer from "../cardContainer/CardContainer";
import LogoContainer from "../logoContainer/LogoContainer";
import "./githubSection.css";

function GithubSection() {
    return (
        <div className="github-section">
            <LogoContainer logo="github" preText="GIT" postText="HUB" />
            <CardContainer />
        </div>
    );
}

export default GithubSection;
