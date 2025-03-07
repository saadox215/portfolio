import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#1a4b8c", // Starting with a blue color
  });
  const data = useScroll();
  
  const tl = useRef();
  
  useFrame(() => {
    tl.current.progress(data.scroll.current);
    material.current.color = new THREE.Color(color.current.color);
  });
  
  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "#0a2d5c", // Darker blue
    });
    tl.current.to(color.current, {
      color: "#5487d1", // Medium blue
    });
    tl.current.to(color.current, {
      color: "#89aae6", // Lighter blue
    });
  }, []);
  
  return (
    <Sphere args={[30, 32, 32]}>
      <meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={false} />
    </Sphere>
  );
};