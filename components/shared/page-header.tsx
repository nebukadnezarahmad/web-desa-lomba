import * as React from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  kicker,
  judul,
  deskripsi,
  tone = "green",
  children,
}: {
  kicker: string;
  judul: string;
  deskripsi: string;
  tone?: "green" | "blue";
  children?: React.ReactNode;
}) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-line",
        tone === "green" ? "bg-surface-soft" : "bg-surface-tint",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          tone === "green" ? "kontur" : "kontur-biru",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <p
          className={cn(
            "mb-4 text-xs font-bold uppercase tracking-[0.14em]",
            tone === "green" ? "text-green-strong" : "text-blue-strong",
          )}
        >
          {kicker}
        </p>
        <h1 className="max-w-3xl text-[2.125rem] font-extrabold text-ink sm:text-[2.75rem] md:text-[3.25rem]">
          {judul}
        </h1>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-muted">
          {deskripsi}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
