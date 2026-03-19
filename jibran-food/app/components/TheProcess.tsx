"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "The Secret Flour Blend",
    copy: "Sourced from specific regional grains, our flour is triple-sifted for a texture that defies gravity.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "The Ghee Infusion",
    copy: "We use 100% organic, wood-fire churned ghee. The aroma is locked into every golden strand.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "12-Hour Hand-Stretching",
    copy: "Artisans pull and fold the dough for 12 hours to achieve the signature 'Laccha' thinness that machines cannot replicate.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "The Flash-Chill Method",
    copy: "Our Shemai is cooled in a humidity-controlled chamber to ensure it stays crisp until it meets your milk.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function TheProcess() {
  return (
    <section id="process" className="section-shell relative px-6 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-20">
        <motion.p
          className="tracking-lux mb-4 text-xs font-semibold uppercase text-[#27496d] sm:text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Process
        </motion.p>
        <motion.h2
          className="text-4xl leading-[0.92] text-[#13233c] sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          The 4-Pillar Craftsmanship
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-base text-[#4b5563] sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The Art of the Craft
        </motion.p>
      </div>

      {/* 4 Vertical Cards */}
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.number}
            className={`glass-card group relative flex cursor-default flex-col items-start p-7 sm:p-8 ${
              idx === 0 ? "lg:col-span-3" : idx === 1 ? "lg:col-span-3" : idx === 2 ? "lg:col-span-4" : "lg:col-span-2"
            }`}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            {/* Number badge */}
            <span className="tracking-lux mb-6 text-xs font-bold text-[#27496d]/75">
              {pillar.number}
            </span>

            {/* Icon */}
            <div className="mb-5 text-[#d4af37]">{pillar.icon}</div>

            {/* Title */}
            <h3 className="mb-3 text-xl leading-snug text-[#13233c] sm:text-2xl">
              {pillar.title}
            </h3>

            {/* Copy */}
            <p className="text-sm leading-relaxed text-[#4b5563] sm:text-base">
              {pillar.copy}
            </p>

            {/* Gold accent line at bottom — grows on hover */}
            <div className="mt-auto pt-6 w-full">
              <div className="h-0.5 w-10 bg-[#d4af37]/45 transition-all duration-500 group-hover:w-20 group-hover:bg-[#d4af37]" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
