"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Line({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const arc = [
  {
    k: "Why",
    v: "We believe the hands that make the best cloth on earth deserve to keep it. Quality is a birthright — not an export.",
  },
  {
    k: "How",
    v: "So we begin at the fibre, name the source, and make fewer things — properly.",
  },
  {
    k: "What",
    v: "A training brand. Apparel first. The same belief in everything that follows.",
  },
];

export function WhySection() {
  return (
    <section className="bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.28em] text-clay"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why we exist
        </motion.p>

        <div className="mt-8 grid items-center gap-14 md:grid-cols-2">
          <div>
            <Line className="font-display text-3xl leading-tight md:text-5xl" delay={0.05}>
              Most brands start with <span className="text-bone/45">what</span> they sell.
            </Line>
            <Line className="mt-1 font-display text-3xl leading-tight md:text-5xl" delay={0.16}>
              We start with <span className="text-clay">why.</span>
            </Line>

            <div className="mt-10 max-w-prose space-y-6">
              {arc.map((a, i) => (
                <Line key={a.k} delay={0.1 + i * 0.08}>
                  <span className="block text-xs uppercase tracking-[0.2em] text-clay">{a.k}</span>
                  <span className="mt-1 block text-lg text-bone/85">{a.v}</span>
                </Line>
              ))}
            </div>
          </div>

          {/* Golden Circle — a nod to Start With Why */}
          <motion.div
            className="mx-auto w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <svg viewBox="0 0 220 220" className="h-full w-full" role="img" aria-label="The Golden Circle: Why at the centre, then How, then What.">
              <circle cx="110" cy="110" r="104" fill="none" stroke="rgba(237,231,219,0.15)" strokeWidth="1" />
              <circle cx="110" cy="110" r="70" fill="none" stroke="rgba(237,231,219,0.25)" strokeWidth="1" />
              <circle cx="110" cy="110" r="36" fill="#B4552D" />
              <text x="110" y="115" textAnchor="middle" fontSize="15" letterSpacing="1.5" fill="#EDE7DB" fontFamily="var(--ff-display), sans-serif">WHY</text>
              <text x="110" y="52" textAnchor="middle" fontSize="10" letterSpacing="2.5" fill="rgba(237,231,219,0.75)" fontFamily="var(--ff-display), sans-serif">HOW</text>
              <text x="110" y="20" textAnchor="middle" fontSize="10" letterSpacing="2.5" fill="rgba(237,231,219,0.5)" fontFamily="var(--ff-display), sans-serif">WHAT</text>
            </svg>
          </motion.div>
        </div>

        <Line
          className="mt-16 max-w-3xl font-display text-2xl leading-snug text-bone md:text-3xl"
          delay={0.1}
        >
          This was never just a tee. It&apos;s proof that Bangladeshi craft can lead —
          not only supply. Wear it, and you&apos;re part of that.
        </Line>
      </div>
    </section>
  );
}
