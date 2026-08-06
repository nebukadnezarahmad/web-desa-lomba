export type JadwalRt = {
  rt: string;
  dusun: string;
  hari: string[];
  jenis: string;
  titikKumpul: string;
  petugas: string;
};

export const jadwalSampah: JadwalRt[] = [
  {
    rt: "RT 01",
    dusun: "Krajan",
    hari: ["Senin", "Kamis"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Depan Balai RT 01",
    petugas: "Regu Angkut A",
  },
  {
    rt: "RT 02",
    dusun: "Krajan",
    hari: ["Senin", "Kamis"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Pertigaan Jl. Krajan Tengah",
    petugas: "Regu Angkut A",
  },
  {
    rt: "RT 03",
    dusun: "Krajan",
    hari: ["Selasa", "Jumat"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Samping Musala Nurul Iman",
    petugas: "Regu Angkut A",
  },
  {
    rt: "RT 04",
    dusun: "Sidorejo",
    hari: ["Senin", "Kamis"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Depan Gedung PKK Sidorejo",
    petugas: "Regu Angkut B",
  },
  {
    rt: "RT 05",
    dusun: "Sidorejo",
    hari: ["Selasa", "Jumat"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Tikungan Jl. Sidorejo Barat",
    petugas: "Regu Angkut B",
  },
  {
    rt: "RT 06",
    dusun: "Sidorejo",
    hari: ["Rabu", "Sabtu"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Depan Bengkel Tani Sukamaju",
    petugas: "Regu Angkut B",
  },
  {
    rt: "RT 07",
    dusun: "Ngadirejo",
    hari: ["Senin", "Kamis"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Halaman Gedung PKK Ngadirejo",
    petugas: "Regu Angkut C",
  },
  {
    rt: "RT 08",
    dusun: "Ngadirejo",
    hari: ["Rabu", "Sabtu"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Depan SD Negeri Ngadirejo",
    petugas: "Regu Angkut C",
  },
  {
    rt: "RT 09",
    dusun: "Tegalsari",
    hari: ["Selasa", "Jumat"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Balai Dusun Tegalsari",
    petugas: "Regu Angkut C",
  },
  {
    rt: "RT 10",
    dusun: "Tegalsari",
    hari: ["Rabu", "Sabtu"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Perempatan Jl. Tegalsari Utara",
    petugas: "Regu Angkut C",
  },
  {
    rt: "RT 11",
    dusun: "Banjaran",
    hari: ["Selasa", "Jumat"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Depan Balai Dusun Banjaran",
    petugas: "Regu Angkut D",
  },
  {
    rt: "RT 12",
    dusun: "Banjaran",
    hari: ["Selasa", "Jumat"],
    jenis: "Organik dan anorganik terpilah",
    titikKumpul: "Ujung Jl. Banjaran Selatan",
    petugas: "Regu Angkut D",
  },
];

export type PanduanPilah = {
  jenis: string;
  warna: "hijau" | "biru" | "merah";
  masuk: string[];
  tidakMasuk: string[];
  catatan: string;
};

export const panduanPilah: PanduanPilah[] = [
  {
    jenis: "Sampah Organik",
    warna: "hijau",
    masuk: [
      "Sisa makanan dan nasi basi",
      "Kulit buah dan sayuran",
      "Daun kering dan rumput",
      "Ampas kelapa dan ampas kopi",
    ],
    tidakMasuk: [
      "Tulang besar dan cangkang kerang",
      "Kotoran hewan peliharaan",
      "Minyak jelantah",
    ],
    catatan:
      "Ditampung di komposter komunal tiap dusun. Kompos matang dibagikan kembali kepada warga untuk pupuk pekarangan.",
  },
  {
    jenis: "Sampah Anorganik",
    warna: "biru",
    masuk: [
      "Botol dan gelas plastik",
      "Kardus dan kertas bekas",
      "Kaleng dan logam",
      "Botol kaca utuh",
    ],
    tidakMasuk: [
      "Plastik bekas minyak yang masih berminyak",
      "Kemasan berlapis aluminium",
      "Styrofoam kotor",
    ],
    catatan:
      "Bersihkan dan keringkan sebelum disetor. Sampah anorganik bersih dapat ditabung di bank sampah dan dihitung sebagai saldo.",
  },
  {
    jenis: "Sampah Bahan Berbahaya",
    warna: "merah",
    masuk: [
      "Baterai bekas",
      "Lampu neon dan bohlam",
      "Sisa cat dan tiner",
      "Obat kedaluwarsa dan jarum suntik",
    ],
    tidakMasuk: [
      "Sampah rumah tangga biasa",
      "Kemasan makanan",
      "Pakaian bekas",
    ],
    catatan:
      "Tidak dilayani armada reguler. Serahkan langsung ke pos bank sampah agar diteruskan ke fasilitas pengolahan kabupaten.",
  },
];

export const setoranBankSampah = [
  { bulan: "Feb", anorganik: 412, organik: 780 },
  { bulan: "Mar", anorganik: 468, organik: 812 },
  { bulan: "Apr", anorganik: 521, organik: 845 },
  { bulan: "Mei", anorganik: 497, organik: 903 },
  { bulan: "Jun", anorganik: 588, organik: 874 },
  { bulan: "Jul", anorganik: 646, organik: 931 },
];

export const statistikLingkungan = [
  { label: "Nasabah bank sampah", nilai: 384, satuan: "KK" },
  { label: "Sampah terpilah Juli", nilai: 1577, satuan: "kg" },
  { label: "Kompos dihasilkan", nilai: 216, satuan: "kg" },
  { label: "Pohon ditanam 2026", nilai: 1240, satuan: "batang" },
];

export const programLingkungan = [
  {
    judul: "Bank Sampah Sukamaju Bersih",
    deskripsi:
      "Warga menyetor sampah anorganik bersih dan mendapat saldo tabungan yang dapat dicairkan setiap enam bulan atau ditukar sembako.",
    lokasi: "Pos Bank Sampah, belakang balai desa",
    jadwal: "Sabtu, 07.00 – 10.00 WIB",
  },
  {
    judul: "Komposter Komunal Dusun",
    deskripsi:
      "Setiap dusun mengelola satu unit komposter untuk mengolah sampah organik menjadi pupuk. Hasil kompos dibagikan gratis kepada warga.",
    lokasi: "Lima titik, satu di tiap dusun",
    jadwal: "Pengolahan berjalan harian",
  },
  {
    judul: "Penghijauan Sempadan Sungai",
    deskripsi:
      "Penanaman bambu dan pohon keras di sepanjang sempadan Sungai Tirto untuk menahan erosi tebing yang mengancam lahan pertanian.",
    lokasi: "Sempadan Sungai Tirto, Dusun Tegalsari dan Banjaran",
    jadwal: "Awal musim hujan tiap tahun",
  },
  {
    judul: "Pekarangan Pangan Lestari",
    deskripsi:
      "Pembagian bibit sayuran dan buah untuk ditanam di pekarangan rumah, disertai pendampingan kader tanaman di tiap RT.",
    lokasi: "Seluruh dusun",
    jadwal: "Pembagian bibit setiap Selasa dan Kamis",
  },
];
