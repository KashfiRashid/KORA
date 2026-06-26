import type { Metadata } from "next";
import { Space_Grotesk, Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LenisProvider } from "@/components/lenis-provider";
import { Toaster } from "sonner";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ff-display",
});
const body = Inter({ subsets: ["latin"], variable: "--ff-body" });
const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "600"],
  variable: "--ff-bengali",
});

export const metadata: Metadata = {
  title: "KORA — The World's Best Cotton, Kept",
  description:
    "A Bangladesh-born training brand. Premium cotton, minimalist design, made honestly — for people who train in Vancouver.",
  openGraph: {
    title: "KORA — The World's Best Cotton, Kept",
    description:
      "A Bangladesh-born training brand. Premium cotton, minimalist design, made honestly.",
    images: ["/assets/og-cover.png"],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${bengali.variable}`}
    >
      <body className="font-sans">
        <LenisProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LenisProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--color-ink)",
              color: "var(--color-bone)",
              border: "1px solid rgba(237,231,219,0.15)",
              fontFamily: "var(--ff-display), sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
