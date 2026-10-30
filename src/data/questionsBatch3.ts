import { Question } from '../types';

export const questionsBatch3: Question[] = [
  // 21. Teropong bintang mata berakomodasi maksimum (BS - Sangat Sulit)
  {
    id: 21,
    subtopicId: 'teropong-akomodasi-maks',
    subtopicTitle: 'Teropong Bintang Berakomodasi Maksimum',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Evaluasi Matematis Teropong Bintang Akomodasi Maksimum',
    stimulus: {
      type: 'scenario',
      text: 'Sebuah stasiun observasi langit menguji teropong bintang refraktor dengan spesifikasi f_ob = 90 cm dan f_ok = 6.0 cm. Seorang astrofisikawan dengan jarak baca dekat Sn = 30 cm mengamati gugus bintang Pleiades dengan mata berakomodasi maksimum.',
      diagram: {
        type: 'telescope',
        f1: 90,
        f2: 6.0,
        label: 'Diagram Teropong f_ob = 90 cm, f_ok = 6 cm, Sn = 30 cm'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 21 adalah Benar-Salah tingkat Sangat Sulit untuk menutup submateri Teropong Bintang.',
      part2Stimulus: 'Fokus objektif 90 cm, okuler 6 cm, dan Sn astrofisikawan adalah 30 cm. Pengamatan dilakukan dengan berakomodasi maksimum.',
      part3Question: 'Periksalah ketiga pernyataan mengenai persentase kenaikan perbesaran sudut, perubahan panjang tabung teropong, serta orientasi bayangan akhir bintang.',
      part4Hint: 'Bandingkan perbesaran tanpa akomodasi M1 = f_ob/f_ok dengan akomodasi maksimum M2 = (f_ob/f_ok)(1 + f_ok/Sn). Hitung selisih panjang tabung fisik.',
      part5Discussion: 'Perbesaran tanpa akomodasi = 90/6 = 15 kali. Dengan akomodasi maksimum = 15 x (1 + 6/30) = 15 x 1.2 = 18 kali. Kenaikan persentasenya adalah (18 - 15) / 15 = 20%. s_ok = (6 x 30)/(36) = 5 cm, jadi panjang tabung = 90 + 5 = 95 cm. Selisihnya memendek tepat 1.0 cm.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan analisis optika geometris!',
    statements: [
      {
        id: 1,
        text: 'Perbesaran sudut teropong meningkat tepat sebesar 20% ketika mata beralih dari tanpa akomodasi ke akomodasi maksimum.',
        isCorrect: true,
        explanation: 'M_relaks = 90/6 = 15x; M_maks = 15 * (1 + 6/30) = 15 * 1.2 = 18x. Persentase kenaikan = (18 - 15) / 15 * 100% = 20.0%.'
      },
      {
        id: 2,
        text: 'Panjang tabung teropong saat berakomodasi maksimum memendek tepat sebesar 1.0 cm dibandingkan saat tanpa akomodasi.',
        isCorrect: true,
        explanation: 'L_relaks = 90 + 6 = 96 cm; s_ok_maks = (6 * 30)/(6 + 30) = 180/36 = 5.0 cm -> L_maks = 90 + 5 = 95 cm. Pemendekan = 96 - 95 = 1.0 cm.'
      },
      {
        id: 3,
        text: 'Bayangan akhir bintang yang diamati melalui lensa okuler bersifat nyata dan tegak terhadap orientasi benda aslinya di langit.',
        isCorrect: false,
        explanation: 'Salah. Teropong bintang refraktor sederhana dengan dua lensa cembung menghasilkan bayangan akhir yang bersifat maya, terbalik terhadap objek aslinya, dan terletak di depan lensa okuler.'
      }
    ],
    discussion: {
      concept: 'Analisis Kuantitatif Komparatif Teropong Bintang Akomodasi Maksimum',
      known: [
        'Fokus objektif: f_{ob} = 90 cm',
        'Fokus okuler: f_{ok} = 6.0 cm',
        'Titik dekat astrofisikawan: S_n = 30 cm'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan',
      keyFormula: 'M_{relaks} = \\frac{f_{ob}}{f_{ok}}, \\quad M_{maks} = \\frac{f_{ob}}{f_{ok}} \\left(1 + \\frac{f_{ok}}{S_n}\\right), \\quad \\Delta L = f_{ok} - \\frac{f_{ok} \\cdot S_n}{f_{ok} + S_n}',
      formulaReason: 'Kondisi akomodasi maksimum meningkatkan daya pembesaran sudut dengan konsekuensi tabung memendek.',
      steps: [
        '1. Perbesaran: M_relaks = 90/6 = 15x. M_maks = 15 x (1 + 6/30) = 15 x 1.2 = 18x. Kenaikan: (18 - 15)/15 x 100% = 3/15 x 100% = 20%. (Pernyataan 1 BENAR)',
        '2. Panjang tabung: L_relaks = 90 + 6 = 96 cm. s_{ok,maks} = (6 x 30)/(6 + 30) = 180 / 36 = 5.0 cm. L_maks = 90 + 5 = 95 cm. Pemendekan: ΔL = 96 - 95 = 1.0 cm. (Pernyataan 2 BENAR)',
        '3. Sifat bayangan akhir lensa okuler teropong bintang adalah maya dan terbalik (inverted), bukan nyata dan tegak. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Akomodasi maksimum memberi perbesaran 18x (+20%) dengan memendekkan tabung 1.0 cm. Bayangan akhir tetap maya terbalik.',
      distractorAnalysis: 'Pernyataan 3 menguji konsep dasar sifat bayangan pada teropong astronomi.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Selisih Panjang Lensa Teropong',
      rule: 'ΔL = f_ok^2 / (f_ok + Sn) = 6^2 / (6 + 30) = 36 / 36 = 1.0 cm tepat!',
      step: 'Kenaikan M = (f_ok / Sn) x 100% = (6 / 30) x 100% = 20%!',
      formula: '\\%\\Delta M = \\frac{f_{ok}}{S_n} \\times 100\\%'
    }
  },

  // 22. Lup mata tanpa akomodasi (PG - Menengah)
  {
    id: 22,
    subtopicId: 'lup-tanpa-akomodasi',
    subtopicTitle: 'Lup Tanpa Akomodasi',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Pemeriksaan Perangko Kuno dengan Kaca Pembesar Relaks',
    stimulus: {
      type: 'scenario',
      text: 'Seorang filatelis senior sedang memeriksa keaslian perangko kuno langka menggunakan lup (kaca pembesar) yang memiliki kekuatan optik P = +12.5 Dioptri. Filatelis memiliki mata normal dengan jarak baca dekat Sn = 25 cm. Agar matanya tidak cepat lelah saat memeriksa detail serat kertas selama 2 jam, ia mengamati melalui lup tanpa akomodasi.',
      diagram: {
        type: 'lup',
        f1: 8.0,
        s: 8.0,
        label: 'Diagram Lup Tanpa Akomodasi (s = f = 8 cm, Bayangan di Tak Hingga)'
      }
    },
    narration: {
      part1Intro: 'Selamat datang di Submateri 8: Lup (Kaca Pembesar) Tanpa Akomodasi. Mari kita telaah pemeriksaan perangko langka bersama Mister Jo!',
      part2Stimulus: 'Lup memiliki daya optik positif 12.5 Dioptri. Pengamat bermata normal dengan Sn = 25 cm dan mengamati tanpa akomodasi.',
      part3Question: 'Di manakah perangko harus diletakkan di depan lup dan berapakah perbesaran sudut yang dihasilkan?',
      part4Hint: 'Untuk mata tanpa akomodasi, bayangan harus jatuh di tak hingga, yang berarti benda harus diletakkan tepat di titik fokus lup. Perbesaran sudutnya adalah Sn dibagi f.',
      part5Discussion: 'Fokus lup f = 100 / P = 100 / 12.5 = 8 cm. Agar mata rileks tanpa akomodasi, benda harus diletakkan tepat pada jarak s = f = 8 cm. Perbesaran sudut M = Sn / f = 25 / 8 = 3.125 kali.'
    },
    questionText: 'Berapakah perbesaran sudut yang diperoleh dan pada jarak berapakah perangko harus diletakkan di depan lup agar pengamatan berlangsung tanpa akomodasi?',
    options: [
      { key: 'A', text: '2.50 kali pada jarak s = 10.0 cm' },
      { key: 'B', text: '3.125 kali pada jarak s = 8.0 cm' },
      { key: 'C', text: '4.125 kali pada jarak s = 8.0 cm' },
      { key: 'D', text: '5.00 kali pada jarak s = 5.0 cm' },
      { key: 'E', text: '3.125 kali pada jarak s = 6.25 cm' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Perbesaran Sudut Lup pada Pengamatan Tanpa Akomodasi',
      known: [
        'Kekuatan optik lup: P = +12.5 Dioptri',
        'Jarak baca normal: S_n = 25 cm',
        'Kondisi: tanpa akomodasi (s\' = ∞)'
      ],
      asked: 'Jarak benda (s) dan perbesaran sudut (M)',
      keyFormula: 'f = \\frac{100}{P\\text{ (D)}}, \\quad s = f, \\quad M = \\frac{S_n}{f}',
      formulaReason: 'Pada pengamatan tanpa akomodasi, berkas sinar yang keluar dari lup harus sejajar sehingga benda wajib diletakkan tepat di titik fokus lensa lup.',
      steps: [
        '1. Menghitung panjang fokus lup: f = 100 / 12.5 = 8.0 cm.',
        '2. Syarat mata tanpa akomodasi: bayangan s\' = -∞, sehingga 1/s = 1/f - 1/(-∞) = 1/f -> s = f = 8.0 cm.',
        '3. Menghitung perbesaran sudut: M = S_n / f = 25 / 8 = 3.125 kali.'
      ],
      finalResult: 'M = 3.125 kali dan s = 8.0 cm',
      interpretation: 'Perangko harus diletakkan tepat 8.0 cm di depan lup. Sinar keluar sejajar ke mata, memungkinkan filatelis memeriksa serat perangko dengan perbesaran 3.125x tanpa tegang otot siliaris.',
      distractorAnalysis: 'Opsi C memakai rumus akomodasi maksimum (M = Sn/f + 1 = 4.125x) pada jarak s = 8 cm. Opsi E salah pada letak benda.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Lup Tanpa Akomodasi',
      rule: 'M = Sn · P / 100. Langsung kalikan jarak baca normal dengan kekuatan dioptri dibagi 100!',
      step: 'M = (25 x 12.5) / 100 = 312.5 / 100 = 3.125x! Benda di s = f = 100/12.5 = 8 cm!',
      formula: 'M = \\frac{S_n \\cdot P}{100}'
    }
  },

  // 23. Lup mata tanpa akomodasi (PGK - Sulit)
  {
    id: 23,
    subtopicId: 'lup-tanpa-akomodasi',
    subtopicTitle: 'Lup Tanpa Akomodasi',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Pengujian Mutu Berlian Menggunakan Lup Tanpa Akomodasi',
    stimulus: {
      type: 'scenario',
      text: 'Seorang gemologis ahli memeriksa kemurnian dan cacat inklusi sebuah berlian menggunakan kaca pembesar (lup) dengan panjang fokus f = 5.0 cm. Gemologis memiliki mata normal dengan titik dekat Sn = 25 cm. Pengamatan dilakukan dalam mode relaksasi mata penuh (tanpa akomodasi).',
      diagram: {
        type: 'lup',
        f1: 5.0,
        s: 5.0,
        label: 'Diagram Sinar Lup f = 5 cm Tanpa Akomodasi'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 23 adalah Pilihan Ganda Kompleks. Kita menyelidiki pengujian mutu berlian menggunakan lup tanpa akomodasi.',
      part2Stimulus: 'Lup memiliki fokus 5 cm. Gemologis memiliki titik dekat normal 25 cm dan mengamati tanpa akomodasi.',
      part3Question: 'Pilihlah semua pernyataan yang benar mengenai posisi letak berlian, perbesaran sudut, kondisi otot siliaris mata, dan sifat berkas cahaya yang keluar dari lup.',
      part4Hint: 'Ingat bahwa pada kondisi tanpa akomodasi, bayangan terbentuk di tak hingga, berkas cahaya yang keluar berupa sinar sejajar, dan otot siliaris berada dalam relaksasi maksimum.',
      part5Discussion: 'Berlian harus di titik fokus yaitu 5 cm. Perbesaran sudut M = 25 / 5 = 5 kali. Berkas sinar yang keluar dari lup sejajar. Otot siliaris mata rileks penuh. Bayangan berada di tak hingga, bukan di 25 cm.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai pengamatan berlian tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Berlian harus diletakkan tepat pada jarak 5.0 cm di depan lensa lup.' },
      { key: 'B', text: 'Perbesaran sudut yang diperoleh gemologis adalah 5.0 kali.' },
      { key: 'C', text: 'Otot siliaris mata gemologis berada dalam kondisi relaksasi maksimum (tidak berkontraksi).' },
      { key: 'D', text: 'Berkas sinar cahaya yang keluar dari lensa lup menuju pupil mata merupakan berkas sinar sejajar.' },
      { key: 'E', text: 'Bayangan akhir berlian terbentuk pada jarak 25 cm di depan lensa lup.' }
    ],
    correctKeys: ['A', 'B', 'C', 'D'],
    discussion: {
      concept: 'Fisika Optik Lup dalam Kondisi Pengamatan Tanpa Akomodasi',
      known: [
        'Fokus lup: f = 5.0 cm',
        'Titik dekat gemologis: S_n = 25 cm',
        'Kondisi: mata tanpa akomodasi'
      ],
      asked: 'Evaluasi opsi A, B, C, D, E',
      keyFormula: 's = f, \\quad M = \\frac{S_n}{f}, \\quad s\' = -\\infty',
      formulaReason: 'Kondisi tanpa akomodasi berarti mata menangkap berkas sinar sejajar sehingga lensa mata berdaya bias minimum (otot siliaris relaksasi).',
      steps: [
        '1. Agar sinar sejajar, benda diletakkan di fokus: s = f = 5.0 cm. (Pernyataan A BENAR)',
        '2. Perbesaran sudut: M = S_n / f = 25 / 5.0 = 5.0 kali. (Pernyataan B BENAR)',
        '3. Saat melihat berkas sejajar, lensa kristalina mata berada dalam bentuk paling pipih karena otot siliaris relaks penuh. (Pernyataan C BENAR)',
        '4. Sinar dari benda di fokus dibiaskan keluar oleh lensa cembung sejajar sumbu optik menuju mata. (Pernyataan D BENAR)',
        '5. Bayangan berada di tak hingga (∞), bukan di 25 cm (25 cm adalah kondisi akomodasi maksimum). (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, C, dan D adalah BENAR.',
      interpretation: 'Pengamatan lup tanpa akomodasi sangat ideal untuk pekerjaan inspeksi berlian berdurasi lama karena kenyamanan visual maksimal dari berkas sinar sejajar.',
      distractorAnalysis: 'Pernyataan E salah karena menyamakan letak bayangan tanpa akomodasi dengan titik dekat Sn.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: 4 Pilar Lup Tanpa Akomodasi',
      rule: 'Ingat 4 pilar: 1. Benda di f (s = f), 2. Bayangan di ∞, 3. Sinar keluar sejajar, 4. Otot siliaris relaksasi total!',
      step: 'M = Sn / f = 25 / 5 = 5x.',
      formula: 'M = \\frac{S_n}{f}'
    }
  },

  // 24. Lup mata tanpa akomodasi (BS - Sangat Sulit)
  {
    id: 24,
    subtopicId: 'lup-tanpa-akomodasi',
    subtopicTitle: 'Lup Tanpa Akomodasi',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Pengamatan Lup Relaks oleh Pengamat Normal vs Miopi',
    stimulus: {
      type: 'scenario',
      text: 'Dua orang analis forensik, Pengamat A (mata normal, Sn = 25 cm, PR = ∞) dan Pengamat B (miopi tanpa kacamata dengan Sn = 20 cm, PR = 50 cm), menggunakan lup yang sama dengan panjang fokus f = 4.0 cm untuk mengamati serat kain tanpa akomodasi.',
      diagram: {
        type: 'lup',
        f1: 4.0,
        label: 'Diagram Komparasi Lup Pengamat Normal vs Miopi'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 24 adalah tipe Benar-Salah tingkat Sangat Sulit untuk menutup submateri Lup Tanpa Akomodasi.',
      part2Stimulus: 'Pengamat A bermata normal dengan Sn 25 cm dan PR tak terhingga. Pengamat B menderita miopi dengan Sn 20 cm dan titik jauh PR 50 cm. Lup memiliki fokus 4 cm.',
      part3Question: 'Analisis ketiga pernyataan mengenai letak benda bagi pengamat normal, letak benda bagi pengamat miopi, serta perbandingan perbesaran sudut keduanya.',
      part4Hint: 'Hati-hati: agar pengamat miopi melihat tanpa akomodasi, bayangan lup harus jatuh di titik jauhnya yaitu s aksen sama dengan minus 50 cm, bukan di tak hingga!',
      part5Discussion: 'Untuk Pengamat A, s = 4 cm dan M = 25/4 = 6.25 kali. Untuk Pengamat B miopi, bayangan harus di PR = -50 cm. 1/s = 1/4 + 1/50 = 27/100, sehingga s = 100/27 = 3.70 cm. Perbesaran sudut Pengamat B adalah Sn / s = 20 / (100/27) = 5.4 kali. Perbesaran Pengamat B (5.4x) lebih kecil daripada Pengamat A (6.25x).'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan optika mata miopi menggunakan lup!',
    statements: [
      {
        id: 1,
        text: 'Bagi Pengamat A (normal), serat kain harus diletakkan tepat di fokus lup (s = 4.0 cm) dan menghasilkan perbesaran sudut 6.25 kali.',
        isCorrect: true,
        explanation: 'Mata normal tanpa akomodasi: s = f = 4.0 cm. M_A = Sn / f = 25 / 4.0 = 6.25 kali.'
      },
      {
        id: 2,
        text: 'Agar Pengamat B (miopi) dapat melihat serat kain tanpa akomodasi sama sekali, serat kain harus diletakkan pada jarak sekitar 3.70 cm di depan lup.',
        isCorrect: true,
        explanation: 'Mata miopi melihat tanpa akomodasi jika bayangan berada di titik jauhnya: s\' = -PR = -50 cm. 1/s = 1/f - 1/s\' = 1/4 - 1/(-50) = 25/100 + 2/100 = 27/100 -> s = 100/27 ≈ 3.704 cm.'
      },
      {
        id: 3,
        text: 'Perbesaran sudut yang dirasakan oleh Pengamat B (miopi) bernilai lebih besar daripada yang diperoleh Pengamat A (normal).',
        isCorrect: false,
        explanation: 'Salah. Perbesaran sudut pengamat B adalah M_B = Sn_B / s_B = 20 / (100/27) = 5.40 kali. Nilai 5.40x lebih kecil dari perbesaran pengamat A (6.25x).'
      }
    ],
    discussion: {
      concept: 'Koreksi Posisi Benda Lup Tanpa Akomodasi untuk Mata Miopi',
      known: [
        'Fokus lup: f = 4.0 cm',
        'Pengamat A (normal): S_{nA} = 25 cm, PR_A = ∞',
        'Pengamat B (miopi): S_{nB} = 20 cm, PR_B = 50 cm'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan',
      keyFormula: 'M_A = \\frac{S_{nA}}{f}, \\quad \\frac{1}{s_B} = \\frac{1}{f} + \\frac{1}{PR_B}, \\quad M_B = \\frac{S_{nB}}{s_B}',
      formulaReason: 'Kondisi tanpa akomodasi bagi penderita miopi adalah bayangan akhir harus tepat berada di titik jauh matanya (s\' = -PR).',
      steps: [
        '1. Pengamat A: s_A = 4.0 cm, M_A = 25 / 4 = 6.25 kali. (Pernyataan 1 BENAR)',
        '2. Pengamat B: s\'_B = -50 cm. 1/s_B = 1/4 - 1/(-50) = 1/4 + 1/50 = 27/100 cm^-1 -> s_B = 100/27 ≈ 3.704 cm ≈ 3.70 cm. (Pernyataan 2 BENAR)',
        '3. Perbesaran sudut B: M_B = S_{nB} / s_B = 20 / (100/27) = 20 x 27 / 100 = 540 / 100 = 5.40 kali. Karena 5.40 < 6.25, perbesaran B lebih kecil dari A. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Pengamat miopi yang melepas kacamata harus mendekatkan lup ke objek (dari 4.0 cm menjadi 3.70 cm) agar bayangan jatuh di titik jauhnya, dan memperoleh perbesaran sudut 5.4x.',
      distractorAnalysis: 'Pernyataan 3 menjebak siswa yang mengira jarak benda yang lebih dekat otomatis menghasilkan perbesaran sudut yang lebih besar tanpa memperhitungkan Sn mata miopi.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Perbesaran Lup Mata Miopi',
      rule: 'M_miopi = Sn · (1/f + 1/PR). Langsung hitung!',
      step: 'M_B = 20 · (1/4 + 1/50) = 20 · (27/100) = 540 / 100 = 5.4x!',
      formula: 'M = S_n \\left(\\frac{1}{f} + \\frac{1}{PR}\\right)'
    }
  },

  // 25. Lup mata berakomodasi pada jarak tertentu (PG - Menengah)
  {
    id: 25,
    subtopicId: 'lup-jarak-tertentu',
    subtopicTitle: 'Lup Berakomodasi pada Jarak Tertentu',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Pengamatan Kaligrafi Mikro dengan Lup Berakomodasi pada Jarak 50 cm',
    stimulus: {
      type: 'scenario',
      text: 'Seorang kurator museum mengamati guratan kaligrafi mikro menggunakan lup dengan panjang fokus f = 10.0 cm. Kurator memiliki mata normal dengan jarak baca baku Sn = 25 cm. Selama pengamatan, lup ditempelkan dekat mata dan kurator mengatur fokus sedemikian rupa sehingga bayangan maya kaligrafi terbentuk pada jarak x = 50 cm di depan matanya (berakomodasi pada jarak 50 cm).',
      diagram: {
        type: 'lup',
        f1: 10.0,
        sPrime: -50.0,
        label: 'Diagram Lup Berakomodasi pada Jarak x = 50 cm (s\' = -50 cm)'
      }
    },
    narration: {
      part1Intro: 'Sekarang kita masuki Submateri 9: Lup Berakomodasi pada Jarak Tertentu. Mari kita telaah kasus kurator museum bersama Mister Jo!',
      part2Stimulus: 'Lup berfokus 10 cm, jarak baca normal 25 cm, dan kurator mengatur bayangan agar terbentuk pada jarak 50 cm di depan matanya.',
      part3Question: 'Di manakah kaligrafi mikro harus diletakkan di depan lup dan berapakah perbesaran sudut yang dihasilkan?',
      part4Hint: 'Gunakan persamaan lensa tipis dengan s aksen sama dengan minus 50 cm untuk mencari s. Perbesaran sudut dihitung dengan rumus M = Sn / s atau Sn/f + Sn/x.',
      part5Discussion: '1/s = 1/f dikurang 1/s aksen = 1/10 dikurang 1/(-50) = 1/10 + 1/50 = 6/50 = 3/25. Jadi s = 25/3 = 8.33 cm. Perbesaran sudut M = Sn / s = 25 / (25/3) = 3 kali. Atau rumus M = 25/10 + 25/50 = 2.5 + 0.5 = 3 kali.'
    },
    questionText: 'Pada jarak berapakah kaligrafi harus diletakkan di depan lup dan berapakah perbesaran sudut yang diperoleh kurator?',
    options: [
      { key: 'A', text: 's = 10.0 cm dan perbesaran M = 2.50 kali' },
      { key: 'B', text: 's = 8.33 cm dan perbesaran M = 3.00 kali' },
      { key: 'C', text: 's = 8.33 cm dan perbesaran M = 3.50 kali' },
      { key: 'D', text: 's = 6.25 cm dan perbesaran M = 4.00 kali' },
      { key: 'E', text: 's = 7.14 cm dan perbesaran M = 3.00 kali' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Perbesaran Sudut Lup Berakomodasi pada Jarak Tertentu (x)',
      known: [
        'Fokus lup: f = 10.0 cm',
        'Jarak baca normal: S_n = 25 cm',
        'Jarak bayangan maya (akomodasi pada jarak x): s\' = -x = -50 cm'
      ],
      asked: 'Jarak benda (s) dan perbesaran sudut (M)',
      keyFormula: '\\frac{1}{s} = \\frac{1}{f} - \\frac{1}{s\'}, \\quad M = \\frac{S_n}{s} = \\frac{S_n}{f} + \\frac{S_n}{x}',
      formulaReason: 'Lup ditempelkan ke mata, sehingga jarak bayangan ke lensa sama dengan jarak akomodasi mata pasien.',
      steps: [
        '1. Menghitung jarak benda s: 1/s = 1/10 - 1/(-50) = 1/10 + 1/50 = (5 + 1)/50 = 6/50 = 3/25 cm^-1 -> s = 25/3 ≈ 8.333 cm ≈ 8.33 cm.',
        '2. Menghitung perbesaran sudut M: M = S_n / s = 25 / (25/3) = 25 x (3/25) = 3.00 kali.',
        'Atau rumus langsung: M = S_n/f + S_n/x = 25/10 + 25/50 = 2.5 + 0.5 = 3.00 kali.'
      ],
      finalResult: 's = 8.33 cm dan M = 3.00 kali',
      interpretation: 'Dengan mengatur akomodasi pada jarak 50 cm, perbesaran yang didapat adalah 3.0x (berada di antara tanpa akomodasi 2.5x dan akomodasi maksimum 3.5x), memberikan kompromi kenyamanan dan perbesaran yang seimbang.',
      distractorAnalysis: 'Opsi A adalah kondisi tanpa akomodasi (s = 10 cm, M = 2.5x). Opsi C keliru menjumlahkan M akomodasi maksimum.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Langsung Perbesaran Jarak Tertentu',
      rule: 'M = (Sn / f) + (Sn / x). Hitung dua suku pembagian secara mandiri lalu jumlahkan!',
      step: 'M = (25 / 10) + (25 / 50) = 2.5 + 0.5 = 3.0 kali! s = Sn / M = 25 / 3 = 8.33 cm!',
      formula: 'M = \\frac{S_n}{f} + \\frac{S_n}{x}'
    }
  },

  // 26. Lup mata berakomodasi pada jarak tertentu (PGK - Sulit)
  {
    id: 26,
    subtopicId: 'lup-jarak-tertentu',
    subtopicTitle: 'Lup Berakomodasi pada Jarak Tertentu',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Inspeksi Jalur Sirkuit Terpadu (PCB) Berakomodasi pada 60 cm',
    stimulus: {
      type: 'scenario',
      text: 'Seorang teknisi elektronika memeriksa sambungan solder mikro pada papan sirkuit (PCB) menggunakan lup berfokus f = 6.0 cm. Teknisi memiliki titik dekat Sn = 30 cm. Selama bekerja, ia mengarahkan posisi lup sehingga bayangan maya PCB tampak tajam pada jarak x = 60 cm di depan matanya (s\' = -60 cm).',
      diagram: {
        type: 'lup',
        f1: 6.0,
        sPrime: -60.0,
        label: 'Diagram Lup f = 6 cm, Bayangan s\' = -60 cm, Sn = 30 cm'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 26 adalah Pilihan Ganda Kompleks. Kita menyelidiki inspeksi papan PCB menggunakan lup yang berakomodasi pada jarak tertentu.',
      part2Stimulus: 'Fokus lup 6 cm, titik dekat teknisi 30 cm, dan bayangan diatur jatuh pada jarak 60 cm di depan lensa.',
      part3Question: 'Pilihlah seluruh pernyataan yang benar mengenai jarak benda, perbesaran sudut, perbesaran linier, dan sifat bayangan.',
      part4Hint: 'Gunakan persamaan lensa Gauss untuk mencari jarak benda s. Perhatikan perbedaan rumus perbesaran sudut lup M = Sn/s dengan perbesaran linier m = |s\'/s|.',
      part5Discussion: '1/s = 1/6 + 1/60 = 11/60, sehingga s = 60/11 atau 5.45 cm. Perbesaran sudut M = Sn/f + Sn/x = 30/6 + 30/60 = 5 + 0.5 = 5.5 kali. Perbesaran linier m = s aksen per s = 60 / (60/11) = 11 kali. Bayangan bersifat maya, tegak, dan diperbesar.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai sistem optik inspeksi teknisi tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Objek PCB harus diletakkan pada jarak 60/11 cm (sekitar 5.45 cm) di depan lensa lup.' },
      { key: 'B', text: 'Perbesaran sudut yang dialami mata teknisi adalah 5.5 kali.' },
      { key: 'C', text: 'Perbesaran linier bayangan geometris yang dibentuk oleh lensa lup adalah 11.0 kali.' },
      { key: 'D', text: 'Perbesaran sudut pada kondisi ini lebih kecil daripada perbesaran sudut saat mata tanpa akomodasi.' },
      { key: 'E', text: 'Bayangan PCB yang diamati teknisi bersifat nyata, tegak, dan terletak di belakang lensa.' }
    ],
    correctKeys: ['A', 'B', 'C'],
    discussion: {
      concept: 'Distingsi Perbesaran Sudut dan Perbesaran Linier Lup Berakomodasi Jarak Tertentu',
      known: [
        'Fokus lup: f = 6.0 cm',
        'Titik dekat teknisi: S_n = 30 cm',
        'Jarak bayangan maya: s\' = -x = -60 cm'
      ],
      asked: 'Evaluasi kebenaran opsi A, B, C, D, E',
      keyFormula: '\\frac{1}{s} = \\frac{1}{f} - \\frac{1}{s\'}, \\quad M = \\frac{S_n}{s} = \\frac{S_n}{f} + \\frac{S_n}{x}, \\quad m = \\left|\\frac{s\'}{s}\\right|',
      formulaReason: 'Perbesaran sudut membandingkan sudut penglihatan melalui alat dengan tanpa alat pada Sn, sedangkan perbesaran linier adalah rasio tinggi bayangan terhadap tinggi benda.',
      steps: [
        '1. Menghitung s: 1/s = 1/6 - 1/(-60) = 1/6 + 1/60 = (10 + 1)/60 = 11/60 cm^-1 -> s = 60/11 cm ≈ 5.455 cm. (Pernyataan A BENAR)',
        '2. Perbesaran sudut: M = S_n / s = 30 / (60/11) = 30 x (11/60) = 11 / 2 = 5.5 kali. (Pernyataan B BENAR)',
        '3. Perbesaran linier: m = |s\' / s| = |-60 / (60/11)| = 60 x (11/60) = 11.0 kali. (Pernyataan C BENAR)',
        '4. Perbesaran sudut tanpa akomodasi: M_relaks = S_n / f = 30 / 6 = 5.0 kali. Karena 5.5 > 5.0, perbesaran akomodasi ini LEBIH BESAR dari tanpa akomodasi. (Pernyataan D SALAH)',
        '5. Bayangan lup bersifat maya, tegak, dan di depan lensa (s\' negatif). (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, dan C adalah BENAR.',
      interpretation: 'Soal ini memperjelas perbedaan esensial antara perbesaran sudut (5.5x) dan perbesaran linier bayangan (11x), yang kerap membingungkan siswa pada ujian TKA.',
      distractorAnalysis: 'Pernyataan D salah karena 5.5x > 5.0x. Pernyataan E salah pada sifat bayangan (seharusnya maya).'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Perbesaran Sudut vs Linier',
      rule: 'M_sudut = Sn/f + Sn/x = 30/6 + 30/60 = 5.5x. m_linier = x/s = 1 + x/f = 1 + 60/6 = 11x!',
      step: 'm_linier = 1 + x/f = 1 + 10 = 11 kali!',
      formula: 'm_{linier} = 1 + \\frac{x}{f}'
    }
  },

  // 27. Lup mata berakomodasi pada jarak tertentu (BS - Sangat Sulit)
  {
    id: 27,
    subtopicId: 'lup-jarak-tertentu',
    subtopicTitle: 'Lup Berakomodasi pada Jarak Tertentu',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Transisi Dinamis Akomodasi Lup dari Jarak 100 cm ke 50 cm',
    stimulus: {
      type: 'table',
      text: 'Seorang peneliti optometri melakukan eksperimen pelacakan posisi benda dan perbesaran sudut lup berfokus f = 5.0 cm pada subjek bermata normal (Sn = 25 cm). Subjek diminta mengubah jarak bayangan maya lup dari x_1 = 100 cm ke x_2 = 50 cm di depan matanya.',
      tableData: {
        caption: 'Tabel Eksperimen Transisi Jarak Akomodasi Lup',
        headers: ['Kondisi', 'Jarak Akomodasi (x)', 'Jarak Benda (s)', 'Perbesaran Sudut (M)'],
        rows: [
          ['Kondisi 1', '100 cm', '100/21 cm (≈ 4.76 cm)', '5.25 kali'],
          ['Kondisi 2', '50 cm', '50/11 cm (≈ 4.55 cm)', '5.50 kali'],
          ['Perubahan (Δ)', 'Mendekat 50 cm', 'Bergeser Δs', 'Meningkat +0.25 kali']
        ]
      },
      diagram: {
        type: 'lup',
        f1: 5.0,
        label: 'Diagram Pergeseran Benda pada Transisi Jarak Akomodasi Lup'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 27 adalah tipe Benar-Salah Tingkat Sangat Sulit untuk menutup submateri lup berakomodasi jarak tertentu.',
      part2Stimulus: 'Lup berfokus 5 cm, Sn = 25 cm. Jarak bayangan maya digeser dari 100 cm menjadi 50 cm di depan mata.',
      part3Question: 'Periksalah ketiga pernyataan mengenai kenaikan perbesaran sudut, besar pergeseran benda ke arah lensa, dan kondisi tegangan otot siliaris.',
      part4Hint: 'Hitung perbesaran M1 dan M2 menggunakan rumus Sn/f + Sn/x. Hitung jarak s1 dan s2 lalu cari selisih pergeserannya.',
      part5Discussion: 'M1 = 25/5 + 25/100 = 5.25 kali. M2 = 25/5 + 25/50 = 5.50 kali. Selisih perbesaran adalah kenaikan 0.25 kali. s1 = 100/21 = 4.762 cm, s2 = 50/11 = 4.545 cm. Selisih pergeseran benda = 4.762 dikurang 4.545 = 0.217 cm atau sekitar 0.22 cm mendekati lensa. Pada jarak 50 cm, otot siliaris berakomodasi sebagian, bukan istirahat total.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan dinamika optis lup!',
    statements: [
      {
        id: 1,
        text: 'Ketika jarak bayangan diubah dari 100 cm menjadi 50 cm, perbesaran sudut lup meningkat dari 5.25 kali menjadi 5.50 kali.',
        isCorrect: true,
        explanation: 'M_1 = 25/5 + 25/100 = 5.0 + 0.25 = 5.25x; M_2 = 25/5 + 25/50 = 5.0 + 0.50 = 5.50x. Keduanya tepat.'
      },
      {
        id: 2,
        text: 'Untuk mengubah jarak bayangan dari 100 cm menjadi 50 cm, benda harus digeser mendekati lensa lup sekitar 0.22 cm.',
        isCorrect: true,
        explanation: 's_1 = 100/21 ≈ 4.762 cm; s_2 = 50/11 ≈ 4.545 cm. Pergeseran Δs = 4.762 - 4.545 = 0.217 cm ≈ 0.22 cm mendekati lup.'
      },
      {
        id: 3,
        text: 'Pada saat bayangan berada di jarak 50 cm, otot siliaris mata berada dalam kondisi relaksasi total tanpa tegangan akomodasi.',
        isCorrect: false,
        explanation: 'Salah. Otot siliaris hanya berelaksasi total saat melihat bayangan di tak terhingga (∞). Pada jarak 50 cm, otot siliaris berkontraksi sebagian (berakomodasi parsial).'
      }
    ],
    discussion: {
      concept: 'Pergeseran Posisi Benda dan Akomodasi Dinamis Lup',
      known: [
        'Fokus lup: f = 5.0 cm',
        'Titik dekat mata: S_n = 25 cm',
        'Kondisi 1: s\'_1 = -100 cm',
        'Kondisi 2: s\'_2 = -50 cm'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan',
      keyFormula: 'M = \\frac{S_n}{f} + \\frac{S_n}{x}, \\quad s = \\frac{f \\cdot x}{x + f}, \\quad \\Delta s = s_1 - s_2',
      formulaReason: 'Mendekatkan bayangan dari 100 cm ke 50 cm membutuhkan pergeseran benda lebih dekat ke lensa lup.',
      steps: [
        '1. Perbesaran: M_1 = 25/5 + 25/100 = 5.25x. M_2 = 25/5 + 25/50 = 5.50x. (Pernyataan 1 BENAR)',
        '2. Posisi benda: s_1 = (5 x 100)/(100 + 5) = 500 / 105 = 100/21 ≈ 4.762 cm. s_2 = (5 x 50)/(50 + 5) = 250 / 55 = 50/11 ≈ 4.545 cm. Selisih pergeseran: Δs = 4.762 - 4.545 = 0.217 cm ≈ 0.22 cm mendekati lensa. (Pernyataan 2 BENAR)',
        '3. Otot siliaris berakomodasi parsial sebesar 1/0.50 = +2.0 Dioptri. Relaksasi total hanya terjadi pada s\' = ∞. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Mendekatkan bayangan menghasilkan perbesaran lebih besar dengan menggeser benda 0.22 cm mendekat, namun menuntut daya akomodasi mata parsial (+2 D).',
      distractorAnalysis: 'Pernyataan 3 menguji pemahaman fisiologi akomodasi mata pada jarak tertentu.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Pergeseran Benda Lup',
      rule: 'Δs = f^2 · (x1 - x2) / ((x1 + f)(x2 + f))!',
      step: 'Δs = 25 · 50 / (105 · 55) = 1250 / 5775 ≈ 0.216 cm ≈ 0.22 cm.',
      formula: '\\Delta s = \\frac{f^2 \\cdot (x_1 - x_2)}{(x_1 + f)(x_2 + f)}'
    }
  },

  // 28. Lup mata berakomodasi maksimum (PG - Menengah)
  {
    id: 28,
    subtopicId: 'lup-akomodasi-maks',
    subtopicTitle: 'Lup Berakomodasi Maksimum',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Pengamatan Anatomi Serangga dengan Lup Berakomodasi Maksimum',
    stimulus: {
      type: 'scenario',
      text: 'Seorang entomolog muda sedang mengamati struktur antena semut menggunakan lup berfokus f = 5.0 cm. Entomolog memiliki mata normal dengan jarak baca dekat Sn = 25 cm. Pengamatan dilakukan dengan mata berakomodasi maksimum untuk mendapatkan perbesaran sudut sebesar-besarnya.',
      diagram: {
        type: 'lup',
        f1: 5.0,
        s: 4.17,
        sPrime: -25.0,
        label: 'Diagram Lup Akomodasi Maksimum (s\' = -25 cm, s = 4.17 cm)'
      }
    },
    narration: {
      part1Intro: 'Kita masuki submateri penutup ke-10: Lup Berakomodasi Maksimum bersama Mister Jo.',
      part2Stimulus: 'Lup berfokus 5 cm dan jarak baca normal 25 cm. Pengamat berakomodasi maksimum sehingga bayangan maya terbentuk tepat di titik dekatnya 25 cm.',
      part3Question: 'Berapakah perbesaran sudut lup dan di manakah semut harus diletakkan di depan lensa?',
      part4Hint: 'Gunakan formula akomodasi maksimum: perbesaran M sama dengan 1 ditambah Sn dibagi f. Dan cari jarak benda s dengan s aksen sama dengan minus 25 cm.',
      part5Discussion: 'Perbesaran sudut M = 1 + Sn/f = 1 + 25/5 = 1 + 5 = 6 kali. Jarak benda 1/s = 1/5 - 1/(-25) = 1/5 + 1/25 = 6/25, sehingga s = 25/6 = 4.17 cm.'
    },
    questionText: 'Berapakah perbesaran sudut yang diperoleh entomolog dan pada jarak berapakah semut harus diletakkan di depan lup?',
    options: [
      { key: 'A', text: '5.00 kali pada jarak s = 5.00 cm' },
      { key: 'B', text: '6.00 kali pada jarak s = 4.17 cm' },
      { key: 'C', text: '6.00 kali pada jarak s = 5.00 cm' },
      { key: 'D', text: '7.00 kali pada jarak s = 3.57 cm' },
      { key: 'E', text: '4.00 kali pada jarak s = 4.17 cm' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Perbesaran Sudut dan Posisi Benda Lup Berakomodasi Maksimum',
      known: [
        'Fokus lup: f = 5.0 cm',
        'Titik dekat pengamat: S_n = 25 cm',
        'Kondisi: berakomodasi maksimum (s\' = -S_n = -25 cm)'
      ],
      asked: 'Perbesaran sudut (M) dan jarak benda (s)',
      keyFormula: 'M = \\frac{S_n}{f} + 1, \\quad \\frac{1}{s} = \\frac{1}{f} + \\frac{1}{S_n}',
      formulaReason: 'Pada akomodasi maksimum, bayangan maya jatuh di titik dekat mata (s\' = -Sn), menghasilkan perbesaran sudut terbesar yang mungkin dicapai lup.',
      steps: [
        '1. Menghitung perbesaran sudut: M = S_n / f + 1 = 25 / 5 + 1 = 5 + 1 = 6.00 kali.',
        '2. Menghitung jarak benda: 1/s = 1/f - 1/s\' = 1/5 - 1/(-25) = 1/5 + 1/25 = 6/25 cm^-1 -> s = 25/6 ≈ 4.167 cm ≈ 4.17 cm.'
      ],
      finalResult: 'M = 6.00 kali dan s = 4.17 cm',
      interpretation: 'Untuk mendapatkan perbesaran maksimal 6x, semut harus digeser mendekati lup menjadi 4.17 cm (lebih dekat daripada jarak fokus 5 cm), dengan konsekuensi mata lekas lelah.',
      distractorAnalysis: 'Opsi A adalah kondisi tanpa akomodasi (M = 5x, s = 5 cm). Opsi C salah menempatkan benda di fokus pada akomodasi maksimum.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Lup Akomodasi Maksimum',
      rule: 'M = (Sn / f) + 1. s = (f · Sn) / (f + Sn). Langsung substitusi!',
      step: 'M = 25/5 + 1 = 6x. s = (5 · 25) / (5 + 25) = 125 / 30 = 25/6 = 4.17 cm!',
      formula: 's = \\frac{f \\cdot S_n}{f + S_n}'
    }
  },

  // 29. Lup mata berakomodasi maksimum (PGK - Sulit)
  {
    id: 29,
    subtopicId: 'lup-akomodasi-maks',
    subtopicTitle: 'Lup Berakomodasi Maksimum',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Analisis Optika Gemologi: Lup Daya Tinggi Akomodasi Maksimum',
    stimulus: {
      type: 'experiment',
      text: 'Seorang ahli batu mulia mengamati inklusi jarum rutil pada batu safir menggunakan lup berkekuatan tinggi P = +20 Dioptri. Ahli memiliki jarak baca dekat normal Sn = 25 cm. Pengamatan mula-mula dilakukan dengan mata berakomodasi maksimum, kemudian ia ingin mengistirahatkan matanya dengan beralih ke mode pengamatan tanpa akomodasi.',
      diagram: {
        type: 'lup',
        f1: 5.0,
        s: 4.17,
        label: 'Diagram Lup P = +20 D (f = 5 cm) Transisi Akomodasi'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 29 adalah Pilihan Ganda Kompleks. Kita menyelidiki penggunaan lup daya tinggi 20 Dioptri pada uji batu safir.',
      part2Stimulus: 'Kekuatan lup +20 Dioptri, jarak baca normal 25 cm. Ahli mengamati dengan akomodasi maksimum, lalu ingin berpindah ke tanpa akomodasi.',
      part3Question: 'Pilihlah semua pernyataan yang benar mengenai fokus lup, perbesaran akomodasi maksimum, letak batu safir, dan pergeseran batu safir saat beralih ke tanpa akomodasi.',
      part4Hint: 'Hitung fokus f = 100/P. Cari jarak benda pada akomodasi maksimum s_maks dan pada tanpa akomodasi s_relaks = f. Selisih keduanya adalah jarak pergeseran batu safir.',
      part5Discussion: 'Fokus lup f = 100/20 = 5 cm. Pada akomodasi maksimum: M = 1 + 25/5 = 6 kali, s = 25/6 = 4.17 cm. Pada tanpa akomodasi: s = 5 cm, M = 5 kali. Safir harus digeser menjauhi lup sebesar 5 dikurang 4.17 = 0.83 cm.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai sistem pengamatan ahli batu mulia tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Panjang fokus lensa lup yang digunakan adalah f = 5.0 cm.' },
      { key: 'B', text: 'Perbesaran sudut yang diperoleh saat mata berakomodasi maksimum adalah 6.0 kali.' },
      { key: 'C', text: 'Pada saat berakomodasi maksimum, batu safir diletakkan pada jarak sekitar 4.17 cm di depan lup.' },
      { key: 'D', text: 'Jika ahli ingin beralih ke pengamatan tanpa akomodasi, batu safir harus digeser menjauhi lup sebesar sekitar 0.83 cm.' },
      { key: 'E', text: 'Bayangan akhir safir pada akomodasi maksimum berada di jarak tak terhingga.' }
    ],
    correctKeys: ['A', 'B', 'C', 'D'],
    discussion: {
      concept: 'Pergeseran Posisi Benda pada Transisi Lup Daya Tinggi',
      known: [
        'Kekuatan lup: P = +20 Dioptri',
        'Jarak baca normal: S_n = 25 cm',
        'Kondisi 1: berakomodasi maksimum (s\' = -25 cm)',
        'Kondisi 2: tanpa akomodasi (s\' = -∞)'
      ],
      asked: 'Evaluasi kebenaran opsi A, B, C, D, E',
      keyFormula: 'f = \\frac{100}{P}, \\quad M_{maks} = \\frac{S_n}{f} + 1, \\quad s_{maks} = \\frac{f \\cdot S_n}{f + S_n}, \\quad s_{relaks} = f, \\quad \\Delta s = s_{relaks} - s_{maks}',
      formulaReason: 'Beralih ke mode relaksasi membutuhkan pergeseran objek dari s_maks mundur tepat ke titik fokus f.',
      steps: [
        '1. Fokus lup: f = 100 / 20 = 5.0 cm. (Pernyataan A BENAR)',
        '2. Perbesaran akomodasi maksimum: M_maks = 25/5 + 1 = 6.0 kali. (Pernyataan B BENAR)',
        '3. Posisi benda akomodasi maksimum: s_maks = (5 x 25)/(5 + 25) = 125/30 = 25/6 ≈ 4.167 cm ≈ 4.17 cm. (Pernyataan C BENAR)',
        '4. Posisi benda tanpa akomodasi: s_relaks = f = 5.0 cm. Pergeseran: Δs = 5.0 - 4.167 = 0.833 cm ≈ 0.83 cm (menjauhi lensa lup). (Pernyataan D BENAR)',
        '5. Pada akomodasi maksimum, bayangan berada di -Sn = -25 cm, bukan di tak hingga. (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, C, dan D adalah BENAR.',
      interpretation: 'Lup 20D memberikan perbesaran 6x pada jarak 4.17 cm. Untuk meredakan kelelahan mata, batu digeser mundur 0.83 cm ke titik fokus 5 cm (perbesaran menjadi 5x).',
      distractorAnalysis: 'Pernyataan E salah karena letak bayangan di tak terhingga adalah karakteristik tanpa akomodasi.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Pergeseran Objek Lup',
      rule: 'Pergeseran objek dari akomodasi maksimum ke relaksasi: Δs = f^2 / (f + Sn)!',
      step: 'Δs = 5^2 / (5 + 25) = 25 / 30 = 5/6 = 0.833 cm menjauhi lup!',
      formula: '\\Delta s = \\frac{f^2}{f + S_n}'
    }
  },

  // 30. Lup mata berakomodasi maksimum (BS - Sangat Sulit)
  {
    id: 30,
    subtopicId: 'lup-akomodasi-maks',
    subtopicTitle: 'Lup Berakomodasi Maksimum',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Uji Komparasi Dua Lensa Lup Berakomodasi Maksimum',
    stimulus: {
      type: 'table',
      text: 'Dalam kompetisi sains olimpiade, siswa menguji performa dua lensa lup berbeda, yaitu Lensa A (f_A = 6.25 cm) dan Lensa B (f_B = 4.00 cm). Pengujian dilakukan oleh pengamat yang sama dengan jarak baca normal Sn = 25 cm pada kondisi mata berakomodasi maksimum.',
      tableData: {
        caption: 'Tabel Perbandingan Karakteristik Optik Lensa A vs Lensa B',
        headers: ['Parameter Optik', 'Lensa A (f = 6.25 cm)', 'Lensa B (f = 4.00 cm)', 'Keterangan'],
        rows: [
          ['Kekuatan Lensa (P)', '+16.0 Dioptri', '+25.0 Dioptri', 'Lensa B lebih kuat'],
          ['Jarak Benda (s)', '5.00 cm', '100/29 cm (≈ 3.45 cm)', 'Benda B lebih dekat'],
          ['Perbesaran Sudut (M)', '5.00 kali', '7.25 kali', 'Lensa B lebih besar']
        ]
      },
      diagram: {
        type: 'lup',
        f1: 4.0,
        s: 3.45,
        sPrime: -25.0,
        label: 'Diagram Komparasi Lup Akomodasi Maksimum Lensa A vs B'
      }
    },
    narration: {
      part1Intro: 'Selamat! Kita telah tiba di soal puncak nomor 30: Benar-Salah Tingkat Sangat Sulit untuk Lup Berakomodasi Maksimum bersama Mister Jo.',
      part2Stimulus: 'Lensa A berfokus 6.25 cm dan Lensa B berfokus 4 cm pada jarak baca normal 25 cm dengan akomodasi maksimum.',
      part3Question: 'Periksalah ketiga pernyataan mengenai perbandingan perbesaran sudut, perbandingan jarak benda, dan tingkat kenyamanan atau kelelahan mata pengamat.',
      part4Hint: 'Hitung perbesaran dan posisi benda untuk masing-masing lensa dengan rumus akomodasi maksimum. Ingat korelasi antara perbesaran tinggi, jarak kerja dekat, dan kelelahan otot mata.',
      part5Discussion: 'Lensa A: M = 1 + 25/6.25 = 1 + 4 = 5 kali, s = (6.25 x 25)/(31.25) = 5 cm. Lensa B: M = 1 + 25/4 = 1 + 6.25 = 7.25 kali, s = (4 x 25)/29 = 3.45 cm. Lensa B menghasilkan perbesaran lebih besar (7.25x > 5x) dan jarak benda lebih dekat (3.45 cm < 5 cm). Namun mata lebih cepat lelah pada Lensa B karena jarak kerja lebih sempit dan distorsi aberasi lebih tinggi.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan komparasi ilmiah kedua lensa lup!',
    statements: [
      {
        id: 1,
        text: 'Lensa B menghasilkan perbesaran sudut yang lebih tinggi (7.25 kali) dibandingkan Lensa A (5.00 kali) pada mata berakomodasi maksimum.',
        isCorrect: true,
        explanation: 'M_A = 25/6.25 + 1 = 4.0 + 1 = 5.00x; M_B = 25/4.0 + 1 = 6.25 + 1 = 7.25x. Tepat.'
      },
      {
        id: 2,
        text: 'Posisi benda pada Lensa B harus diletakkan lebih dekat ke lensa (sekitar 3.45 cm) dibandingkan pada Lensa A (5.00 cm).',
        isCorrect: true,
        explanation: 's_A = (6.25 * 25)/(6.25 + 25) = 156.25 / 31.25 = 5.00 cm; s_B = (4.0 * 25)/(4.0 + 25) = 100 / 29 ≈ 3.448 cm ≈ 3.45 cm. Tepat.'
      },
      {
        id: 3,
        text: 'Karena menghasilkan perbesaran yang lebih besar, mata pengamat akan merasa lebih relaks dan tidak mudah lelah ketika berakomodasi maksimum memakai Lensa B dibandingkan Lensa A.',
        isCorrect: false,
        explanation: 'Salah. Menggunakan lup berkekuatan lebih tinggi dengan jarak kerja yang sangat pendek (3.45 cm) pada kondisi akomodasi maksimum memicu kelelahan visual (asthenopia) yang jauh lebih cepat dan berat.'
      }
    ],
    discussion: {
      concept: 'Analisis Komparatif Performa dan Ergonomi Optis Lup',
      known: [
        'Lensa A: f_A = 6.25 cm',
        'Lensa B: f_B = 4.00 cm',
        'Jarak baca normal: S_n = 25 cm',
        'Kondisi: berakomodasi maksimum (s\' = -25 cm)'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan',
      keyFormula: 'M = \\frac{S_n}{f} + 1, \\quad s = \\frac{f \\cdot S_n}{f + S_n}',
      formulaReason: 'Perbesaran sudut berbanding terbalik dengan panjang fokus f pada mata berakomodasi maksimum.',
      steps: [
        '1. Perbesaran: M_A = 25/6.25 + 1 = 5.00x. M_B = 25/4.0 + 1 = 7.25x. (Pernyataan 1 BENAR)',
        '2. Jarak benda: s_A = (6.25 x 25)/31.25 = 5.00 cm. s_B = (4 x 25)/29 = 100/29 ≈ 3.45 cm. Karena 3.45 cm < 5.00 cm, benda pada Lensa B lebih dekat. (Pernyataan 2 BENAR)',
        '3. Ergonomi optik: Semakin pendek fokus lup (f = 4 cm vs 6.25 cm), bidang pandang (field of view) semakin sempit, kedalaman fokus semakin dangkal, dan tegangan akomodasi lensa mata tetap pada tingkat maksimum (otot siliaris kontraksi penuh). Hal ini justru membuat mata jauh lebih cepat lelah, bukan lebih relaks. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Meskipun Lensa B menghasilkan perbesaran 7.25x, jarak kerja yang sangat pendek (3.45 cm) dan akomodasi maksimum menuntut toleransi visual yang berat, sehingga Lensa A lebih nyaman untuk penggunaan durasi panjang.',
      distractorAnalysis: 'Pernyataan 3 menguji pemahaman konsep ergonomi optika dan batasan biologis akomodasi mata.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Trade-Off Optika Lup',
      rule: 'Fokus f semakin kecil -> Perbesaran M semakin BESAR, tetapi jarak kerja s semakin DEKAT dan mata semakin CEPAT LELAH!',
      step: 'M_B = 25/4 + 1 = 7.25x vs M_A = 25/6.25 + 1 = 5x. s_B = 100/29 ≈ 3.45 cm.',
      formula: 'f \\downarrow \\implies M \\uparrow, \\; s \\downarrow, \\; \\text{Fatigue} \\uparrow'
    }
  }
];
