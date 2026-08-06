import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  ClockIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/layout/logo";
import { desa, navigasi } from "@/lib/data/desa";

const tautanLain = [
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "Layanan administrasi", href: "/profil#layanan" },
  { label: "Struktur perangkat", href: "/profil#perangkat" },
  { label: "Data RT / RW", href: "/profil#data-rt" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">
              {desa.tagline} Pengumuman, lapak UMKM warga, layanan kesehatan,
              dan pengelolaan lingkungan dalam satu tempat.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-[0.9375rem] text-ink-muted">
              <li className="flex gap-3">
                <MapPinIcon
                  size={19}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-green-strong"
                />
                <span>
                  {desa.alamatBalai}, {desa.nama}, {desa.kecamatan},{" "}
                  {desa.kabupaten} {desa.kodePos}
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon
                  size={19}
                  weight="duotone"
                  className="shrink-0 text-green-strong"
                />
                <span>{desa.telepon}</span>
              </li>
              <li className="flex gap-3">
                <EnvelopeSimpleIcon
                  size={19}
                  weight="duotone"
                  className="shrink-0 text-green-strong"
                />
                <span>{desa.email}</span>
              </li>
              <li className="flex gap-3">
                <ClockIcon
                  size={19}
                  weight="duotone"
                  className="shrink-0 text-blue-strong"
                />
                <span>{desa.jamLayanan}</span>
              </li>
            </ul>
          </div>

          <nav aria-label="Halaman utama">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-ink">
              Halaman
            </h2>
            <ul className="flex flex-col gap-2.5">
              {navigasi.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="-mx-2 inline-block rounded-lg px-2 py-1.5 text-[0.9375rem] text-ink-muted transition-colors hover:text-green-strong"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Tautan lain">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-ink">
              Warga
            </h2>
            <ul className="flex flex-col gap-2.5">
              {tautanLain.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="-mx-2 inline-block rounded-lg px-2 py-1.5 text-[0.9375rem] text-ink-muted transition-colors hover:text-green-strong"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-7 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Pemerintah {desa.nama},{" "}
            {desa.kabupaten}.
          </p>
          <p>
            Prototipe purwarupa — nama desa, warga, dan data di dalamnya bersifat
            fiktif.
          </p>
        </div>
      </div>
    </footer>
  );
}
