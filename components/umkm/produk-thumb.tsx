import {
  ForkKnifeIcon,
  BasketIcon,
  PlantIcon,
  WrenchIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { KategoriUmkm } from "@/lib/data/umkm";
import { cn } from "@/lib/utils";

const gaya: Record<
  KategoriUmkm,
  { ikon: typeof ForkKnifeIcon; latar: string; warna: string; kontur: string }
> = {
  Makanan: {
    ikon: ForkKnifeIcon,
    latar: "bg-green-soft",
    warna: "text-green-strong",
    kontur: "kontur",
  },
  Kerajinan: {
    ikon: BasketIcon,
    latar: "bg-blue-soft",
    warna: "text-blue-strong",
    kontur: "kontur-biru",
  },
  Pertanian: {
    ikon: PlantIcon,
    latar: "bg-green-soft",
    warna: "text-green-deep",
    kontur: "kontur",
  },
  Jasa: {
    ikon: WrenchIcon,
    latar: "bg-blue-soft",
    warna: "text-blue-deep",
    kontur: "kontur-biru",
  },
};

/**
 * Ilustrasi produk dibangkitkan dari kategori, bukan foto stok acak.
 * Konsisten, ringan, dan tidak butuh jaringan. Ganti dengan foto asli
 * pelaku usaha saat data sungguhan tersedia.
 */
export function ProdukThumb({
  kategori,
  ukuran = "kartu",
  className,
}: {
  kategori: KategoriUmkm;
  ukuran?: "kartu" | "besar";
  className?: string;
}) {
  const { ikon: Ikon, latar, warna, kontur } = gaya[kategori];

  return (
    <div
      aria-hidden
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        latar,
        ukuran === "kartu" ? "aspect-[4/3]" : "aspect-[16/10]",
        className,
      )}
    >
      <div className={cn("absolute inset-0 opacity-70", kontur)} />
      <Ikon
        size={ukuran === "kartu" ? 56 : 88}
        weight="duotone"
        className={cn("relative", warna)}
      />
    </div>
  );
}
