import React, { useRef, Suspense } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {
  Canvas, // Canvaas element
  useFrame, // useFrame  hook for getting the animation loop each frame
  extend, // for orbit controls
  useThree, // threeJS scene hook
  useLoader, // #3D model loader
} from '@react-three/fiber';

import './Experiment1.css';

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
    <orbitControls
      /*autoRotate*/ args={[camera, gl.domElement]}
      ref={orbitRef}
    />
    // autoRotate also animates.
  );
};

// Spaceship Component

const Shoe = () => {
  const gltf = useLoader(GLTFLoader, '../matcap_shoe/scene.gltf');
  console.log(gltf);
  gltf.scene.children[0].position.y = -10;
  console.log(gltf.scene.children[0].position.y);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};

// React Functional Component

function Experiment1() {
  return (
    <>
      {/* <h1>React Three Fiber</h1> */}

      <Canvas
        camera={{ position: [-10, 10, 35] }}
        shadows
        // this will enable shadows in our canvas
      >
        {/* Fog element */}
        {/* <fog attach='fog' args={['white', 10, 45]} color='black' /> */}
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 20, 5]} penumbra={1} castShadow />
        <Controls />
        <Shoe />
      </Canvas>
    </>
  );
}

export default Experiment1;
