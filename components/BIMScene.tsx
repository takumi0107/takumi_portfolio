"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import * as THREE from "three";

// ── Tier specs — eR is deliberately ~1.2× bW for the dramatic Horyuji overhang
const TIERS = [
  { bW: 1.60, bH: 0.52, eR: 2.02, eH: 0.22 },
  { bW: 1.26, bH: 0.46, eR: 1.62, eH: 0.18 },
  { bW: 0.98, bH: 0.40, eR: 1.28, eH: 0.15 },
  { bW: 0.76, bH: 0.35, eR: 0.99, eH: 0.13 },
  { bW: 0.56, bH: 0.30, eR: 0.74, eH: 0.10 },
];

// Stack tiers from startY upward
function buildPositions(startY: number) {
  let y = startY;
  return TIERS.map(({ bW, bH, eR, eH }) => {
    const bodyMid = y + bH / 2;
    const bodyTop = y + bH;
    const eaveMid = bodyTop + eH / 2;
    y = bodyTop + eH;
    return { bodyMid, bodyTop, eaveMid, bW, bH, eR, eH };
  });
}

// ── Upturned corner tip (跳ね上がった軒先) ─────────────────────────────────────
// signX / signZ tell which quadrant → drives the outward tilt direction
function CornerTip({ x, y, z, signX, signZ, col }: {
  x: number; y: number; z: number;
  signX: number; signZ: number;
  col: string;
}) {
  // rotation.z += signX * angle  → tip leans toward +X or -X
  // rotation.x += signZ * angle  → tip leans toward +Z or -Z
  return (
    <mesh position={[x, y + 0.01, z]} rotation={[signZ * 0.28, 0, signX * 0.28]}>
      <coneGeometry args={[0.038, 0.16, 4]} />
      <meshBasicMaterial color={col} transparent opacity={0.92} />
    </mesh>
  );
}

// ── One pagoda tier ───────────────────────────────────────────────────────────
function PagodaTier({
  bodyMid, bodyTop, eaveMid,
  bW, bH, eR, idx,
}: ReturnType<typeof buildPositions>[number] & { idx: number }) {

  const t      = idx / (TIERS.length - 1);
  const bodyC  = idx < 2 ? "#3b82f6" : "#60a5fa";
  const eaveC  = t < 0.35 ? "#60a5fa" : t < 0.7 ? "#22d3ee" : "#00e5ff";
  const lw     = 1.9 - t * 0.35;

  // Corner positions: 4-sided cone at PI/4 → corners at ±eR/√2
  const cr = eR / Math.SQRT2;
  const corners = [
    { x:  cr, z:  cr, sx:  1, sz:  1 },
    { x: -cr, z:  cr, sx: -1, sz:  1 },
    { x:  cr, z: -cr, sx:  1, sz: -1 },
    { x: -cr, z: -cr, sx: -1, sz: -1 },
  ];

  return (
    <group>
      {/* Body walls */}
      <mesh position={[0, bodyMid, 0]}>
        <boxGeometry args={[bW, bH, bW]} />
        <meshBasicMaterial color="#020215" transparent opacity={0.16} />
        <Edges color={bodyC} lineWidth={lw} />
      </mesh>

      {/* Bracket / corbel shelf — slightly wider box just below eave */}
      <mesh position={[0, bodyTop - 0.04, 0]}>
        <boxGeometry args={[bW + 0.17, 0.09, bW + 0.17]} />
        <meshBasicMaterial color="#020215" transparent opacity={0.08} />
        <Edges color={eaveC} lineWidth={lw - 0.5} />
      </mesh>

      {/* ─── THE WIDE FLAT EAVE — key visual element ─── */}
      <mesh position={[0, eaveMid, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[eR, 0.21, 4]} />
        <meshBasicMaterial color="#010112" transparent opacity={0.07} />
        <Edges color={eaveC} lineWidth={lw + 0.7} />
      </mesh>

      {/* Upturned corners */}
      {corners.map(({ x, z, sx, sz }, i) => (
        <CornerTip key={i} x={x} y={bodyTop} z={z} signX={sx} signZ={sz} col={eaveC} />
      ))}
    </group>
  );
}

// ── Wide base hall (wider lower story visible in photo) ───────────────────────
function BaseHall({ y }: { y: number }) {
  const h   = 0.37;
  const eR  = 2.58;
  const eH  = 0.18;
  const top = y + h;
  const cr  = eR / Math.SQRT2;
  const eaveC = "#60a5fa";

  return (
    <group>
      {/* Hall body */}
      <mesh position={[0, y + h / 2, 0]}>
        <boxGeometry args={[2.20, h, 2.20]} />
        <meshBasicMaterial color="#020215" transparent opacity={0.16} />
        <Edges color="#3b82f6" lineWidth={1.8} />
      </mesh>
      {/* Hall bracket shelf */}
      <mesh position={[0, top - 0.04, 0]}>
        <boxGeometry args={[2.20 + 0.18, 0.09, 2.20 + 0.18]} />
        <meshBasicMaterial color="#020215" transparent opacity={0.08} />
        <Edges color={eaveC} lineWidth={1.1} />
      </mesh>
      {/* Hall wide eave */}
      <mesh position={[0, top + eH / 2, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[eR, eH, 4]} />
        <meshBasicMaterial color="#010112" transparent opacity={0.07} />
        <Edges color={eaveC} lineWidth={2.5} />
      </mesh>
      {/* Hall corner tips */}
      {([
        { x: cr,  z: cr,  sx:  1, sz:  1 },
        { x: -cr, z: cr,  sx: -1, sz:  1 },
        { x: cr,  z: -cr, sx:  1, sz: -1 },
        { x: -cr, z: -cr, sx: -1, sz: -1 },
      ]).map(({ x, z, sx, sz }, i) => (
        <CornerTip key={i} x={x} y={top} z={z} signX={sx} signZ={sz} col={eaveC} />
      ))}
    </group>
  );
}

// ── Full assembly ─────────────────────────────────────────────────────────────
function Pagoda() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.17; });

  // Stone steps — 3 layers, each narrower
  const stepBase = -1.70;
  const stepData = [
    { w: 4.5, h: 0.13, y: stepBase },
    { w: 3.8, h: 0.12, y: stepBase + 0.13 },
    { w: 3.1, h: 0.11, y: stepBase + 0.25 },
  ];
  const stepsTopY = stepBase + 0.36; // −1.34

  // Base hall sits on steps
  const hallStartY  = stepsTopY;          // −1.34
  const hallH       = 0.37;
  const hallEaveH   = 0.18;
  const tierStartY  = hallStartY + hallH + hallEaveH; // −0.79

  const tiers = useMemo(() => buildPositions(tierStartY), [tierStartY]);
  const lastTier = tiers[tiers.length - 1];
  const topY = lastTier.eaveMid + TIERS[TIERS.length - 1].eH / 2;

  return (
    <group ref={ref}>

      {/* Stone steps */}
      {stepData.map(({ w, h, y }, i) => (
        <mesh key={i} position={[0, y + h / 2, 0]}>
          <boxGeometry args={[w, h, w * 0.90]} />
          <meshBasicMaterial color="#030312" transparent opacity={0.10} />
          <Edges color={i === 0 ? "#22d3ee" : "#3b82f6"} lineWidth={i === 0 ? 1.5 : 1.0} />
        </mesh>
      ))}

      {/* Base hall */}
      <BaseHall y={hallStartY} />

      {/* Central shinbashira pillar — runs through all floors */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.020, 0.028, 6.0, 8]} />
        <meshBasicMaterial color="#1e40af" transparent opacity={0.42} />
      </mesh>

      {/* 5 pagoda tiers */}
      {tiers.map((t, i) => <PagodaTier key={i} {...t} idx={i} />)}

      {/* ── Sorin finial (相輪) ── */}
      {/* Lower shaft */}
      <mesh position={[0, topY + 0.16, 0]}>
        <cylinderGeometry args={[0.014, 0.022, 0.32, 8]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
      {/* 九輪 — nine rings, slightly decreasing radius */}
      {Array.from({ length: 9 }, (_, i) => (
        <mesh key={i} position={[0, topY + 0.36 + i * 0.150, 0]}>
          <cylinderGeometry args={[0.054 - i * 0.004, 0.054 - i * 0.004, 0.022, 12]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.96 - i * 0.04} />
        </mesh>
      ))}
      {/* Suien (water flame) sphere */}
      <mesh position={[0, topY + 1.72, 0]}>
        <sphereGeometry args={[0.050, 10, 10]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
      {/* Hōju jewel spike */}
      <mesh position={[0, topY + 1.95, 0]}>
        <coneGeometry args={[0.036, 0.28, 6]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.88} />
      </mesh>

      {/* Ground grid */}
      <gridHelper args={[12, 18, "#172a3f", "#050d15"]} position={[0, -1.76, 0]} />

    </group>
  );
}

// ── Particles ─────────────────────────────────────────────────────────────────
function Particles() {
  const pts = useMemo(() =>
    Array.from({ length: 22 }, () => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 10,
    ] as [number, number, number])
  , []);
  return (
    <>
      {pts.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.018, 4, 4]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#60a5fa" : "#a78bfa"} />
        </mesh>
      ))}
    </>
  );
}

// ── Canvas ────────────────────────────────────────────────────────────────────
export default function BIMScene() {
  return (
    <Canvas
      camera={{ position: [5.2, 1.0, 6.2], fov: 44 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.22} />
      <pointLight position={[5, 8, 5]}   intensity={1.1} color="#3b82f6" />
      <pointLight position={[-4, 0, -5]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[0,  6, 0]}  intensity={0.3} color="#22d3ee" />
      <Pagoda />
      <Particles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        target={[0, 0.8, 0]}
        maxPolarAngle={Math.PI / 1.9}
        minPolarAngle={Math.PI / 8}
      />
    </Canvas>
  );
}
