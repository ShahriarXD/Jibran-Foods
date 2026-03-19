"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOTAL_FRAMES = 80;

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/hero-image/Lacchi_Shemai_Dessert_Preparation_Video_${padded}.jpg`;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Preload all 80 frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
          drawFrame(0);
        }
      };
      images.push(img);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function drawFrame(index: number) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cover-fit the image
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawW: number, drawH: number, dx: number, dy: number;

    if (imgRatio > canvasRatio) {
      drawH = canvas.height;
      drawW = drawH * imgRatio;
      dx = (canvas.width - drawW) / 2;
      dy = 0;
    } else {
      drawW = canvas.width;
      drawH = drawW / imgRatio;
      dx = 0;
      dy = (canvas.height - drawH) / 2;
    }

    ctx.drawImage(img, dx, dy, drawW, drawH);
  }

  // Scroll-driven frame rendering
  useEffect(() => {
    if (!loaded) return;

    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / scrollableHeight)
      );
      const newIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(scrollProgress * TOTAL_FRAMES)
      );

      if (newIndex !== frameIndexRef.current) {
        frameIndexRef.current = newIndex;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(newIndex));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  // Handle resize
  useEffect(() => {
    if (!loaded) return;
    const onResize = () => drawFrame(frameIndexRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <div
      id="home"
      ref={containerRef}
      style={{
        height: "500vh",
        position: "relative",
      }}
    >
      {/* Sticky canvas viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Loading state */}
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--dark)",
              zIndex: 10,
              gap: 20,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.4rem",
                color: "var(--gold)",
              }}
            >
              Loading Experience
            </div>
            <div
              style={{
                width: 200,
                height: 3,
                background: "var(--dark-border)",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg, var(--gold-dark), var(--gold))",
                  borderRadius: 4,
                }}
              />
            </div>
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--cream-muted)",
              }}
            >
              {progress}%
            </span>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />

        {/* Dark overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0) 30%, rgba(10,10,10,0) 60%, rgba(10,10,10,0.9) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Text overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "60px 24px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span
              className="section-label"
              style={{ pointerEvents: "auto" }}
            >
              ✦ Handcrafted Tradition
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="glow-text"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              color: "var(--white)",
              marginTop: 16,
              lineHeight: 1.1,
              maxWidth: 700,
            }}
          >
            Crafted with{" "}
            <span style={{ color: "var(--gold)" }}>Pure Ghee</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              color: "var(--cream-muted)",
              maxWidth: 500,
              marginTop: 16,
              lineHeight: 1.8,
            }}
          >
            Premium Lacchi Shemai topped with almonds, cashews, and pistachios — a timeless Bangladeshi delicacy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ marginTop: 28, pointerEvents: "auto" }}
          >
            <a href="#products" className="btn-primary">
              <span>Explore Products</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--cream-muted)",
              opacity: 0.6,
            }}
          >
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{
              width: 20,
              height: 32,
              borderRadius: 10,
              border: "1.5px solid rgba(201,169,98,0.4)",
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <motion.div
              animate={{ height: [4, 10, 4], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                width: 2,
                borderRadius: 2,
                background: "var(--gold)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
