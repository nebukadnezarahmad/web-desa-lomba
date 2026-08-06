import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProdukThumb } from "@/components/umkm/produk-thumb";
import { produkUmkm } from "@/lib/data/umkm";
import { formatRupiah } from "@/lib/utils";

const pratinjau = produkUmkm.slice(0, 4);

export function UmkmPreview() {
  return (
    <Section latar="lembut">
      <SectionHeading
        kicker="Ekonomi Warga"
        judul="Dari dapur dan kebun tetangga"
        deskripsi="Produk yang dibuat sendiri oleh warga desa. Beli langsung dari pemiliknya, tanpa perantara."
        aksi={
          <Button asChild variant="soft">
            <Link href="/umkm">
              Lihat 63 usaha
              <ArrowRightIcon size={17} weight="bold" />
            </Link>
          </Button>
        }
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pratinjau.map((p, i) => (
          <Reveal as="li" key={p.slug} index={i}>
            <Link
              href={`/umkm/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-green/40 hover:shadow-lg hover:shadow-green/8"
            >
              <ProdukThumb kategori={p.kategori} />
              <div className="flex flex-1 flex-col p-5">
                <Badge
                  tone={
                    p.kategori === "Makanan" || p.kategori === "Pertanian"
                      ? "green"
                      : "blue"
                  }
                  className="mb-3 self-start"
                >
                  {p.kategori}
                </Badge>
                <h3 className="text-[0.9375rem] font-bold leading-snug text-ink transition-colors group-hover:text-green-strong">
                  {p.nama}
                </h3>
                <p className="mt-1.5 text-[0.8125rem] text-ink-muted">
                  {p.usaha} · {p.rt}
                </p>
                <p className="mt-4 text-base font-extrabold text-green-strong">
                  {formatRupiah(p.harga)}
                  <span className="ml-1 text-xs font-medium text-ink-faint">
                    / {p.satuan}
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
