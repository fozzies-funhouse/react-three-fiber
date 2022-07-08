import React, { Suspense, useRef } from 'react';
import {
  Environment,
  PresentationControls,
  MeshReflectorMaterial,
} from '@react-three/drei';
import {
  Canvas, // Canvaas element
} from '@react-three/fiber';

import './SingleProduct3D.css';
import Shoe1 from './Shoe1';
import Shoe2 from './Shoe2';
import Shoe3 from './Shoe3';
import Shoe4 from './Shoe4';
import Shoe5 from './Shoe5';
import Shoe6 from './Shoe6';
import Shoe8 from './Shoe8';
import Shoe10 from './Shoe10';
import Shoe12 from './Shoe12';

// React Functional Component

function SingleProduct3D() {
  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        shadows
        camera={{ position: [-5, 10, 14], fov: 75 }}
        gl={{ alpha: true }}
      >
        <fog attach='fog' args={['white', 30, 40]} />
        <color attach='background' args={['white']} />
        <ambientLight intensity={0.02} />
        <directionalLight
          castShadow
          intensity={0.4}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach='shadow-camera'
            left={-20}
            right={20}
            top={20}
            bottom={-20}
          />
        </directionalLight>
        <Suspense fallback={null}>
          <PresentationControls global polar={[0, 0.3]}>
            <Shoe8 />
          </PresentationControls>

          <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[80, 80]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={5}
              depthScale={1}
              minDepthThreshold={0.85}
              color='#c0c0c0'
              metalness={0.5}
              roughness={0.6}
            />
          </mesh>
          <Environment preset='dawn' />
        </Suspense>
      </Canvas>
    </>
  );
}

export default SingleProduct3D;
