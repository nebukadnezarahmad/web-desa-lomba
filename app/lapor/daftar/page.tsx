import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPinIcon,
  CalendarBlankIcon,
  ChatCircleTextIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { klienAnon } from "@/lib/supabase/anon";
import { formatTanggal } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { StatusLaporan, StatusLaporanPublik } from "@/lib/lapor/types";

export const metadata: Metadata = {
  title: "Daftar Laporan Warga",
  description: "Laporan warga yang sudah ditinjau petugas desa, diurutkan dari yang terbaru.",
};

/**
 * Wajib dinamis. Halaman ini tidak membaca searchParams maupun cookie, jadi
 * tanpa penanda ini Next.js memprerender-nya sebagai halaman statis: query
 * daftar_laporan_publik() hanya jalan sekali saat build, lalu hasilnya
 * dibekukan ke HTML. Akibatnya laporan yang baru disetujui petugas tidak
 * pernah muncul sampai ada build ulang.
 */
export const dynamic = "force-dynamic";

const gayaStatus: Record<StatusLaporan, { label: string; tone: "green" | "blue" | "warn" | "danger" | "netral" }> = {
  menunggu: { label: "Menunggu Ditinjau", tone: "netral" },
  diterima: { label: "Diterima", tone: "blue" },
  diproses: { label: "Sedang Diproses", tone: "warn" },
  selesai: { label: "Selesai", tone: "green" },
  ditolak: { label: "Ditolak", tone: "danger" },
};

export default async function HalamanDaftarLaporan() {
  const supabase = klienAnon();
  const { data } = await supabase.rpc("daftar_laporan_publik");
  const daftar = (data ?? []) as StatusLaporanPublik[];

  return (
    <>
      <PageHeader
        kicker="Suara Warga"
        tone="blue"
        judul="Daftar laporan warga"
        deskripsi="Laporan yang sudah ditinjau petugas, tanpa nama atau kontak pelapor. Punya kode lacak sendiri? Cek statusnya langsung."
      >
        <Button asChild variant="outline" size="lg">
          <Link href="/lapor/status">
            <MagnifyingGlassIcon size={18} weight="bold" />
            Cek pakai kode lacak
          </Link>
        </Button>
      </PageHeader>

      <Section latar="putih">
        {daftar.length === 0 ? (
          <p className="text-[0.9375rem] text-ink-muted">
            Belum ada laporan yang tayang di sini. Laporan baru tampil setelah
            ditinjau petugas.
          </p>
        ) : (
          <div className="mx-auto flex max-w-2xl flex-col gap-5">
            {daftar.map((laporan, i) => (
              <div
                key={`${laporan.created_at}-${i}`}
                className="rounded-[var(--radius-panel)] border border-line bg-surface p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge tone={gayaStatus[laporan.status].tone}>
                    {gayaStatus[laporan.status].label}
                  </Badge>
                  <span className="text-[0.8125rem] text-ink-faint">
                    Dikirim {formatTanggal(laporan.created_at.slice(0, 10))}
                  </span>
                </div>

                <h2 className="mt-4 text-lg font-bold text-ink">{laporan.kategori}</h2>

                <p className="mt-2 flex items-center gap-2 text-[0.9375rem] text-ink-muted">
                  <MapPinIcon size={17} weight="duotone" className="shrink-0 text-blue-strong" />
                  {laporan.lokasi}
                </p>

                <p className="mt-4 whitespace-pre-wrap text-[0.9375rem] leading-relaxed text-ink">
                  {laporan.deskripsi}
                </p>

                {laporan.catatan_admin && (
                  <div
                    className={cn(
                      "mt-5 flex gap-3 rounded-[var(--radius-card)] border border-blue/25 bg-blue-soft p-4",
                    )}
                  >
                    <ChatCircleTextIcon
                      size={19}
                      weight="duotone"
                      className="mt-0.5 shrink-0 text-blue-strong"
                    />
                    <div>
                      <p className="text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-blue-deep">
                        Catatan petugas
                      </p>
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink">
                        {laporan.catatan_admin}
                      </p>
                    </div>
                  </div>
                )}

                <p className="mt-5 flex items-center gap-2 text-[0.8125rem] text-ink-faint">
                  <CalendarBlankIcon size={15} weight="duotone" />
                  Diperbarui {formatTanggal(laporan.updated_at.slice(0, 10))}
                </p>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
