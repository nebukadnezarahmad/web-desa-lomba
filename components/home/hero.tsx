import Link from "next/link";
import {
  ArrowRightIcon,
  StorefrontIcon,
  HeartbeatIcon,
  RecycleIcon,
  MegaphoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { desa, statistikDesa } from "@/lib/data/desa";
import { formatAngka } from "@/lib/utils";

const pintasan = [
  { label: "Lapak UMKM", href: "/umkm", ikon: StorefrontIcon, tone: "green" },
  { label: "Kesehatan", href: "/kesehatan", ikon: HeartbeatIcon, tone: "green" },
  { label: "Lingkungan", href: "/lingkungan", ikon: RecycleIcon, tone: "green" },
  {
    label: "Pengumuman",
    href: "/pengumuman",
    ikon: MegaphoneIcon,
    tone: "blue",
  },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-soft">
      <div aria-hidden className="kontur pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-surface"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-green-strong">
              {desa.kecamatan} · {desa.kabupaten}
            </p>

            <h1 className="max-w-2xl text-[2.25rem] font-extrabold text-ink sm:text-[3rem] lg:text-[3.5rem]">
              Semua urusan desa,{" "}
              <span className="text-green-strong">satu tempat.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted sm:text-lg">
              Pengumuman resmi, agenda warga, lapak usaha tetangga, pemantauan
              gizi balita, sampai jadwal angkut sampah RT. {desa.nama} merangkum
              semuanya di halaman yang mudah dibuka siapa saja.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/umkm">
                  Jelajahi Lapak UMKM
                  <ArrowRightIcon size={19} weight="bold" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kesehatan#kalkulator">Cek Status Gizi Anak</Link>
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2">
              {pintasan.map(({ label, href, ikon: Ikon, tone }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex h-11 items-center gap-2 rounded-full border border-line-strong bg-surface px-4 text-sm font-semibold text-ink-muted transition-colors hover:border-green hover:text-green-strong"
                  >
                    <Ikon
                      size={17}
                      weight="duotone"
                      className={
                        tone === "green" ? "text-green-strong" : "text-blue-strong"
                      }
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Denyut Desa */}
          <div className="rounded-[var(--radius-panel)] border border-line bg-surface p-2 shadow-sm shadow-ink/5">
            <div className="rounded-[calc(var(--radius-panel)-0.5rem)] bg-surface-soft p-6 sm:p-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-green-strong">
                Denyut Desa
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Ringkasan data {desa.nama} per Agustus 2026
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7">
                {statistikDesa.map((s) => (
                  <div key={s.label}>
                    <dd className="text-[1.75rem] font-extrabold leading-none tracking-tight text-ink">
                      {formatAngka(s.nilai)}
                      <span className="ml-1.5 text-sm font-semibold text-ink-faint">
                        {s.satuan}
                      </span>
                    </dd>
                    <dt className="mt-2 text-[0.8125rem] font-medium text-ink-muted">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-line pt-5">
                <p className="text-[0.8125rem] leading-relaxed text-ink-muted">
                  Luas wilayah {desa.luasWilayah}, terbagi dalam{" "}
                  {desa.jumlahDusun} dusun dan 12 RT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
