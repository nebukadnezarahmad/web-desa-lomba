"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListIcon, XIcon, PhoneIcon } from "@phosphor-icons/react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { navigasi } from "@/lib/data/desa";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = React.useState(false);

  const aktif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-lg py-2"
          aria-label={`Beranda ${"Balai"}`}
        >
          <Logo />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigasi.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={aktif(item.href) ? "page" : undefined}
                  className={cn(
                    "relative flex h-11 items-center rounded-full px-4 text-[0.9375rem] font-semibold transition-colors",
                    aktif(item.href)
                      ? "bg-green-soft text-green-deep"
                      : "text-ink-muted hover:bg-surface-soft hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="primary" size="sm">
            <Link href="/profil#layanan">
              <PhoneIcon size={17} weight="bold" />
              Layanan Warga
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setTerbuka((v) => !v)}
          aria-expanded={terbuka}
          aria-controls="menu-seluler"
          aria-label={terbuka ? "Tutup menu" : "Buka menu"}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-green lg:hidden"
        >
          {terbuka ? (
            <XIcon size={20} weight="bold" />
          ) : (
            <ListIcon size={20} weight="bold" />
          )}
        </button>
      </div>

      {terbuka && (
        <div
          id="menu-seluler"
          className="border-t border-line bg-surface lg:hidden"
        >
          {/* Menutup menu di sini, bukan lewat effect atas perubahan rute */}
          <nav
            aria-label="Navigasi seluler"
            className="px-4 py-3 sm:px-6"
            onClick={() => setTerbuka(false)}
          >
            <ul className="flex flex-col gap-1">
              {navigasi.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={aktif(item.href) ? "page" : undefined}
                    className={cn(
                      "flex h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors",
                      aktif(item.href)
                        ? "bg-green-soft text-green-deep"
                        : "text-ink-muted hover:bg-surface-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 pb-2">
              <Button asChild variant="primary" className="w-full">
                <Link href="/profil#layanan">
                  <PhoneIcon size={18} weight="bold" />
                  Layanan Warga
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
