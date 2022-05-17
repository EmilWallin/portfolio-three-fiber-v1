import React from "react";
import "./language.css";

function Language(props: { language: string }) {
    const getLogo = () => {
        switch (props.language.toLowerCase()) {
            case "c#":
                return "/languageAssets/csharp.svg";
            case "javascript":
                return "/languageAssets/javascript.png";
            case "typescript":
                return "/languageAssets/typescript.png";
            case "java":
                return "/languageAssets/java.svg";
            case "css":
                return "/languageAssets/css.svg";
            case "html":
                return "/languageAssets/html.svg";
            default:
                return "";
        }
    };
    console.log("logo: ", getLogo());

    return <img className="language-logo" src={getLogo()} alt="failed" />;
}

export default Language;
