"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--dark-surface)",
        position: "relative",
      }}
    >
      {/* Top gold divider */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 24px 40px",
        }}
      >
        {/* Three–column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1.5fr",
            gap: 60,
            marginBottom: 60,
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Image
                src="/imageAsset/logo.jpg"
                alt="Jibran Food"
                width={40}
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                }}
              >
                Jibran Food
              </span>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--cream-muted)",
                lineHeight: 1.8,
                maxWidth: 380,
                marginBottom: 24,
              }}
            >
              Crafting premium Lacchi Shemai with 100% pure ghee and the finest
              ingredients. Taste the tradition in every bite.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  label: "Facebook",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  svg: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid var(--dark-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cream-muted)",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--dark-border)";
                    e.currentTarget.style.color = "var(--cream-muted)";
                  }}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                color: "var(--gold)",
                marginBottom: 24,
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--cream-muted)",
                      transition: "color 0.3s, padding-left 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold)";
                      e.currentTarget.style.paddingLeft = "8px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--cream-muted)";
                      e.currentTarget.style.paddingLeft = "0px";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                color: "var(--gold)",
                marginBottom: 24,
                letterSpacing: "0.05em",
              }}
            >
              Get In Touch
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>📍</span>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cream-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  Dhaka, Bangladesh
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>📧</span>
                <a
                  href="mailto:contact@jibranfood.com"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cream-muted)",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--cream-muted)")
                  }
                >
                  contact@jibranfood.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>📞</span>
                <a
                  href="tel:+8801234567890"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cream-muted)",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--cream-muted)")
                  }
                >
                  +880 1234-567890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--dark-border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--cream-muted)",
              opacity: 0.6,
            }}
          >
            © {new Date().getFullYear()} Jibran Food. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--cream-muted)",
              opacity: 0.4,
            }}
          >
            Premium Lacchi Shemai — Made with ❤️ in Bangladesh
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}
