import React from "react";
import "./logoContainer.css";

import { Canvas } from "@react-three/fiber";
import Box from "../box/Box";
import Model from "../logos/Github";
import { OrbitControls } from "@react-three/drei";

function LogoContainer() {
    return (
        <div className="logo-container">
            <h1 className="pre-text">GIT</h1>
            <div className="logo">
                <Canvas>
                    <Model />
                    <OrbitControls />
                </Canvas>
            </div>
            <h1 className="post-text">HUB</h1>
        </div>
    );
}

export default LogoContainer;
