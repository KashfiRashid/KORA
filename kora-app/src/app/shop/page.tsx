import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageTile } from "@/components/image-tile";
import { WaitlistForm } from "@/components/waitlist-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Shop · Drop 01 — KORA",
  description:
    "KORA Drop 01 — led by The Everyday Training Tee: 100% long-staple Bangladeshi cotton, ~240gsm, garment-dyed, trained-fit.",
};

const products = [
  { name: "Heritage Crew", meta: "Mid-layer · heavyweight loopback cotton", img: "/assets/kora-crew.png" },
  { name: "Carry Tank", meta: "Training top · ribbed cotton", img: "/assets/kora-tank.png" },
  { name: "Field Jogger", meta: "Lower · tapered French terry", img: "/assets/kora-jogger.png" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const specs: [string, string][] = [
  ["Fibre", "100% long-staple Bangladeshi cotton"],
  ["Weight", "~240gsm"],
  ["Finish", "Garment-dyed"],
  ["Fit", "Trained-fit"],
];

export default function Shop() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 md:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-bone-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-clay-deep">
          <span className="h-2 w-2 rounded-full bg-clay" /> Drop 01 — releasing soon
        </p>
        <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-ink md:text-6xl">
          One piece, made properly.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light text-ink-soft">
          We&apos;re starting with the one we wear most. Drop 01 leads with The Everyday
          Training Tee, with a few supporting pieces alongside it. Pricing and the full
          size run are confirmed at launch — preview below and join the waitlist.
        </p>
      </section>

      {/* HERO PRODUCT */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <ImageTile src="/assets/kora-tee.png" alt="The Everyday Training Tee." label="The Everyday Training Tee" className="aspect-[3/4]" priority />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
            Drop 01 · the hero piece
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            The Everyday Training Tee
          </h2>
          <p className="mt-4 text-ink-soft">
            Raw, honest cotton — kept at the source. Cut trained-fit so it holds shape
            under load and stays quiet off the floor. The tee we built KORA to make.
          </p>
          <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {specs.map(([k, v]) => (
              <div key={k} className="bg-bone p-5">
                <dt className="text-xs uppercase tracking-widest text-ink-mute">{k}</dt>
                <dd className="mt-1 font-display text-lg text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 font-display text-clay-deep">Pricing at launch</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sizes.map((s) => (
              <span key={s} className="rounded-md border border-line px-2.5 py-1 text-xs text-ink-soft">
                {s}
              </span>
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link href="#waitlist">Join the waitlist →</Link>
          </Button>
        </div>
      </section>

      {/* SUPPORTING */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Alongside it in Drop 01
          </h2>
          <p className="max-w-sm text-ink-soft">
            A short supporting set — same cotton, same standard. Quality over quantity.
          </p>
        </div>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name}>
              <div className="relative">
                <Badge variant="light" className="absolute left-3 top-3 z-20">
                  Drop 01
                </Badge>
                <ImageTile src={p.img} alt={p.name} className="aspect-[3/4]" />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-mute">{p.meta}</p>
                </div>
                <span className="whitespace-nowrap font-display text-sm text-clay-deep">
                  Pricing at launch
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {sizes.map((s) => (
                  <span key={s} className="rounded border border-line px-2 py-0.5 text-[0.7rem] text-ink-soft">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="mx-auto max-w-6xl px-6 py-16 pb-24">
        <div className="rounded-2xl bg-ink p-10 text-bone md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">Be early</p>
          <h2 className="mt-3 max-w-[18ch] font-display text-3xl text-bone md:text-4xl">
            Be first when we launch.
          </h2>
          <p className="mt-4 max-w-md text-bone/70">
            We&apos;re starting small and getting it right. Join the list for first access,
            founding-member pricing, and the story as it&apos;s built.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-xs text-bone/50">No spam. Just the launch and the story.</p>
        </div>
      </section>
    </>
  );
}
