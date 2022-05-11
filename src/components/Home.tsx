import React from "react";

//css
import "./home.css";

//components
import Header from "./header/Header";
import GithubSection from "./githubSection/GithubSection";

function Home() {
    return (
        <div className="page-container">
            <Header />
            <div className="content-container">
                <GithubSection />
            </div>
        </div>
    );
}

export default Home;
