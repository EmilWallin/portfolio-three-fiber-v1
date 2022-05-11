import React from "react";
import "./logoContainer.css";

import { Canvas } from "@react-three/fiber";
import Box from "../box/Box";

function LogoContainer() {
    return (
        <div className="logo-container">
            <div className="logo">
                <Canvas>
                    <Box />
                </Canvas>
            </div>
        </div>
    );
}

export default LogoContainer;
