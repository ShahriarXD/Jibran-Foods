"use client";

import NextImage from "next/image";
import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 80;
const FRAME_PATH = "/hero-image/Lacchi_Shemai_Dessert_Preparation_Video_";

function getFrameSrc(index: number): string {
  return `${FRAME_PATH}${String(index).padStart(3, "0")}.jpg`;
}

export default function ScrollSequence() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const currentFrameRef = useRef(0);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 17, mass: 0.15 });
  const y = useSpring(my, { stiffness: 220, damping: 17, mass: 0.15 });

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const image = imagesRef.current[frameIndex];
    if (!canvas || !context || !image || !image.complete) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, rect.width, rect.height);

    const imageAspect = image.naturalWidth / image.naturalHeight;
    const canvasAspect = rect.width / rect.height;

    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let drawX = 0;
    let drawY = 0;

    if (imageAspect > canvasAspect) {
      drawHeight = rect.height;
      drawWidth = drawHeight * imageAspect;
      drawX = (rect.width - drawWidth) / 2;
    } else {
      drawWidth = rect.width;
      drawHeight = drawWidth / imageAspect;
      drawY = (rect.height - drawHeight) / 2;
    }

    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  }, []);

  useEffect(() => {
    let loaded = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const frame = new window.Image();
      frame.src = getFrameSrc(i);
      frame.onload = () => {
        loaded += 1;
        if (loaded === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      frame.onerror = () => {
        loaded += 1;
        if (loaded === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(frame);
    }

    imagesRef.current = loadedImages;
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    drawFrame(0);

    const unsubscribe = scrollYProgress.on("change", (value) => {
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(value * (TOTAL_FRAMES - 1)));
      if (frameIndex === currentFrameRef.current) return;

      currentFrameRef.current = frameIndex;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        drawFrame(frameIndex);
      });
    });

    const onResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener("resize", onResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame, imagesLoaded, scrollYProgress]);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const moveX = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const moveY = (event.clientY - rect.top - rect.height / 2) * 0.2;
    mx.set(moveX);
    my.set(moveY);
  };

  const resetMagnet = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section ref={containerRef} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {!imagesLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#13233c]/30">
            <div className="h-10 w-10 animate-spin rounded-full border-3 border-white/30 border-t-white" />
          </div>
        )}

        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#081426]/45 via-transparent to-[#13233c]/15" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-end px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
          <motion.div
            className="glass-card w-full max-w-2xl p-5 sm:p-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <NextImage
              src="/imageAsset/logo.jpg"
              alt="Jibran Food logo"
              width={180}
              height={72}
              className="mb-5 h-auto w-28 rounded-lg border border-white/60 shadow-[0_18px_40px_rgba(19,35,60,0.08)] sm:w-36"
              priority
            />

            <p className="tracking-lux text-xs font-semibold uppercase text-[#27496d] sm:text-sm">
              Scroll Animation Intro
            </p>
            <h1 className="mt-2 text-4xl font-semibold leading-[0.92] text-[#13233c] sm:text-5xl lg:text-6xl">
              The Gold Standard
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
              Start scrolling from the top to watch the full frame-by-frame sequence. After this sequence ends, the next sections appear.
            </p>

            <div className="mt-6 flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row">
              <motion.a
                ref={buttonRef}
                href="#standards"
                className="btn-premium w-full bg-[#1f5a43] text-white sm:w-auto"
                style={{ x, y }}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetMagnet}
              >
                Discover Quality
              </motion.a>
              <a
                href="#process"
                className="btn-premium w-full border border-[#27496d]/35 bg-white/65 text-[#27496d] hover:bg-white sm:w-auto"
              >
                Craft Story
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}