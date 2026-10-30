export interface FormulaEntry {
  id: string;
  category: string;
  title: string;
  latex: string;
  fallbackText: string;
  variables: { symbol: string; meaning: string; unit: string }[];
  signConvention: string;
  explanation: string;
  quickTrick: string;
  exampleProblem: {
    question: string;
    given: string;
    formula: string;
    calculation: string;
    answer: string;
  };
}

export const FORMULA_BANK: FormulaEntry[] = [
  {
    id: 'miopi',
    category: 'Cacat Mata & Refraksi',
    title: '1. Cacat Mata Miopi (Rabun Jauh)',
    latex: 'P = \\frac{1}{f} = -\\frac{1}{PR\\text{ (meter)}} = -\\frac{100}{PR\\text{ (cm)}}',
    fallbackText: 'P = 1/f = -1/PR (meter) = -100/PR (cm)',
    variables: [
      { symbol: 'P', meaning: 'Kekuatan lensa kacamata cekung', unit: 'Dioptri (D)' },
      { symbol: 'f', meaning: 'Jarak fokus lensa kacamata (negatif)', unit: 'meter / cm' },
      { symbol: 'PR', meaning: 'Punctum Remotum (titik jauh mata pasien)', unit: 'meter / cm' },
      { symbol: 's', meaning: 'Jarak benda yang ingin dilihat (biasanya ∞)', unit: 'meter / cm' },
      { symbol: 's\'', meaning: 'Jarak bayangan maya kacamata (s\' = -PR)', unit: 'meter / cm' }
    ],
    signConvention: 'Lensa cekung bersifat divergen sehingga f bernilai negatif (-) dan P bernilai negatif (-). Bayangan kacamata bersifat maya di depan mata sehingga s\' bernilai negatif.',
    explanation: 'Pada mata miopi, bola mata terlalu panjang atau kelengkungan kornea terlalu kuat sehingga berkas sinar sejajar dari benda jauh terfokus di depan retina. Lensa cekung digunakan untuk menyebarkan sinar sehingga berkas yang masuk ke mata seolah-olah berasal dari titik jauh mata (PR).',
    quickTrick: '⚡ Langsung bagi -100 dengan nilai titik jauh dalam cm: P = -100 / PR(cm). Misalnya PR = 50 cm -> P = -100/50 = -2.0 D!',
    exampleProblem: {
      question: 'Seorang siswa hanya mampu melihat jelas paling jauh 200 cm. Berapakah kekuatan kacamata yang dibutuhkan?',
      given: 'PR = 200 cm = 2.0 m, s = ∞',
      formula: 'P = -100 / PR',
      calculation: 'P = -100 / 200 = -0.50 Dioptri',
      answer: 'Lensa cekung -0.50 Dioptri'
    }
  },
  {
    id: 'hipermetropi',
    category: 'Cacat Mata & Refraksi',
    title: '2. Cacat Mata Hipermetropi (Rabun Dekat)',
    latex: 'P = \\frac{100}{S_n} - \\frac{100}{PP} \\quad \\left(\\text{untuk } S_n = 25\\text{ cm} \\implies P = 4 - \\frac{100}{PP\\text{ (cm)}}\\right)',
    fallbackText: 'P = 100/Sn - 100/PP = 4 - 100/PP (jika Sn = 25 cm)',
    variables: [
      { symbol: 'P', meaning: 'Kekuatan lensa kacamata cembung', unit: 'Dioptri (D)' },
      { symbol: 'Sn', meaning: 'Jarak baca normal baku (standar 25 cm)', unit: 'cm' },
      { symbol: 'PP', meaning: 'Punctum Proximum (titik dekat mata pasien)', unit: 'cm' },
      { symbol: 's', meaning: 'Jarak baca yang diinginkan (s = Sn)', unit: 'cm' },
      { symbol: 's\'', meaning: 'Jarak bayangan maya kacamata (s\' = -PP)', unit: 'cm' }
    ],
    signConvention: 'Lensa cembung bersifat konvergen sehingga f dan P bernilai positif (+). Bayangan terletak di depan lensa kacamata sehingga bertanda negatif (s\' = -PP).',
    explanation: 'Pada mata hipermetropi, bayangan benda dekat jatuh di belakang retina karena bola mata terlalu pipih atau daya bias kornea terlalu lemah. Kacamata cembung membiaskan sinar lebih menguncup sehingga bayangan teks pada jarak Sn digeser ke titik dekat PP pasien.',
    quickTrick: '⚡ Jika jarak baca 25 cm, langsung kurangi 4 dengan (100 / PP)! Contoh PP = 50 cm -> P = 4 - (100/50) = 4 - 2 = +2.0 D!',
    exampleProblem: {
      question: 'Titik dekat seorang pembaca adalah 100 cm. Berapakah kekuatan kacamata untuk membaca di 25 cm?',
      given: 'PP = 100 cm, Sn = 25 cm',
      formula: 'P = 4 - 100/PP',
      calculation: 'P = 4 - (100/100) = 4 - 1 = +3.00 Dioptri',
      answer: 'Lensa cembung +3.00 Dioptri'
    }
  },
  {
    id: 'presbiopi',
    category: 'Cacat Mata & Refraksi',
    title: '3. Cacat Mata Presbiopi (Mata Tua / Penurunan Akomodasi)',
    latex: 'P_{baca} = \\frac{100}{s} - \\frac{100}{PP}, \\quad P_{jauh} = -\\frac{100}{PR}, \\quad \\text{Add} = P_{baca} - P_{jauh}',
    fallbackText: 'P_baca = 100/s - 100/PP, P_jauh = -100/PR, Add = P_baca - P_jauh',
    variables: [
      { symbol: 'P_baca', meaning: 'Kekuatan lensa baca bawah kacamata bifokal', unit: 'Dioptri (D)' },
      { symbol: 'P_jauh', meaning: 'Kekuatan lensa atas untuk melihat jauh', unit: 'Dioptri (D)' },
      { symbol: 'Add', meaning: 'Addisi baca (reading addition)', unit: 'Dioptri (D)' },
      { symbol: 'PP', meaning: 'Titik dekat presbiopi (menjauh karena usia)', unit: 'cm' },
      { symbol: 'PR', meaning: 'Titik jauh mata (jika disertai miopi)', unit: 'cm' }
    ],
    signConvention: 'Presbiopi murni hanya membutuhkan lensa baca positif (+). Jika disertai miopi, digunakan kacamata bifokal dengan segmen atas negatif (-) dan segmen bawah positif (+).',
    explanation: 'Presbiopi bukan cacat kelengkungan bola mata, melainkan penuaan sklerotik fisiologis pada lensa kristalina dan melemahnya elastisitas otot siliaris. Titik dekat menjauh, dan daya akomodasi menurun drastis.',
    quickTrick: '⚡ Jangan samakan presbiopi dengan hipermetropi. Presbiopi murni memiliki titik jauh tak terhingga (PR = ∞), sehingga hanya butuh kacamata saat membaca!',
    exampleProblem: {
      question: 'Kakek memiliki PP = 80 cm dan PR = 200 cm. Tentukan kekuatan lensa bifokal atas dan bawah untuk membaca di 25 cm!',
      given: 'PP = 80 cm, PR = 200 cm, Sn = 25 cm',
      formula: 'P_atas = -100/PR, P_bawah = 100/25 - 100/PP',
      calculation: 'P_atas = -100/200 = -0.50 D; P_bawah = 4 - 100/80 = 4 - 1.25 = +2.75 D',
      answer: 'Atas: -0.50 D, Bawah: +2.75 D (Addisi = +3.25 D)'
    }
  },
  {
    id: 'mikroskop-tanpa-akomodasi',
    category: 'Mikroskop',
    title: '4. Mikroskop Mata Tanpa Akomodasi',
    latex: 'M = |M_{ob}| \\times M_{ok} = \\left|\\frac{s\'_{ob}}{s_{ob}}\\right| \\times \\left(\\frac{S_n}{f_{ok}}\\right), \\quad d = s\'_{ob} + f_{ok}',
    fallbackText: 'M = (s\'_ob / s_ob) * (Sn / f_ok), d = s\'_ob + f_ok',
    variables: [
      { symbol: 'M', meaning: 'Perbesaran total mikroskop', unit: 'kali (x)' },
      { symbol: 'M_ob', meaning: 'Perbesaran linier lensa objektif', unit: 'kali (x)' },
      { symbol: 'M_ok', meaning: 'Perbesaran sudut lensa okuler relaks', unit: 'kali (x)' },
      { symbol: 's_ob', meaning: 'Jarak preparat ke lensa objektif (f_ob < s_ob < 2f_ob)', unit: 'cm / mm' },
      { symbol: 's\'_ob', meaning: 'Jarak bayangan nyata lensa objektif', unit: 'cm / mm' },
      { symbol: 'f_ob, f_ok', meaning: 'Jarak fokus objektif dan okuler', unit: 'cm / mm' },
      { symbol: 'd', meaning: 'Panjang tabung mikroskop (jarak antar lensa)', unit: 'cm / mm' }
    ],
    signConvention: 'Bayangan objektif bersifat nyata (s\'_ob positif). Untuk mata tanpa akomodasi, bayangan objektif harus tepat di titik fokus okuler sehingga s_ok = f_ok.',
    explanation: 'Lensa objektif membentuk bayangan nyata, terbalik, dan diperbesar tepat di bidang fokus lensa okuler. Lensa okuler membiaskan sinar menjadi berkas sejajar menuju mata pengamat sehingga mata beristirahat penuh tanpa akomodasi.',
    quickTrick: '⚡ Hitung s\'_ob = (s_ob · f_ob) / (s_ob - f_ob). Panjang tabung d = s\'_ob + f_ok. Tidak ada penambahan angka 1 pada M_ok!',
    exampleProblem: {
      question: 'Mikroskop dengan f_ob = 1 cm, f_ok = 5 cm, preparat di 1.1 cm, Sn = 25 cm diamati tanpa akomodasi. Tentukan M dan d!',
      given: 'f_ob = 1 cm, f_ok = 5 cm, s_ob = 1.1 cm, Sn = 25 cm',
      formula: 's\'_ob = (1.1 x 1)/(1.1 - 1) = 11 cm; M = (s\'_ob/s_ob) x (Sn/f_ok)',
      calculation: 'M_ob = 11 / 1.1 = 10x; M_ok = 25 / 5 = 5x; M = 10 x 5 = 50x; d = 11 + 5 = 16 cm',
      answer: 'Perbesaran 50 kali dan panjang tabung 16 cm'
    }
  },
  {
    id: 'mikroskop-akomodasi-maks',
    category: 'Mikroskop',
    title: '5. Mikroskop Mata Berakomodasi Maksimum',
    latex: 'M = \\left|\\frac{s\'_{ob}}{s_{ob}}\\right| \\times \\left(\\frac{S_n}{f_{ok}} + 1\\right), \\quad d = s\'_{ob} + s_{ok}, \\quad s_{ok} = \\frac{f_{ok} \\cdot S_n}{f_{ok} + S_n}',
    fallbackText: 'M = (s\'_ob / s_ob) * (Sn / f_ok + 1), d = s\'_ob + s_ok',
    variables: [
      { symbol: 'M', meaning: 'Perbesaran total mikroskop akomodasi maksimum', unit: 'kali (x)' },
      { symbol: 'M_ok', meaning: 'Perbesaran okuler akomodasi maksimum', unit: 'kali (x)' },
      { symbol: 's_ok', meaning: 'Jarak bayangan objektif ke okuler (s_ok < f_ok)', unit: 'cm / mm' },
      { symbol: 's\'_ok', meaning: 'Bayangan akhir maya di titik dekat mata (-Sn)', unit: 'cm / mm' }
    ],
    signConvention: 'Bayangan akhir oleh lensa okuler bersifat maya dan terletak pada titik dekat mata pengamat, sehingga s\'_ok = -Sn.',
    explanation: 'Pada mata berakomodasi maksimum, lensa okuler menghasilkan bayangan akhir maya di titik dekat Sn. Jarak s_ok lebih pendek dari f_ok sehingga tabung mikroskop memendek dibandingkan kondisi tanpa akomodasi.',
    quickTrick: '⚡ Perbesaran okuler bertambah 1: M_ok = Sn/f_ok + 1. Jarak s_ok langsung dihitung dengan (f_ok · Sn)/(f_ok + Sn)!',
    exampleProblem: {
      question: 'Mikroskop dengan f_ob = 1 cm, f_ok = 5 cm, preparat di 1.2 cm, Sn = 25 cm diamati dengan akomodasi maksimum. Tentukan M dan d!',
      given: 'f_ob = 1 cm, f_ok = 5 cm, s_ob = 1.2 cm, Sn = 25 cm',
      formula: 's\'_ob = 6 cm; M_ob = 5x; M_ok = 25/5 + 1 = 6x; s_ok = (5 x 25)/30',
      calculation: 'M = 5 x 6 = 30x; s_ok = 125/30 = 4.17 cm; d = 6 + 4.17 = 10.17 cm',
      answer: 'Perbesaran 30 kali dan panjang tabung 10.17 cm'
    }
  },
  {
    id: 'teropong-tanpa-akomodasi',
    category: 'Teropong Bintang',
    title: '6. Teropong Bintang Mata Tanpa Akomodasi',
    latex: 'M = \\frac{f_{ob}}{f_{ok}}, \\quad L = f_{ob} + f_{ok}',
    fallbackText: 'M = f_ob / f_ok, L = f_ob + f_ok',
    variables: [
      { symbol: 'M', meaning: 'Perbesaran sudut teropong bintang relaks', unit: 'kali (x)' },
      { symbol: 'L', meaning: 'Panjang tabung teropong bintang', unit: 'cm / m' },
      { symbol: 'f_ob', meaning: 'Panjang fokus lensa objektif (selalu f_ob > f_ok)', unit: 'cm / m' },
      { symbol: 'f_ok', meaning: 'Panjang fokus lensa okuler', unit: 'cm / m' }
    ],
    signConvention: 'Objektif dan okuler keduanya lensa cembung (positif). Sinar datang dari benda langit sangat jauh (s_ob = ∞) sehingga s\'_ob = f_ob.',
    explanation: 'Teropong Keplerian menggunakan dua lensa cembung. Lensa objektif memfokuskan berkas bintang tepat pada bidang fokusnya, dan okuler ditempatkan sedemikian rupa sehingga fokus okulernya berimpit dengan fokus objektif.',
    quickTrick: '⚡ f_ok = L / (M + 1). Langsung temukan fokus okuler jika panjang tabung dan perbesaran diketahui!',
    exampleProblem: {
      question: 'Teropong bintang tanpa akomodasi memiliki panjang 105 cm dan perbesaran 20 kali. Tentukan f_ob dan f_ok!',
      given: 'L = 105 cm, M = 20x',
      formula: 'f_ok = L / (M + 1), f_ob = M x f_ok',
      calculation: 'f_ok = 105 / 21 = 5 cm; f_ob = 20 x 5 = 100 cm',
      answer: 'f_ob = 100 cm dan f_ok = 5 cm'
    }
  },
  {
    id: 'teropong-akomodasi-maks',
    category: 'Teropong Bintang',
    title: '7. Teropong Bintang Berakomodasi Maksimum',
    latex: 'M = \\frac{f_{ob}}{f_{ok}} \\left(1 + \\frac{f_{ok}}{S_n}\\right) = \\frac{f_{ob}}{s_{ok}}, \\quad d = f_{ob} + s_{ok}, \\quad s_{ok} = \\frac{f_{ok} \\cdot S_n}{f_{ok} + S_n}',
    fallbackText: 'M = (f_ob / f_ok) * (1 + f_ok / Sn), d = f_ob + s_ok',
    variables: [
      { symbol: 'M', meaning: 'Perbesaran sudut akomodasi maksimum', unit: 'kali (x)' },
      { symbol: 'd', meaning: 'Panjang tabung teropong akomodasi maksimum', unit: 'cm' },
      { symbol: 's_ok', meaning: 'Jarak bayangan objektif ke lensa okuler', unit: 'cm' },
      { symbol: 'Sn', meaning: 'Titik dekat mata pengamat', unit: 'cm' }
    ],
    signConvention: 'Bayangan akhir okuler jatuh di titik dekat mata (s\'_ok = -Sn). Nilai perbesaran selalu lebih besar dari kondisi tanpa akomodasi.',
    explanation: 'Saat berakomodasi maksimum, bayangan akhir ditarik mendekat ke Sn. Hal ini memerlukan pergeseran lensa okuler mendekat ke lensa objektif sebesar Δd = f_ok^2 / (f_ok + Sn).',
    quickTrick: '⚡ Tabung teropong selalu MEMENDEK saat akomodasi maksimum! Besar pemendekan: Δd = f_ok^2 / (f_ok + Sn).',
    exampleProblem: {
      question: 'Teropong f_ob = 80 cm, f_ok = 4 cm diamati dengan Sn = 20 cm berakomodasi maksimum. Berapakah M dan d?',
      given: 'f_ob = 80 cm, f_ok = 4 cm, Sn = 20 cm',
      formula: 'M = (f_ob/f_ok)(1 + f_ok/Sn), s_ok = (f_ok x Sn)/(f_ok + Sn)',
      calculation: 'M = (80/4)(1 + 4/20) = 20 x 1.2 = 24x; s_ok = 80/24 = 3.33 cm; d = 80 + 3.33 = 83.33 cm',
      answer: 'Perbesaran 24 kali dan panjang tabung 83.33 cm'
    }
  },
  {
    id: 'lup-tanpa-akomodasi',
    category: 'Lup (Kaca Pembesar)',
    title: '8. Lup Tanpa Akomodasi',
    latex: 'M = \\frac{S_n}{f}, \\quad s = f, \\quad s\' = -\\infty',
    fallbackText: 'M = Sn / f, s = f, s\' = -∞',
    variables: [
      { symbol: 'M', meaning: 'Perbesaran sudut lup tanpa akomodasi', unit: 'kali (x)' },
      { symbol: 'Sn', meaning: 'Jarak baca normal (standar 25 cm)', unit: 'cm' },
      { symbol: 'f', meaning: 'Jarak fokus lensa lup', unit: 'cm' },
      { symbol: 's', meaning: 'Jarak benda ke lensa lup (wajib s = f)', unit: 'cm' }
    ],
    signConvention: 'Benda diletakkan tepat di titik fokus utama lensa cembung sehingga berkas bias keluar sejajar sumbu utama ke mata.',
    explanation: 'Mode ini paling disukai oleh teknisi perhiasan dan pembaca dokumen mikro karena mata berada dalam kondisi relaksasi otot siliaris penuh.',
    quickTrick: '⚡ M = Sn / f. Jika P diketahui, langsung M = (Sn · P) / 100!',
    exampleProblem: {
      question: 'Lup berkekuatan +10 Dioptri digunakan oleh mata normal (Sn = 25 cm) tanpa akomodasi. Tentukan M dan letak benda!',
      given: 'P = +10 D -> f = 100/10 = 10 cm, Sn = 25 cm',
      formula: 's = f, M = Sn / f',
      calculation: 's = 10 cm; M = 25 / 10 = 2.50 kali',
      answer: 'Perbesaran 2.5 kali pada jarak benda s = 10 cm'
    }
  },
  {
    id: 'lup-jarak-tertentu',
    category: 'Lup (Kaca Pembesar)',
    title: '9. Lup Berakomodasi pada Jarak Tertentu (x)',
    latex: 'M = \\frac{S_n}{s} = \\frac{S_n}{f} + \\frac{S_n}{x}, \\quad \\frac{1}{s} = \\frac{1}{f} + \\frac{1}{x}',
    fallbackText: 'M = Sn/s = Sn/f + Sn/x, 1/s = 1/f + 1/x',
    variables: [
      { symbol: 'M', meaning: 'Perbesaran sudut lup berakomodasi pada jarak x', unit: 'kali (x)' },
      { symbol: 'x', meaning: 'Jarak letak bayangan maya di depan mata (s\' = -x)', unit: 'cm' },
      { symbol: 'Sn', meaning: 'Jarak baca normal pengamat', unit: 'cm' },
      { symbol: 's', meaning: 'Jarak benda ke lup', unit: 'cm' },
      { symbol: 'm', meaning: 'Perbesaran linier bayangan: m = 1 + x/f', unit: 'kali (x)' }
    ],
    signConvention: 'Bayangan terbentuk di depan lensa pada jarak x sehingga s\' = -x.',
    explanation: 'Pengamat seringkali tidak berakomodasi penuh di 25 cm, melainkan pada jarak kerja nyaman tertentu seperti 50 cm atau 100 cm. Perbesaran bernilai di antara relaks (Sn/f) dan maksimum (Sn/f + 1).',
    quickTrick: '⚡ Jumlahkan dua suku: suku tanpa akomodasi (Sn/f) ditambah suku akomodasi jarak (Sn/x)!',
    exampleProblem: {
      question: 'Lup berfokus 10 cm digunakan mata normal (Sn = 25 cm) berakomodasi pada jarak 50 cm. Tentukan M dan s!',
      given: 'f = 10 cm, Sn = 25 cm, x = 50 cm',
      formula: 'M = Sn/f + Sn/x, s = (f x x)/(x + f)',
      calculation: 'M = 25/10 + 25/50 = 2.5 + 0.5 = 3.0 kali; s = (10 x 50)/60 = 50/6 = 8.33 cm',
      answer: 'Perbesaran 3 kali pada jarak benda 8.33 cm'
    }
  },
  {
    id: 'lup-akomodasi-maks',
    category: 'Lup (Kaca Pembesar)',
    title: '10. Lup Berakomodasi Maksimum',
    latex: 'M = \\frac{S_n}{f} + 1, \\quad s = \\frac{f \\cdot S_n}{f + S_n}, \\quad s\' = -S_n',
    fallbackText: 'M = Sn / f + 1, s = (f * Sn) / (f + Sn)',
    variables: [
      { symbol: 'M', meaning: 'Perbesaran sudut maksimum lup', unit: 'kali (x)' },
      { symbol: 'Sn', meaning: 'Jarak baca dekat mata pengamat', unit: 'cm' },
      { symbol: 'f', meaning: 'Panjang fokus lensa lup', unit: 'cm' },
      { symbol: 's', meaning: 'Jarak benda (selalu s < f)', unit: 'cm' }
    ],
    signConvention: 'Bayangan maya terbentuk di titik dekat mata pengamat (s\' = -Sn). Benda harus diletakkan di antara titik fokus dan pusat optik lup.',
    explanation: 'Memberikan pembesaran sudut tertinggi dari sebuah lensa tunggal. Namun karena otot siliaris berkontraksi penuh untuk menebalkan lensa mata, pengamatan tidak dapat dipertahankan terlalu lama tanpa memicu kelelahan.',
    quickTrick: '⚡ M = (Sn/f) + 1. Cukup tambah 1 pada hasil perbesaran tanpa akomodasi! Benda dihitung dengan perkalian dibagi penjumlahan: (f · Sn)/(f + Sn).',
    exampleProblem: {
      question: 'Lup berfokus 5 cm digunakan mata normal (Sn = 25 cm) berakomodasi maksimum. Berapakah M dan letak benda?',
      given: 'f = 5 cm, Sn = 25 cm',
      formula: 'M = 25/5 + 1, s = (5 x 25)/(5 + 25)',
      calculation: 'M = 5 + 1 = 6.0 kali; s = 125 / 30 = 25/6 = 4.17 cm',
      answer: 'Perbesaran 6 kali pada jarak benda 4.17 cm'
    }
  }
];
