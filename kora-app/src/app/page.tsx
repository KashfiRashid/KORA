import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageTile } from "@/components/image-tile";
import { WhySection } from "@/components/why-section";
import { VisionAccordion } from "@/components/vision-accordion";
import { LookbookCarousel } from "@/components/lookbook-carousel";
import { ProductDialog } from "@/components/product-dialog";

const ethos = ["Honest material", "Quality over quantity", "Quiet by design", "From the source"];

const pillars = [
  { n: "01", t: "Honest material", d: "We start at the fibre. The best cotton, named and sourced — never hidden behind a label." },
  { n: "02", t: "Quality over quantity", d: "Few pieces, made properly. One perfect tee beats ten forgettable ones." },
  { n: "03", t: "Quiet design", d: "Minimalist and logo-light. No shouting. The garment does the talking." },
  { n: "04", t: "Made by us, for people like us", d: "Three founders who train. Built with our community, not at it." },
];

const specs: [string, string][] = [
  ["Fibre", "Long-staple Bangladeshi cotton"],
  ["Weight", "~240gsm"],
  ["Finish", "Garment-dyed"],
  ["Fit", "Trained-fit"],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <p className="fade-up text-xs font-semibold uppercase tracking-[0.28em] text-clay">
          A Bangladesh-born training brand
        </p>
        <h1 className="fade-up mt-6 max-w-[14ch] font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-7xl">
          The world&apos;s best cotton, <span className="text-clay">kept.</span>
        </h1>
        <p className="fade-up mt-7 max-w-xl text-lg font-light text-ink-soft">
          Bangladesh makes the best cotton on earth. The biggest names know it — they
          make it here, then sell it back to you with their name on it. We kept ours.
          Raw, honest fabric, cut for people who actually train.
        </p>
        <div className="fade-up mt-9 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/shop">See Drop 01 →</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">Why we made it</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          <ImageTile src="/assets/kora-fabric.png" alt="Raw, unbleached cotton cloth." label="Raw cotton — কোরা" className="aspect-[3/4] rounded-none border-0" priority />
          <ImageTile src="/assets/kora-tee-boll.png" alt="The Everyday Tee with a cotton boll." label="The Everyday Tee" fit="cover" className="aspect-[3/4] rounded-none border-0" priority />
        </div>
      </section>

      {/* ETHOS MARQUEE */}
      <div className="overflow-hidden border-y border-line bg-bone-soft">
        <div className="marquee-track flex w-max gap-8 py-4 font-display text-base text-ink [animation:kora-marquee_34s_linear_infinite] md:text-lg">
          {Array.from({ length: 8 }).flatMap((_, k) =>
            ethos.map((e, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
                {e}
                <span className="text-clay">·</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ORIGIN */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="fade-up">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-clay">
            <span className="h-px w-6 bg-clay" />
            Where it comes from
          </p>
          <p className="mt-6 max-w-[20ch] font-display text-3xl leading-tight text-ink md:text-4xl">
            So much of what you wear is quietly made in Bangladesh — then sold back to
            you, marked up, with someone else&apos;s name on it.
          </p>
          <div className="mt-6 max-w-prose space-y-4 text-ink-soft">
            <p>
              We&apos;re three friends from Bangladesh, now training in Vancouver. We grew
              up around this craft. We got tired of watching the best fabric in the world
              leave home as fast fashion.
            </p>
            <p>
              So we kept it. KORA is built from the cotton we know best — named, sourced,
              never hidden. Fewer pieces, made properly. Best in quality, not quantity.
            </p>
          </div>
          <Button asChild variant="ghost" className="mt-8">
            <Link href="/about">Read the full story →</Link>
          </Button>
        </div>
        <ImageTile src="/assets/kora-macro.png" alt="Macro close-up of woven raw cotton." label="From the source" fit="cover" className="aspect-[4/5]" />
      </section>

      {/* CLAIM */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-20 md:grid-cols-2">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
            <span className="text-ink-mute line-through">Everyone owns performance.</span>
            <br />
            <span className="text-clay-deep">We own the fibre.</span>
          </h2>
          <p className="max-w-[42ch] text-lg font-light text-ink-soft">
            Plenty of brands sell the workout, the look, the lifestyle. None of them start
            where it actually starts — the cotton, the people, the place it&apos;s made.
            That&apos;s ours.
          </p>
        </div>
      </section>

      {/* WHY — Start With Why */}
      <WhySection />

      {/* CHALLENGE THE STATUS QUO — Accordion */}
      <VisionAccordion />

      {/* LOOKBOOK CAROUSEL */}
      <LookbookCarousel />

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">What we hold to</h2>
        <p className="mt-3 max-w-md text-ink-soft">
          Four things that decide everything else — from the fibre up.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.n} className="bg-bone p-7">
              <span className="font-display text-sm text-clay">{p.n}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{p.t}</h3>
              <p className="mt-3 text-sm text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT FEATURE — with Dialog quick-view */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 md:grid-cols-2">
        <ProductDialog>
          <button className="text-left focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 focus:ring-offset-bone rounded-xl">
            <ImageTile
              src="/assets/kora-onfigure.png"
              alt="A person training in The Everyday Training Tee. Click for quick view."
              label="Quick view ↗"
              className="aspect-[3/4] cursor-pointer"
            />
          </button>
        </ProductDialog>
        <div className="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
            Drop 01 — the first piece
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
            The Everyday Training Tee
          </h2>
          <p className="mt-4 text-ink-soft">
            The one we wanted in our own gym bags. 100% long-staple Bangladeshi cotton,
            garment-dyed, cut trained-fit so it moves under load and reads quiet at rest.
          </p>
          <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {specs.map(([k, v]) => (
              <div key={k} className="bg-bone p-5">
                <dt className="text-xs uppercase tracking-widest text-ink-mute">{k}</dt>
                <dd className="mt-1 font-display text-lg text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <Button asChild className="mt-8">
            <Link href="/shop">View in Drop 01 →</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl bg-ink p-10 text-bone md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">Drop 01</p>
          <h2 className="mt-3 max-w-[20ch] font-display text-3xl text-bone md:text-4xl">
            This starts with what you train in. It won&apos;t end there.
          </h2>
          <p className="mt-4 max-w-md text-bone/70">
            Apparel now — more from the source later. One email when Drop 01 opens. No
            noise.
          </p>
          <Button asChild variant="clay" className="mt-8">
            <Link href="/shop#waitlist">Join the waitlist →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
