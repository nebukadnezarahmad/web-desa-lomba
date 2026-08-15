# Foto situs

Semua berkas di folder ini dipanggil lewat komponen `FotoDesa`
(`components/shared/foto-desa.tsx`) dengan prop `src`, tanpa awalan `/foto/`.

## Aturan

1. **Foto yang benar-benar diambil di desa** boleh dipakai tanpa keterangan
   tambahan — cukup `alt` yang deskriptif.
2. **Foto stok** (bukan diambil di desa ini) **wajib** memakai prop
   `keterangan`, misalnya `"Foto ilustrasi, belum diambil di lokasi desa."`
   Tanpa itu pembaca akan menyangka gambarnya lokasi setempat.
3. **Jangan** memasang foto stok pada produk UMKM milik penjual bernama
   tertentu. Itu memalsukan barang dagangan orang. Biarkan slotnya kosong —
   `FotoDesa` sudah menampilkan penanda jujur "Foto belum ditambahkan".

## Daftar berkas

| Berkas | Sumber | Lisensi | Dipakai di |
|---|---|---|---|
| `sawah-terasering.jpg` | [Unsplash, foto `j_AtS4IY7gQ`](https://unsplash.com/photos/a-large-green-field-j_AtS4IY7gQ) | Unsplash License — bebas dipakai termasuk komersial, atribusi tidak wajib | `app/profil/page.tsx`, bagian Riwayat |

## Yang masih perlu difoto sendiri

- Gapura atau tetenger batas desa
- Gedung balai desa (untuk bagian Kontak di halaman Profil)
- Produk UMKM warga — foto asli dari pemiliknya masing-masing
- Kegiatan posyandu dan bank sampah
