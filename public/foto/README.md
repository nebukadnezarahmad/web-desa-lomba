# Foto situs

Berkas di folder ini dipanggil lewat `FotoDesa`
(`components/shared/foto-desa.tsx`) dan `ProdukThumb`
(`components/umkm/produk-thumb.tsx`) dengan nama berkas saja, tanpa `/foto/`.

Untuk produk UMKM, isi kolom `foto` di `lib/data/umkm.ts`.

## Aturan

1. **Foto harus benar-benar menggambarkan barangnya.** Kalau tidak ada yang
   cocok, kosongkan saja — `ProdukThumb` otomatis memakai ilustrasi ikon per
   kategori. Ilustrasi yang jujur lebih baik daripada foto yang salah barang.
2. Semua foto di bawah berasal dari Unsplash: bebas dipakai termasuk untuk
   keperluan komersial, tanpa kewajiban mencantumkan atribusi.
3. Ganti dengan foto asli dari pemilik usaha begitu tersedia.

## Daftar berkas

| Berkas | ID Unsplash | Dipakai untuk |
|---|---|---|
| `sawah-terasering.jpg` | `j_AtS4IY7gQ` | Halaman Profil, bagian Riwayat |
| `gula-semut-aren.jpg` | `pTrQDKQzJ7U` | Gula Semut Aren Murni |
| `anyaman-bambu.jpg` | `DcFYhIgDrlw` | Anyaman Bambu Serbaguna |
| `madu-klanceng.jpg` | `yQzrDgU-KAI` | Madu Klanceng Hutan |
| `jahit-permak.jpg` | `hzdgFPz1V24` | Jahit dan Permak Pakaian |
| `kopi-robusta.jpg` | `j_DqtxKL4xY` | Kopi Robusta Bubuk |
| `katering.jpg` | `yvzzemH8-J0` | Katering Hajatan dan Rapat |
| `sapu-ijuk.jpg` | `jm6bl3ZHMh4` | Sapu Ijuk Aren |

Tautan foto: `https://unsplash.com/photos/<ID>`

## Masih memakai ilustrasi ikon

Belum ketemu foto stok yang benar-benar cocok. Jangan diisi asal — beberapa
kandidat sudah dicoba dan ditolak karena salah barang (tahu goreng utuh untuk
keripik tempe, sekam padi untuk beras merah, brittle kacang manis untuk peyek):

- Keripik Tempe Rempah
- Beras Merah Organik
- Peyek Kacang dan Rebon
- Batik Tulis Motif Padi Tegalrejo
- Servis Mesin Pertanian

## Yang masih perlu difoto sendiri

- Gapura atau tetenger batas desa
- Gedung balai desa (bagian Kontak di halaman Profil)
- Kegiatan posyandu dan bank sampah
