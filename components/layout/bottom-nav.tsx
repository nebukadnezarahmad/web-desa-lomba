"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HouseIcon,
  MegaphoneIcon,
  StorefrontIcon,
  HeartbeatIcon,
  RecycleIcon,
  BuildingsIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

/**
 * Navigasi bawah khusus layar kecil. Semua tujuan utama terjangkau
 * satu ketukan ibu jari, tanpa membuka menu dulu. Di layar besar
 * digantikan navigasi atas pada SiteHeader.
 *
 * Label sengaja diperpendek dari nama halaman resminya (beda dengan
 * navigasi desktop) — enam tujuan di lebar layar HP hanya muat kalau
 * labelnya singkat, kalau tidak akan terpotong atau terasa sesak.
 */
const tab = [
  { label: "Beranda", href: "/", ikon: HouseIcon },
  { label: "Lapor", href: "/lapor", ikon: MegaphoneIcon },
  { label: "UMKM", href: "/umkm", ikon: StorefrontIcon },
  { label: "Sehat", href: "/kesehatan", ikon: HeartbeatIcon },
  { label: "Alam", href: "/lingkungan", ikon: RecycleIcon },
  { label: "Profil", href: "/profil", ikon: BuildingsIcon },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  const aktif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto grid max-w-lg grid-cols-6">
        {tab.map(({ label, href, ikon: Ikon }) => {
          const ini = aktif(href);
          return (
            /* min-w-0 wajib: tanpa itu lebar min-content label terpanjang
               memaksa tiap kolom melebar dan navigasi meluber dari layar. */
            <li key={href} className="min-w-0">
              <Link
                href={href}
                aria-current={ini ? "page" : undefined}
                className={cn(
                  "flex h-16 w-full flex-col items-center justify-center gap-1 transition-colors",
                  ini ? "text-green-strong" : "text-ink-faint",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-10 items-center justify-center rounded-full transition-colors",
                    ini && "bg-green-soft",
                  )}
                >
                  <Ikon size={20} weight={ini ? "fill" : "regular"} />
                </span>
                <span
                  className={cn(
                    "w-full truncate text-center text-[0.6875rem] leading-none",
                    ini ? "font-bold" : "font-medium",
                  )}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
