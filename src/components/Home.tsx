import React from "react";

//css
import "./home.css";

//components
import Header from "./header/Header";
import GithubSection from "./githubSection/GithubSection";
import LinkedinSection from "./linkedinSection/LinkedinSection";

function Home() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <GithubSection />
                <LinkedinSection />
            </div>
        </div>
    );
}

export default Home;
