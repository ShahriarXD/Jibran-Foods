"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={scrolled ? "glass-strong" : "glass"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "14px 24px",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Image
              src="/imageAsset/logo.jpg"
              alt="Jibran Food"
              width={44}
              height={44}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              priority
            />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--gold)",
                letterSpacing: "0.02em",
              }}
            >
              Jibran Food
            </span>
          </a>

          {/* Desktop Links */}
          <ul
            style={{
              display: "flex",
              gap: 36,
              listStyle: "none",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.88rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--cream-muted)",
                    transition: "color 0.3s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--cream-muted)")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              padding: 8,
            }}
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 7, background: "var(--gold)" }
                  : { rotate: 0, y: 0, background: "var(--cream)" }
              }
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: "var(--cream)",
              }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: "var(--cream)",
              }}
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -7, background: "var(--gold)" }
                  : { rotate: 0, y: 0, background: "var(--cream)" }
              }
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: "var(--cream)",
              }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(0,0,0,0.7)",
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "75%",
                maxWidth: 320,
                height: "100%",
                background: "var(--dark-surface)",
                borderLeft: "1px solid var(--dark-border)",
                padding: "100px 32px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--cream)",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--dark-border)",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--cream)")
                  }
                >
                  {link.label}
                </motion.a>
              ))}

              <div
                style={{
                  marginTop: "auto",
                  color: "var(--cream-muted)",
                  fontSize: "0.8rem",
                }}
              >
                © {new Date().getFullYear()} Jibran Food
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Styles */}
      <style jsx global>{`
        .desktop-nav {
          display: flex !important;
        }
        .mobile-menu-btn {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
