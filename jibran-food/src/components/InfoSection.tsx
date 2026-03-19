"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function InfoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--dark-surface)",
      }}
    >
      {/* Top gold line */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,98,0.3), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="story-grid"
      >
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">✦ Our Heritage</span>
          <h2
            className="section-title"
            style={{ marginTop: 16, maxWidth: 480 }}
          >
            A Legacy of{" "}
            <span style={{ color: "var(--gold)" }}>Flavour</span> &{" "}
            <span style={{ color: "var(--gold)" }}>Tradition</span>
          </h2>
          <div className="gold-divider" />
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--cream-muted)",
              lineHeight: 1.9,
              marginBottom: 20,
            }}
          >
            Jibran Food began with a simple belief — that the rich, authentic
            flavours of traditional Bangladeshi desserts deserve to be preserved
            and shared with the world.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--cream-muted)",
              lineHeight: 1.9,
              marginBottom: 32,
            }}
          >
            Our Lacchi Shemai is prepared the way it has been for generations:
            golden vermicelli slow-roasted in pure ghee, layered with fragrant
            cardamom, and finished with a generous crown of hand-selected
            almonds, cashews, and pistachios.
          </p>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              gap: 40,
            }}
            className="stats-row"
          >
            {[
              { num: "100%", label: "Pure Ghee" },
              { num: "3+", label: "Premium Nuts" },
              { num: "0", label: "Preservatives" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--cream-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: 6,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* Decorative border */}
          <div
            style={{
              position: "absolute",
              top: -12,
              right: -12,
              bottom: 12,
              left: 12,
              border: "1px solid rgba(201,169,98,0.2)",
              borderRadius: "var(--radius-lg)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              aspectRatio: "4/5",
            }}
          >
            <Image
              src="/imageAsset/info.jpg"
              alt="Traditional Lacchi Shemai preparation"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Gold overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom gold line */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,98,0.3), transparent)",
        }}
      />

      {/* Responsive */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 80px 20px !important;
          }
          .stats-row {
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
