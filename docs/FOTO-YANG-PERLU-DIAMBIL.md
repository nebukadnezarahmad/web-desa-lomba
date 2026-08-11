# Foto yang perlu diambil

Situs ini memakai ilustrasi ikon untuk sebagian besar produk UMKM (karena
memang ada 12 produk, tidak semua butuh foto asli). Tapi ada beberapa titik
yang sengaja disiapkan untuk **foto sungguhan** — ini yang paling mengubah
kesan situs dari "buatan AI" jadi "tempat sungguhan". Lima-enam foto asli
sudah cukup mengubah rasa seluruh situs.

## Yang perlu difoto

Ambil dengan kamera HP biasa, siang hari, tidak perlu diedit macam-macam:

1. **Gapura atau plang masuk RT/dusun** — untuk `components/shared/page-header.tsx`
   di halaman Profil Desa
2. **Pos ronda / gardu** — untuk halaman Profil Desa, bagian sejarah
3. **Gang kampung** (jalan warga, bukan jalan raya) — untuk hero atau profil
4. **Warung / lapak tetangga** yang sesuai dengan salah satu produk di
   `lib/data/umkm.ts` — untuk `components/home/umkm-preview.tsx` (sorotan
   UMKM besar)
5. **Kegiatan kerja bakti / gotong royong** (kalau ada dokumentasi) — untuk
   halaman Lingkungan
6. **Posyandu / kegiatan kesehatan** (kalau ada, dan sudah dapat izin dari
   yang difoto) — untuk halaman Kesehatan

## Cara pasang

1. Simpan file ke folder ini (`public/foto/`), nama bebas tapi jelas,
   contoh: `gapura-rt.jpg`, `warung-umkm.jpg`
2. Kompres dulu supaya tidak berat — target di bawah 300 KB per foto
   (situs web mana pun, atau aplikasi seperti Squoosh, TinyPNG)
3. Buka komponen `<FotoDesa />` yang relevan, isi prop `src` dengan nama
   filenya, contoh:

   ```tsx
   <FotoDesa src="gapura-rt.jpg" alt="Gapura masuk RT 03 Dusun Krajan" />
   ```

Sebelum foto ditambahkan, `<FotoDesa />` menampilkan kotak putus-putus
bertulisan "Foto belum ditambahkan" — bukan ikon yang berpura-pura jadi foto.
Ini sengaja, supaya jelas titik mana yang masih menunggu.
