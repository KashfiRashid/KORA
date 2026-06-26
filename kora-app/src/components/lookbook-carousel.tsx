"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const slides = [
  { src: "/assets/kora-lifestyle.png", alt: "Training outdoors in bone-toned cotton.", caption: "Bangladesh \u2192 Vancouver" },
  { src: "/assets/kora-macro.png", alt: "Macro close-up of woven raw cotton.", caption: "The fibre, up close" },
  { src: "/assets/kora-onfigure.png", alt: "A person training in The Everyday Training Tee.", caption: "Trained-fit, quiet at rest" },
  { src: "/assets/kora-fabric.png", alt: "Raw, unbleached cotton cloth.", caption: "\u0995\u09CB\u09B0\u09BE \u2014 raw cloth" },
  { src: "/assets/kora-origin.png", alt: "Hands holding raw cotton.", caption: "From the source" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function LookbookCarousel() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-clay">
            <span className="h-px w-6 bg-clay" />
            The aesthetic
          </p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-[20ch] font-display text-3xl tracking-tight text-ink md:text-4xl">
              Drag to explore
            </h2>
            <div className="flex gap-2">
              {/* Controls are rendered inside the Carousel context below */}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-4">
              {slides.map((s) => (
                <CarouselItem
                  key={s.src}
                  className="pl-4 basis-[80%] sm:basis-[55%] md:basis-[40%] lg:basis-[33.333%]"
                >
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-bone-soft">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute bottom-4 left-4 z-10 rounded-full bg-ink/45 px-3 py-1.5 text-xs uppercase tracking-wider text-bone backdrop-blur">
                      {s.caption}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-end gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
