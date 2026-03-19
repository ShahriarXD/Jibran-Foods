"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/app/lib/assetPath";

const quickLinks = [
  { label: "Our Story", href: "#heritage" },
  { label: "Quality Standards", href: "#standards" },
  { label: "4-Pillar Process", href: "#process" },
  { label: "Direct Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-linear-to-b from-[#d8e8f4] via-[#27496d] to-[#13233c] text-white sm:mt-28">
      {/* Subtle top divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-white/20" />
      </div>

      {/* Main footer */}
      <div>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {/* ── Left Column: Brand ── */}
            <motion.div
              id="contact"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
            >
              <Image
                src={getAssetPath("/imageAsset/logo.jpg")}
                alt="Jibran Food logo"
                width={150}
                height={62}
                className="mb-5 h-auto w-28 rounded-md border border-white/30 sm:w-32"
              />

              {/* Brand name */}
              <h3 className="text-3xl tracking-wide text-white sm:text-4xl">
                Jibran Food
              </h3>

              {/* Gold accent line */}
              <div className="mt-3 h-0.5 w-14 bg-[#d4af37]" />

              {/* Motto */}
              <p className="mt-4 text-sm italic tracking-wide text-[#d4af37]">
                A promise of pure taste.
              </p>

              {/* Brief */}
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                Elevating the tradition of Bangladeshi desserts through purity
                and precision.
              </p>
            </motion.div>

            {/* ── Center Column: Quick Links ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              className="md:text-center"
            >
              <h4 className="tracking-lux text-xs font-semibold uppercase text-white/65">
                Quick Links
              </h4>

              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors duration-300 hover:text-[#d4af37]"
                    >
                      <span className="inline-block h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Right Column: Direct Contact ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              className="md:text-right"
            >
              <h4 className="tracking-lux text-xs font-semibold uppercase text-white/65">
                Direct Contact
              </h4>

              <div className="mt-5 space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3 md:justify-end">
                  <svg
                    className="h-4 w-4 text-[#d4af37]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <a
                    href="tel:01727676836"
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    01727676836
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 md:justify-end">
                  <svg
                    className="h-4 w-4 text-[#25D366]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <a
                    href="https://wa.me/8801727676836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/80 transition-colors hover:text-[#25D366]"
                  >
                    01727676836
                  </a>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3 md:justify-end">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-sm text-white/75">
                    Operating 24/7
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/20">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-6 text-center lg:flex-row lg:justify-between lg:px-8">
            <p className="text-xs tracking-wide text-white/55">
              Copyright © 2026 Jibran Food. All rights reserved.
            </p>
            <p className="text-xs tracking-wide text-white/50">
              Crafted with passion in{" "}
              <span className="text-[#d4af37]">Dhaka, Bangladesh</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
