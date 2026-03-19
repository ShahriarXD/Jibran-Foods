"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/app/lib/assetPath";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Heritage() {
  return (
    <section id="heritage" className="section-shell relative overflow-hidden px-6 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
        <motion.div
          className="lg:col-span-2"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-7 h-px w-20 bg-[#d4af37]" />
          <p className="tracking-lux text-xs font-semibold uppercase text-[#27496d] sm:text-sm">
            Legacy and Ritual
          </p>
          <h2 className="mt-3 text-4xl leading-[0.92] text-[#13233c] sm:text-5xl md:text-6xl">
            A Legend,
            <span className="block text-[#13233c]/80">Perfected.</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-card overflow-hidden lg:col-span-3"
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="mx-auto max-w-[42ch] text-base leading-relaxed text-[#4b5563] sm:text-lg">
                For decades, the narrow lanes of Bogura have guarded a recipe so delicate it melts before it reaches the tongue. At Jibran Food, that craft is preserved with patience and precision, so every strand of Laccha Shemai arrives as a golden thread of heritage.
              </p>
              <p className="mx-auto mt-5 max-w-[42ch] text-sm leading-relaxed text-[#4b5563]/85 sm:text-base">
                Hand-stretched dough, balanced heat, and disciplined hygiene are what transform tradition into an elevated everyday indulgence.
              </p>
            </div>

            <div className="relative min-h-70 sm:min-h-85 lg:min-h-full">
              <Image
                src={getAssetPath("/imageAsset/info.jpg")}
                alt="Traditional Jibran shemai preparation and ingredients"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#13233c]/30 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
