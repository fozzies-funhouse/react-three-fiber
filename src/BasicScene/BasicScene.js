import React, { useState, useRef } from 'react';
// import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  Canvas, // Canvaas element
  useFrame, // useFrame  hook for getting the animation loop each frame
  extend, // for orbit controls
  useThree, // threeJS scene hook
} from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three'; // a is for animation

import './BasicScene.css';

// Orbit Controls component

// Orbit controls from three.js
extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef(); // useRef hook
  const { camera, gl } = useThree(); // destructuring camera and gl dom from this hook

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
    // autoRotate also animates.
  );
};

// Plane Component
const Plane = () => (
  <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
    <planeBufferGeometry attach='geometry' args={[100, 100]} />
    <meshPhysicalMaterial attach='material' color='white' />
  </mesh>
);

// Box Component
const Box = () => {
  const meshRef = useRef(); // useRef hook
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  // Box Spring
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray',
  });

  // Animation
  useFrame(() => {
    // meshRef.current.rotation.y += 0.005;
    // meshRef.current.rotation.x += 0.005;
  });

  return (
    <>
      <a.mesh
        castShadow
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setActive(!active)}
        scale={props.scale}
      >
        <ambientLight intensity={0.1} />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
        {/* <a.meshBasicMaterial attach='material' color={props.color} /> */}
        <a.meshPhysicalMaterial attach='material' color={props.color} />
      </a.mesh>
    </>
  );
};

// React Functional Component

function BasicScene() {
  return (
    <Canvas
      camera={{ position: [2, 2, 5] }}
      shadows
      // this will enable shadows in our canvas
    >
      {/* Fog element */}
      <fog attach='fog' args={['white', 5, 15]} />
      <Box />
      <Plane />
      <Controls />
    </Canvas>
  );
}

export default BasicScene;
