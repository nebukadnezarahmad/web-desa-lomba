export type KategoriLaporan =
  | "Jalan & Infrastruktur"
  | "Sampah & Lingkungan"
  | "Keamanan"
  | "Kesehatan"
  | "Lainnya";

export type StatusLaporan = "diterima" | "diproses" | "selesai" | "ditolak";

export const daftarKategoriLaporan: KategoriLaporan[] = [
  "Jalan & Infrastruktur",
  "Sampah & Lingkungan",
  "Keamanan",
  "Kesehatan",
  "Lainnya",
];

export const daftarStatusLaporan: StatusLaporan[] = [
  "diterima",
  "diproses",
  "selesai",
  "ditolak",
];

export type Laporan = {
  id: string;
  kode_lacak: string;
  kategori: KategoriLaporan;
  lokasi: string;
  deskripsi: string;
  nama_pelapor: string | null;
  kontak: string | null;
  foto_url: string | null;
  status: StatusLaporan;
  catatan_admin: string | null;
  created_at: string;
  updated_at: string;
};

/** Bentuk baris hasil dari fungsi cek_status_laporan — sengaja tidak menyertakan nama_pelapor/kontak. */
export type StatusLaporanPublik = Pick<
  Laporan,
  | "kategori"
  | "lokasi"
  | "deskripsi"
  | "status"
  | "catatan_admin"
  | "created_at"
  | "updated_at"
>;
