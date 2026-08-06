import * as React from "react";
import { cn } from "@/lib/utils";

type Latar = "putih" | "lembut" | "biru";

const latarKelas: Record<Latar, string> = {
  putih: "bg-surface",
  lembut: "bg-surface-soft",
  biru: "bg-surface-tint",
};

export function Section({
  latar = "putih",
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & { latar?: Latar }) {
  return (
    <section
      className={cn("py-14 sm:py-20 md:py-28", latarKelas[latar], className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  judul,
  deskripsi,
  tone = "green",
  aksi,
  className,
}: {
  kicker?: string;
  judul: string;
  deskripsi?: string;
  tone?: "green" | "blue";
  aksi?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-5 md:mb-14 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        {kicker && (
          <p
            className={cn(
              "mb-2.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em] sm:mb-3 sm:text-xs",
              tone === "green" ? "text-green-strong" : "text-blue-strong",
            )}
          >
            {kicker}
          </p>
        )}
        <h2 className="text-[1.5rem] font-extrabold text-ink sm:text-[1.75rem] md:text-[2.125rem]">
          {judul}
        </h2>
        {deskripsi && (
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted sm:mt-3 sm:text-base md:text-[1.0625rem]">
            {deskripsi}
          </p>
        )}
      </div>
      {aksi && <div className="shrink-0">{aksi}</div>}
    </div>
  );
}
