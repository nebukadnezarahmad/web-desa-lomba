import Link from "next/link";
import {
  ArrowRightIcon,
  ClipboardTextIcon,
  HeartbeatIcon,
  RecycleIcon,
  MegaphoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { desa, statistikDesa } from "@/lib/data/desa";
import { formatAngka } from "@/lib/utils";

const pintasan = [
  {
    label: "Lihat Laporan",
    href: "/lapor/daftar",
    ikon: ClipboardTextIcon,
    tone: "blue",
  },
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

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 md:pb-28 md:pt-24 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.15fr_1fr]">
          {/* min-w-0 mencegah kolom grid melebar mengikuti lebar isi */}
          <div className="min-w-0">
            <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-green-strong sm:mb-5 sm:text-xs">
              {desa.kecamatan} · {desa.kabupaten}
            </p>

            <h1 className="max-w-2xl text-[2rem] font-extrabold text-ink sm:text-[3rem] lg:text-[3.5rem]">
              Sebelum tanya ke grup WA RT,{" "}
              <span className="text-green-strong">cek di sini dulu.</span>
            </h1>

            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-ink-muted sm:mt-6 sm:text-lg">
              Semua kumpulan informasi, program, dan layanan {desa.nama} berada
              di sini. Mulai jadwal posyandu, laporan dan kendala warga, jadwal
              angkutan sampah, sampai pembukaan lapak usaha warga.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">
              <Button asChild size="lg">
                <Link href="/lapor">
                  Lapor Sekarang
                  <ArrowRightIcon size={19} weight="bold" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kesehatan#kalkulator">Cek Status Gizi Anak</Link>
              </Button>
            </div>

            <ul className="baris-gulir mt-7 sm:mt-10">
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
                  {desa.jumlahDusun} dusun dan {desa.jumlahRt} RT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
