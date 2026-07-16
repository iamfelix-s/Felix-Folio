import { motion, useSpring } from 'framer-motion'
import Link from 'next/link'
import React, { useCallback } from 'react'


let MotionLink = motion(Link);

const Logo = React.memo(() => {
  // Spring-physics motion values for 3D parallax tilt
  // useSpring automatically animates with spring physics when .set() is called
  // No React re-renders — values update on the GPU via Framer Motion
  const rotateX = useSpring(0, { stiffness: 200, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 15 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalX = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 to 0.5
    const normalY = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(normalY * -12);   // Max ±12° tilt on Y-axis
    rotateY.set(normalX * 12);    // Max ±12° tilt on X-axis
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <div className="flex flex-col items-center justify-center mt-2" style={{ perspective: '500px' }}>
      <MotionLink
        href="/"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex items-center justify-center rounded-full w-16 h-16 bg-[#0f0f11] text-white border border-white/[0.08] text-2xl font-bold overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.06,
          boxShadow: "0 0 40px rgba(99, 102, 241, 0.25), 0 0 80px rgba(99, 102, 241, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.4)",
          borderColor: "rgba(99, 102, 241, 0.5)",
        }}
        whileTap={{
          scale: 0.97,
          boxShadow: "0 0 12px rgba(99, 102, 241, 0.12), 0 4px 12px -4px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        {/* Layer 1 — Idle Breathing Ambient Highlight
            A slow-drifting radial light near the top-left quadrant
            creates the sense of a living, reflective surface at rest */}
        <div
          className="absolute inset-0 rounded-full logo-breathe pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 25%, rgba(99, 102, 241, 0.18) 0%, transparent 55%)",
          }}
        />

        {/* Layer 2 — Specular Glass Reflection Sweep
            A skewed light band that sweeps left-to-right on hover,
            mimicking light catching the surface of polished glass.
            Uses CSS transition triggered by .group:hover (see globals.css) */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          <div
            className="logo-specular absolute inset-[-20%] opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.28) 42%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.04) 58%, transparent 70%)",
            }}
          />
        </div>

        {/* Layer 3 — Background Morph: Inner Radial Glow
            On hover the dark background gains a subtle internal radiance,
            as if a light source is illuminating from within */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.22) 0%, rgba(99, 102, 241, 0.06) 55%, transparent 100%)",
            transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Layer 4 — Border Energy Ring
            An inner inset shadow that creates the illusion of the border
            becoming alive and luminous on hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 0 1.5px rgba(99, 102, 241, 0.45), inset 0 0 25px rgba(99, 102, 241, 0.1)",
            transition: "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Layer 5 — Outer Halo Bloom
            A soft atmospheric glow behind the badge that activates on hover,
            creating depth and elevation */}
        <div
          className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
            transition: "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            filter: "blur(8px)",
          }}
        />

        {/* Layer 6 — The F Letter
            Uses CSS .logo-text class (globals.css) for hover text-shadow glow
            and brightness increase */}
        <span className="relative z-10 text-white select-none logo-text font-bold">
          F
        </span>
      </MotionLink>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;