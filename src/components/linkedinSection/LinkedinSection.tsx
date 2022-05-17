import React from "react";
import LogoContainer from "../logoContainer/LogoContainer";

import "./linkedinSection.css";

function LinkedinSection() {
    return (
        <div className="linkedin-section">
            <LogoContainer logo="linkedin" preText="LINKED" postText="IN" />
        </div>
    );
}

export default LinkedinSection;
