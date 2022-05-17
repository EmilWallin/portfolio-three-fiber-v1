import React from "react";
import "./logoContainer.css";

import { Canvas } from "@react-three/fiber";
// import Box from "../box/Box";
import Github from "../logos/Github";
import LinkedIn from "../logos/LinkedIn";
import { OrbitControls } from "@react-three/drei";

function LogoContainer(props: {
    logo: string;
    preText: string;
    postText: string;
}) {
    function getLogo() {
        switch (props.logo.toLowerCase()) {
            case "github":
                return <Github />;
            case "linkedin":
                return <LinkedIn />;
        }
    }

    return (
        <div className="logo-container">
            <h1 className="pre-text">{props.preText}</h1>
            <div className="logo">
                <Canvas>
                    {getLogo()}
                    {/* <OrbitControls /> */}
                </Canvas>
            </div>
            <h1 className="post-text">{props.postText}</h1>
        </div>
    );
}

export default LogoContainer;
