import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const KatanaModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bladeRef = useRef<SVGPathElement>(null);
  const sheathRef = useRef<SVGPathElement>(null);
  const handleRef = useRef<SVGGElement>(null);
  const tsubaRef = useRef<SVGCircleElement>(null);
  const sparkRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=300% bottom",
        scrub: 1, // Smooth scrubbing
        pin: true,
      }
    });

    // 1. Unsheathing Animation
    // Move sheath down and left, move handle/blade up and right
    tl.to(sheathRef.current, {
      x: -200,
      y: 200,
      rotation: -5,
      opacity: 0.6,
      ease: "power2.inOut"
    }, 0);

    tl.to([handleRef.current, tsubaRef.current, bladeRef.current], {
      x: 100,
      y: -100,
      rotation: 5,
      ease: "power2.inOut"
    }, 0);

    // 2. The Reveal (Blade glow)
    tl.to(bladeRef.current, {
      strokeDashoffset: 0,
      filter: "drop-shadow(0 0 15px rgba(217, 70, 239, 0.6))",
      duration: 0.5
    }, 0.2);

    // 3. Deconstruction (Exploded View)
    // Separate the Handle, Tsuba, and Blade
    tl.to(handleRef.current, {
      x: 350,
      y: -250,
      rotation: 15,
    }, 1);

    tl.to(tsubaRef.current, {
      x: 220,
      y: -180,
      rotation: 90, // Spin the guard
      scale: 1.2
    }, 1);

    tl.to(bladeRef.current, {
      x: 50,
      y: -50,
      rotation: 0,
      scale: 1.1
    }, 1);

    // 4. "The Cut" - Quick slash effect via scale/opacity
    tl.to(sparkRef.current, {
      opacity: 1,
      scale: 2,
      rotation: 45,
      duration: 0.2
    }, 0.8);

    // Parallax Mouse Movement (Fake 3D)
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(bladeRef.current, { x: `+=${x}`, y: `+=${y}`, duration: 1 });
      gsap.to(sheathRef.current, { x: `+=${-x}`, y: `+=${-y}`, duration: 1 });
      gsap.to(handleRef.current, { x: `+=${x * 1.5}`, y: `+=${y * 1.5}`, duration: 1 });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);

  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-screen pointer-events-none z-10 flex items-center justify-center overflow-hidden">
      <svg 
        viewBox="0 0 1200 600" 
        className="w-full h-full max-w-[1400px] drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4d4d8" />
            <stop offset="50%" stopColor="#f4f4f5" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>
          <linearGradient id="sheathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
           <pattern id="tsukaPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M5,0 L10,5 L5,10 L0,5 Z" fill="#27272a" stroke="#d946ef" strokeWidth="0.5"/>
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Saya (Sheath) */}
        <path 
          ref={sheathRef}
          d="M100,300 Q600,280 1100,200 L1110,225 Q600,310 100,330 Z" 
          fill="url(#sheathGradient)" 
          stroke="#27272a"
          strokeWidth="2"
        />

        {/* Nagasa (Blade) */}
        {/* Placed behind handle initially */}
        <path 
          ref={bladeRef}
          d="M100,305 Q600,285 1100,205 L1105,205 L1080,225 Q600,305 100,325 Z" 
          fill="url(#bladeGradient)"
          className="origin-left"
        />

        {/* Habaki (Blade Collar) - Attached to Blade Group logically but separate graphic */}
        
        {/* Tsuba (Guard) */}
        <circle 
          ref={tsubaRef}
          cx="300" 
          cy="300" 
          r="40" 
          fill="#18181b" 
          stroke="#d946ef" 
          strokeWidth="2"
          className="origin-center"
        />

        {/* Tsuka (Handle) */}
        <g ref={handleRef}>
          <path 
            d="M50,310 Q175,305 300,300 L300,330 Q175,335 50,340 Z" 
            fill="url(#tsukaPattern)"
            stroke="#18181b"
            strokeWidth="2"
          />
          {/* Menuki (Ornament) */}
          <circle cx="175" cy="320" r="5" fill="#d946ef" filter="url(#glow)" />
        </g>
        
        {/* Sparks / Energy */}
        <g ref={sparkRef} className="opacity-0 mix-blend-screen origin-center" style={{transformBox: 'fill-box'}}>
             <line x1="100" y1="200" x2="1100" y2="400" stroke="#d946ef" strokeWidth="1" />
             <line x1="100" y1="400" x2="1100" y2="200" stroke="#d946ef" strokeWidth="1" />
        </g>

      </svg>
    </div>
  );
};