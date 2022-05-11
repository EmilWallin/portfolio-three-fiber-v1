import React from "react";
import { Sphere } from "@react-three/drei";

function Box() {
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    );
}

export default Box;