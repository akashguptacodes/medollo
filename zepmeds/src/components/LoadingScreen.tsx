import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationIdRef = useRef<number>();
  
  const [showText, setShowText] = useState(false);
  const [textAnimation, setTextAnimation] = useState('');

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdbeafe); // bg-blue-100 equivalent
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0xdbeafe, 1);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Spotlight for dramatic effect
    const spotLight = new THREE.SpotLight(0x60a5fa, 2); // blue-400
    spotLight.position.set(0, 0, 8);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.3;
    scene.add(spotLight);

    // Create main capsule (will burst open)
    const capsuleGroup = new THREE.Group();
    
    // Capsule top half (blue)
    const topGeometry = new THREE.SphereGeometry(1.2, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const topMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6, // More saturated blue
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    const topHalf = new THREE.Mesh(topGeometry, topMaterial);
    topHalf.position.y = 0.3;
    topHalf.castShadow = true;
    capsuleGroup.add(topHalf);

    // Capsule middle cylinder
    const middleGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.6, 24);
    const middleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6, // More saturated blue
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    const middle = new THREE.Mesh(middleGeometry, middleMaterial);
    middle.castShadow = true;
    capsuleGroup.add(middle);

    // Capsule bottom half (green)
    const bottomGeometry = new THREE.SphereGeometry(1.2, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const bottomMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x059669, // More saturated green
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    const bottomHalf = new THREE.Mesh(bottomGeometry, bottomMaterial);
    bottomHalf.position.y = -0.3;
    bottomHalf.castShadow = true;
    capsuleGroup.add(bottomHalf);

    scene.add(capsuleGroup);

    // Create energy rings for burst effect
    const energyRings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(0.5 + i * 0.4, 0.03, 8, 32);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? 0x3b82f6 : 0x059669,
        transparent: true,
        opacity: 0,
        emissive: i % 2 === 0 ? 0x1e40af : 0x047857
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      energyRings.push(ring);
      scene.add(ring);
    }

    // Animation variables
    let startTime = Date.now();
    const totalDuration = 5000; // 5 seconds
    const phases = {
      anticipation: 1200,  // Capsule preparation
      burst: 800,          // Explosion moment
      textReveal: 2000,    // Text animation
      convergence: 1000    // Final gathering
    };

    let currentPhase = 'anticipation';
    let phaseStartTime = startTime;

    // Animation loop
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const phaseElapsed = currentTime - phaseStartTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Determine current phase
      if (phaseElapsed >= phases.anticipation && currentPhase === 'anticipation') {
        currentPhase = 'burst';
        phaseStartTime = currentTime;
      } else if (phaseElapsed >= phases.burst && currentPhase === 'burst') {
        currentPhase = 'textReveal';
        phaseStartTime = currentTime;
        setShowText(true);
        setTextAnimation('burst-in');
      } else if (phaseElapsed >= phases.textReveal && currentPhase === 'textReveal') {
        currentPhase = 'convergence';
        phaseStartTime = currentTime;
      }

      const phaseProgress = Math.min(phaseElapsed / phases[currentPhase], 1);

      // Phase 1: Anticipation - Capsule preparation
      if (currentPhase === 'anticipation') {
        // Gentle rotation and scaling
        capsuleGroup.rotation.y = phaseElapsed * 0.002;
        capsuleGroup.rotation.x = Math.sin(phaseElapsed * 0.003) * 0.1;
        
        // Pulsing effect
        const pulse = 1 + Math.sin(phaseElapsed * 0.008) * 0.1;
        capsuleGroup.scale.setScalar(pulse);
        
        // Increase lighting intensity
        spotLight.intensity = 2 + Math.sin(phaseElapsed * 0.01) * 0.5;
        
        // Camera slight zoom
        camera.position.z = 10 - phaseProgress * 1;
      }

      // Phase 2: Burst - Capsule explosion
      else if (currentPhase === 'burst') {
        const burstProgress = phaseProgress;
        
        // Separate capsule halves dramatically
        topHalf.position.y = 0.3 + burstProgress * 8;
        topHalf.position.x = -burstProgress * 4;
        topHalf.rotation.x = burstProgress * Math.PI * 2;
        topHalf.rotation.z = burstProgress * Math.PI;
        
        bottomHalf.position.y = -0.3 - burstProgress * 8;
        bottomHalf.position.x = burstProgress * 4;
        bottomHalf.rotation.x = -burstProgress * Math.PI * 2;
        bottomHalf.rotation.z = -burstProgress * Math.PI;
        
        middle.position.y = burstProgress * 2;
        middle.rotation.y = burstProgress * Math.PI * 3;
        middle.scale.setScalar(1 + burstProgress * 2);
        
        // Fade capsule parts
        topMaterial.opacity = 0.9 - burstProgress * 0.9;
        middleMaterial.opacity = 0.9 - burstProgress * 0.9;
        bottomMaterial.opacity = 0.9 - burstProgress * 0.9;

        // Show energy rings
        energyRings.forEach((ring, index) => {
          ring.material.opacity = Math.sin(burstProgress * Math.PI) * 0.8;
          ring.scale.setScalar(1 + burstProgress * 3);
          ring.rotation.z += 0.1;
        });

        // Dynamic camera shake
        camera.position.x = (Math.random() - 0.5) * burstProgress * 0.5;
        camera.position.y = (Math.random() - 0.5) * burstProgress * 0.5;
        camera.position.z = 9 + (Math.random() - 0.5) * burstProgress * 0.5;
        
        // Intense lighting
        spotLight.intensity = 2 + burstProgress * 3;
      }

      // Phase 3: Text Reveal - Text animations
      else if (currentPhase === 'textReveal') {
        const textProgress = phaseProgress;
        
        // Hide capsule completely
        capsuleGroup.visible = false;
        
        // Fade energy rings
        energyRings.forEach(ring => {
          ring.material.opacity = 0.8 - textProgress * 0.8;
          ring.scale.setScalar(3 + textProgress * 2);
        });

        // Smooth camera movement
        camera.position.x = Math.sin(currentTime * 0.001) * 1;
        camera.position.y = Math.cos(currentTime * 0.0008) * 0.5;
        camera.position.z = 9 + Math.sin(currentTime * 0.0005) * 0.5;
        camera.lookAt(0, 0, 0);
      }

      // Phase 4: Convergence - Final gathering
      else if (currentPhase === 'convergence') {
        const convergeProgress = phaseProgress;
        
        // Final camera zoom out
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 12, convergeProgress * 0.05);
      }

      renderer.render(scene, camera);

      if (progress < 1) {
        animationIdRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    // Handle window resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Progress bar - shown from beginning */}
      <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
        <div className="w-full max-w-md mx-auto">
          <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 rounded-full animate-loading-progress"></div>
          </div>
          
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          
          <p className="text-slate-500 text-center animate-type-text">
            Preparing your pharmacy capsule...
          </p>
        </div>
      </div>

      {/* Text content - appears after burst */}
      {showText && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none ${textAnimation}`}>
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 animate-burst-logo">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mr-4 animate-pulse-scale">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
                </svg>
              </div>
              <h1 className="text-7xl font-black bg-gradient-to-r from-blue-500 via-blue-400 to-green-500 bg-clip-text text-transparent animate-burst-title">
                Medollo
              </h1>
            </div>
            
            <div className="text-4xl font-bold text-slate-700 mb-4 animate-burst-subtitle">
              <span className="text-blue-500">Medicine</span> in 
              <span className="text-green-500 mx-3 animate-bounce">15 Minutes</span>
            </div>
            
            <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed animate-burst-description">
              Watch your medicines come to life with lightning-fast delivery
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes loading-progress {
          0% { width: 0%; }
          25% { width: 30%; }
          50% { width: 60%; }
          75% { width: 85%; }
          100% { width: 100%; }
        }
        
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes type-text {
          0% { opacity: 0; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }

        @keyframes burst-logo {
          0% { 
            opacity: 0; 
            transform: scale(0.3) rotate(-180deg) translateY(100px); 
          }
          60% { 
            opacity: 0.8; 
            transform: scale(1.1) rotate(10deg) translateY(-20px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg) translateY(0px); 
          }
        }

        @keyframes burst-title {
          0% { 
            opacity: 0; 
            transform: scale(0.5) translateX(-200px); 
          }
          70% { 
            opacity: 0.9; 
            transform: scale(1.05) translateX(20px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateX(0px); 
          }
        }

        @keyframes burst-subtitle {
          0% { 
            opacity: 0; 
            transform: translateY(50px) scale(0.8); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0px) scale(1); 
          }
        }

        @keyframes burst-description {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0px); 
          }
        }
        
        .animate-loading-progress {
          animation: loading-progress 5s ease-in-out forwards;
        }
        
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        
        .animate-type-text {
          animation: type-text 3s ease-in-out infinite;
        }

        .burst-in .animate-burst-logo {
          animation: burst-logo 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .burst-in .animate-burst-title {
          animation: burst-title 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s forwards;
          opacity: 0;
        }

        .burst-in .animate-burst-subtitle {
          animation: burst-subtitle 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .burst-in .animate-burst-description {
          animation: burst-description 0.6s ease-out 0.9s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;