"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const beliefs = [
  {
    id: "source",
    q: "Why we keep it in Bangladesh",
    a: "The world\u2019s best cotton is grown and woven here \u2014 then shipped out cheap and sold back with someone else\u2019s name on it. We make it here and keep the value, and the name, home.",
  },
  {
    id: "logo",
    q: "Why we go logo-light",
    a: "A loud logo sells the brand, not the garment. We let the cloth and the cut speak. Quiet is confidence.",
  },
  {
    id: "fewer",
    q: "Why fewer pieces, not more",
    a: "Fast fashion wins on volume and churn. We win on one tee made properly. \u201CQuality over quantity\u201D isn\u2019t a slogan \u2014 it\u2019s the whole model.",
  },
  {
    id: "transparency",
    q: "Why we name the source",
    a: "Most brands hide where things are made. We start at the fibre and tell you exactly where it came from. The transparency is the product.",
  },
  {
    id: "bigger",
    q: "Why this is bigger than apparel",
    a: "Cotton is the wedge. The belief \u2014 keep the craft, lead don\u2019t supply \u2014 carries into everything we make next, including what you\u2019ll one day put in your body.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function VisionAccordion() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-clay">
            <span className="h-px w-6 bg-clay" />
            Challenge the status quo
          </p>
          <h2 className="mt-5 max-w-[22ch] font-display text-3xl tracking-tight text-ink md:text-4xl">
            What we believe — and why it matters
          </h2>
          <p className="mt-3 max-w-lg text-ink-soft">
            Every decision we make starts from a belief. Click to read the ones that
            shape KORA.
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {beliefs.map((b) => (
              <AccordionItem key={b.id} value={b.id}>
                <AccordionTrigger>{b.q}</AccordionTrigger>
                <AccordionContent>{b.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
