/**
 * Identitas desa — sumber tunggal.
 *
 * Kabupaten memakai nama nyata (Sukoharjo, eks-Karesidenan Surakarta)
 * supaya konteks geografisnya terasa berpijak, sesuai masukan bahwa nama
 * karangan generik terasa "buatan AI". Kecamatan dan desa tetap fiktif —
 * "Watubelah" dan "Jatirandu" bukan nama kecamatan/desa yang benar-benar
 * terdaftar di Sukoharjo — supaya prototipe ini tidak menempelkan struktur
 * pemerintahan dan data karangan ke desa yang sungguhan ada. Ganti di sini
 * untuk rebrand.
 */
export const desa = {
  merek: "Balai",
  tagline: "Satu pintu untuk warga desa.",
  nama: "Desa Jatirandu",
  kecamatan: "Kecamatan Watubelah",
  kabupaten: "Kabupaten Sukoharjo",
  provinsi: "Jawa Tengah",
  kodePos: "57557",
  alamatBalai: "Jl. Raya Jatirandu No. 1, Dusun Krajan",
  telepon: "(0271) 555 1240",
  email: "balaidesa@jatirandu.desa.id",
  jamLayanan: "Senin–Jumat, 08.00–15.00 WIB",
  luasWilayah: "412 hektar",
  jumlahDusun: 5,
} as const;

export const statistikDesa = [
  { label: "Jumlah warga", nilai: 4287, satuan: "jiwa" },
  { label: "Kepala keluarga", nilai: 1146, satuan: "KK" },
  { label: "UMKM terdaftar", nilai: 63, satuan: "usaha" },
  { label: "Posyandu aktif", nilai: 6, satuan: "unit" },
] as const;

export const daftarRt = [
  { rt: "RT 01", rw: "RW 01", dusun: "Krajan", kk: 84, warga: 312 },
  { rt: "RT 02", rw: "RW 01", dusun: "Krajan", kk: 91, warga: 344 },
  { rt: "RT 03", rw: "RW 01", dusun: "Krajan", kk: 78, warga: 289 },
  { rt: "RT 04", rw: "RW 02", dusun: "Sidorejo", kk: 96, warga: 361 },
  { rt: "RT 05", rw: "RW 02", dusun: "Sidorejo", kk: 88, warga: 327 },
  { rt: "RT 06", rw: "RW 02", dusun: "Sidorejo", kk: 102, warga: 388 },
  { rt: "RT 07", rw: "RW 03", dusun: "Ngadirejo", kk: 79, warga: 294 },
  { rt: "RT 08", rw: "RW 03", dusun: "Ngadirejo", kk: 93, warga: 351 },
  { rt: "RT 09", rw: "RW 04", dusun: "Tegalsari", kk: 108, warga: 402 },
  { rt: "RT 10", rw: "RW 04", dusun: "Tegalsari", kk: 85, warga: 318 },
  { rt: "RT 11", rw: "RW 05", dusun: "Banjaran", kk: 121, warga: 449 },
  { rt: "RT 12", rw: "RW 05", dusun: "Banjaran", kk: 121, warga: 452 },
] as const;

export const navigasi = [
  { label: "Beranda", href: "/" },
  { label: "UMKM", href: "/umkm" },
  { label: "Kesehatan", href: "/kesehatan" },
  { label: "Lingkungan", href: "/lingkungan" },
  { label: "Profil Desa", href: "/profil" },
] as const;
