import { Question } from '../types';

export const questionsBatch1: Question[] = [
  // 1. Cacat mata miopi (PG - Menengah)
  {
    id: 1,
    subtopicId: 'miopi',
    subtopicTitle: 'Cacat Mata Miopi',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Koreksi Titik Jauh Miopi pada Pemeriksaan Optometri',
    stimulus: {
      type: 'table',
      text: 'Seorang siswa SMA menjalani pemeriksaan tajam penglihatan di klinik optometri sekolah. Pemeriksaan dilakukan menggunakan Snellen Chart pada jarak standar. Hasil pemeriksaan refraksi tanpa kacamata disajikan pada tabel berikut.',
      tableData: {
        caption: 'Tabel Hasil Uji Refraksi Pasien Siswa SMA',
        headers: ['Parameter Uji', 'Mata Kanan (OD)', 'Mata Kiri (OS)', 'Nilai Normal'],
        rows: [
          ['Titik Dekat (Punctum Proximum)', '25 cm', '25 cm', '25 cm'],
          ['Titik Jauh (Punctum Remotum)', '125 cm', '100 cm', 'Tak terhingga (∞)'],
          ['Ketajaman Visus Snellen', '6/30', '6/36', '6/6']
        ]
      },
      diagram: {
        type: 'eye-miopi',
        pr: 125,
        label: 'Diagram Pembentukan Bayangan pada Mata Miopi (PR = 125 cm)'
      }
    },
    narration: {
      part1Intro: 'Halo pejuang TKA Fisika! Bersama Mister Jo di Fisika Jenius. Mari kita mulai dengan submateri pertama: Cacat Mata Miopi. Jangan buru-buru menghitung, cermati data tabel hasil uji refraksi terlebih dahulu.',
      part2Stimulus: 'Tabel menunjukkan data mata kanan siswa memiliki titik dekat normal 25 cm, namun titik jauhnya terbatas pada 125 cm. Sinar dari benda jauh terfokus di depan retina.',
      part3Question: 'Berdasarkan data mata kanan siswa, berapakah kekuatan lensa kacamata yang harus diresepkan agar ia dapat melihat papan tulis di kejauhan dengan mata rileks tanpa akomodasi?',
      part4Hint: 'Ingat konsep dasar kacamata miopi: kacamata lensa cekung bertugas memindahkan benda di tak hingga agar membentuk bayangan maya tepat di titik jauh mata pasien.',
      part5Discussion: 'Mari kita bedah pembahasannya. Benda di tak hingga, s sama dengan tak terhingga. Bayangan harus maya di titik jauh, s aksen sama dengan minus 125 cm atau minus 1,25 meter. Dengan rumus P sama dengan 1 per f, diperoleh kuat lensa minus 0,80 Dioptri.'
    },
    questionText: 'Berdasarkan data mata kanan (OD) siswa pada tabel, berapakah kekuatan lensa kacamata yang harus diresepkan dokter agar siswa dapat melihat benda di tak terhingga secara jelas dan relaks?',
    options: [
      { key: 'A', text: '-0.60 Dioptri' },
      { key: 'B', text: '-0.80 Dioptri' },
      { key: 'C', text: '-1.25 Dioptri' },
      { key: 'D', text: '+0.80 Dioptri' },
      { key: 'E', text: '-1.50 Dioptri' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Koreksi Cacat Mata Miopi (Rabun Jauh)',
      known: [
        'Titik jauh mata kanan (PR) = 125 cm = 1.25 m',
        'Jarak benda yang ingin dilihat (s) = tak terhingga (∞)',
        'Sifat bayangan oleh lensa kacamata = maya di depan mata (s\' = -PR)'
      ],
      asked: 'Kekuatan lensa kacamata (P) untuk mata kanan',
      keyFormula: 'P = \\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s\'} = -\\frac{1}{PR \\text{ (meter)}}',
      formulaReason: 'Lensa divergen (negatif) membiaskan sinar sejajar dari tak terhingga sehingga seolah-olah berasal dari titik jauh mata (PR).',
      steps: [
        'Ubah satuan titik jauh ke meter: PR = 125 cm = 1.25 m = 5/4 m.',
        'Terapkan kondisi bayangan maya di titik jauh: s\' = -PR = -1.25 m.',
        'Hitung kekuatan lensa: P = -1 / 1.25 = -1 / (5/4) = -4/5 = -0.80 Dioptri.'
      ],
      finalResult: '-0.80 Dioptri (lensa cekung/divergen)',
      interpretation: 'Tanda minus menunjukkan lensa cekung (divergen) yang menyebarkan berkas cahaya sebelum masuk ke lensa mata, sehingga fokus bayangan bergeser mundur tepat pada retina.',
      distractorAnalysis: 'Opsi C (-1.25 D) adalah jebakan jika siswa langsung mengambil angka jarak 1.25 sebagai dioptri. Opsi D (+0.80 D) salah tanda konvensi karena memakai lensa cembung.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Miopi',
      rule: 'Untuk melihat benda di tak hingga, langsung gunakan rasio 100 dibagi PR dalam satuan sentimeter dengan tanda negatif!',
      step: 'P = -100 / PR(cm) = -100 / 125 = -4/5 = -0.80 D',
      formula: 'P = -\\frac{100}{PR\\text{ (cm)}}'
    }
  },

  // 2. Cacat mata miopi (PGK - Sulit)
  {
    id: 2,
    subtopicId: 'miopi',
    subtopicTitle: 'Cacat Mata Miopi',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Analisis Jangkauan Penglihatan Kacamata Under-Correction',
    stimulus: {
      type: 'scenario',
      text: 'Seorang arsitek memiliki titik jauh mata tanpa kacamata sebesar PR = 50 cm. Karena kacamata lamanya tertinggal di kantor, ia sementara meminjam kacamata cadangan milik rekannya yang memiliki daya optik P = -1.5 Dioptri. Ia ingin mengetahui jangkauan terjauh yang bisa ia lihat saat memakai kacamata pinjaman tersebut.',
      diagram: {
        type: 'eye-miopi',
        pr: 50,
        label: 'Diagram Berkas Sinar Kacamata Under-correction'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 2 adalah Pilihan Ganda Kompleks. Cermati kasus under-correction pada arsitek miopi ini. Bisa terdapat lebih dari satu pernyataan yang benar!',
      part2Stimulus: 'Titik jauh arsitek adalah 50 cm. Kacamata yang dipinjam berkekuatan minus 1.5 Dioptri. Kacamata ini belum sepenuhnya mengoreksi penglihatannya.',
      part3Question: 'Periksalah pernyataan-pernyataan berikut mengenai jarak terjauh yang dapat dilihat, jenis bayangan, dan kacamata ideal yang seharusnya digunakan.',
      part4Hint: 'Gunakan persamaan lensa tipis: 1 per f sama dengan 1 per s ditambah 1 per s aksen, dengan s aksen dibatasi maksimum pada minus PR arsitek yaitu minus 50 cm.',
      part5Discussion: 'Mari kita evaluasi: fokus lensa minus 1.5 D adalah minus 66.7 cm. Dengan s aksen minus 50 cm, diperoleh s maksimum 200 cm atau 2 meter. Kacamata idealnya adalah minus 2 Dioptri.'
    },
    questionText: 'Tentukan kebenaran dari pernyataan-pernyataan berikut terkait kondisi penglihatan arsitek saat menggunakan kacamata pinjaman tersebut! (Pilihlah seluruh pernyataan yang BENAR)',
    options: [
      { key: 'A', text: 'Jarak maksimum yang dapat dilihat jelas oleh arsitek dengan kacamata pinjaman adalah 200 cm (2.0 m).' },
      { key: 'B', text: 'Dengan kacamata tersebut, arsitek masih belum dapat melihat dengan jelas objek di tak hingga (∞).' },
      { key: 'C', text: 'Agar dapat melihat benda di tak terhingga secara relaks, arsitek seharusnya menggunakan kacamata berkekuatan -2.0 Dioptri.' },
      { key: 'D', text: 'Bayangan yang dibentuk kacamata pinjaman untuk benda di jarak terjauh bersifat nyata dan tegak.' },
      { key: 'E', text: 'Arsitek harus mengganti lensa dengan kekuatan yang lebih lemah yaitu -1.0 Dioptri agar dapat melihat tak terhingga.' }
    ],
    correctKeys: ['A', 'B', 'C'],
    discussion: {
      concept: 'Analisis Persamaan Lensa pada Kasus Under-correction Miopi',
      known: [
        'Titik jauh mata arsitek: PR = 50 cm = 0.5 m',
        'Kekuatan kacamata pinjaman: P = -1.5 D',
        'Jarak fokus kacamata: f = 1/P = 1/(-1.5) = -2/3 m = -66.67 cm'
      ],
      asked: 'Evaluasi kebenaran pernyataan A, B, C, D, E',
      keyFormula: '\\frac{1}{s} + \\frac{1}{s\'} = \\frac{1}{f} = P',
      formulaReason: 'Kacamata membentuk bayangan maya di titik terjauh yang masih dapat diakomodasi oleh mata, yaitu s\' = -PR = -50 cm = -0.5 m.',
      steps: [
        '1. Menghitung jarak terjauh (s_max) dengan kacamata pinjaman: 1/s_max + 1/(-0.5) = -1.5 -> 1/s_max - 2.0 = -1.5 -> 1/s_max = 0.5 m^-1 -> s_max = 1/0.5 = 2.0 m = 200 cm. (Pernyataan A BENAR)',
        '2. Karena s_max = 2.0 m < tak hingga, arsitek belum bisa melihat objek sangat jauh seperti bintang atau gunung di kejauhan dengan tajam. (Pernyataan B BENAR)',
        '3. Kacamata ideal untuk melihat tak hingga (s = tak hingga, s\' = -0.5 m): P_ideal = -1/PR = -1/0.5 = -2.0 Dioptri. (Pernyataan C BENAR)',
        '4. Lensa cekung kacamata selalu menghasilkan bayangan maya, tegak, dan diperkecil di depan mata. (Pernyataan D SALAH)',
        '5. Untuk melihat tak terhingga, kekuatan lensa harus dinaikkan besaran negatifnya menjadi -2.0 D, bukan -1.0 D. (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, dan C adalah BENAR.',
      interpretation: 'Kondisi under-correction membuat titik jauh bergeser dari 50 cm menjadi 200 cm, namun belum mencapai tak hingga sehingga membutuhkan lensa divergen yang lebih kuat (-2.0 D).',
      distractorAnalysis: 'Pernyataan D salah pada sifat bayangan (seharusnya maya). Pernyataan E salah arah perubahan kekuatan lensa.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Hubungan Kuat Lensa & Jarak Terjauh Baru',
      rule: '1/s_max = P + (1/PR). Substitusikan nilai langsung dalam satuan meter!',
      step: '1/s_max = -1.5 + (1 / 0.5) = -1.5 + 2.0 = +0.5 -> s_max = 1 / 0.5 = 2 m (200 cm)!',
      formula: '\\frac{1}{s_{\\max}} = P + \\frac{1}{PR}'
    }
  },

  // 3. Cacat mata miopi (BS - Sangat Sulit)
  {
    id: 3,
    subtopicId: 'miopi',
    subtopicTitle: 'Cacat Mata Miopi',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Pengaruh Vertex Distance Kacamata pada Miopi Derajat Tinggi',
    stimulus: {
      type: 'scenario',
      text: 'Seorang insinyur perancang optik memiliki miopi tinggi dengan titik jauh PR = 20 cm diukur dari kornea mata. Ia merancang kacamata yang bertengger pada jarak vertex (vertex distance) d = 2.0 cm di depan kornea matanya. Ia ingin menganalisis pergeseran kekuatan lensa kacamata akibat jarak vertex tersebut dibandingkan dengan lensa kontak yang menempel langsung di kornea saat melihat objek proyektor berjarak s = 402 cm dari kornea.',
      diagram: {
        type: 'eye-miopi',
        pr: 20,
        label: 'Diagram Vertex Distance Kacamata vs Kornea'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 3 adalah tipe Benar-Salah dengan tingkat kesulitan Sangat Sulit. Kita menguji konsep lanjutan: Vertex Distance atau jarak antara lensa kacamata dan permukaan kornea.',
      part2Stimulus: 'Pasien memiliki titik jauh 20 cm dari kornea, dan kacamata berada 2 cm di depan kornea. Jarak objek adalah 402 cm dari kornea.',
      part3Question: 'Tentukan BENAR atau SALAH untuk masing-masing dari ketiga pernyataan berikut mengenai jarak benda ke lensa, jarak bayangan ke lensa, dan kekuatan lensa efektifnya.',
      part4Hint: 'Hati-hati! Semua jarak optis harus dihitung relatif terhadap posisi lensa kacamata, bukan langsung dari kornea.',
      part5Discussion: 'Mari kita teliti: dari lensa kacamata, jarak objek adalah 402 dikurang 2 sama dengan 400 cm. Jarak bayangan maya adalah minus 20 dikurang 2 yaitu minus 18 cm. Hitung 1/f = 1/400 - 1/18.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan analisis optika geometris!',
    statements: [
      {
        id: 1,
        text: 'Jarak objek (s) dan jarak bayangan (s\') yang diukur relatif terhadap posisi lensa kacamata masing-masing adalah 400 cm dan -18 cm.',
        isCorrect: true,
        explanation: 'Jarak objek dari lensa = 402 cm - 2 cm = 400 cm. Bayangan harus jatuh di PR (20 cm dari kornea), sehingga dari lensa jaraknya adalah -(20 - 2) = -18 cm.'
      },
      {
        id: 2,
        text: 'Kekuatan lensa kacamata yang dibutuhkan pada jarak vertex 2.0 cm adalah sekitar -5.31 Dioptri.',
        isCorrect: true,
        explanation: 'P = 100/s + 100/s\' = 100/400 - 100/18 = 0.25 - 5.556 = -5.306 D ≈ -5.31 Dioptri.'
      },
      {
        id: 3,
        text: 'Bila pasien beralih menggunakan lensa kontak (jarak vertex d = 0 cm), kekuatan lensa kontak yang dibutuhkan justru bernilai negatif lebih besar dari -5.31 D.',
        isCorrect: false,
        explanation: 'Untuk d = 0 cm (lensa kontak): s = 402 cm, s\' = -20 cm -> P = 100/402 - 100/20 = 0.249 - 5.00 = -4.75 Dioptri. Nilai -4.75 D secara aljabar lebih besar (secara magnitudo negatif lebih kecil) dibanding -5.31 D.'
      }
    ],
    discussion: {
      concept: 'Koreksi Vertex Distance pada Optometri Miopi Tinggi',
      known: [
        'Titik jauh dari kornea: PR = 20 cm',
        'Jarak vertex kacamata: d = 2.0 cm',
        'Jarak objek dari kornea: S_kornea = 402 cm'
      ],
      asked: 'Verifikasi ketiga pernyataan optika vertex distance',
      keyFormula: 's_{lensa} = S_{kornea} - d \\quad \\text{dan} \\quad s\'_{lensa} = -(PR - d)',
      formulaReason: 'Kacamata terletak pada jarak d di depan mata, sehingga bayangan maya yang dibentuk harus jatuh tepat pada titik jauh mata relatif terhadap kornea.',
      steps: [
        'Langkah 1: s_{lensa} = 402 - 2 = 400 cm = 4.0 m. s\'_{lensa} = -(20 - 2) = -18 cm = -0.18 m. (Pernyataan 1 BENAR)',
        'Langkah 2: P_{kacamata} = 1/s + 1/s\' = 1/4.0 - 1/0.18 = 0.25 - 5.556 = -5.306 D ≈ -5.31 D. (Pernyataan 2 BENAR)',
        'Langkah 3: Untuk lensa kontak (d = 0): s = 4.02 m, s\' = -0.20 m -> P_{kontak} = 1/4.02 - 1/0.20 ≈ +0.25 - 5.00 = -4.75 D. Magnitude lensa kontak adalah 4.75 D, lebih kecil dari magnitude kacamata 5.31 D. Maka pernyataan 3 SALAH.'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Semakin jauh lensa negatif diletakkan di depan mata (jarak vertex bertambah), kekuatan minus lensa kacamata harus semakin kuat (lebih negatif) untuk mengimbangi pergeseran bayangan.',
      distractorAnalysis: 'Banyak siswa mengabaikan jarak vertex sehingga mengira kekuatan kacamata sama persis dengan lensa kontak.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Aturan Pergeseran Vertex Lensa Negatif',
      rule: 'Lensa cekung kacamata selalu membutuhkan dioptri negatif yang LEBIH BESAR (lebih kuat) daripada lensa kontak dengan rumus perkiraan: P_kacamata ≈ P_kontak / (1 - d · P_kontak)!',
      step: 'P_kacamata ≈ -4.75 / (1 - 0.02 · (-4.75)) = -4.75 / 1.095 = -4.34 D sampai -5.31 D tergantung jarak benda.',
      formula: 'P_{kacamata} = \\frac{P_{kontak}}{1 - d \\cdot P_{kontak}}'
    }
  },

  // 4. Cacat mata hipermetropi (PG - Menengah)
  {
    id: 4,
    subtopicId: 'hipermetropi',
    subtopicTitle: 'Cacat Mata Hipermetropi',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Penentuan Kekuatan Lensa Baca Hipermetropi',
    stimulus: {
      type: 'scenario',
      text: 'Seorang dosen universitas yang berusia 45 tahun mengalami kesulitan membaca jurnal cetak jika tidak menjauhkan teks hingga jarak 100 cm dari matanya (titik dekat PP = 100 cm). Agar ia dapat membaca naskah dengan nyaman pada jarak baca normal baku Sn = 25 cm, dokter meresepkan kacamata cembung berlensa tunggal.',
      diagram: {
        type: 'eye-hipermetropi',
        pp: 100,
        sn: 25,
        label: 'Diagram Pembentukan Bayangan Maya di Titik Dekat Hipermetropi'
      }
    },
    narration: {
      part1Intro: 'Sekarang kita masuk ke Submateri 2: Cacat Mata Hipermetropi atau rabun dekat. Mari kita analisis kasus pembacaan jurnal oleh sang dosen.',
      part2Stimulus: 'Titik dekat dosen adalah 100 cm. Jarak baca normal standar adalah 25 cm. Bayangan buku harus diletakkan maya pada jarak titik dekat matanya.',
      part3Question: 'Berapakah kekuatan lensa kacamata cembung yang harus digunakan oleh dosen tersebut?',
      part4Hint: 'Gunakan persamaan lensa tipis dengan s sama dengan 25 cm dan s aksen sama dengan minus titik dekat yaitu minus 100 cm.',
      part5Discussion: 'Kekuatan lensa P sama dengan 100 per s ditambah 100 per s aksen. 100 per 25 adalah 4, dikurang 100 per 100 yaitu 1. Hasilnya 4 dikurang 1 sama dengan positif 3 Dioptri.'
    },
    questionText: 'Berapakah kekuatan lensa kacamata cembung yang harus digunakan dosen tersebut agar dapat membaca pada jarak baca normal 25 cm?',
    options: [
      { key: 'A', text: '+1.50 Dioptri' },
      { key: 'B', text: '+2.00 Dioptri' },
      { key: 'C', text: '+3.00 Dioptri' },
      { key: 'D', text: '+4.00 Dioptri' },
      { key: 'E', text: '-3.00 Dioptri' }
    ],
    correctKey: 'C',
    discussion: {
      concept: 'Koreksi Cacat Mata Hipermetropi dengan Lensa Positif (Cembung)',
      known: [
        'Titik dekat mata dosen: PP = 100 cm = 1.0 m',
        'Jarak baca normal: s = S_n = 25 cm = 0.25 m',
        'Posisi bayangan maya: s\' = -PP = -100 cm = -1.0 m'
      ],
      asked: 'Kekuatan lensa kacamata (P)',
      keyFormula: 'P = \\frac{100}{S_n} - \\frac{100}{PP} \\quad \\text{(dengan } S_n \\text{ dan } PP \\text{ dalam cm)}',
      formulaReason: 'Kacamata cembung memusatkan berkas sinar divergen dari jarak 25 cm sehingga seolah-olah divergen dari titik dekat pasien (100 cm).',
      steps: [
        'Substitusikan nilai Sn = 25 cm dan PP = 100 cm ke formula kekuatan lensa:',
        'P = 100/25 - 100/100',
        'P = 4 - 1 = +3.00 Dioptri',
        'Fokus lensa: f = 100 / P = 100 / 3 = 33.33 cm'
      ],
      finalResult: '+3.00 Dioptri (lensa cembung/konvergen)',
      interpretation: 'Nilai positif menandakan lensa konvergen berkekuatan +3 Dioptri membantu menambah daya konvergen lensa mata yang kurang mencembung.',
      distractorAnalysis: 'Opsi D (+4.00 D) hanya menghitung 100/Sn tanpa mengurangi 100/PP. Opsi E (-3.00 D) salah tanda konvensi (lensa cekung).'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Hipermetropi 4 - 100/PP',
      rule: 'Untuk jarak baca normal standar 25 cm, 100/25 selalu bernilai 4. Cukup kurangkan 4 dengan 100 dibagi PP dalam cm!',
      step: 'P = 4 - (100 / 100) = 4 - 1 = +3.00 Dioptri!',
      formula: 'P = 4 - \\frac{100}{PP\\text{ (cm)}}'
    }
  },

  // 5. Cacat mata hipermetropi (PGK - Sulit)
  {
    id: 5,
    subtopicId: 'hipermetropi',
    subtopicTitle: 'Cacat Mata Hipermetropi',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Evaluasi Performa Lensa Kacamata Hipermetropi Non-Standar',
    stimulus: {
      type: 'scenario',
      text: 'Seorang penjahit berusia 50 tahun memakai kacamata berkekuatan P = +2.5 Dioptri untuk membaca buku pola pada jarak baca baku 25 cm. Suatu ketika, kacamata tersebut pecah dan ia mencoba meminjam kacamata cadangan milik temannya yang memiliki kekuatan P_baru = +2.0 Dioptri.',
      diagram: {
        type: 'eye-hipermetropi',
        pp: 66.67,
        label: 'Diagram Pergeseran Titik Dekat Kerja Penjahit'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 5 adalah Pilihan Ganda Kompleks untuk submateri Hipermetropi. Di sini kita meneliti titik dekat asli penjahit dan dampak penggantian kacamata dengan kekuatan yang berbeda.',
      part2Stimulus: 'Kacamata awal berkekuatan positif 2.5 Dioptri pada jarak baca 25 cm. Kacamata pengganti berkekuatan positif 2.0 Dioptri.',
      part3Question: 'Pilihlah semua pernyataan yang benar terkait titik dekat asli penjahit, jarak baca terdekat dengan kacamata baru, serta sifat bayangannya.',
      part4Hint: 'Cari terlebih dahulu titik dekat (PP) asli penjahit dari kacamata awal, lalu gunakan nilai PP tersebut untuk menguji performa kacamata kedua.',
      part5Discussion: 'Dari P = 4 - 100/PP = 2.5, kita temukan 100/PP = 1.5, sehingga PP sama dengan 200/3 atau 66.7 cm. Dengan kacamata baru +2.0 D, jarak baca baru adalah 100 / (2.0 + 1.5) = 28.57 cm.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai kondisi optis mata penjahit dan kacamata yang digunakannya? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Titik dekat mata (punctum proximum) asli penjahit tanpa kacamata adalah 66.7 cm (200/3 cm).' },
      { key: 'B', text: 'Dengan kacamata baru berkekuatan +2.0 Dioptri, jarak baca terdekatnya bergeser menjauh menjadi sekitar 28.6 cm.' },
      { key: 'C', text: 'Bayangan yang dibentuk oleh kacamata cembung pada mata penjahit selalu bersifat maya dan tegak terhadap objek tulisan.' },
      { key: 'D', text: 'Jika penjahit ingin membaca pada jarak 20 cm, ia memerlukan kacamata dengan kekuatan lebih kecil yaitu +1.5 Dioptri.' },
      { key: 'E', text: 'Kacamata +2.5 Dioptri memiliki panjang fokus f = 25 cm.' }
    ],
    correctKeys: ['A', 'B', 'C'],
    discussion: {
      concept: 'Penentuan Titik Dekat dan Pergeseran Jarak Baca Kacamata Hipermetropi',
      known: [
        'Kacamata awal: P_1 = +2.5 D',
        'Jarak baca awal: s_1 = 25 cm',
        'Kacamata cadangan: P_2 = +2.0 D'
      ],
      asked: 'Verifikasi pernyataan A, B, C, D, E',
      keyFormula: 'P = \\frac{100}{s} - \\frac{100}{PP} \\iff \\frac{100}{PP} = \\frac{100}{s} - P',
      formulaReason: 'Titik dekat (PP) mata adalah sifat tetap dari mata pasien saat lensa mata berakomodasi maksimum.',
      steps: [
        '1. Menghitung PP asli: 100/PP = 100/25 - 2.5 = 4.0 - 2.5 = 1.5 -> PP = 100 / 1.5 = 200/3 cm ≈ 66.67 cm. (Pernyataan A BENAR)',
        '2. Menguji kacamata baru P_2 = +2.0 D: P_2 = 100/s_baru - 100/PP -> 2.0 = 100/s_baru - 1.5 -> 100/s_baru = 3.5 -> s_baru = 100 / 3.5 = 200/7 cm ≈ 28.57 cm. (Pernyataan B BENAR)',
        '3. Sifat bayangan lensa kacamata adalah maya dan tegak di depan mata pasien pada titik dekatnya. (Pernyataan C BENAR)',
        '4. Jika ingin membaca di s = 20 cm: P = 100/20 - 1.5 = 5.0 - 1.5 = +3.5 Dioptri (harus lebih besar, bukan +1.5 D). (Pernyataan D SALAH)',
        '5. Fokus kacamata +2.5 D adalah f = 100 / 2.5 = 40 cm, bukan 25 cm. (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, dan C adalah BENAR.',
      interpretation: 'Ketika kekuatan lensa kacamata berkurang dari +2.5 D menjadi +2.0 D, jarak baca terdekat terpaksa mundur dari 25 cm menjadi 28.6 cm agar bayangan tetap jatuh di titik dekat PP = 66.7 cm.',
      distractorAnalysis: 'Pernyataan D salah karena membaca lebih dekat memerlukan daya konvergensi lebih kuat (+3.5 D). Pernyataan E salah karena f = 100/2.5 = 40 cm.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Hubungan Cepat Daya dan Jarak Baca',
      rule: '100/s = P + (100/PP). Nilai 100/PP konstan untuk mata yang sama!',
      step: '100/PP = 4 - 2.5 = 1.5. Maka 100/s_baru = 2.0 + 1.5 = 3.5 -> s_baru = 100 / 3.5 = 28.6 cm!',
      formula: '\\frac{100}{s_{baru}} = P_{baru} + \\frac{100}{PP}'
    }
  },

  // 6. Cacat mata hipermetropi (BS - Sangat Sulit)
  {
    id: 6,
    subtopicId: 'hipermetropi',
    subtopicTitle: 'Cacat Mata Hipermetropi',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Koreksi Hipermetropi Berat dengan Posisi Kacamata Berjarak',
    stimulus: {
      type: 'table',
      text: 'Seorang pasien hipermetropi berat dengan titik dekat PP = 50 cm diukur dari kornea mata diuji menggunakan kacamata uji coba. Kacamata diletakkan pada jarak vertex d = 1.5 cm di depan kornea mata. Pasien ingin membaca dokumen pada jarak s_mata = 25 cm dari kornea matanya.',
      tableData: {
        caption: 'Tabel Parameter Posisi Relatif Lensa Kacamata terhadap Kornea',
        headers: ['Parameter', 'Relatif Kornea', 'Koreksi Jarak Vertex (d = 1.5 cm)', 'Relatif Lensa Kacamata'],
        rows: [
          ['Posisi Objek Dokumen (s)', '25.0 cm', 'Dikurangi 1.5 cm', '23.5 cm'],
          ['Posisi Titik Dekat (s\')', '-50.0 cm', 'Ditambah 1.5 cm ke lensa', '-48.5 cm'],
          ['Jarak Fokus Baku Ideal', '33.3 cm', 'Dihitung ulang dari posisi lensa', 'Perlu Analisis']
        ]
      },
      diagram: {
        type: 'eye-hipermetropi',
        pp: 50,
        sn: 25,
        label: 'Diagram Pengaruh Jarak Vertex pada Lensa Cembung'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 6 adalah Benar-Salah Tingkat Sangat Sulit. Kita menguji pengaruh jarak vertex pada lensa cembung hipermetropi.',
      part2Stimulus: 'Titik dekat pasien adalah 50 cm dari kornea. Kacamata berjarak 1.5 cm di depan kornea. Jarak baca objek adalah 25 cm dari kornea.',
      part3Question: 'Periksa kebenaran dari ketiga pernyataan mengenai kekuatan kacamata tanpa jarak vertex, posisi koordinat lensa, dan kekuatan lensa riil dengan jarak vertex.',
      part4Hint: 'Hati-hati: lensa cembung yang digeser menjauhi mata (vertex bertambah) menjadi lebih efektif dalam memusatkan cahaya dibanding saat menempel.',
      part5Discussion: 'Mari kita hitung: jika menempel d=0, P = 4 - 2 = +2.0 D. Bila d=1.5 cm, s = 23.5 cm dan s\' = -48.5 cm. P = 100/23.5 - 100/48.5 = 4.255 - 2.062 = +2.19 Dioptri.'
    },
    questionText: 'Analisis ketiga pernyataan berikut dan tentukan BENAR atau SALAH berdasarkan prinsip pembiasan lensa tipis!',
    statements: [
      {
        id: 1,
        text: 'Jika jarak kacamata ke kornea diabaikan (d = 0 cm), kekuatan kacamata yang dibutuhkan tepat sebesar +2.00 Dioptri.',
        isCorrect: true,
        explanation: 'P = 100/25 - 100/50 = 4.0 - 2.0 = +2.00 Dioptri.'
      },
      {
        id: 2,
        text: 'Dengan memperhitungkan jarak vertex 1.5 cm, jarak benda ke lensa menjadi 23.5 cm dan jarak bayangan ke lensa menjadi -48.5 cm.',
        isCorrect: true,
        explanation: 's_lensa = 25 - 1.5 = 23.5 cm; bayangan harus terbentuk di PP (50 cm dari kornea), sehingga jaraknya ke lensa adalah -(50 - 1.5) = -48.5 cm.'
      },
      {
        id: 3,
        text: 'Kekuatan lensa kacamata riil yang dibutuhkan pada jarak vertex 1.5 cm bernilai lebih dari +2.50 Dioptri.',
        isCorrect: false,
        explanation: 'P = 100/23.5 - 100/48.5 = 4.255 - 2.062 = +2.193 Dioptri. Nilai ini (+2.19 D) jelas kurang dari +2.50 Dioptri.'
      }
    ],
    discussion: {
      concept: 'Pengaruh Jarak Vertex pada Resep Kacamata Hipermetropi',
      known: [
        'Titik dekat dari kornea: PP = 50 cm',
        'Jarak vertex: d = 1.5 cm',
        'Jarak baca dari kornea: s_kornea = 25 cm'
      ],
      asked: 'Verifikasi kebenaran ketiga pernyataan',
      keyFormula: 'P = \\frac{100}{s_{lensa}} + \\frac{100}{s\'_{lensa}} = \\frac{100}{s - d} - \\frac{100}{PP - d}',
      formulaReason: 'Kedua jarak konjugat (objek dan bayangan) harus ditransformasikan ke sistem koordinat lensa kacamata.',
      steps: [
        '1. Kasus d = 0: P = 100/25 - 100/50 = +2.00 D. (Pernyataan 1 BENAR)',
        '2. Koordinat terhadap lensa: s_lensa = 25 - 1.5 = 23.5 cm. s\'_lensa = -(50 - 1.5) = -48.5 cm. (Pernyataan 2 BENAR)',
        '3. Menghitung kekuatan kacamata riil: P = 100/23.5 - 100/48.5 = 4.2553 - 2.0618 = +2.1935 D ≈ +2.19 D. Karena +2.19 D < +2.50 D, maka pernyataan 3 SALAH.'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Pada jarak vertex d = 1.5 cm, daya konvergensi yang dibutuhkan naik sedikit dari +2.00 D menjadi +2.19 D karena objek berada relatif lebih dekat ke lensa (23.5 cm).',
      distractorAnalysis: 'Pernyataan 3 memberikan estimasi yang sengaja dibesar-besarkan (+2.50 D) untuk menguji ketelitian perhitungan pecahan desimal siswa.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Perhitungan Cepat Kuat Lensa Vertex Positif',
      rule: 'P = 100 / (s - d) - 100 / (PP - d). Lakukan pendekatan cepat pada pembagian desimal!',
      step: '100 / 23.5 ≈ 4.26, 100 / 48.5 ≈ 2.06 -> P = 4.26 - 2.06 = +2.20 Dioptri.',
      formula: 'P = \\frac{100}{s - d} - \\frac{100}{PP - d}'
    }
  },

  // 7. Cacat mata presbiopi (PG - Menengah)
  {
    id: 7,
    subtopicId: 'presbiopi',
    subtopicTitle: 'Cacat Mata Presbiopi',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Koreksi Daya Akomodasi Lanjut Usia (Presbiopi Murni)',
    stimulus: {
      type: 'scenario',
      text: 'Seorang pensiunan guru berusia 65 tahun memiliki penglihatan jauh yang masih prima tanpa kacamata (titik jauh PR = ∞). Akan tetapi, akibat penuaan fisiologis, elastisitas lensa matanya menurun drastis sehingga titik dekatnya menjauh menjadi PP = 75 cm. Ia ingin membaca koran pagi pada jarak baca yang nyaman yaitu 25 cm.',
      diagram: {
        type: 'eye-presbiopi',
        pp: 75,
        pr: 9999,
        label: 'Diagram Presbiopi Murni (PP = 75 cm, PR = ∞)'
      }
    },
    narration: {
      part1Intro: 'Kita beralih ke Submateri 3: Cacat Mata Presbiopi atau mata tua. Mari kita bantu sang pensiunan guru membaca koran pagi.',
      part2Stimulus: 'Pensiunan guru memiliki titik jauh di tak hingga, namun titik dekatnya telah mundur menjadi 75 cm akibat penurunan daya akomodasi. Jarak baca yang diinginkan adalah 25 cm.',
      part3Question: 'Berapakah kekuatan lensa kacamata baca yang tepat untuk pensiunan guru tersebut?',
      part4Hint: 'Karena presbiopi murni dengan PR tak hingga, pasien hanya membutuhkan lensa baca positif dengan rumus 100 per Sn dikurang 100 per PP.',
      part5Discussion: 'Kekuatan lensa P sama dengan 100 per 25 dikurang 100 per 75. 100 per 25 adalah 4, dan 100 per 75 adalah 1,33. Maka 4 dikurang 1,33 adalah positif 2,67 Dioptri.'
    },
    questionText: 'Berapakah kekuatan lensa kacamata baca yang harus diresepkan agar pensiunan guru tersebut dapat membaca koran dengan jelas pada jarak 25 cm?',
    options: [
      { key: 'A', text: '+1.33 Dioptri' },
      { key: 'B', text: '+2.00 Dioptri' },
      { key: 'C', text: '+2.67 Dioptri' },
      { key: 'D', text: '+3.00 Dioptri' },
      { key: 'E', text: '+4.00 Dioptri' }
    ],
    correctKey: 'C',
    discussion: {
      concept: 'Koreksi Kacamata Baca pada Presbiopi Murni',
      known: [
        'Titik dekat pensiunan guru: PP = 75 cm = 0.75 m',
        'Titik jauh pensiunan guru: PR = ∞ (normal untuk melihat jauh)',
        'Jarak baca yang diinginkan: s = 25 cm = 0.25 m',
        'Posisi bayangan maya: s\' = -PP = -75 cm'
      ],
      asked: 'Kekuatan kacamata baca (P)',
      keyFormula: 'P = \\frac{100}{s} - \\frac{100}{PP}',
      formulaReason: 'Kacamata baca menggeser bayangan teks yang terletak di 25 cm agar jatuh tepat di titik dekat presbiopi (75 cm) saat mata berakomodasi.',
      steps: [
        'Substitusi nilai: P = 100/25 - 100/75',
        'P = 4 - 4/3 = 12/3 - 4/3 = 8/3 Dioptri',
        'P = +2.6667 D ≈ +2.67 Dioptri'
      ],
      finalResult: '+2.67 Dioptri (atau +8/3 Dioptri)',
      interpretation: 'Pensiunan guru hanya membutuhkan kacamata baca (lensa cembung +2.67 D). Saat melihat jauh, ia tidak perlu kacamata karena titik jauhnya masih normal (∞).',
      distractorAnalysis: 'Opsi A (+1.33 D) hanya menghitung 100/PP. Opsi D (+3.00 D) adalah pembulatan kasar yang tidak tepat secara matematis.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula 4 Kurang 4/3',
      rule: 'Untuk Sn = 25 cm dan PP = 75 cm: 100/75 = 4/3. Langsung 4 - 4/3 = 8/3 = +2.67 D!',
      step: 'P = 4 - 1.33 = +2.67 Dioptri (hitung dalam 3 detik!).',
      formula: 'P = 4 - \\frac{100}{PP}'
    }
  },

  // 8. Cacat mata presbiopi (PGK - Sulit)
  {
    id: 8,
    subtopicId: 'presbiopi',
    subtopicTitle: 'Cacat Mata Presbiopi',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Spesifikasi Kacamata Bifokal untuk Penderita Presbiopi Campuran',
    stimulus: {
      type: 'scenario',
      text: 'Seorang akuntan senior berusia 58 tahun menderita kelainan penglihatan campuran (presbiopi disertai miopi). Berdasarkan hasil uji oftalmologi, ia tidak dapat melihat benda jauh lebih dari PR = 200 cm, dan tidak dapat membaca dokumen lebih dekat dari PP = 80 cm. Dokter meresepkan kacamata bifokal (lensa ganda) dengan bagian atas untuk melihat jauh dan bagian bawah untuk membaca naskah pada jarak baca normal 25 cm.',
      diagram: {
        type: 'eye-presbiopi',
        pp: 80,
        pr: 200,
        label: 'Diagram Lensa Bifokal: Bagian Atas (Jauh) & Bawah (Baca)'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 8 adalah Pilihan Ganda Kompleks. Kita membahas penderita presbiopi yang disertai miopi, sehingga membutuhkan kacamata bifokal.',
      part2Stimulus: 'Titik jauh akuntan adalah 200 cm dan titik dekatnya adalah 80 cm. Kacamata bifokal memiliki bagian atas untuk mengemudi dan melihat jauh, serta bagian bawah untuk membaca pada jarak 25 cm.',
      part3Question: 'Pilihlah seluruh pernyataan yang benar terkait kekuatan lensa atas, kekuatan lensa bawah, dan nilai addisi kacamata bifokal tersebut.',
      part4Hint: 'Hitung lensa atas dengan formula miopi P = -100/PR, dan hitung lensa bawah dengan formula membaca P = 100/25 - 100/PP. Nilai addisi adalah selisih antara lensa bawah dan lensa atas.',
      part5Discussion: 'Lensa atas: minus 100 per 200 sama dengan minus 0.50 Dioptri. Lensa bawah: 4 dikurang 100 per 80 sama dengan 4 dikurang 1.25 yaitu positif 2.75 Dioptri. Nilai addisinya adalah +2.75 dikurang (-0.50) sama dengan +3.25 Dioptri.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai spesifikasi teknis kacamata bifokal akuntan tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Bagian atas kacamata bifokal menggunakan lensa cekung (negatif) berkekuatan -0.50 Dioptri.' },
      { key: 'B', text: 'Bagian bawah kacamata bifokal menggunakan lensa cembung (positif) berkekuatan +2.75 Dioptri.' },
      { key: 'C', text: 'Nilai addisi (reading addition / selisih daya optik baca terhadap penglihatan jauh) adalah +3.25 Dioptri.' },
      { key: 'D', text: 'Bagian atas kacamata harus berupa lensa cembung +0.50 Dioptri untuk memperjelas penglihatan jauh.' },
      { key: 'E', text: 'Panjang fokus lensa baca bagian bawah adalah tepat 25 cm.' }
    ],
    correctKeys: ['A', 'B', 'C'],
    discussion: {
      concept: 'Desain Kacamata Bifokal pada Kasus Presbiopi Campuran Miopi',
      known: [
        'Titik jauh mata: PR = 200 cm = 2.0 m',
        'Titik dekat mata: PP = 80 cm = 0.8 m',
        'Jarak baca standar: s = 25 cm'
      ],
      asked: 'Spesifikasi lensa atas, lensa bawah, dan nilai addisi',
      keyFormula: 'P_{atas} = -\\frac{100}{PR}, \\quad P_{bawah} = \\frac{100}{s} - \\frac{100}{PP}, \\quad \\text{Add} = P_{bawah} - P_{atas}',
      formulaReason: 'Bagian atas mengoreksi miopi ke tak terhingga, bagian bawah mengoreksi presbiopi ke titik baca 25 cm.',
      steps: [
        '1. Lensa atas (melihat jauh): P_{atas} = -100 / 200 = -0.50 Dioptri. (Pernyataan A BENAR)',
        '2. Lensa bawah (membaca): P_{bawah} = 100/25 - 100/80 = 4.0 - 1.25 = +2.75 Dioptri. (Pernyataan B BENAR)',
        '3. Nilai addisi (Add): Add = P_{bawah} - P_{atas} = +2.75 - (-0.50) = +3.25 Dioptri. (Pernyataan C BENAR)',
        '4. Penglihatan jauh membutuhkan lensa cekung (negatif), bukan cembung. (Pernyataan D SALAH)',
        '5. Jarak fokus lensa bawah: f = 100 / 2.75 ≈ 36.36 cm, bukan 25 cm. (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, dan C adalah BENAR.',
      interpretation: 'Kacamata bifokal memungkinkan akuntan melihat papan informasi kantor di kejauhan melalui segmen atas (-0.50 D) dan memeriksa berkas dokumen di meja kerja melalui segmen bawah (+2.75 D).',
      distractorAnalysis: 'Pernyataan D keliru jenis lensa. Pernyataan E menyamakan jarak fokus dengan jarak baca Sn.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Addisi Bifokal',
      rule: 'Addisi = 100/Sn - 100/PP + 100/PR = 100/25 - 100/80 + 100/200!',
      step: 'Add = 4.0 - 1.25 + 0.50 = +3.25 Dioptri.',
      formula: '\\text{Add} = \\frac{100}{S_n} - \\frac{100}{PP} + \\frac{100}{PR}'
    }
  },

  // 9. Cacat mata presbiopi (BS - Sangat Sulit)
  {
    id: 9,
    subtopicId: 'presbiopi',
    subtopicTitle: 'Cacat Mata Presbiopi',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Analisis Fisiologis dan Optika Refraksi pada Presbiopi Lanjut',
    stimulus: {
      type: 'scenario',
      text: 'Seorang dokter spesialis mata menyusun materi edukasi mengenai penurunan daya akomodasi pada lansia. Salah satu pasien lansia memiliki data titik dekat PP = 120 cm dan titik jauh PR = 250 cm. Pasien tersebut ingin membaca tablet digital pada jarak kerja s = 30 cm.',
      diagram: {
        type: 'eye-presbiopi',
        pp: 120,
        pr: 250,
        label: 'Diagram Penurunan Daya Akomodasi Mata Lansia'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 9 adalah tipe Benar-Salah tingkat Sangat Sulit untuk menutup submateri cacat mata presbiopi.',
      part2Stimulus: 'Pasien lansia memiliki titik dekat 120 cm dan titik jauh 250 cm. Jarak baca tablet yang diinginkan adalah 30 cm.',
      part3Question: 'Evaluasilah ketiga pernyataan tentang etiologi presbiopi, kekuatan lensa baca yang diperlukan, dan dampak penggunaan lensa baca untuk mengemudi.',
      part4Hint: 'Perhatikan bahwa jarak baca pada soal ini adalah 30 cm, bukan 25 cm. Dan ingat bahwa kacamata baca tidak boleh digunakan untuk melihat jauh.',
      part5Discussion: 'Mari kita evaluasi: Etiologi presbiopi adalah sklerosis lensa dan atrofi otot siliaris. Kekuatan lensa baca untuk s = 30 cm: 100/30 dikurang 100/120 = 3.333 dikurang 0.833 = positif 2.50 Dioptri. Jika lensa +2.5 D dipakai melihat jauh, bayangan jatuh di depan retina sehingga kabur.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan prinsip medis optika!',
    statements: [
      {
        id: 1,
        text: 'Presbiopi secara patofisiologi disebabkan oleh penurunan elastisitas kapsul lensa mata dan melemahnya kekuatan kontraksi otot siliaris, bukan kelainan bentuk kelengkungan kornea bawaan.',
        isCorrect: true,
        explanation: 'Presbiopi adalah proses degeneratif alami akibat hilangnya elastisitas lensa kristalina dan sklerosis serat lensa serta penurunan kemampuan otot siliaris.'
      },
      {
        id: 2,
        text: 'Untuk membaca tablet pada jarak 30 cm dengan nyaman, pasien membutuhkan kacamata baca berkekuatan tepat +2.50 Dioptri.',
        isCorrect: true,
        explanation: 'P = 100/s - 100/PP = 100/30 - 100/120 = 10/3 - 5/6 = 20/6 - 5/6 = 15/6 = +2.50 Dioptri.'
      },
      {
        id: 3,
        text: 'Jika pasien memakai kacamata baca +2.50 Dioptri saat mengemudi mobil melihat rambu jalan di kejauhan, pandangannya akan sangat jelas karena bayangan rambu jatuh tepat di retina.',
        isCorrect: false,
        explanation: 'Salah. Untuk benda jauh (s = ∞), lensa +2.50 D membentuk bayangan pada f = 40 cm di depan mata, jauh di depan titik jauh matanya (250 cm), sehingga berkas sinar menyebar dan pandangan menjadi sangat buram.'
      }
    ],
    discussion: {
      concept: 'Etiologi dan Komputasi Lensa Baca pada Jarak Kerja Tertentu',
      known: [
        'Titik dekat mata: PP = 120 cm',
        'Titik jauh mata: PR = 250 cm',
        'Jarak kerja baca tablet: s = 30 cm'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan',
      keyFormula: 'P = \\frac{100}{s} - \\frac{100}{PP}',
      formulaReason: 'Kacamata baca menghasilkan bayangan maya di titik dekat PP saat membaca pada jarak s.',
      steps: [
        '1. Presbiopi disebabkan oleh hilangnya elastisitas alami lensa mata seiring bertambahnya usia. (Pernyataan 1 BENAR)',
        '2. Menghitung kuat lensa baca: P = 100/30 - 100/120 = 3.333 - 0.833 = +2.50 Dioptri. (Pernyataan 2 BENAR)',
        '3. Ketika melihat rambu jauh (s = ∞) memakai lensa baca +2.50 D: 1/s\' = P - 1/s = 2.5 - 0 = +2.5 m^-1 -> s\' = +0.4 m = +40 cm di belakang lensa. Sinar berkonvergensi tajam dan jatuh jauh di depan retina, menghasilkan lingkaran kabur (blur circle) yang parah saat mengemudi. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Kacamata baca presbiopi hanya boleh digunakan untuk tugas visual jarak dekat (30 cm). Menggunakannya saat berkendara sangat berbahaya karena mengaburkan pandangan jauh.',
      distractorAnalysis: 'Pernyataan 3 menguji pemahaman konsep pembiasan benda jauh pada lensa cembung kuat.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Reduksi Pecahan Presbiopi',
      rule: 'P = 10/3 - 5/6 = (20 - 5)/6 = 15/6 = 5/2 = +2.50 D!',
      step: 'Cukup gunakan pecahan biasa untuk menghindari kesalahan desimal berulang.',
      formula: 'P = \\frac{100}{30} - \\frac{100}{120} = +2.50\\text{ D}'
    }
  },

  // 10. Mikroskop mata tanpa akomodasi (PG - Menengah)
  {
    id: 10,
    subtopicId: 'mikroskop-tanpa-akomodasi',
    subtopicTitle: 'Mikroskop Tanpa Akomodasi',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Pengamatan Preparat Biologi Mikroskopis Tanpa Akomodasi',
    stimulus: {
      type: 'scenario',
      text: 'Seorang laboran mengamati sel epidermis bawang merah menggunakan mikroskop laboratorium. Mikroskop tersebut dilengkapi lensa objektif dengan jarak fokus f_ob = 10 mm dan lensa okuler dengan jarak fokus f_ok = 50 mm. Preparat kaca diletakkan pada jarak s_ob = 11 mm di depan lensa objektif. Pengamat memiliki mata normal dengan titik dekat Sn = 250 mm dan mengamati mikroskop tanpa berakomodasi.',
      diagram: {
        type: 'microscope',
        f1: 10,
        f2: 50,
        s: 11,
        sPrime: 110,
        label: 'Diagram Berkas Sinar Mikroskop Tanpa Akomodasi (Bayangan di Tak Hingga)'
      }
    },
    narration: {
      part1Intro: 'Selamat datang di Submateri 4: Mikroskop Tanpa Akomodasi. Mari kita masuki laboratorium mikroskopis bersama Mister Jo!',
      part2Stimulus: 'Objektif berfokus 10 mm, okuler berfokus 50 mm. Benda diletakkan pada jarak 11 mm dari objektif. Pengamat memiliki titik dekat normal 250 mm dan mengamati tanpa akomodasi.',
      part3Question: 'Berapakah perbesaran total bayangan dan panjang tabung mikroskop pada pengamatan tersebut?',
      part4Hint: 'Hitung terlebih dahulu jarak bayangan objektif dengan rumus 1/f = 1/s + 1/s aksen. Ingat, untuk mata tanpa akomodasi, bayangan objektif jatuh tepat di titik fokus lensa okuler.',
      part5Discussion: '1/s aksen objektif = 1/10 dikurang 1/11 = 1/110, jadi s aksen objektif = 110 mm. Perbesaran objektif = 110/11 = 10 kali. Perbesaran okuler tanpa akomodasi = Sn/f okuler = 250/50 = 5 kali. Perbesaran total = 10 kali 5 = 50 kali. Panjang mikroskop d = 110 + 50 = 160 mm atau 16 cm.'
    },
    questionText: 'Berapakah perbesaran total mikroskop dan jarak antara lensa objektif dengan lensa okuler (panjang tabung mikroskop)?',
    options: [
      { key: 'A', text: '25 kali dan 15.0 cm' },
      { key: 'B', text: '50 kali dan 16.0 cm' },
      { key: 'C', text: '50 kali dan 11.0 cm' },
      { key: 'D', text: '60 kali dan 16.0 cm' },
      { key: 'E', text: '100 kali dan 21.0 cm' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Perbesaran dan Panjang Tabung Mikroskop Tanpa Akomodasi',
      known: [
        'Fokus objektif: f_{ob} = 10 mm = 1.0 cm',
        'Fokus okuler: f_{ok} = 50 mm = 5.0 cm',
        'Jarak benda ke objektif: s_{ob} = 11 mm = 1.1 cm',
        'Jarak baca normal: S_n = 250 mm = 25 cm',
        'Kondisi: mata tanpa akomodasi (s\'_{ok} = ∞)'
      ],
      asked: 'Perbesaran total (M_{tot}) dan panjang tabung mikroskop (d)',
      keyFormula: 'M_{tot} = |M_{ob}| \\times M_{ok} = \\left|\\frac{s\'_{ob}}{s_{ob}}\\right| \\times \\left(\\frac{S_n}{f_{ok}}\\right), \\quad d = s\'_{ob} + f_{ok}',
      formulaReason: 'Tanpa akomodasi mengharuskan bayangan dari lensa objektif tepat berada pada titik fokus depan lensa okuler (s_{ok} = f_{ok}).',
      steps: [
        '1. Menghitung s\'_{ob}: 1/s\'_{ob} = 1/f_{ob} - 1/s_{ob} = 1/10 - 1/11 = (11 - 10)/110 = 1/110 mm^-1 -> s\'_{ob} = 110 mm = 11 cm.',
        '2. Perbesaran objektif: M_{ob} = s\'_{ob} / s_{ob} = 110 / 11 = 10 kali.',
        '3. Perbesaran okuler tanpa akomodasi: M_{ok} = S_n / f_{ok} = 250 / 50 = 5 kali.',
        '4. Perbesaran total: M_{tot} = M_{ob} \\times M_{ok} = 10 \\times 5 = 50 kali.',
        '5. Panjang tabung mikroskop: d = s\'_{ob} + s_{ok} = s\'_{ob} + f_{ok} = 110 mm + 50 mm = 160 mm = 16.0 cm.'
      ],
      finalResult: 'Perbesaran total = 50 kali, Panjang tabung = 16.0 cm',
      interpretation: 'Mikroskop menghasilkan perbesaran 50 kali dengan tabung berukuran 16 cm. Berkas sinar yang keluar dari okuler berbentuk sejajar sehingga mata pengamat dapat bekerja berjam-jam tanpa lelah.',
      distractorAnalysis: 'Opsi C memakai d = 11 cm (hanya s\'_ob tanpa f_ok). Opsi D memakai rumus akomodasi maksimum untuk okuler (M_ok = Sn/f + 1 = 6x -> M = 60x).'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Solusi Cepat Mikroskop Relaks',
      rule: 's\'_ob = (s_ob · f_ob) / (s_ob - f_ob). Di sini s\'_ob = (11 · 10) / (1) = 110 mm. Lalu M_ob = 110/11 = 10x. M_ok = 250/50 = 5x -> M = 50x, d = 110 + 50 = 160 mm = 16 cm!',
      step: 'M = (10) x (5) = 50x | d = 11 + 5 = 16 cm.',
      formula: 's\'_{ob} = \\frac{s_{ob} \\cdot f_{ob}}{s_{ob} - f_{ob}}'
    }
  }
];
