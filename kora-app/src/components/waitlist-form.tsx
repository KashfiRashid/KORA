"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// 1. Create a free form at https://formspree.io
// 2. Paste your form endpoint here (looks like https://formspree.io/f/abcdwxyz)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "loading" | "done" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "");
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        form.reset();
        setStatus("done");
        toast.success("You\u2019re on the list.", {
          description: "We\u2019ll be in touch before launch \u2014 no noise, just the drop.",
        });
      } else {
        setStatus("error");
        toast.error("Couldn\u2019t submit", {
          description: "Add your Formspree ID in waitlist-form.tsx to activate.",
        });
      }
    } catch {
      setStatus("error");
      toast.error("Couldn\u2019t submit", {
        description: "Add your Formspree ID in waitlist-form.tsx to activate.",
      });
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-bone/80">
        Thank you &mdash; you&apos;re on the list. We&apos;ll be in touch before launch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-wrap gap-2">
      <label htmlFor="email" className="sr-only">Email address</label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="you@email.com"
        autoComplete="email"
        required
        className="flex-1"
      />
      <Button type="submit" variant="clay" disabled={status === "loading"}>
        {status === "loading" ? "Joining\u2026" : "Join the list"}
      </Button>
      {status === "error" ? (
        <p className="w-full text-xs text-clay">
          Couldn&apos;t submit &mdash; add your Formspree ID in waitlist-form.tsx.
        </p>
      ) : null}
    </form>
  );
}
