import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-sm">
            <div className="font-display text-2xl font-bold tracking-[0.18em]">
              KORA{" "}
              <span className="font-bengali text-base tracking-normal text-clay">
                কোরা
              </span>
            </div>
            <p className="mt-3 text-sm text-bone/60">
              The world&apos;s best cotton, kept by the people who make it.
              Bangladesh-born, trained-for in Vancouver.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-clay">Explore</h4>
              <ul className="mt-4 space-y-2 text-sm text-bone/70">
                <li><Link href="/" className="hover:text-bone">Home</Link></li>
                <li><Link href="/about" className="hover:text-bone">About</Link></li>
                <li><Link href="/shop" className="hover:text-bone">Shop · Drop 01</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-clay">Reach</h4>
              <ul className="mt-4 space-y-2 text-sm text-bone/70">
                <li><Link href="/shop#waitlist" className="hover:text-bone">Join the waitlist</Link></li>
                <li><a href="mailto:hello@kora.example" className="hover:text-bone">hello@kora.example</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-bone/15 pt-6 text-xs text-bone/50">
          <span>© {new Date().getFullYear()} KORA. All rights reserved.</span>
          <span>Bangladesh → Vancouver</span>
        </div>
      </div>
    </footer>
  );
}
