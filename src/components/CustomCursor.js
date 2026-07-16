import React, { useState, useEffect, useRef, useMemo } from "react";

/**
 * CustomCursor — Engineering Calibration Marker
 * 
 * A precision measurement cursor inspired by engineering CAD tools and data
 * alignment systems. Features a solid center anchor point with four structural
 * calibration arms arranged in a + pattern.
 * 
 * Uses mix-blend-mode: difference for guaranteed visibility on ANY background.
 * Center anchor tracks at zero delay; outer arms trail with fluid physics.
 * All rendering is GPU-accelerated via translate3d and requestAnimationFrame.
 * 
 * Context-aware morphing:
 *   Default  → + calibration cross (precision measurement tool)
 *   Links    → horizontal emphasis bars (editorial underline locator)
 *   Buttons  → expanded frame (interactive target indicator)
 *   Cards    → rotated × pattern (alignment guides)
 *   Images   → wide focus ring with hollow center (camera viewfinder)
 *   Text     → fully hidden (native I-beam cursor)
 */

const CustomCursor = () => {
  const [hoverState, setHoverState] = useState("default");
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const frameRef = useRef(null);
  const isVisibleRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);

  // ── Device & Accessibility Detection ──────────────────────────────
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(!window.matchMedia("(pointer: fine)").matches);
    };
    prefersReducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // ── Native Cursor Visibility Management ───────────────────────────
  // Adds/removes .cursor-active on <body> to toggle native cursor
  // On text hover: removes class so native I-beam appears
  useEffect(() => {
    if (isMobile) {
      document.body.classList.remove("cursor-active");
      return;
    }
    if (hoverState === "text") {
      document.body.classList.remove("cursor-active");
    } else {
      document.body.classList.add("cursor-active");
    }
    return () => document.body.classList.remove("cursor-active");
  }, [hoverState, isMobile]);

  // ── GPU-Accelerated Mouse Tracking via requestAnimationFrame ──────
  useEffect(() => {
    if (isMobile) return;

    let mouseX = 0,
      mouseY = 0,
      frameX = 0,
      frameY = 0,
      animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const update = () => {
      // Center anchor: ZERO delay — pixel-perfect precision
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Outer frame: fluid trailing ease for physical depth
      const lerp = prefersReducedMotionRef.current ? 1 : 0.22;
      frameX += (mouseX - frameX) * lerp;
      frameY += (mouseY - frameY) * lerp;

      if (frameRef.current) {
        frameRef.current.style.transform = `translate3d(${frameX}px, ${frameY}px, 0)`;
      }

      animId = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isMobile]);

  // ── Global Hover State Detection ──────────────────────────────────
  useEffect(() => {
    if (isMobile) return;

    const TEXT_NODES = new Set([
      "P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6",
      "LI", "BLOCKQUOTE", "FIGCAPTION", "LABEL", "DT", "DD",
      "INPUT", "TEXTAREA",
    ]);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;

      // Priority order: link > button > image > card > text > default
      if (target.closest("a"))                                           return setHoverState("link");
      if (target.closest("button") || target.closest("[role='button']")) return setHoverState("button");
      if (target.nodeName === "IMG" || target.closest("img"))            return setHoverState("image");
      if (target.closest(".glass-card") || target.closest(".metric-card-mobile")) return setHoverState("card");
      if (TEXT_NODES.has(target.nodeName))                               return setHoverState("text");
      setHoverState("default");
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [isMobile]);

  // ── Arm Geometry Computation ──────────────────────────────────────
  // Each state returns position/size data for the 4 structural arms,
  // the center anchor, and the frame container.
  // All transitions handled via CSS transition property on each element.
  const armStyles = useMemo(() => {
    const ease = "all 350ms cubic-bezier(0.16, 1, 0.3, 1)";

    switch (hoverState) {
      // ─── Links: Editorial underline locator ───
      // Vertical arms shrink and fade; horizontal arms extend
      // Creates a wide horizontal emphasis suggesting interactivity
      case "link":
        return {
          top:       { w: 1.5, h: 4, top: 5, left: "50%", ml: -0.75, op: 0.25 },
          right:     { w: 14,  h: 2, right: 0, top: "50%", mt: -1,   op: 1 },
          bottom:    { w: 1.5, h: 4, bottom: 5, left: "50%", ml: -0.75, op: 0.25 },
          left:      { w: 14,  h: 2, left: 0,  top: "50%", mt: -1,   op: 1 },
          center:    { w: 4, h: 4, r: "50%" },
          container: { w: 34, h: 28, rot: 0 },
          ease,
        };

      // ─── Buttons: Expanded interactive frame ───
      // Arms extend outward and container grows
      // Communicates "this is clickable" without decoration
      case "button":
        return {
          top:       { w: 2, h: 8, top: 0, left: "50%", ml: -1, op: 1 },
          right:     { w: 8, h: 2, right: 0, top: "50%", mt: -1, op: 1 },
          bottom:    { w: 2, h: 8, bottom: 0, left: "50%", ml: -1, op: 1 },
          left:      { w: 8, h: 2, left: 0, top: "50%", mt: -1, op: 1 },
          center:    { w: 5, h: 5, r: "1px" },
          container: { w: 36, h: 36, rot: 0 },
          ease,
        };

      // ─── Cards: Alignment guides (× pattern) ───
      // Container rotates 45° turning + into ×
      // Evokes grid alignment / content area marking
      case "card":
        return {
          top:       { w: 2, h: 9, top: 1, left: "50%", ml: -1, op: 0.8 },
          right:     { w: 9, h: 2, right: 1, top: "50%", mt: -1, op: 0.8 },
          bottom:    { w: 2, h: 9, bottom: 1, left: "50%", ml: -1, op: 0.8 },
          left:      { w: 9, h: 2, left: 1, top: "50%", mt: -1, op: 0.8 },
          center:    { w: 4, h: 4, r: "1px" },
          container: { w: 30, h: 30, rot: 45 },
          ease,
        };

      // ─── Images: Camera viewfinder / autofocus ───
      // Wider frame with longer arms and a hollow center ring
      // Mimics a camera's autofocus bracket system
      case "image":
        return {
          top:       { w: 2, h: 11, top: 0, left: "50%", ml: -1, op: 1 },
          right:     { w: 11, h: 2, right: 0, top: "50%", mt: -1, op: 1 },
          bottom:    { w: 2, h: 11, bottom: 0, left: "50%", ml: -1, op: 1 },
          left:      { w: 11, h: 2, left: 0, top: "50%", mt: -1, op: 1 },
          center:    { w: 8, h: 8, r: "50%", hollow: true },
          container: { w: 40, h: 40, rot: 0 },
          ease,
        };

      // ─── Text: Fully hidden ───
      // Native I-beam cursor takes over
      case "text":
        return {
          top:       { op: 0 },
          right:     { op: 0 },
          bottom:    { op: 0 },
          left:      { op: 0 },
          center:    { w: 4, h: 4, r: "1px", op: 0 },
          container: { w: 28, h: 28, rot: 0 },
          ease,
        };

      // ─── Default: Precision calibration cross ───
      default:
        return {
          top:       { w: 2, h: 9, top: 1, left: "50%", ml: -1, op: 1 },
          right:     { w: 9, h: 2, right: 1, top: "50%", mt: -1, op: 1 },
          bottom:    { w: 2, h: 9, bottom: 1, left: "50%", ml: -1, op: 1 },
          left:      { w: 9, h: 2, left: 1, top: "50%", mt: -1, op: 1 },
          center:    { w: 5, h: 5, r: "1px" },
          container: { w: 30, h: 30, rot: 0 },
          ease,
        };
    }
  }, [hoverState]);

  // Return null on touch devices
  if (isMobile) return null;

  // ── Helper: Build inline style for a single arm ───────────────────
  const armStyle = (arm) => ({
    position: "absolute",
    width: arm.w ?? 0,
    height: arm.h ?? 0,
    top: arm.top,
    right: arm.right,
    bottom: arm.bottom,
    left: arm.left,
    marginLeft: arm.ml,
    marginTop: arm.mt,
    opacity: arm.op ?? 1,
    backgroundColor: "white",
    borderRadius: 1,
    transition: armStyles.ease,
  });

  const { center, container } = armStyles;
  const isHidden = hoverState === "text";

  return (
    <>
      {/* ── Center Anchor — Zero-delay precision point ──────────── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          willChange: "transform",
          mixBlendMode: "difference",
          opacity: isVisible && !isHidden ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <div
          style={{
            width: center.w || 5,
            height: center.h || 5,
            marginLeft: -(center.w || 5) / 2,
            marginTop: -(center.h || 5) / 2,
            backgroundColor: center.hollow ? "transparent" : "white",
            border: center.hollow ? "1.5px solid white" : "none",
            borderRadius: center.r || "1px",
            opacity: center.op ?? 1,
            transition: armStyles.ease,
          }}
        />
      </div>

      {/* ── Calibration Frame — Fluid trailing reticle ──────────── */}
      <div
        ref={frameRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          willChange: "transform",
          mixBlendMode: "difference",
          opacity: isVisible && !isHidden ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      >
        <div
          style={{
            position: "relative",
            width: container.w,
            height: container.h,
            marginLeft: -container.w / 2,
            marginTop: -container.h / 2,
            transform: `rotate(${container.rot || 0}deg)`,
            transition: armStyles.ease,
          }}
        >
          {/* Top Arm */}
          <div style={armStyle(armStyles.top)} />
          {/* Right Arm */}
          <div style={armStyle(armStyles.right)} />
          {/* Bottom Arm */}
          <div style={armStyle(armStyles.bottom)} />
          {/* Left Arm */}
          <div style={armStyle(armStyles.left)} />
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
