"use client";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// Define the KartModel component
function KartModel() {
  const { scene } = useGLTF("/3d/go_kart.glb");
  const kartRef = useRef(null);

  // Spinning effect
  useFrame(() => {
    if (kartRef.current) {
      kartRef.current.rotation.y += 0.001; // Add rotation to the kart model
    }
  });

  return <primitive object={scene} scale={0.03} ref={kartRef} />;
}

// 3D Card for CV Section

export default function KartDriverCV() {
  return (
    <div className="right-1 top-0 relative w-[800px]  text-white font-sans">
      {/* Canvas with full width and height */}
      <div className="w-full h-screen">
        <Canvas>
          {/* Camera positioned closer */}
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />{" "}
          {/* Moved camera slightly further */}
          <ambientLight intensity={3} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          {/* Spinning Kart Model */}
          <KartModel />
          {/* CV Sections */}
          {/* Left side CV card */}
        </Canvas>
      </div>
    </div>
  );
}
