"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bone/85 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/assets/logo-mark.svg" alt="" width={22} height={22} />
          <span className="font-display text-2xl font-bold tracking-[0.16em] text-ink">KORA</span>
          <span className="font-bengali text-lg text-clay">কোরা</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="ghost" size="sm">
            <Link href="/shop#waitlist">Drop 01 →</Link>
          </Button>
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3 text-lg text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/shop#waitlist"
            onClick={() => setOpen(false)}
            className="py-3 text-lg text-clay"
          >
            Drop 01 →
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
