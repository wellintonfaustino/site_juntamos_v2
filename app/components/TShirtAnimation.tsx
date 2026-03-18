"use client";

import { PiTShirtDuotone } from "react-icons/pi";
import { useEffect, useState } from "react";

export function TShirtAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute top-[15%] right-0 md:right-[5%] opacity-[0.35] pointer-events-none rotate-[8deg] mix-blend-screen -scale-x-100 z-0 flex items-center justify-center w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]">
      <style>{`
        .tshirt-draw svg {
          width: 100%;
          height: 100%;
          color: #00FF66;
          overflow: visible;
          filter: drop-shadow(0px 0px 10px rgba(0, 255, 102, 0.4));
        }
        
        .tshirt-draw path:last-of-type {
          stroke: #00FF66;
          stroke-width: 2.5;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawSVG 5s ease-in-out infinite alternate;
          fill: transparent !important;
        }

        .tshirt-draw path:first-of-type {
          fill: #00FF66;
          opacity: 0;
          animation: glowFill 5s ease-in-out infinite alternate;
        }

        .hex-bg {
          /* Geometric Hexagon Grid from Hero Patterns */
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%2300ff66' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          background-size: 56px 98px;
        }

        @keyframes drawSVG {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes glowFill {
          0%, 40% { opacity: 0; }
          100% { opacity: 0.15; }
        }
      `}</style>
      
      {/* Hexagon Grid Background with Radial Mask */}
      <div className="absolute inset-[-40%] hex-bg [mask-image:radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_60%)] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="tshirt-draw w-3/4 h-3/4">
        <PiTShirtDuotone />
      </div>
    </div>
  );
}
