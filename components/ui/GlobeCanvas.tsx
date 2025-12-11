"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Globe } from "./globe";

export default function GlobeCanvas({ config, data }: any) {
  return (
    <Canvas camera={{ position: [0, 0, 300] }}>
      <ambientLight intensity={1} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
      <Globe globeConfig={config} data={data} />
    </Canvas>
  );
}
