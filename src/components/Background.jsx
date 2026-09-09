import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
  const material = useRef();
  const color = useRef({ color: "#071012" });
  const data = useScroll();
  const tl = useRef();
  useFrame(() => { if (tl.current && material.current) { tl.current.progress(data.scroll.current); material.current.color = new THREE.Color(color.current.color); } });
  useEffect(() => { tl.current = gsap.timeline(); tl.current.to(color.current, { color: "#071012" }).to(color.current, { color: "#0d1a1b" }).to(color.current, { color: "#111b1c" }); }, []);
  return <Sphere args={[30, 32, 32]}><meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={false} /></Sphere>;
};
