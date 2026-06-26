"use client";

import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const specs: [string, string][] = [
  ["Fibre", "100% long-staple Bangladeshi cotton"],
  ["Weight", "~240gsm"],
  ["Finish", "Garment-dyed"],
  ["Fit", "Trained-fit"],
];

export function ProductDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2">
          {/* Image half */}
          <div className="relative aspect-[3/4] bg-bone-soft">
            <Image
              src="/assets/kora-tee.png"
              alt="The Everyday Training Tee — full product shot."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Details half */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
              Drop 01 · the hero piece
            </p>
            <DialogTitle className="mt-3">
              The Everyday Training Tee
            </DialogTitle>
            <DialogDescription className="mt-4">
              Raw, honest cotton — kept at the source. Cut trained-fit so it holds
              shape under load and stays quiet off the floor. The tee we built KORA
              to make.
            </DialogDescription>

            <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {specs.map(([k, v]) => (
                <div key={k} className="bg-bone p-4">
                  <dt className="text-xs uppercase tracking-widest text-ink-mute">
                    {k}
                  </dt>
                  <dd className="mt-1 font-display text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <Button asChild className="mt-8">
              <Link href="/shop#waitlist">Join the waitlist →</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
