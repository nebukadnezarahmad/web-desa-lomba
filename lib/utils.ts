import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(nilai: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

/** "2026-08-14" -> "14 Agustus 2026" */
export function formatTanggal(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** "2026-08-14" -> "14 Agu" */
export function formatTanggalPendek(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** "2026-08-14" -> "Jumat" */
export function namaHari(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function formatAngka(nilai: number): string {
  return new Intl.NumberFormat("id-ID").format(nilai);
}

/** Nomor WA lokal (08xx) -> tautan wa.me internasional */
export function tautanWhatsApp(nomor: string, pesan?: string): string {
  const bersih = nomor.replace(/\D/g, "").replace(/^0/, "62");
  const teks = pesan ? `?text=${encodeURIComponent(pesan)}` : "";
  return `https://wa.me/${bersih}${teks}`;
}
