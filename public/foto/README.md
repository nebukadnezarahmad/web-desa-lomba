# Foto situs

Berkas di folder ini dipanggil lewat `FotoDesa`
(`components/shared/foto-desa.tsx`) dan `ProdukThumb`
(`components/umkm/produk-thumb.tsx`) dengan nama berkas saja, tanpa `/foto/`.

Untuk produk UMKM, isi kolom `foto` di `lib/data/umkm.ts`.

## Aturan

1. **Foto harus benar-benar menggambarkan barangnya.** Kalau tidak ada yang
   cocok, kosongkan saja — `ProdukThumb` otomatis memakai ilustrasi ikon per
   kategori. Ilustrasi yang jujur lebih baik daripada foto yang salah barang.
2. Foto bertanda "Unsplash" bebas dipakai termasuk untuk keperluan komersial,
   tanpa kewajiban mencantumkan atribusi. Foto bertanda "pemilik usaha" dikirim
   langsung oleh pemilik lewat WhatsApp — lebih diutamakan karena barangnya asli,
   bukan stok generik.
3. Ganti dengan foto asli dari pemilik usaha begitu tersedia.

## Daftar berkas

| Berkas | Sumber | Dipakai untuk |
|---|---|---|
| `sawah-terasering.jpg` | Unsplash `j_AtS4IY7gQ` | Halaman Profil, bagian Riwayat |
| `gula-semut-aren.jpg` | Pemilik usaha (WhatsApp) | Gula Semut Aren Murni |
| `anyaman-bambu.jpg` | Unsplash `DcFYhIgDrlw` | Anyaman Bambu Serbaguna |
| `madu-klanceng.jpg` | Unsplash `yQzrDgU-KAI` | Madu Klanceng Hutan |
| `jahit-permak.jpg` | Unsplash `hzdgFPz1V24` | Jahit dan Permak Pakaian |
| `kopi-robusta.jpg` | Unsplash `j_DqtxKL4xY` | Kopi Robusta Bubuk |
| `katering.jpg` | Unsplash `yvzzemH8-J0` | Katering Hajatan dan Rapat |
| `sapu-ijuk.jpg` | Pemilik usaha (WhatsApp) | Sapu Ijuk Aren |
| `peyek-kacang.jpg` | Pemilik usaha (WhatsApp) | Peyek Kacang dan Rebon |
| `beras-merah.jpg` | Pemilik usaha (WhatsApp) | Beras Merah Organik |
| `servis-mesin.jpg` | Pemilik usaha (WhatsApp) | Servis Mesin Pertanian |
| `keripik-tempe.jpg` | Unsplash `pbgzARiiHxM` | Keripik Tempe Rempah |
| `batik-tulis-padi.jpg` | Unsplash `kx-wXj7zoFM` | Batik Tulis Motif Padi Tegalrejo |

Tautan foto Unsplash: `https://unsplash.com/photos/<ID>`

## Semua produk sudah punya foto

Tidak ada lagi yang memakai ilustrasi ikon. Kandidat yang pernah dicoba dan
ditolak karena salah barang sebelum foto yang cocok ditemukan: tahu goreng
utuh untuk keripik tempe, sekam padi untuk beras merah versi lama.

Catatan transparansi — beberapa foto tidak 100% cocok dengan deskripsi teks
tapi tetap dipasang karena masih jauh lebih baik daripada ilustrasi ikon:

- `peyek-kacang.jpg` tidak memperlihatkan rebon (udang kering) secara jelas,
  hanya kacang — dipasang atas persetujuan eksplisit meski nama produknya
  "Peyek Kacang **dan Rebon**".
- `servis-mesin.jpg` menampilkan montir membetulkan alat berat/truk, bukan
  spesifik mesin pertanian (traktor tangan, pompa air) — sama, dipasang atas
  persetujuan eksplisit.
- `batik-tulis-padi.jpg` foto arsip kain batik tulis asli koleksi museum
  (motif "Parang Rusak Barong", 1891, CC0) — batiknya asli dan tulisan
  tangan, tapi motifnya bukan "bulir padi dan garis kontur sawah" seperti
  yang dideskripsikan di teks produk. Dipilih karena warna coklat tua/nila
  gelapnya paling dekat dengan deskripsi pewarna alam (kulit mahoni + indigo).
- `keripik-tempe.jpg` cocok baik — tempe tipis bulat digoreng renyah dengan
  cabai dan ketumbar (rempah) di sekitarnya.

## Yang masih perlu difoto sendiri

- Gapura atau tetenger batas desa
- Gedung balai desa (bagian Kontak di halaman Profil)
- Kegiatan posyandu dan bank sampah
