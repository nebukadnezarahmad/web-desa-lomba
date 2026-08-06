export type KategoriPengumuman =
  | "Administrasi"
  | "Kesehatan"
  | "Lingkungan"
  | "Ekonomi"
  | "Kegiatan";

export type Pengumuman = {
  slug: string;
  judul: string;
  ringkasan: string;
  isi: string[];
  kategori: KategoriPengumuman;
  tanggal: string;
  penerbit: string;
  penting?: boolean;
};

export const pengumuman: Pengumuman[] = [
  {
    slug: "pemutakhiran-data-kk-2026",
    judul: "Pemutakhiran Data Kartu Keluarga Tahap II",
    ringkasan:
      "Warga yang mengalami perubahan anggota keluarga sepanjang 2025–2026 diminta memperbarui data di balai desa sebelum 30 September.",
    isi: [
      "Pemerintah Desa Sukamaju membuka pemutakhiran data Kartu Keluarga tahap II mulai 10 Agustus hingga 30 September 2026. Kegiatan ini menyasar keluarga yang mengalami perubahan susunan anggota sepanjang 2025 sampai pertengahan 2026, baik karena kelahiran, kematian, perkawinan, maupun perpindahan tempat tinggal.",
      "Data yang mutakhir menentukan ketepatan penyaluran bantuan sosial, penentuan sasaran program kesehatan, dan perhitungan kebutuhan layanan dasar di tiap dusun. Selisih data yang dibiarkan menumpuk membuat sejumlah keluarga terlewat dari program yang seharusnya mereka terima.",
      "Warga cukup membawa Kartu Keluarga asli, KTP kepala keluarga, dan dokumen pendukung perubahan seperti akta kelahiran, akta kematian, buku nikah, atau surat pindah. Petugas melayani di ruang pelayanan balai desa pada hari kerja pukul 08.00 sampai 15.00 WIB.",
      "Bagi warga lanjut usia atau yang memiliki keterbatasan mobilitas, kader RT dapat mengajukan layanan jemput berkas. Sampaikan permintaan tersebut kepada ketua RT masing-masing paling lambat satu minggu sebelum batas akhir.",
    ],
    kategori: "Administrasi",
    tanggal: "2026-08-04",
    penerbit: "Sekretariat Desa",
    penting: true,
  },
  {
    slug: "jadwal-posyandu-agustus",
    judul: "Jadwal Posyandu Balita dan Lansia Agustus 2026",
    ringkasan:
      "Enam posyandu beroperasi bergilir sepanjang Agustus. Pengukuran tinggi dan berat badan balita dilakukan di setiap sesi.",
    isi: [
      "Seluruh posyandu di Desa Sukamaju kembali beroperasi penuh sepanjang Agustus 2026 dengan jadwal bergilir per dusun. Setiap sesi mencakup penimbangan berat badan, pengukuran panjang atau tinggi badan, pemeriksaan tekanan darah untuk lansia, serta konsultasi gizi bersama bidan desa.",
      "Pengukuran tinggi badan balita menjadi perhatian khusus tahun ini. Hasil pengukuran dipakai untuk menghitung status gizi berdasarkan standar pertumbuhan anak WHO, sehingga kasus perawakan pendek dapat dikenali sejak dini dan ditangani sebelum melewati usia dua tahun.",
      "Orang tua diminta membawa buku Kesehatan Ibu dan Anak setiap kali datang. Bagi balita yang belum pernah tercatat, pendaftaran dapat dilakukan langsung di lokasi tanpa biaya.",
    ],
    kategori: "Kesehatan",
    tanggal: "2026-07-30",
    penerbit: "Bidan Desa & Kader Posyandu",
  },
  {
    slug: "perubahan-jadwal-angkut-sampah",
    judul: "Perubahan Jadwal Angkut Sampah Dusun Banjaran",
    ringkasan:
      "Mulai 11 Agustus, pengangkutan sampah RT 11 dan RT 12 bergeser dari Rabu ke Selasa dan Jumat.",
    isi: [
      "Menyusul penambahan satu armada pengangkut, jadwal pengangkutan sampah untuk RT 11 dan RT 12 Dusun Banjaran bergeser dari sekali seminggu pada hari Rabu menjadi dua kali seminggu pada hari Selasa dan Jumat, terhitung mulai 11 Agustus 2026.",
      "Warga diminta menempatkan sampah yang sudah terpilah di titik kumpul sebelum pukul 06.30 WIB. Sampah organik dan anorganik wajib dipisahkan dalam wadah berbeda. Sampah dengan kandungan bahan berbahaya seperti baterai bekas, lampu, dan sisa cat tidak dilayani armada reguler dan harus diserahkan langsung ke pos bank sampah.",
      "Perubahan ini diharapkan menurunkan penumpukan sampah di titik kumpul yang selama ini kerap meluber pada akhir pekan.",
    ],
    kategori: "Lingkungan",
    tanggal: "2026-08-02",
    penerbit: "Seksi Kesejahteraan",
    penting: true,
  },
  {
    slug: "pelatihan-pengemasan-produk-umkm",
    judul: "Pelatihan Pengemasan dan Foto Produk untuk Pelaku UMKM",
    ringkasan:
      "Pelatihan gratis dua hari untuk 30 pelaku usaha, membahas desain kemasan, label, dan pemotretan produk dengan telepon genggam.",
    isi: [
      "Pemerintah desa bekerja sama dengan pendamping UMKM kecamatan menyelenggarakan pelatihan pengemasan dan pemotretan produk pada 19–20 Agustus 2026 di aula balai desa. Pelatihan terbuka untuk 30 peserta dan tidak dipungut biaya.",
      "Materi mencakup pemilihan bahan kemasan yang sesuai jenis produk, penyusunan informasi wajib pada label, pembuatan komposisi foto sederhana menggunakan cahaya alami, serta penulisan deskripsi produk yang jelas untuk lapak daring.",
      "Peserta diharapkan membawa contoh produk sendiri untuk dipraktikkan langsung. Pendaftaran dibuka hingga 15 Agustus melalui ketua RT atau langsung di balai desa.",
    ],
    kategori: "Ekonomi",
    tanggal: "2026-07-28",
    penerbit: "Seksi Pemberdayaan Masyarakat",
  },
  {
    slug: "kerja-bakti-normalisasi-saluran",
    judul: "Kerja Bakti Normalisasi Saluran Irigasi Sebelum Musim Hujan",
    ringkasan:
      "Seluruh dusun dijadwalkan bergotong royong membersihkan saluran irigasi dan drainase pada Minggu, 23 Agustus.",
    isi: [
      "Menjelang musim hujan, pemerintah desa mengajak seluruh warga bergotong royong membersihkan saluran irigasi dan drainase pada Minggu, 23 Agustus 2026, mulai pukul 06.30 WIB. Titik kumpul mengikuti pos ronda masing-masing RT.",
      "Sasaran utama kegiatan adalah saluran sepanjang Dusun Tegalsari dan Banjaran yang tersumbat endapan lumpur dan sampah, serta gorong-gorong di sepanjang jalan desa. Endapan yang tidak dibersihkan berulang kali menyebabkan luapan air ke halaman warga pada hujan deras tahun lalu.",
      "Warga diminta membawa peralatan sederhana seperti cangkul, sabit, dan karung. Konsumsi disediakan oleh kelompok PKK masing-masing dusun.",
    ],
    kategori: "Kegiatan",
    tanggal: "2026-08-05",
    penerbit: "Kepala Desa",
  },
  {
    slug: "bantuan-bibit-tanaman-pekarangan",
    judul: "Pembagian Bibit Tanaman Pangan untuk Pekarangan Rumah",
    ringkasan:
      "Setiap kepala keluarga berhak menerima lima bibit sayuran dan satu bibit pohon buah selama persediaan masih ada.",
    isi: [
      "Program pemanfaatan pekarangan kembali berjalan tahun ini. Setiap kepala keluarga berhak mengambil lima bibit sayuran, terdiri atas cabai, terung, tomat, kangkung, dan bayam, serta satu bibit pohon buah pilihan antara mangga, jambu, atau alpukat.",
      "Pengambilan dilayani di gudang belakang balai desa setiap Selasa dan Kamis pukul 08.00 sampai 12.00 WIB selama Agustus, atau sampai persediaan habis. Warga cukup menunjukkan Kartu Keluarga.",
      "Kader tanaman di tiap RT siap membantu warga yang belum terbiasa menanam, mulai dari penyiapan media tanam hingga perawatan awal.",
    ],
    kategori: "Lingkungan",
    tanggal: "2026-07-24",
    penerbit: "Seksi Kesejahteraan",
  },
];

export const kategoriPengumuman: KategoriPengumuman[] = [
  "Administrasi",
  "Kesehatan",
  "Lingkungan",
  "Ekonomi",
  "Kegiatan",
];

export function ambilPengumuman(slug: string) {
  return pengumuman.find((p) => p.slug === slug);
}

export const pengumumanTerbaru = [...pengumuman]
  .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
  .slice(0, 3);
