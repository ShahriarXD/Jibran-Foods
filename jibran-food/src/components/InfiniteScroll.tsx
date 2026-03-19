"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "🧈",
    title: "100% Pure Ghee",
    desc: "Made exclusively with premium quality pure ghee — never with oil or substitutes.",
  },
  {
    icon: "🥜",
    title: "Premium Nuts",
    desc: "Topped generously with hand-selected almonds, cashews, and pistachios.",
  },
  {
    icon: "✋",
    title: "Handcrafted",
    desc: "Every batch is carefully prepared by hand following time-honoured recipes.",
  },
  {
    icon: "🚫",
    title: "No Preservatives",
    desc: "All-natural ingredients with zero artificial additives or preservatives.",
  },
];

export default function InfiniteScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        background: "var(--dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, rgba(201,169,98,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <span className="section-label">✦ What Makes Us Special</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Our <span style={{ color: "var(--gold)" }}>Premium</span> Promise
          </h2>
          <div className="gold-divider-center" />
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", marginTop: 12 }}
          >
            Every box of Jibran Food Lacchi Shemai represents our unwavering
            commitment to quality and tradition.
          </p>
        </motion.div>

        {/* Product Image Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 64,
          }}
          className="product-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card"
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                position: "relative",
                paddingTop: "75%",
                overflow: "hidden",
              }}
            >
              <Image
                src="/imageAsset/product.jpg"
                alt="Jibran Food Lacchi Shemai Product"
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
            <div style={{ padding: "20px 24px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  color: "var(--white)",
                  marginBottom: 4,
                }}
              >
                Premium Lacchi Shemai
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--cream-muted)",
                }}
              >
                Classic sweet vermicelli with pure ghee
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="card"
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                position: "relative",
                paddingTop: "75%",
                overflow: "hidden",
              }}
            >
              <Image
                src="/imageAsset/product showcase.jpg"
                alt="Jibran Food Lacchi Shemai Showcase"
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
            <div style={{ padding: "20px 24px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  color: "var(--white)",
                  marginBottom: 4,
                }}
              >
                Gift Package
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--cream-muted)",
                }}
              >
                Perfect for sharing with loved ones
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
          className="features-grid"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              style={{
                background: "var(--dark-card)",
                border: "1px solid var(--dark-border)",
                borderRadius: "var(--radius-md)",
                padding: "32px 24px",
                textAlign: "center",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,169,98,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--dark-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: 16 }}>
                {f.icon}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                {f.title}
              </h4>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--cream-muted)",
                  lineHeight: 1.7,
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
          .features-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
