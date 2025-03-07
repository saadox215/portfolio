import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const TechCircle3D = ({ skills }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuration de la scène, de la caméra et du rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
    mountRef.current.appendChild(renderer.domElement);

    // Lumière
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Création du cercle
    const radius = 5;
    const segments = 32; // Nombre de segments pour le cercle
    const circleGeometry = new THREE.CircleGeometry(radius, segments);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    scene.add(circle);

    // Chargement de la police
    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
      skills.forEach((skill, index) => {
        const textGeometry = new TextGeometry(skill.title, {
          font: font,
          size: 0.5,
          height: 0.1,
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        // Positionnement du texte autour du cercle
        const angle = (index / skills.length) * Math.PI * 2;
        textMesh.position.set(
          Math.cos(angle) * (radius + 1),
          Math.sin(angle) * (radius + 1),
          0
        );
        textMesh.rotation.z = angle + Math.PI / 2;
        scene.add(textMesh);
      });
    });

    // Positionnement de la caméra
    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      circle.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Gestion du redimensionnement
    const handleResize = () => {
      const width = window.innerWidth * 0.8;
      const height = window.innerHeight * 0.8;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [skills]);

  return <div ref={mountRef} />;
};

export default TechCircle3D;