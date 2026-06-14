import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function ParticleScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} />

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </Canvas>
  );
}