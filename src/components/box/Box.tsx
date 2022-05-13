import React from "react";
import { Sphere } from "@react-three/drei";

function Box() {
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[2.6, 2.6, 2.6]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    );
}

export default Box;
