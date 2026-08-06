# Balai — Portal Desa Sukamaju

Portal desa multifungsi: pengumuman, agenda warga, lapak UMKM, pemantauan gizi
balita, dan pengelolaan sampah dalam satu tempat.

Purwarupa untuk lomba web design. Nama desa, warga, dan seluruh data di dalamnya
bersifat fiktif.

## Menjalankan

```bash
npm run dev
```

Buka http://localhost:3000

Perintah lain:

```bash
npm run build   # build produksi (27 halaman statis)
npm run start   # jalankan hasil build
npm run lint    # ESLint
npx tsc --noEmit  # pemeriksaan tipe
```

## Tumpukan Teknologi

| Bagian | Pilihan |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Bahasa | TypeScript |
| Gaya | Tailwind CSS v4 (`@theme` di `app/globals.css`) |
| Komponen | Radix UI primitives, disusun sendiri dengan pola shadcn |
| Ikon | Phosphor Icons (weight `duotone`) |
| Grafik | Recharts |
| Huruf | Plus Jakarta Sans |

## Arah Desain — "Civic Bright"

Kanvas putih dominan, hijau daun untuk **tindakan dan pertumbuhan**, biru cerah
untuk **informasi dan layanan**. Pembagian peran warna ini dipegang konsisten di
seluruh halaman — itu yang membuat tampilannya terlihat disengaja, bukan sekadar
warna-warni.

Elemen penanda: **garis kontur peta** sebagai latar hero dan pembatas antar
bagian. Kontur = peta = tanah = desa.

Tipografi memakai Plus Jakarta Sans, tipografi identitas kota Jakarta rancangan
Tokotype — huruf sipil Indonesia untuk situs sipil Indonesia.

Seluruh token warna didefinisikan di `app/globals.css` dan sudah diverifikasi
lolos WCAG AA (kontras >= 4.5:1 untuk teks).

## Struktur

```
app/                      Rute (App Router)
  page.tsx                Beranda
  umkm/                   Lapak UMKM + halaman detail produk
  kesehatan/              Kalkulator gizi, grafik tumbuh, jadwal posyandu
  lingkungan/             Jadwal sampah per RT, panduan pilah, bank sampah
  profil/                 Sejarah, visi-misi, perangkat, layanan administrasi
  pengumuman/             Daftar + halaman detail pengumuman
  globals.css             Token warna, tipografi, motion

components/
  layout/                 Header, footer, logo
  shared/                 Section, KonturBg, Reveal, PageHeader
  home/ umkm/ kesehatan/ lingkungan/ profil/ pengumuman/
  ui/                     Primitif (Button, Card, Badge, Accordion, Select, Input)

lib/
  data/                   Seluruh data (dummy, tapi realistis)
  gizi.ts                 Perhitungan status gizi WHO
  utils.ts                Format rupiah, tanggal, tautan WhatsApp
```

## Fitur Utama

**Kalkulator Status Gizi Anak** (`lib/gizi.ts`) — perhitungan sungguhan, bukan
angka karangan. Memakai metode LMS dari Standar Antropometri Anak WHO
(Permenkes No. 2 Tahun 2020), menghitung skor Z untuk dua indeks:

- **TB/U** (Tinggi Badan menurut Umur) — menapis perawakan pendek / stunting
- **BB/U** (Berat Badan menurut Umur) — menapis berat badan kurang

Rumus: `z = ((X/M)^L − 1) / (L·S)`, dengan parameter LMS diinterpolasi linear
menurut umur. Ambang klasifikasi mengikuti Permenkes. Berlaku untuk usia 0–60
bulan. Hasil dihitung sepenuhnya di peramban — data anak tidak dikirim ke mana
pun.

Fitur interaktif lain: penyaring dan pencarian UMKM, pemilih jadwal sampah per
RT, akordeon syarat layanan administrasi, grafik pertumbuhan dengan pita rujukan
−2SD sampai +2SD.

## Mengganti Identitas Desa

Seluruh identitas terpusat di `lib/data/desa.ts` — nama desa, kecamatan,
kabupaten, alamat, kontak, dan nama merek. Ubah di satu tempat itu saja.

## Menyambung ke Basis Data

Semua akses data melewati `lib/data/*`. Untuk beralih ke Supabase atau backend
lain, cukup ganti isi modul-modul itu tanpa menyentuh komponen.

## Catatan Aksesibilitas

- Kontras teks >= 4.5:1 di seluruh pasangan warna (sudah diverifikasi)
- Cincin fokus keyboard terlihat pada semua kontrol
- Target sentuh minimal 44px
- `prefers-reduced-motion` dihormati
- Satu `<h1>` per halaman, `lang="id"`, tautan lompat ke konten
- Tidak ada emoji sebagai ikon

---

Situs langsung: https://web-desa-lomba.vercel.app
