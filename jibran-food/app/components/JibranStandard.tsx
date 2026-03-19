"use client";

import { motion } from "framer-motion";

const jibranItems = [
  {
    label: "Authentic Bogura Artisans",
    description: "Master craftsmen with generations of expertise",
  },
  {
    label: "100% Premium Ghee",
    description: "Pure, aromatic ghee — never adulterated",
  },
  {
    label: "Surgical Hygiene Standards",
    description: "Lab-grade cleanliness at every step",
  },
  {
    label: "Made-to-Order Freshness",
    description: "Crafted fresh, never stored on shelves",
  },
];

const otherItems = [
  {
    label: "Factory-Processed",
    description: "Mass-produced without care",
  },
  {
    label: "Artificial Flavoring",
    description: "Chemical shortcuts over authenticity",
  },
  {
    label: "Unregulated Kitchens",
    description: "No quality control or oversight",
  },
  {
    label: "Stale Batches",
    description: "Sitting in warehouses for weeks",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function CheckIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0 text-emerald-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function JibranStandard() {
  return (
    <section id="standards" className="section-shell relative px-6 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mx-auto mb-14 max-w-5xl text-center sm:mb-20">
        <motion.p
          className="tracking-lux mb-4 text-xs font-semibold uppercase text-[#27496d] sm:text-sm"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Why We&apos;re Different
        </motion.p>
        <motion.h2
          className="text-4xl leading-[0.92] text-[#13233c] sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The Jibran Standard
        </motion.h2>
      </div>

      {/* Bento Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
        <motion.div
          className="glass-card relative overflow-hidden p-7 sm:p-8 lg:col-span-4"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-linear-to-bl from-[#d4af37]/25 to-transparent" />

          <div className="mb-7">
            <span className="tracking-lux inline-block rounded-full bg-[#1f5a43]/12 px-4 py-1.5 text-[11px] font-semibold uppercase text-[#1f5a43]">
              Jibran Food
            </span>
          </div>

          <motion.ul
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {jibranItems.map((item) => (
              <motion.li
                key={item.label}
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <CheckIcon />
                <div>
                  <p className="text-base font-semibold text-[#13233c] sm:text-lg">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm text-[#4b5563]">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="glass-card relative overflow-hidden p-7 sm:p-8 lg:col-span-2"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mb-7">
            <span className="tracking-lux inline-block rounded-full bg-[#8a4b2f]/10 px-4 py-1.5 text-[11px] font-semibold uppercase text-[#8a4b2f]">
              Others
            </span>
          </div>

          <motion.ul
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {otherItems.map((item) => (
              <motion.li
                key={item.label}
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <CrossIcon />
                <div>
                  <p className="text-base font-semibold text-[#13233c]/70 sm:text-lg">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm text-[#4b5563]/80">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="glass-card p-6 sm:p-7 lg:col-span-3"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="tracking-lux text-[11px] font-semibold uppercase text-[#d4af37]">
            Quality Promise
          </p>
          <p className="mt-4 text-2xl leading-tight text-[#13233c] sm:text-3xl">
            Zero shortcuts,
            <span className="block text-[#1f5a43]">full ingredient transparency.</span>
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-6 sm:p-7 lg:col-span-3"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="tracking-lux text-[11px] font-semibold uppercase text-[#27496d]">
            Freshness Window
          </p>
          <p className="mt-4 text-2xl leading-tight text-[#13233c] sm:text-3xl">
            Crafted to order,
            <span className="block text-[#27496d]">dispatched at peak aroma.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
