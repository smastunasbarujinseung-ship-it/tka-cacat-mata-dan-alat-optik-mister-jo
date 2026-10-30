import { Question } from '../types';

export const questionsBatch2: Question[] = [
  // 11. Mikroskop mata tanpa akomodasi (PGK - Sulit)
  {
    id: 11,
    subtopicId: 'mikroskop-tanpa-akomodasi',
    subtopicTitle: 'Mikroskop Tanpa Akomodasi',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Analisis Multi-Parameter Mikroskop Riset Tanpa Akomodasi',
    stimulus: {
      type: 'experiment',
      text: 'Di laboratorium nanoteknologi, sebuah mikroskop riset memiliki lensa objektif dengan fokus f_ob = 1.8 cm dan lensa okuler dengan fokus f_ok = 6.0 cm. Preparat diletakkan pada jarak s_ob = 2.0 cm di depan objektif. Pengamat dengan jarak baca normal Sn = 25 cm mengamati preparat dengan mata beristirahat (tanpa akomodasi).',
      diagram: {
        type: 'microscope',
        f1: 1.8,
        f2: 6.0,
        s: 2.0,
        sPrime: 18.0,
        label: 'Diagram Sinar Mikroskop f_ob = 1.8 cm, f_ok = 6.0 cm'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 11 adalah Pilihan Ganda Kompleks. Kita menyelidiki mikroskop riset dalam mode tanpa akomodasi. Pilih seluruh pernyataan yang benar.',
      part2Stimulus: 'Objektif berfokus 1.8 cm, okuler 6.0 cm, dan jarak benda 2.0 cm di depan lensa objektif. Pengamat bermata normal dengan Sn = 25 cm.',
      part3Question: 'Analisis pernyataan mengenai jarak bayangan objektif, perbesaran objektif, perbesaran total, serta panjang tabung mikroskop.',
      part4Hint: 'Gunakan hubungan 1/f = 1/s + 1/s aksen untuk lensa objektif. Perhatikan bahwa okuler tanpa akomodasi berfungsi sebagai lup relaks dengan perbesaran Sn / f_ok.',
      part5Discussion: 'Mari kita hitung: s aksen objektif = (2.0 x 1.8) / (2.0 - 1.8) = 3.6 / 0.2 = 18 cm. Perbesaran objektif = 18 / 2 = 9 kali. Perbesaran okuler = 25 / 6 = 4.167 kali. Perbesaran total = 9 x (25/6) = 37.5 kali. Panjang tabung d = 18 + 6 = 24 cm.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai sistem optik mikroskop tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Bayangan nyata yang dibentuk lensa objektif berada pada jarak 18 cm di belakang lensa objektif.' },
      { key: 'B', text: 'Perbesaran linier yang dihasilkan oleh lensa objektif adalah 9 kali.' },
      { key: 'C', text: 'Perbesaran total mikroskop pada pengamatan tanpa akomodasi adalah 37.5 kali.' },
      { key: 'D', text: 'Jarak antara lensa objektif dan lensa okuler (panjang mikroskop) adalah 24.0 cm.' },
      { key: 'E', text: 'Bayangan akhir yang dilihat oleh mata pengamat bersifat nyata, terbalik, dan terletak di titik dekat mata.' }
    ],
    correctKeys: ['A', 'B', 'C', 'D'],
    discussion: {
      concept: 'Analisis Komprehensif Mikroskop Mode Tanpa Akomodasi',
      known: [
        'Fokus objektif: f_{ob} = 1.8 cm',
        'Fokus okuler: f_{ok} = 6.0 cm',
        'Jarak benda: s_{ob} = 2.0 cm',
        'Jarak baca normal: S_n = 25 cm',
        'Kondisi: mata tanpa akomodasi'
      ],
      asked: 'Verifikasi kebenaran opsi A, B, C, D, E',
      keyFormula: 's\'_{ob} = \\frac{s_{ob} \\cdot f_{ob}}{s_{ob} - f_{ob}}, \\quad M_{ob} = \\frac{s\'_{ob}}{s_{ob}}, \\quad M_{ok} = \\frac{S_n}{f_{ok}}, \\quad M_{tot} = M_{ob} \\cdot M_{ok}, \\quad d = s\'_{ob} + f_{ok}',
      formulaReason: 'Kombinasi rumus Gauss untuk lensa objektif dan perbesaran sudut lup tanpa akomodasi.',
      steps: [
        '1. Menghitung s\'_{ob}: s\'_{ob} = (2.0 x 1.8) / (2.0 - 1.8) = 3.6 / 0.2 = 18.0 cm. (Pernyataan A BENAR)',
        '2. Perbesaran objektif: M_{ob} = s\'_{ob} / s_{ob} = 18.0 / 2.0 = 9 kali. (Pernyataan B BENAR)',
        '3. Perbesaran okuler: M_{ok} = S_n / f_{ok} = 25 / 6 = 4.167 kali. Perbesaran total: M_{tot} = 9 x (25/6) = 3 x 12.5 = 37.5 kali. (Pernyataan C BENAR)',
        '4. Panjang tabung mikroskop: d = s\'_{ob} + f_{ok} = 18.0 + 6.0 = 24.0 cm. (Pernyataan D BENAR)',
        '5. Bayangan akhir yang dilihat mata bersifat maya, terbalik terhadap benda asli, dan berada di tak hingga (bukan di titik dekat). (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, C, dan D adalah BENAR.',
      interpretation: 'Sistem menghasilkan perbesaran 37.5x dengan jarak antar lensa 24 cm. Bayangan akhir bersifat maya di tak terhingga, memudahkan pengamat mengamati preparat dalam waktu lama tanpa kelelahan otot mata.',
      distractorAnalysis: 'Opsi E keliru pada sifat bayangan (seharusnya maya di tak terhingga, bukan nyata di titik dekat).'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Sederhanakan Perkalian Pecahan',
      rule: 'M_tot = M_ob · (Sn / f_ok) = (s\'_ob / s_ob) · (Sn / f_ok) = (18 / 2) · (25 / 6) = 9 · (25 / 6) = 3 · 25 / 2 = 75 / 2 = 37.5x!',
      step: 'd = 18 + 6 = 24 cm.',
      formula: 'M_{tot} = \\frac{s\'_{ob}}{s_{ob}} \\cdot \\frac{S_n}{f_{ok}}'
    }
  },

  // 12. Mikroskop mata tanpa akomodasi (BS - Sangat Sulit)
  {
    id: 12,
    subtopicId: 'mikroskop-tanpa-akomodasi',
    subtopicTitle: 'Mikroskop Tanpa Akomodasi',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Rekonstruksi Jarak Benda dan Perbesaran dari Panjang Tabung Tetap',
    stimulus: {
      type: 'scenario',
      text: 'Sebuah mikroskop metalurgi memiliki panjang tabung fisik tetap d = 145 mm. Mikroskop dipasangi lensa objektif berfokus f_ob = 8.0 mm dan lensa okuler berfokus f_ok = 25 mm. Seorang metalurgis bermata normal (Sn = 250 mm) mengamati struktur kristal logam tanpa akomodasi.',
      diagram: {
        type: 'microscope',
        f1: 8,
        f2: 25,
        sPrime: 120,
        label: 'Diagram Mikroskop Tabung Tetap d = 145 mm'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 12 adalah Benar-Salah tingkat Sangat Sulit. Di sini panjang tabung diketahui tetap, dan kita harus merekonstruksi jarak benda serta perbesaran totalnya.',
      part2Stimulus: 'Panjang tabung d = 145 mm, fokus objektif 8 mm, fokus okuler 25 mm, dan Sn = 250 mm. Mata mengamati tanpa akomodasi.',
      part3Question: 'Nilailah ketiga pernyataan mengenai jarak bayangan objektif, perbesaran total mikroskop, dan perubahan posisi fokus saat preparat digeser.',
      part4Hint: 'Karena tanpa akomodasi, bayangan dari objektif harus tepat berada di fokus okuler. Jadi s aksen objektif sama dengan d dikurang f okuler.',
      part5Discussion: 's aksen objektif = 145 - 25 = 120 mm. Jarak benda 1/s = 1/8 - 1/120 = 14/120, sehingga perbesaran objektif = 120 / (120/14) = 14 kali. Perbesaran okuler = 250/25 = 10 kali. Perbesaran total = 14 x 10 = 140 kali.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan mekanika optik mikroskop!',
    statements: [
      {
        id: 1,
        text: 'Jarak bayangan yang dibentuk oleh lensa objektif di dalam tabung mikroskop adalah tepat 120 mm.',
        isCorrect: true,
        explanation: 'Untuk mata tanpa akomodasi, s_ok = f_ok = 25 mm. Karena d = s\'_ob + s_ok, maka s\'_ob = d - f_ok = 145 mm - 25 mm = 120 mm.'
      },
      {
        id: 2,
        text: 'Perbesaran total mikroskop pada pengamatan kristal logam ini adalah 140 kali.',
        isCorrect: true,
        explanation: 'M_ob = s\'_ob / s_ob. Karena 1/s_ob = 1/8 - 1/120 = 14/120 mm^-1, maka M_ob = s\'_ob * (1/s_ob) = 120 * (14/120) = 14 kali. M_ok = 250/25 = 10 kali. M_tot = 14 * 10 = 140 kali.'
      },
      {
        id: 3,
        text: 'Jika preparat digeser mendekati lensa objektif hingga s_ob = 8.1 mm, panjang tabung mikroskop harus diperpendek agar pengamatan tetap berlangsung tanpa akomodasi.',
        isCorrect: false,
        explanation: 'Jika s_ob mendekati f_ob (dari 8.57 mm menjadi 8.1 mm), bayangan s\'_ob bergeser semakin jauh (menjauh dari objektif), sehingga tabung mikroskop harus diperpanjang (bukan diperpendek) agar bayangan tetap jatuh di f_ok.'
      }
    ],
    discussion: {
      concept: 'Rekonstruksi Posisi Konjugat dan Perbesaran Mikroskop Tabung Tetap',
      known: [
        'Panjang tabung mikroskop: d = 145 mm',
        'Fokus objektif: f_{ob} = 8.0 mm',
        'Fokus okuler: f_{ok} = 25 mm',
        'Jarak baca normal: S_n = 250 mm',
        'Kondisi: tanpa akomodasi (s_{ok} = f_{ok} = 25 mm)'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan',
      keyFormula: 's\'_{ob} = d - f_{ok}, \\quad M_{ob} = s\'_{ob} \\cdot \\left(\\frac{1}{f_{ob}} - \\frac{1}{s\'_{ob}}\\right) = \\frac{s\'_{ob}}{f_{ob}} - 1, \\quad M_{tot} = M_{ob} \\times \\frac{S_n}{f_{ok}}',
      formulaReason: 'Manipulasi aljabar menghubungkan parameter panjang fisik mikroskop dengan perbesaran sudut.',
      steps: [
        '1. Menghitung s\'_{ob}: s\'_{ob} = d - f_{ok} = 145 - 25 = 120 mm. (Pernyataan 1 BENAR)',
        '2. Menghitung M_{ob}: M_{ob} = s\'_{ob}/f_{ob} - 1 = 120/8 - 1 = 15 - 1 = 14 kali. M_{ok} = S_n/f_{ok} = 250/25 = 10 kali. M_{tot} = 14 x 10 = 140 kali. (Pernyataan 2 BENAR)',
        '3. Menguji pergeseran objek: Jika s_{ob} berkurang mendekati f_{ob}, nilai 1/s\'_{ob} = 1/f_{ob} - 1/s_{ob} mengecil, sehingga s\'_{ob} membesar. Agar bayangan tetap jatuh di fokus okuler, panjang d = s\'_{ob} + f_{ok} harus diperpanjang, bukan diperpendek. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Pada mikroskop tanpa akomodasi dengan panjang tabung 145 mm, perbesaran total mencapai 140x. Mendekatkan preparat ke objektif membuat bayangan objektif menjauh, memerlukan pemanjangan tabung untuk menjaga mata tetap relaks.',
      distractorAnalysis: 'Pernyataan 3 menguji penalaran kualitatif arah pergeseran bayangan pada lensa konvergen.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Pintar Perbesaran Objektif',
      rule: 'M_ob = (s\'_ob / f_ob) - 1. Langsung hitung tanpa mencari s_ob terlebih dahulu!',
      step: 's\'_ob = 145 - 25 = 120 mm. M_ob = (120 / 8) - 1 = 15 - 1 = 14 kali! M_tot = 14 x (250/25) = 140x!',
      formula: 'M_{ob} = \\frac{s\'_{ob}}{f_{ob}} - 1'
    }
  },

  // 13. Mikroskop mata berakomodasi maksimum (PG - Menengah)
  {
    id: 13,
    subtopicId: 'mikroskop-akomodasi-maks',
    subtopicTitle: 'Mikroskop Berakomodasi Maksimum',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Pengamatan Mikroskop dengan Mata Berakomodasi Maksimum',
    stimulus: {
      type: 'scenario',
      text: 'Seorang siswa mengamati protozoa menggunakan mikroskop yang memiliki lensa objektif berfokus f_ob = 1.0 cm dan lensa okuler berfokus f_ok = 5.0 cm. Preparat diletakkan pada jarak s_ob = 1.2 cm di depan lensa objektif. Siswa memiliki mata normal dengan jarak baca baku Sn = 25 cm dan mengamati dengan berakomodasi maksimum.',
      diagram: {
        type: 'microscope',
        f1: 1.0,
        f2: 5.0,
        s: 1.2,
        sPrime: 6.0,
        label: 'Diagram Mikroskop Akomodasi Maksimum (Bayangan Akhir di Sn = 25 cm)'
      }
    },
    narration: {
      part1Intro: 'Kita masuki Submateri 5: Mikroskop Mata Berakomodasi Maksimum bersama Mister Jo!',
      part2Stimulus: 'Objektif berfokus 1 cm, okuler 5 cm, preparat di 1.2 cm, dan Sn = 25 cm. Pengamat berakomodasi maksimum sehingga bayangan akhir terbentuk di 25 cm di depan lensa okuler.',
      part3Question: 'Berapakah perbesaran total yang diperoleh dan panjang tabung mikroskop pada kondisi akomodasi maksimum ini?',
      part4Hint: 'Ingat bahwa pada akomodasi maksimum, perbesaran okuler meningkat menjadi (Sn/f_ok + 1). Dan jarak okuler s_ok dihitung dengan s aksen okuler sama dengan minus 25 cm.',
      part5Discussion: 's aksen objektif = (1.2 x 1) / (1.2 - 1) = 6 cm. M objektif = 6 / 1.2 = 5 kali. M okuler = 25/5 + 1 = 6 kali. Perbesaran total = 5 x 6 = 30 kali. Jarak s okuler = (5 x 25)/(5 + 25) = 125/30 = 4.17 cm. Panjang tabung d = 6 + 4.17 = 10.17 cm.'
    },
    questionText: 'Berapakah perbesaran total mikroskop dan panjang tabung mikroskop saat siswa berakomodasi maksimum?',
    options: [
      { key: 'A', text: '25 kali dan 10.0 cm' },
      { key: 'B', text: '30 kali dan 10.17 cm' },
      { key: 'C', text: '30 kali dan 11.0 cm' },
      { key: 'D', text: '36 kali dan 10.17 cm' },
      { key: 'E', text: '25 kali dan 11.0 cm' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Perbesaran Sudut dan Jarak Lensa Mikroskop Akomodasi Maksimum',
      known: [
        'Fokus objektif: f_{ob} = 1.0 cm',
        'Fokus okuler: f_{ok} = 5.0 cm',
        'Jarak benda: s_{ob} = 1.2 cm',
        'Titik dekat pengamat: S_n = 25 cm',
        'Kondisi: berakomodasi maksimum (s\'_{ok} = -S_n = -25 cm)'
      ],
      asked: 'Perbesaran total (M_{tot}) dan panjang tabung (d)',
      keyFormula: 'M_{tot} = M_{ob} \\times \\left(\\frac{S_n}{f_{ok}} + 1\\right), \\quad d = s\'_{ob} + s_{ok}, \\quad \\frac{1}{s_{ok}} = \\frac{1}{f_{ok}} - \\frac{1}{s\'_{ok}}',
      formulaReason: 'Pada akomodasi maksimum, okuler bertindak sebagai lup berakomodasi maksimum sehingga bayangan akhir maya berada di -Sn.',
      steps: [
        '1. Menghitung s\'_{ob}: 1/s\'_{ob} = 1/1.0 - 1/1.2 = 1 - 5/6 = 1/6 cm^-1 -> s\'_{ob} = 6.0 cm.',
        '2. Perbesaran objektif: M_{ob} = s\'_{ob} / s_{ob} = 6.0 / 1.2 = 5 kali.',
        '3. Perbesaran okuler akomodasi maksimum: M_{ok} = S_n / f_{ok} + 1 = 25 / 5 + 1 = 5 + 1 = 6 kali.',
        '4. Perbesaran total: M_{tot} = 5 x 6 = 30 kali.',
        '5. Menghitung s_{ok}: 1/s_{ok} = 1/5 - 1/(-25) = 1/5 + 1/25 = 6/25 -> s_{ok} = 25/6 ≈ 4.167 cm.',
        '6. Panjang tabung mikroskop: d = s\'_{ob} + s_{ok} = 6.0 + 4.167 = 10.167 cm ≈ 10.17 cm.'
      ],
      finalResult: 'M_tot = 30 kali dan d = 10.17 cm',
      interpretation: 'Akomodasi maksimum memberikan perbesaran yang lebih besar (30x dibanding 25x saat tanpa akomodasi), namun panjang tabung sedikit memendek dari 11.0 cm menjadi 10.17 cm.',
      distractorAnalysis: 'Opsi C memakai panjang tabung tanpa akomodasi (6 + 5 = 11 cm) meskipun perbesarannya sudah 30x. Opsi A adalah hasil jika mata tanpa akomodasi (5 x 5 = 25x).'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat s_ok Akomodasi Maksimum',
      rule: 's_ok = (f_ok · Sn) / (f_ok + Sn). Langsung kalikan lalu bagi jumlahnya!',
      step: 's_ok = (5 · 25) / (5 + 25) = 125 / 30 = 25/6 = 4.17 cm. Maka d = 6 + 4.17 = 10.17 cm!',
      formula: 's_{ok} = \\frac{f_{ok} \\cdot S_n}{f_{ok} + S_n}'
    }
  },

  // 14. Mikroskop mata berakomodasi maksimum (PGK - Sulit)
  {
    id: 14,
    subtopicId: 'mikroskop-akomodasi-maks',
    subtopicTitle: 'Mikroskop Berakomodasi Maksimum',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Desain Parameter Mikroskop Patologi Akomodasi Maksimum',
    stimulus: {
      type: 'experiment',
      text: 'Seorang dokter patologi anatomi menggunakan mikroskop dengan spesifikasi lensa objektif berfokus f_ob = 2.0 cm dan lensa okuler berfokus f_ok = 5.0 cm. Untuk mengidentifikasi sel ganas, dokter menginginkan perbesaran linier lensa objektif tepat sebesar 10 kali. Dokter bermata normal (Sn = 25 cm) mengamati dengan akomodasi maksimum.',
      diagram: {
        type: 'microscope',
        f1: 2.0,
        f2: 5.0,
        s: 2.2,
        sPrime: 22.0,
        label: 'Diagram Konfigurasi Mikroskop Patologi Mob = 10x'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 14 adalah Pilihan Ganda Kompleks. Kita mendesain mikroskop patologi dengan perbesaran objektif 10 kali pada mata berakomodasi maksimum.',
      part2Stimulus: 'Fokus objektif 2 cm, okuler 5 cm, M objektif = 10 kali, dan titik dekat normal 25 cm pada akomodasi maksimum.',
      part3Question: 'Pilihlah semua pernyataan yang benar terkait jarak benda ke objektif, posisi bayangan objektif, perbesaran total mikroskop, dan panjang tabung.',
      part4Hint: 'Karena perbesaran objektif 10 kali, s aksen objektif sama dengan 10 kali s objektif. Substitusikan ke 1/f_ob = 1/s_ob + 1/s\'_ob untuk menemukan posisi benda.',
      part5Discussion: '1/s_ob + 1/(10 s_ob) = 11/(10 s_ob) = 1/2, sehingga s_ob = 2.2 cm dan s aksen ob = 22 cm. Perbesaran okuler akomodasi maksimum = 25/5 + 1 = 6 kali. Perbesaran total = 10 x 6 = 60 kali. s_ok = (5 x 25)/30 = 4.17 cm. Panjang tabung d = 22 + 4.17 = 26.17 cm.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai pengamatan dokter patologi tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Preparat jaringan harus diletakkan pada jarak 2.2 cm di depan lensa objektif.' },
      { key: 'B', text: 'Bayangan nyata yang dibentuk oleh lensa objektif berada pada jarak 22.0 cm di belakang lensa objektif.' },
      { key: 'C', text: 'Perbesaran sudut lensa okuler pada kondisi akomodasi maksimum adalah 6 kali.' },
      { key: 'D', text: 'Perbesaran total mikroskop adalah 60 kali.' },
      { key: 'E', text: 'Panjang tabung mikroskop (jarak kedua lensa) adalah sekitar 26.17 cm.' }
    ],
    correctKeys: ['A', 'B', 'C', 'D', 'E'],
    discussion: {
      concept: 'Penentuan Posisi Benda dan Dimensi Tabung Mikroskop Akomodasi Maksimum',
      known: [
        'Fokus objektif: f_{ob} = 2.0 cm',
        'Fokus okuler: f_{ok} = 5.0 cm',
        'Perbesaran objektif: M_{ob} = 10 kali',
        'Jarak baca normal: S_n = 25 cm',
        'Kondisi mata: berakomodasi maksimum'
      ],
      asked: 'Evaluasi kebenaran seluruh pilihan jawaban',
      keyFormula: 'M_{ob} = \\frac{s\'_{ob}}{s_{ob}} = 10, \\quad \\frac{1}{s_{ob}} + \\frac{1}{s\'_{ob}} = \\frac{1}{f_{ob}}, \\quad M_{ok} = \\frac{S_n}{f_{ok}} + 1, \\quad d = s\'_{ob} + \\frac{f_{ok} \\cdot S_n}{f_{ok} + S_n}',
      formulaReason: 'Kondisi akomodasi maksimum menentukan posisi bayangan akhir di -Sn dan perbesaran okuler (Sn/f_ok + 1).',
      steps: [
        '1. Menghitung s_{ob} dan s\'_{ob}: s\'_{ob} = 10 s_{ob}. 1/s_{ob} + 1/(10 s_{ob}) = 1/2.0 -> 11 / (10 s_{ob}) = 1/2.0 -> 10 s_{ob} = 22.0 -> s_{ob} = 2.2 cm. (Pernyataan A BENAR)',
        '2. Menghitung s\'_{ob}: s\'_{ob} = 10 x 2.2 = 22.0 cm. (Pernyataan B BENAR)',
        '3. Perbesaran okuler akomodasi maksimum: M_{ok} = 25 / 5 + 1 = 5 + 1 = 6 kali. (Pernyataan C BENAR)',
        '4. Perbesaran total: M_{tot} = M_{ob} x M_{ok} = 10 x 6 = 60 kali. (Pernyataan D BENAR)',
        '5. Jarak benda okuler s_{ok}: s_{ok} = (5.0 x 25) / (5.0 + 25) = 125 / 30 = 25/6 ≈ 4.167 cm. Panjang mikroskop: d = 22.0 + 4.167 = 26.167 cm ≈ 26.17 cm. (Pernyataan E BENAR)'
      ],
      finalResult: 'Seluruh pernyataan (A, B, C, D, dan E) adalah BENAR.',
      interpretation: 'Seluruh lima pernyataan merupakan kalkulasi konsisten dari sistem optik mikroskop dengan perbesaran 60x pada kondisi akomodasi maksimum.',
      distractorAnalysis: 'Kelima pernyataan saling mendukung dan konsisten secara fisika optik.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Hubungan Cepat Jarak Benda & Perbesaran',
      rule: 's_ob = f_ob · (M_ob + 1) / M_ob. Untuk M_ob = 10: s_ob = 2 · (11/10) = 2.2 cm!',
      step: 's\'_ob = 10 x 2.2 = 22 cm. M_tot = 10 x (25/5 + 1) = 60x. d = 22 + (125/30) = 26.17 cm.',
      formula: 's_{ob} = f_{ob} \\cdot \\frac{M_{ob} + 1}{M_{ob}}'
    }
  },

  // 15. Mikroskop mata berakomodasi maksimum (BS - Sangat Sulit)
  {
    id: 15,
    subtopicId: 'mikroskop-akomodasi-maks',
    subtopicTitle: 'Mikroskop Berakomodasi Maksimum',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Dinamika Pergeseran Lensa Okuler saat Transisi Akomodasi',
    stimulus: {
      type: 'table',
      text: 'Dalam prosedur kalibrasi mikroskop pembanding forensik, posisi bayangan lensa objektif dijaga konstan pada jarak s\'_ob = 150 mm. Mikroskop menggunakan lensa okuler berfokus f_ok = 40 mm. Peneliti bermata normal dengan Sn = 240 mm mengubah kondisi pengamatannya dari tanpa akomodasi menjadi berakomodasi maksimum.',
      tableData: {
        caption: 'Tabel Perbandingan Kondisi Okuler Mikroskop Forensik',
        headers: ['Kondisi Pengamatan', 'Letak Bayangan Akhir (s\'_ok)', 'Jarak Benda Okuler (s_ok)', 'Panjang Tabung Mikroskop (d)'],
        rows: [
          ['Mata Tanpa Akomodasi', 'Di tak terhingga (∞)', '40.0 mm (= f_ok)', '190.0 mm'],
          ['Mata Berakomodasi Maksimum', '-240.0 mm (= -Sn)', 'Dihitung Ulang', 'Dihitung Ulang']
        ]
      },
      diagram: {
        type: 'microscope',
        f1: 10,
        f2: 40,
        sPrime: 150,
        label: 'Diagram Pergeseran Okuler saat Transisi Akomodasi'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 15 adalah Benar-Salah Tingkat Sangat Sulit untuk menutup submateri mikroskop.',
      part2Stimulus: 'Bayangan objektif dijaga tetap di 150 mm. Fokus okuler 40 mm, dan Sn = 240 mm. Pengamat berpindah dari tanpa akomodasi ke akomodasi maksimum.',
      part3Question: 'Periksa kebenaran ketiga pernyataan tentang perbesaran okuler, besar pergeseran lensa okuler, dan sifat bayangan akhir.',
      part4Hint: 'Cari jarak s_ok saat akomodasi maksimum, lalu bandingkan dengan s_ok saat tanpa akomodasi untuk mengetahui besar pemendekan tabung mikroskop.',
      part5Discussion: 'Saat tanpa akomodasi, s_ok = 40 mm, M_ok = 240/40 = 6 kali. Saat akomodasi maksimum, 1/s_ok = 1/40 + 1/240 = 7/240, sehingga s_ok = 34.29 mm, M_ok = 7 kali. Selisih s_ok = 40 dikurang 34.29 = 5.71 mm. Lensa okuler harus dimajukan 5.71 mm mendekati objektif.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan mekanika optik transisi akomodasi!',
    statements: [
      {
        id: 1,
        text: 'Perbesaran sudut lensa okuler meningkat dari 6.0 kali menjadi 7.0 kali ketika mata beralih dari tanpa akomodasi ke akomodasi maksimum.',
        isCorrect: true,
        explanation: 'M_ok (relaks) = Sn/f_ok = 240/40 = 6.0x; M_ok (maks) = Sn/f_ok + 1 = 6.0 + 1 = 7.0x.'
      },
      {
        id: 2,
        text: 'Untuk mempertahankan fokus saat beralih ke akomodasi maksimum, tabung okuler harus digeser mendekati lensa objektif sejauh sekitar 5.71 mm.',
        isCorrect: true,
        explanation: 's_ok (relaks) = 40 mm; s_ok (maks) = 240/7 ≈ 34.286 mm. Pergeseran delta_d = 40 - 34.286 = 5.714 mm mendekati objektif.'
      },
      {
        id: 3,
        text: 'Pada pengamatan akomodasi maksimum, bayangan akhir yang dilihat oleh mata bersifat nyata dan dapat ditangkap langsung pada layar tanpa lensa tambahan.',
        isCorrect: false,
        explanation: 'Salah. Bayangan akhir oleh lensa okuler mikroskop selalu bersifat maya di depan lensa okuler (s\'_ok = -240 mm), sehingga tidak dapat ditangkap langsung pada layar fisik.'
      }
    ],
    discussion: {
      concept: 'Dinamika Pergeseran Okuler dan Sifat Bayangan Transisi Akomodasi',
      known: [
        'Posisi bayangan objektif konstan: s\'_{ob} = 150 mm',
        'Fokus okuler: f_{ok} = 40 mm',
        'Jarak baca normal: S_n = 240 mm'
      ],
      asked: 'Verifikasi ketiga pernyataan',
      keyFormula: 's_{ok,relaks} = f_{ok}, \\quad s_{ok,maks} = \\frac{f_{ok} \\cdot S_n}{f_{ok} + S_n}, \\quad \\Delta d = s_{ok,relaks} - s_{ok,maks}',
      formulaReason: 'Karena posisi bayangan objektif tetap, perubahan panjang tabung mikroskop sepenuhnya ditentukan oleh perubahan jarak objek okuler (s_ok).',
      steps: [
        '1. Perbesaran okuler: Tanpa akomodasi = 240/40 = 6x. Akomodasi maksimum = 240/40 + 1 = 7x. (Pernyataan 1 BENAR)',
        '2. Menghitung s_{ok}: s_{ok,relaks} = 40.0 mm. s_{ok,maks} = (40 x 240) / (40 + 240) = 9600 / 280 = 240 / 7 ≈ 34.286 mm. Pergeseran tabung: Δd = 40.0 - 34.286 = 5.714 mm ≈ 5.71 mm (lensa okuler digeser mendekati objektif). (Pernyataan 2 BENAR)',
        '3. Sifat bayangan akhir okuler adalah maya, terbalik terhadap objek preparat asli, dan berada pada jarak 240 mm di depan okuler. Bayangan maya tidak dapat diproyeksikan pada layar fisik. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Beralih ke akomodasi maksimum meningkatkan daya pembesaran okuler menjadi 7x dengan konsekuensi tabung mikroskop harus dipendekkan 5.71 mm. Bayangan akhir yang ditangkap mata tetap maya.',
      distractorAnalysis: 'Pernyataan 3 menguji konsep fundamental sifat bayangan maya vs nyata.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Pergeseran Cepat Okuler',
      rule: 'Δd = f_ok^2 / (f_ok + Sn). Rumus super kilat pergeseran okuler!',
      step: 'Δd = 40^2 / (40 + 240) = 1600 / 280 = 40 / 7 = 5.71 mm mendekati objektif!',
      formula: '\\Delta d = \\frac{f_{ok}^2}{f_{ok} + S_n}'
    }
  },

  // 16. Teropong bintang mata tanpa akomodasi (PG - Menengah)
  {
    id: 16,
    subtopicId: 'teropong-tanpa-akomodasi',
    subtopicTitle: 'Teropong Bintang Tanpa Akomodasi',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Pengamatan Kawah Bulan dengan Teropong Bintang Relaks',
    stimulus: {
      type: 'scenario',
      text: 'Klub astronomi sekolah mengamati permukaan kawah Tycho di Bulan menggunakan teropong bintang bias (refraktor). Teropong diatur sedemikian rupa sehingga pengamat bermata normal mengamati tanpa akomodasi. Teropong tersebut memiliki panjang tabung fisik L = 105 cm dan menghasilkan perbesaran sudut sebesar 20 kali.',
      diagram: {
        type: 'telescope',
        f1: 100,
        f2: 5,
        label: 'Diagram Sinar Teropong Bintang Tanpa Akomodasi (L = 105 cm, M = 20x)'
      }
    },
    narration: {
      part1Intro: 'Sekarang kita melangkah ke Submateri 6: Teropong Bintang Tanpa Akomodasi. Mari kita amati keindahan kawah Bulan bersama Mister Jo!',
      part2Stimulus: 'Teropong bintang tanpa akomodasi memiliki panjang tabung 105 cm dan perbesaran sudut 20 kali.',
      part3Question: 'Berapakah jarak fokus lensa objektif dan lensa okuler yang digunakan pada teropong bintang tersebut?',
      part4Hint: 'Gunakan dua rumus utama teropong tanpa akomodasi: perbesaran M sama dengan f_ob dibagi f_ok, dan panjang teropong L sama dengan f_ob ditambah f_ok.',
      part5Discussion: 'M = f_ob / f_ok = 20, jadi f_ob = 20 kali f_ok. Masukkan ke panjang tabung: L = f_ob + f_ok = 20 f_ok + f_ok = 21 f_ok = 105 cm. Didapatkan f_ok = 5 cm, dan f_ob = 105 dikurang 5 = 100 cm.'
    },
    questionText: 'Berapakah panjang fokus lensa objektif dan lensa okuler dari teropong bintang tersebut berturut-turut?',
    options: [
      { key: 'A', text: '95.0 cm dan 10.0 cm' },
      { key: 'B', text: '100.0 cm dan 5.0 cm' },
      { key: 'C', text: '105.0 cm dan 5.0 cm' },
      { key: 'D', text: '80.0 cm dan 4.0 cm' },
      { key: 'E', text: '120.0 cm dan 6.0 cm' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Perbesaran Sudut dan Panjang Teropong Bintang Tanpa Akomodasi',
      known: [
        'Panjang tabung teropong: L = 105 cm',
        'Perbesaran sudut: M = 20 kali',
        'Kondisi: mata tanpa akomodasi'
      ],
      asked: 'Jarak fokus lensa objektif (f_{ob}) dan okuler (f_{ok})',
      keyFormula: 'M = \\frac{f_{ob}}{f_{ok}}, \\quad L = f_{ob} + f_{ok}',
      formulaReason: 'Objek astronomi berada di tak hingga sehingga bayangan objektif jatuh tepat di fokus objektifnya. Pada mata tanpa akomodasi, bayangan tersebut harus jatuh tepat di titik fokus okuler sehingga L = f_ob + f_ok.',
      steps: [
        '1. Dari rumus perbesaran: M = 20 -> f_{ob} = 20 f_{ok}.',
        '2. Substitusikan ke panjang tabung: L = f_{ob} + f_{ok} -> 105 = 20 f_{ok} + f_{ok} = 21 f_{ok}.',
        '3. Menghitung f_{ok}: f_{ok} = 105 / 21 = 5.0 cm.',
        '4. Menghitung f_{ob}: f_{ob} = 20 x 5.0 = 100.0 cm (atau 105 - 5 = 100 cm).'
      ],
      finalResult: 'f_ob = 100.0 cm dan f_ok = 5.0 cm',
      interpretation: 'Teropong menggunakan lensa objektif berfokus panjang (100 cm) untuk mengumpulkan cahaya dari bintang dan lensa okuler berfokus pendek (5 cm) sebagai pembesar sudut.',
      distractorAnalysis: 'Opsi A (95 & 10) memiliki jumlah 105 tetapi rasio perbesaran hanya 9.5x. Opsi C salah pada penjumlahan panjang tabung.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Teropong Bintang',
      rule: 'f_ok = L / (M + 1). Langsung bagi panjang tabung dengan perbesaran ditambah satu!',
      step: 'f_ok = 105 / (20 + 1) = 105 / 21 = 5 cm. f_ob = 105 - 5 = 100 cm!',
      formula: 'f_{ok} = \\frac{L}{M + 1}'
    }
  },

  // 17. Teropong bintang mata tanpa akomodasi (PGK - Sulit)
  {
    id: 17,
    subtopicId: 'teropong-tanpa-akomodasi',
    subtopicTitle: 'Teropong Bintang Tanpa Akomodasi',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Modifikasi Okuler Teleskop Astronomi Tanpa Akomodasi',
    stimulus: {
      type: 'experiment',
      text: 'Sebuah teleskop bintang di observatorium astronomi amatir memiliki lensa objektif dengan panjang fokus f_ob = 120 cm dan lensa okuler mula-mula dengan f_ok = 4.0 cm. Teropong ini digunakan mengamati planet Saturnus tanpa akomodasi. Untuk melihat cincin Saturnus lebih detail, astrofotografer ingin menaikkan perbesaran sudut menjadi 40 kali tanpa mengubah posisi pengamatan rileks (tanpa akomodasi).',
      diagram: {
        type: 'telescope',
        f1: 120,
        f2: 4.0,
        label: 'Diagram Modifikasi Okuler Teleskop Astronomi'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 17 adalah Pilihan Ganda Kompleks. Kita menganalisis modifikasi lensa okuler teleskop untuk melipatgandakan perbesaran sudut planet Saturnus.',
      part2Stimulus: 'Fokus objektif 120 cm, fokus okuler awal 4 cm. Teleskop ingin diubah agar perbesaran menjadi 40 kali tanpa akomodasi.',
      part3Question: 'Pilihlah seluruh pernyataan yang benar mengenai perbesaran awal, panjang awal tabung, fokus okuler pengganti, dan penyesuaian panjang tabung.',
      part4Hint: 'Gunakan M = f_ob / f_ok untuk menghitung kondisi awal dan kondisi baru. Perhatikan perubahan panjang tabung L = f_ob + f_ok.',
      part5Discussion: 'Perbesaran awal = 120 / 4 = 30 kali. Panjang awal tabung = 120 + 4 = 124 cm. Untuk M baru = 40 kali: f_ok baru = 120 / 40 = 3 cm. Panjang baru = 120 + 3 = 123 cm. Jadi tabung harus diperpendek 1 cm.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai modifikasi teleskop bintang tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Perbesaran sudut mula-mula teleskop adalah 30 kali.' },
      { key: 'B', text: 'Panjang tabung teleskop mula-mula adalah 124 cm.' },
      { key: 'C', text: 'Untuk menghasilkan perbesaran 40 kali tanpa akomodasi, lensa okuler harus diganti dengan lensa berfokus 3.0 cm.' },
      { key: 'D', text: 'Setelah lensa okuler diganti dengan fokus 3.0 cm, tabung teleskop harus diperpendek sebesar 1.0 cm.' },
      { key: 'E', text: 'Bayangan perantara yang dibentuk oleh lensa objektif bersifat maya dan tegak di depan lensa objektif.' }
    ],
    correctKeys: ['A', 'B', 'C', 'D'],
    discussion: {
      concept: 'Modifikasi Lensa Okuler dan Penyesuaian Panjang Teropong Bintang',
      known: [
        'Fokus objektif: f_{ob} = 120 cm',
        'Fokus okuler awal: f_{ok1} = 4.0 cm',
        'Perbesaran target: M_2 = 40 kali',
        'Kondisi: tanpa akomodasi'
      ],
      asked: 'Evaluasi opsi A, B, C, D, E',
      keyFormula: 'M = \\frac{f_{ob}}{f_{ok}}, \\quad L = f_{ob} + f_{ok}',
      formulaReason: 'Pada teropong bintang tanpa akomodasi, perbesaran berbanding terbalik dengan fokus okuler.',
      steps: [
        '1. Perbesaran awal: M_1 = f_{ob} / f_{ok1} = 120 / 4.0 = 30 kali. (Pernyataan A BENAR)',
        '2. Panjang tabung awal: L_1 = f_{ob} + f_{ok1} = 120 + 4.0 = 124 cm. (Pernyataan B BENAR)',
        '3. Fokus okuler baru untuk M_2 = 40x: f_{ok2} = f_{ob} / M_2 = 120 / 40 = 3.0 cm. (Pernyataan C BENAR)',
        '4. Panjang tabung baru: L_2 = f_{ob} + f_{ok2} = 120 + 3.0 = 123 cm. Perubahan panjang: ΔL = 124 - 123 = 1.0 cm (diperpendek 1 cm). (Pernyataan D BENAR)',
        '5. Bayangan perantara oleh lensa objektif selalu bersifat nyata, terbalik, dan diperkecil di bidang fokus objektif (bukan maya dan tegak). (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, C, dan D adalah BENAR.',
      interpretation: 'Menaikkan perbesaran teleskop dari 30x menjadi 40x dilakukan dengan mengganti okuler ke fokus yang lebih pendek (3 cm) dan memendekkan tabung teleskop 1 cm.',
      distractorAnalysis: 'Pernyataan E salah karena lensa objektif teropong selalu menghasilkan bayangan nyata dan terbalik.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Selisih Panjang Teropong',
      rule: 'Perubahan panjang tabung teropong = selisih fokus okuler! ΔL = f_ok1 - f_ok2 = 4 - 3 = 1 cm memendek!',
      step: 'M1 = 120/4 = 30x. fok2 = 120/40 = 3 cm. ΔL = 4 - 3 = 1 cm tabung dipendekkan.',
      formula: '\\Delta L = f_{ok1} - f_{ok2}'
    }
  },

  // 18. Teropong bintang mata tanpa akomodasi (BS - Sangat Sulit)
  {
    id: 18,
    subtopicId: 'teropong-tanpa-akomodasi',
    subtopicTitle: 'Teropong Bintang Tanpa Akomodasi',
    type: 'bs',
    difficulty: 'Sangat Sulit',
    title: 'Analisis Pembentukan Citra Optis pada Teropong Bintang Kepler',
    stimulus: {
      type: 'scenario',
      text: 'Dalam sesi praktikum astrofisika, mahasiswa menguji teropong bintang refraktor tipe Kepler dengan spesifikasi f_ob = 150 cm dan f_ok = 5.0 cm untuk mengamati satelit Galilean planet Jupiter. Pengamatan dilakukan secara relaks tanpa akomodasi.',
      diagram: {
        type: 'telescope',
        f1: 150,
        f2: 5.0,
        label: 'Diagram Jalannya Sinar Teropong Kepler f_ob = 150 cm, f_ok = 5 cm'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 18 adalah Benar-Salah Tingkat Sangat Sulit untuk menutup submateri teropong tanpa akomodasi.',
      part2Stimulus: 'Teropong Kepler memiliki fokus objektif 150 cm dan fokus okuler 5 cm. Pengamatan dilakukan tanpa akomodasi.',
      part3Question: 'Periksalah ketiga pernyataan mengenai titik fokus bayangan objektif, perbesaran dan panjang tabung, serta sifat bayangan akhir yang masuk ke pupil mata.',
      part4Hint: 'Cermati bahwa berkas cahaya dari bintang yang sangat jauh adalah berkas sejajar, dan bayangan akhir teropong bintang Kepler adalah maya dan terbalik terhadap objek aslinya.',
      part5Discussion: 'Objektif memfokuskan berkas sejajar tepat di fokus objektifnya. Perbesaran M = 150/5 = 30 kali dan panjang tabung = 150 + 5 = 155 cm. Bayangan akhir yang dibentuk lensa okuler bersifat maya di tak terhingga dan terbalik terhadap objek asli di langit.'
    },
    questionText: 'Tentukan apakah masing-masing pernyataan berikut bernilai BENAR atau SALAH berdasarkan prinsip optika fisis teropong!',
    statements: [
      {
        id: 1,
        text: 'Berkas sinar sejajar yang datang dari satelit Jupiter difokuskan oleh lensa objektif tepat pada bidang fokus lensa objektif di dalam tabung teropong.',
        isCorrect: true,
        explanation: 'Karena objek berada di tak hingga (s_ob = ∞), bayangan nyata yang dibentuk lensa objektif jatuh tepat pada bidang fokus objektif (s\'_ob = f_ob).'
      },
      {
        id: 2,
        text: 'Perbesaran sudut teropong bernilai 30 kali dan jarak antara kedua lensa (panjang teropong) adalah 155 cm.',
        isCorrect: true,
        explanation: 'M = f_ob / f_ok = 150 / 5 = 30 kali; L = f_ob + f_ok = 150 + 5 = 155 cm.'
      },
      {
        id: 3,
        text: 'Bayangan akhir yang dibentuk lensa okuler dan masuk ke mata pengamat bersifat nyata, tegak, dan terletak pada jarak 25 cm di depan okuler.',
        isCorrect: false,
        explanation: 'Salah. Untuk mata tanpa akomodasi, bayangan akhir oleh lensa okuler bersifat maya, terbalik terhadap objek asli, dan terletak di tak terhingga (∞).'
      }
    ],
    discussion: {
      concept: 'Hukum Pembentukan Citra Optis pada Teropong Bintang Kepler',
      known: [
        'Fokus objektif: f_{ob} = 150 cm',
        'Fokus okuler: f_{ok} = 5.0 cm',
        'Objek: satelit Jupiter (s = ∞)',
        'Kondisi: tanpa akomodasi'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan',
      keyFormula: 's\'_{ob} = f_{ob}, \\quad M = \\frac{f_{ob}}{f_{ok}}, \\quad L = f_{ob} + f_{ok}',
      formulaReason: 'Pada teropong astronomi bias sederhana (dua lensa cembung), bayangan akhir bersifat maya, terbalik, dan diperbesar.',
      steps: [
        '1. Objek di tak terhingga menghasilkan bayangan nyata tepat di fokus f_{ob}. (Pernyataan 1 BENAR)',
        '2. M = 150 / 5 = 30 kali, L = 150 + 5 = 155 cm. (Pernyataan 2 BENAR)',
        '3. Berkas sinar keluar dari okuler sebagai berkas sejajar, membentuk bayangan maya di tak terhingga yang terbalik terhadap benda asli di langit. Tidak ada bayangan nyata di 25 cm. (Pernyataan 3 SALAH)'
      ],
      finalResult: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      interpretation: 'Teropong bintang Kepler menghasilkan bayangan terbalik di tak terhingga, yang tidak menjadi masalah dalam pengamatan astronomi karena di luar angkasa tidak ada konsep atas dan bawah.',
      distractorAnalysis: 'Pernyataan 3 memuat tiga kesalahan sekaligus: bayangan nyata (salah), tegak (salah), dan di 25 cm (salah).'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Karakteristik Mutlak Teropong Bintang',
      rule: 'Teropong Bintang Refraktor 2 Lensa Cembung: Bayangan akhir SELALU Maya, Terbalik, dan Diperbesar!',
      step: 'Jika tanpa akomodasi: s\'_ok = ∞, L = f_ob + f_ok. Ingat sifat ini untuk menyingkirkan opsi salah dalam hitungan detik.',
      formula: '\\text{Bayangan Akhir: Maya, Terbalik, Diperbesar di } \\infty'
    }
  },

  // 19. Teropong bintang mata berakomodasi maksimum (PG - Menengah)
  {
    id: 19,
    subtopicId: 'teropong-akomodasi-maks',
    subtopicTitle: 'Teropong Bintang Berakomodasi Maksimum',
    type: 'pg',
    difficulty: 'Menengah',
    title: 'Pengamatan Teropong Bintang dengan Mata Berakomodasi Maksimum',
    stimulus: {
      type: 'scenario',
      text: 'Seorang astronom amatir mengamati kawah Bulan menggunakan teropong bintang yang memiliki lensa objektif berfokus f_ob = 80 cm dan lensa okuler berfokus f_ok = 4.0 cm. Pengamat memiliki mata normal dengan jarak baca dekat baku Sn = 20 cm dan mengamati objek dengan mata berakomodasi maksimum.',
      diagram: {
        type: 'telescope',
        f1: 80,
        f2: 4.0,
        label: 'Diagram Teropong Bintang Berakomodasi Maksimum (s\'_ok = -20 cm)'
      }
    },
    narration: {
      part1Intro: 'Kita masuk ke Submateri 7: Teropong Bintang Mata Berakomodasi Maksimum bersama Mister Jo.',
      part2Stimulus: 'Objektif berfokus 80 cm, okuler 4 cm, dan Sn pengamat adalah 20 cm. Mata berakomodasi maksimum sehingga bayangan akhir okuler berada di 20 cm.',
      part3Question: 'Berapakah perbesaran sudut teropong dan panjang tabung teropong pada kondisi berakomodasi maksimum ini?',
      part4Hint: 'Gunakan rumus perbesaran sudut teropong akomodasi maksimum: M = (f_ob / f_ok) dikali (1 + f_ok / Sn). Dan panjang teropong d = f_ob + s_ok.',
      part5Discussion: 'M = (80 / 4) dikali (1 + 4 / 20) = 20 dikali 1.2 = 24 kali. s_ok dihitung dari 1/s_ok = 1/4 + 1/20 = 6/20, jadi s_ok = 10/3 = 3.33 cm. Panjang teropong = 80 + 3.33 = 83.33 cm.'
    },
    questionText: 'Berapakah perbesaran sudut dan panjang tabung teropong bintang saat mata pengamat berakomodasi maksimum?',
    options: [
      { key: 'A', text: '20 kali dan 84.0 cm' },
      { key: 'B', text: '24 kali dan 83.33 cm' },
      { key: 'C', text: '24 kali dan 85.0 cm' },
      { key: 'D', text: '25 kali dan 83.33 cm' },
      { key: 'E', text: '20 kali dan 83.33 cm' }
    ],
    correctKey: 'B',
    discussion: {
      concept: 'Perbesaran Sudut dan Panjang Teropong Bintang Akomodasi Maksimum',
      known: [
        'Fokus objektif: f_{ob} = 80 cm',
        'Fokus okuler: f_{ok} = 4.0 cm',
        'Titik dekat mata: S_n = 20 cm',
        'Kondisi: berakomodasi maksimum (s\'_{ok} = -S_n = -20 cm)'
      ],
      asked: 'Perbesaran sudut (M) dan panjang teropong (d)',
      keyFormula: 'M = \\frac{f_{ob}}{s_{ok}} = \\frac{f_{ob}}{f_{ok}} \\left(1 + \\frac{f_{ok}}{S_n}\\right), \\quad d = f_{ob} + s_{ok}',
      formulaReason: 'Lensa objektif membentuk bayangan di f_ob. Okuler membesarkan bayangan tersebut ke titik dekat Sn (-20 cm).',
      steps: [
        '1. Menghitung s_{ok}: 1/s_{ok} = 1/f_{ok} - 1/s\'_{ok} = 1/4 - 1/(-20) = 1/4 + 1/20 = 6/20 cm^-1 -> s_{ok} = 20/6 = 10/3 cm ≈ 3.333 cm.',
        '2. Menghitung perbesaran sudut: M = f_{ob} / s_{ok} = 80 / (10/3) = 80 x 3 / 10 = 24 kali.',
        'Atau rumus langsung: M = (80 / 4) x (1 + 4 / 20) = 20 x 1.2 = 24 kali.',
        '3. Panjang teropong: d = f_{ob} + s_{ok} = 80 + 3.333 = 83.333 cm ≈ 83.33 cm.'
      ],
      finalResult: 'M = 24 kali dan d = 83.33 cm',
      interpretation: 'Ketika mata berakomodasi maksimum, perbesaran meningkat dari 20x menjadi 24x, dan tabung teropong memendek dari 84 cm menjadi 83.33 cm (berkurang 0.67 cm).',
      distractorAnalysis: 'Opsi A adalah kondisi tanpa akomodasi (M = 80/4 = 20x, d = 80 + 4 = 84 cm). Opsi C salah pada perhitungan panjang tabung.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Formula Kilat Teropong Akomodasi Maksimum',
      rule: 'M = (f_ob / f_ok) · (1 + f_ok / Sn). Panjang d = f_ob + (f_ok · Sn)/(f_ok + Sn)!',
      step: 'M = 20 · (1 + 0.2) = 24x. s_ok = (4 · 20) / 24 = 80/24 = 10/3 = 3.33 cm -> d = 83.33 cm!',
      formula: 'M = \\frac{f_{ob}}{f_{ok}} \\left(1 + \\frac{f_{ok}}{S_n}\\right)'
    }
  },

  // 20. Teropong bintang mata berakomodasi maksimum (PGK - Sulit)
  {
    id: 20,
    subtopicId: 'teropong-akomodasi-maks',
    subtopicTitle: 'Teropong Bintang Berakomodasi Maksimum',
    type: 'pgk',
    difficulty: 'Sulit',
    title: 'Komparasi Kinerja Teropong Bintang: Relaks vs Akomodasi Maksimum',
    stimulus: {
      type: 'experiment',
      text: 'Sebuah teropong bintang memiliki lensa objektif dengan fokus f_ob = 100 cm dan lensa okuler dengan fokus f_ok = 5.0 cm. Seorang pengamat bermata normal (Sn = 25 cm) melakukan pengamatan benda langit mula-mula tanpa akomodasi, kemudian mengubah posisi lensa okuler agar matanya berakomodasi maksimum.',
      diagram: {
        type: 'telescope',
        f1: 100,
        f2: 5.0,
        label: 'Diagram Komparasi Tabung Teropong Relaks vs Akomodasi Maksimum'
      }
    },
    narration: {
      part1Intro: 'Soal nomor 20 adalah Pilihan Ganda Kompleks. Kita membandingkan langsung kinerja teropong bintang pada kondisi relaks vs akomodasi maksimum.',
      part2Stimulus: 'Fokus objektif 100 cm, okuler 5 cm, dan titik dekat normal 25 cm. Pengamat mengubah setelan dari tanpa akomodasi ke akomodasi maksimum.',
      part3Question: 'Pilihlah seluruh pernyataan yang benar mengenai perbesaran sudut akomodasi maksimum, panjang tabung baru, dan arah pergeseran lensa okuler.',
      part4Hint: 'Hitung perbesaran dan panjang tabung pada kedua kondisi, lalu amati perbedaan nilai dan arah pergeserannya.',
      part5Discussion: 'Kondisi relaks: M = 100/5 = 20 kali, d = 100 + 5 = 105 cm. Kondisi akomodasi maksimum: M = 20 x (1 + 5/25) = 20 x 1.2 = 24 kali. s_ok = (5 x 25)/30 = 25/6 = 4.17 cm, sehingga d = 104.17 cm. Lensa okuler dimajukan mendekati objektif sejauh 105 dikurang 104.17 = 0.83 cm.'
    },
    questionText: 'Manakah pernyataan-pernyataan berikut yang BENAR mengenai perubahan sistem teropong tersebut? (Pilihlah semua yang benar)',
    options: [
      { key: 'A', text: 'Perbesaran sudut teropong saat berakomodasi maksimum adalah 24 kali.' },
      { key: 'B', text: 'Panjang tabung teropong saat berakomodasi maksimum adalah sekitar 104.17 cm.' },
      { key: 'C', text: 'Saat beralih dari tanpa akomodasi ke akomodasi maksimum, lensa okuler harus digeser sejauh 0.83 cm mendekati lensa objektif.' },
      { key: 'D', text: 'Perbesaran sudut teropong mengalami penurunan saat mata berakomodasi maksimum.' },
      { key: 'E', text: 'Panjang tabung teropong saat berakomodasi maksimum bertambah panjang menjadi 106.0 cm.' }
    ],
    correctKeys: ['A', 'B', 'C'],
    discussion: {
      concept: 'Perbandingan Optis Teropong Bintang Relaks vs Akomodasi Maksimum',
      known: [
        'Fokus objektif: f_{ob} = 100 cm',
        'Fokus okuler: f_{ok} = 5.0 cm',
        'Jarak baca normal: S_n = 25 cm'
      ],
      asked: 'Evaluasi opsi A, B, C, D, E',
      keyFormula: 'M_{relaks} = \\frac{f_{ob}}{f_{ok}}, \\quad M_{maks} = \\frac{f_{ob}}{f_{ok}} \\left(1 + \\frac{f_{ok}}{S_n}\\right), \\quad d_{relaks} = f_{ob} + f_{ok}, \\quad d_{maks} = f_{ob} + \\frac{f_{ok} \\cdot S_n}{f_{ok} + S_n}',
      formulaReason: 'Kondisi akomodasi maksimum memperbesar bayangan sudut tetapi memerlukan lensa okuler lebih dekat ke bayangan objektif.',
      steps: [
        '1. Kondisi relaks: M_1 = 100 / 5 = 20x. d_1 = 100 + 5 = 105.0 cm.',
        '2. Kondisi akomodasi maks: M_2 = (100 / 5) x (1 + 5 / 25) = 20 x 1.2 = 24 kali. (Pernyataan A BENAR)',
        '3. Jarak okuler: s_{ok2} = (5.0 x 25) / (5.0 + 25) = 125 / 30 = 25/6 ≈ 4.167 cm. Panjang tabung: d_2 = 100 + 4.167 = 104.167 cm ≈ 104.17 cm. (Pernyataan B BENAR)',
        '4. Pergeseran lensa okuler: Δd = d_1 - d_2 = 105.0 - 104.167 = 0.833 cm ≈ 0.83 cm (mendekati lensa objektif). (Pernyataan C BENAR)',
        '5. Perbesaran mengalami peningkatan (20x -> 24x), bukan penurunan. (Pernyataan D SALAH)',
        '6. Tabung memendek menjadi 104.17 cm, bukan bertambah panjang. (Pernyataan E SALAH)'
      ],
      finalResult: 'Pernyataan A, B, dan C adalah BENAR.',
      interpretation: 'Berakomodasi maksimum menghasilkan perbesaran 20% lebih besar (24x vs 20x) dengan konsekuensi tabung harus memendek 0.83 cm dan mata lebih cepat lelah.',
      distractorAnalysis: 'Pernyataan D dan E bertolak belakang dengan hukum optika geometri teropong.'
    },
    quickTrick: {
      title: 'Trik Cepat Mister Jo: Pergeseran Tabung Teropong',
      rule: 'Tabung teropong saat akomodasi maksimum SELALU MEMENDEK sebesar: Δd = f_ok^2 / (f_ok + Sn)!',
      step: 'Δd = 5^2 / (5 + 25) = 25 / 30 = 5/6 = 0.833 cm memendek!',
      formula: '\\Delta d = \\frac{f_{ok}^2}{f_{ok} + S_n}'
    }
  }
];
