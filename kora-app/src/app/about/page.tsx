import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageTile } from "@/components/image-tile";

export const metadata: Metadata = {
  title: "About — KORA",
  description:
    "Three friends from Bangladesh, training in Vancouver. We kept the best cotton on earth at home.",
};

const pillars = [
  { n: "01", t: "Honest material", d: "We start at the fibre. The best cotton, named and sourced — never hidden." },
  { n: "02", t: "Quality over quantity", d: "Few pieces, made properly. One perfect tee beats ten forgettable ones." },
  { n: "03", t: "Quiet design", d: "Minimalist, logo-light, beautiful. The garment does the talking." },
  { n: "04", t: "Made by us, for people like us", d: "Three founders who train. Built with our community, not at it." },
];

const palette: { name: string; cls: string; light?: boolean }[] = [
  { name: "Raw cotton", cls: "bg-bone", light: true },
  { name: "Clay", cls: "bg-clay" },
  { name: "Sage", cls: "bg-sage" },
  { name: "Ink", cls: "bg-ink" },
];

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay">Our story</p>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-ink md:text-6xl">
          We kept it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light text-ink-soft">
          Bangladesh makes the best cotton on earth. We&apos;re three friends who grew up
          around that craft — and we weren&apos;t willing to watch it keep leaving home
          with someone else&apos;s name on it.
        </p>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="max-w-[24ch] font-display text-3xl leading-tight text-ink">
            Bangladesh makes the best cotton on earth.
          </p>
          <div className="mt-7 max-w-prose space-y-4 text-ink-soft">
            <p>
              For decades the world&apos;s biggest names have known it — which is why so
              much of what you wear is quietly made here, then sold back to you with
              someone else&apos;s name on it, marked up, made cheap.
            </p>
            <p>
              We&apos;re three friends from Bangladesh, now training in Vancouver. We grew
              up around this craft, and we got tired of watching the best fabric in the
              world leave home as fast fashion. So we kept it.
            </p>
            <p>
              KORA is built from the cotton we know best, cut for people who actually
              train, and designed to be quiet — no logos shouting, no seasonal noise.
              Fewer pieces, made properly. Best in quality, not quantity.
            </p>
            <p className="font-display text-xl text-ink">
              This starts with what you train in. It won&apos;t end there.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <ImageTile
          src="/assets/kora-origin.png"
          alt="Hands holding raw unbleached cotton cloth."
          label="কোরা — raw cloth"
          className="aspect-[3/4]"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">The name</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">কোরা means raw.</h2>
          <div className="mt-5 max-w-prose space-y-4 text-ink-soft">
            <p>
              In Bengali, <span className="font-bengali text-ink">কোরা</span> (kora) is
              raw, unbleached cotton cloth — fabric in its most honest state. That&apos;s
              the whole idea in one word: material, before anyone dresses it up.
            </p>
            <p>
              Short, premium, and readable anywhere. It&apos;s a name we can grow into —
              what we make next will hold to the same standard.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4">
        <h2 className="font-display text-3xl text-ink md:text-4xl">What we hold to</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.n} className="bg-bone p-7">
              <span className="font-display text-sm text-clay">{p.n}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{p.t}</h3>
              <p className="mt-3 text-sm text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">The palette</p>
        <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {palette.map((c) => (
            <div key={c.name} className={`flex aspect-square items-end p-4 ${c.cls}`}>
              <span className={`text-xs uppercase tracking-widest ${c.light ? "text-ink" : "text-bone"}`}>
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ImageTile
          src="/assets/kora-lifestyle.png"
          alt="Training outdoors in Vancouver in bone-toned cotton."
          label="Bangladesh → Vancouver"
          className="mx-auto aspect-[9/16] max-w-sm"
        />
        <div className="mt-12 rounded-2xl bg-ink p-10 text-bone md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">Next</p>
          <h2 className="mt-3 max-w-[20ch] font-display text-3xl text-bone md:text-4xl">
            It starts with one tee.
          </h2>
          <p className="mt-4 max-w-md text-bone/70">
            Drop 01 leads with The Everyday Training Tee. Take a look, then join the list
            for launch.
          </p>
          <Button asChild variant="clay" className="mt-8">
            <Link href="/shop">View Drop 01 →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
