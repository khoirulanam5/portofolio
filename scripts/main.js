/* ── Project data ── */
const projects = [
  { id:33, title:'Rekomendasi Hotel (Apriori & FP-Growth)', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto33-fpgrowth.PNG', github:'https://github.com/khoirulanam5/Hotel-Room-Facility-Recommendation-System-with-Apriori-and-FP-Growth.git', desc:'Sistem rekomendasi fasilitas kamar hotel menggunakan algoritma Apriori dan FP-Growth untuk menemukan pola asosiasi dari data transaksi tamu secara efisien.', images:['images/Porto33-fpgrowth.PNG'] },
  { id:32, title:'Aplikasi Manajemen Kasir', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto32-kasir.PNG', github:'https://github.com/khoirulanam5/kasir.git', desc:'Aplikasi kasir berbasis web untuk manajemen transaksi penjualan, stok produk, laporan harian, dan pengelolaan data pelanggan secara real-time.', images:['images/Porto32-kasir.PNG'] },
  { id:31, title:'Aplikasi Bantuan Alat Pertanian', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto31-sipbap.JPG', github:'https://github.com/khoirulanam5/sipbap.git', desc:'Sistem informasi pengajuan dan pengelolaan bantuan alat pertanian untuk memfasilitasi proses administrasi antara petani dan dinas terkait.', images:['images/Porto31-sipbap.JPG'] },
  { id:30, title:'Aplikasi Bimbingan Konseling', stack:['Laravel 12','MySQL','Bootstrap'], img:'images/Porto30-bk.png', github:'https://github.com/khoirulanam5/bimbingan-konseling.git', desc:'Sistem manajemen bimbingan konseling siswa yang memfasilitasi pencatatan sesi konseling, laporan perkembangan, dan komunikasi antara guru BK dan siswa.', images:['images/Porto30-bk.png'] },
  { id:29, title:'Aplikasi Berita Acara', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto29-bap.PNG', github:'https://github.com/khoirulanam5/bap-imigrasi.git', desc:'Sistem pengelolaan berita acara pemeriksaan digital untuk kantor imigrasi, dilengkapi fitur tanda tangan digital dan arsip dokumen.', images:['images/Porto29-bap.PNG'] },
  { id:28, title:'Aplikasi Pelayanan WNA', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto28-pelayanan.PNG', github:'https://github.com/khoirulanam5/pelayanan.git', desc:'Sistem pelayanan warga negara asing berbasis web untuk mempermudah proses administrasi, pendataan, dan monitoring status permohonan izin.', images:['images/Porto28-pelayanan.PNG'] },
  { id:27, title:'Aplikasi Pengajuan UMKM', stack:['PHP','MySQL','Bootstrap'], img:'images/Porto27-umkm.JPG', github:'https://github.com/khoirulanam5/umkm.git', desc:'Sistem pengajuan dan verifikasi UMKM online untuk memudahkan proses registrasi, validasi data usaha, dan pelaporan kepada dinas terkait.', images:['images/Porto27-umkm.JPG'] },
  { id:26, title:'Aplikasi Task Management', stack:['Laravel 12','MySQL','Bootstrap'], img:'images/Porto26-task.JPG', github:'https://github.com/khoirulanam5/task_management.git', desc:'Aplikasi manajemen tugas tim dengan fitur kanban board, assignment anggota, deadline tracker, dan progress monitoring secara real-time.', images:['images/Porto26-task.JPG'] },
  { id:25, title:'Aplikasi Warehouse Inventori', stack:['Laravel 12','MySQL','Bootstrap'], img:'images/Porto25-warehouse.JPG', github:'https://github.com/khoirulanam5/warehouse.git', desc:'Sistem manajemen gudang komprehensif dengan fitur pencatatan stok, penerimaan dan pengeluaran barang, serta laporan inventory secara periodik.', images:['images/Porto25-warehouse.JPG'] },
  { id:24, title:'Aplikasi Pengadaan Barang', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto24-pengadaan.PNG', github:'https://github.com/khoirulanam5/pengadaan-barang.git', desc:'Sistem pengadaan barang yang mengotomatisasi proses permintaan, persetujuan, pembelian, dan penerimaan barang dalam satu platform terintegrasi.', images:['images/Porto24-pengadaan.PNG'] },
  { id:23, title:'Aplikasi E-Perpustakaan', stack:['CodeIgniter 4','MySQL','Bootstrap'], img:'images/Porto23-perpus-qr.PNG', github:'https://github.com/khoirulanam5/perpus-qr.git', desc:'Perpustakaan digital dengan fitur QR code untuk peminjaman buku, pencarian koleksi, manajemen anggota, dan notifikasi pengembalian otomatis.', images:['images/Porto23-perpus-qr.PNG'] },
  { id:22, title:'Aplikasi Order Makanan', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto22-ma.PNG', github:'https://github.com/khoirulanam5/menu-ordering.git', desc:'Sistem pemesanan makanan berbasis web dengan tampilan menu interaktif, keranjang belanja, manajemen meja, dan dapur order real-time.', images:['images/Porto22-ma.PNG'] },
  { id:21, title:'Aplikasi Stok Obat', stack:['PHP','MySQL','Bootstrap'], img:'images/Porto21-stock_obat.PNG', github:'https://github.com/khoirulanam5/stock-obat.git', desc:'Sistem manajemen stok obat apotek dengan fitur notifikasi stok menipis, expired date monitoring, dan laporan penggunaan obat bulanan.', images:['images/Porto21-stock_obat.PNG'] },
  { id:20, title:'Inventori Toko Ban Motor', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto20-inventori_ban.PNG', github:'https://github.com/khoirulanam5/inventori-toko-ban.git', desc:'Sistem inventori khusus toko ban motor dengan manajemen stok berdasarkan ukuran, merk, dan tipe ban, serta laporan penjualan harian.', images:['images/Porto20-inventori_ban.PNG'] },
  { id:19, title:'Seleksi Siswa Berprestasi', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto19-profile_match.PNG', github:'https://github.com/khoirulanam5/profile-match.git', desc:'Sistem pendukung keputusan seleksi siswa berprestasi menggunakan metode Profile Matching dengan kriteria akademik dan non-akademik terukur.', images:['images/Porto19-profile_match.PNG'] },
  { id:18, title:'Aplikasi Rekam Medis', stack:['CodeIgniter 3','MySQL','Bootstrap'], img:'images/Porto18-rm.PNG', github:'https://github.com/khoirulanam5/rekam-medis.git', desc:'Sistem rekam medis elektronik untuk klinik dan puskesmas dengan fitur riwayat kunjungan, resep digital, dan laporan statistik kesehatan.', images:['images/Porto18-rm.PNG'] },
  {
    id: 17,
    title: 'Aplikasi Menentukan Siswa Terbaik',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/18.topsis/6.PNG',
    github: 'https://github.com/khoirulanam5/topsis.git',
    desc: 'Sistem pendukung keputusan penentuan siswa terbaik menggunakan metode TOPSIS dengan bobot kriteria yang dapat dikonfigurasi oleh admin.',
    images: Array.from({ length: 10 }, (_, i) => `images/18.topsis/${i + 1}.PNG`)
  },
  {
    id: 16,
    title: 'Aplikasi Manajemen Terminal',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/17.terminal/2.PNG',
    github: 'https://github.com/khoirulanam5/manajemen-terminal.git',
    desc: 'Sistem manajemen terminal bus untuk pencatatan kedatangan/keberangkatan, data penumpang, retribusi, dan laporan operasional terminal.',
    images: Array.from({ length: 10 }, (_, i) => `images/17.terminal/${i + 1}.PNG`)
  },
  {
    id: 15,
    title: 'Aplikasi Manajemen Catering',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    img: 'images/16.catering/1.PNG',
    github: 'https://github.com/khoirulanam5/manajemen-pemesanan-catering.git',
    desc: 'Sistem pemesanan dan manajemen catering dengan fitur menu planner, jadwal pengiriman, invoice otomatis, dan manajemen bahan baku.',
    images: Array.from({ length: 10 }, (_, i) => `images/16.catering/${i + 1}.PNG`)
  },
  {
    id: 14,
    title: 'Aplikasi Rental Mobil',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/15.rental/4.PNG',
    github: 'https://github.com/khoirulanam5/rental-mobil.git',
    desc: 'Sistem rental mobil lengkap dengan manajemen armada, booking online, kalkulasi biaya otomatis, dan laporan pendapatan periodik.',
    images: Array.from({ length: 10 }, (_, i) => `images/15.rental/${i + 1}.PNG`)
  },
  {
    id: 13,
    title: 'Aplikasi Manajemen Klinik',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/14.siluka/5.PNG',
    github: 'https://github.com/khoirulanam5/siluka.git',
    desc: 'Sistem informasi klinik terintegrasi mencakup pendaftaran pasien, antrian dokter, rekam medis, apotek, dan billing pasien secara digital.',
    images: Array.from({ length: 10 }, (_, i) => `images/14.siluka/${i + 1}.PNG`)
  },
  {
    id: 12,
    title: 'Aplikasi Penjualan Aquarium',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/13.aquarium/8.PNG',
    github: 'https://github.com/khoirulanam5/penjualan-aquarium.git',
    desc: 'Toko online aquarium dengan katalog produk, manajemen pesanan, stok ikan dan perlengkapan, serta laporan penjualan terintegrasi.',
    images: Array.from({ length: 10 }, (_, i) => `images/13.aquarium/${i + 1}.PNG`)
  },
  {
    id: 11,
    title: 'Aplikasi Monitoring Data Stunting',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/12.stunting/9.PNG',
    github: 'https://github.com/khoirulanam5/sistem-monitoring-stunting.git',
    desc: 'Sistem monitoring pertumbuhan balita berbasis web untuk deteksi dini stunting dengan grafik perkembangan, alert risiko, dan laporan posyandu.',
    images: Array.from({ length: 10 }, (_, i) => `images/12.stunting/${i + 1}.PNG`)
  },
  {
    id: 10,
    title: 'Aplikasi Inventaris',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/11.inventaris/1.PNG',
    github: 'https://github.com/khoirulanam5/inventaris-barang-non-medis-rs.git',
    desc: 'Sistem inventaris barang non-medis rumah sakit dengan fitur QR code aset, mutasi barang antar departemen, dan laporan kondisi aset.',
    images: Array.from({ length: 10 }, (_, i) => `images/11.inventaris/${i + 1}.PNG`)
  },
  {
    id: 9,
    title: 'Aplikasi KPI Karyawan',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/10.kpikinerja/10.PNG',
    github: 'https://github.com/khoirulanam5/kpi-kinerja.git',
    desc: 'Sistem evaluasi KPI karyawan dengan indikator kinerja yang dapat dikustomisasi, dashboard performa, dan laporan penilaian per periode.',
    images: Array.from({ length: 10 }, (_, i) => `images/10.kpikinerja/${i + 1}.PNG`)
  },
  {
    id: 8,
    title: 'Aplikasi Maintenance Kendaraan',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/9.maintenance/6.PNG',
    github: 'https://github.com/khoirulanam5/Emaintenance.git',
    desc: 'Sistem manajemen perawatan kendaraan operasional dengan jadwal servis, riwayat perbaikan, biaya maintenance, dan alert jadwal rutin.',
    images: Array.from({ length: 10 }, (_, i) => `images/9.maintenance/${i + 1}.PNG`)
  },
  {
    id: 7,
    title: 'Aplikasi Persuratan',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/8.surat/4.PNG',
    github: 'https://github.com/khoirulanam5/persuratan.git',
    desc: 'Sistem persuratan digital untuk instansi pemerintah dan swasta dengan fitur surat masuk/keluar, disposisi, dan arsip dokumen terstruktur.',
    images: Array.from({ length: 10 }, (_, i) => `images/8.surat/${i + 1}.PNG`)
  },
  {
    id: 6,
    title: 'Aplikasi Presensi',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/7.presensi/1.PNG',
    github: 'https://github.com/khoirulanam5/presensi.git',
    desc: 'Sistem absensi karyawan berbasis web dengan integrasi QR code, rekap kehadiran otomatis, izin/cuti online, dan laporan bulanan.',
    images: Array.from({ length: 10 }, (_, i) => `images/7.presensi/${i + 1}.PNG`)
  },
  {
    id: 5,
    title: 'Aplikasi Inventori',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/6.inventori/2.PNG',
    github: 'https://github.com/khoirulanam5/inventori.git',
    desc: 'Sistem manajemen inventori barang umum dengan pencatatan keluar-masuk, stok minimum alert, laporan persediaan, dan manajemen supplier.',
    images: Array.from({ length: 10 }, (_, i) => `images/6.inventori/${i + 1}.PNG`)
  },
  {
    id: 4,
    title: 'Aplikasi Penjualan Hijab',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/5.tasbiha/1.PNG',
    github: 'https://github.com/khoirulanam5/penjualan_hijab.git',
    desc: 'Toko online busana muslim dengan katalog produk, keranjang belanja, manajemen pesanan dan pengiriman, serta laporan penjualan.',
    images: Array.from({ length: 10 }, (_, i) => `images/5.tasbiha/${i + 1}.PNG`)
  },
  {
    id: 3,
    title: 'Aplikasi Penjualan Sparepart',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/4.sparepart/5.PNG',
    github: 'https://github.com/khoirulanam5/penjualan_sparepart.git',
    desc: 'Sistem penjualan sparepart kendaraan dengan manajemen stok per kategori, pencarian cepat, transaksi kasir, dan laporan stok harian.',
    images: Array.from({ length: 10 }, (_, i) => `images/4.sparepart/${i + 1}.PNG`)
  },
  {
    id: 2,
    title: 'Inventori Bahan Baku Roti',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    img: 'images/3.roti/1.PNG',
    github: 'https://github.com/khoirulanam5/inventori-bahan-roti-fifo.git',
    desc: 'Sistem inventori bahan baku roti dengan metode FIFO untuk memastikan bahan terlama digunakan lebih dulu, dilengkapi alert kadaluarsa.',
    images: Array.from({ length: 10 }, (_, i) => `images/3.roti/${i + 1}.PNG`)
  },
  {
    id: 1,
    title: 'Aplikasi E-Tiket & Penyewaan Bus',
    stack: ['CodeIgniter 3', 'MySQL', 'Bootstrap'],
    img: 'images/2.bus/6.PNG',
    github: 'https://github.com/khoirulanam5/E-Tiket.git',
    desc: 'Platform pemesanan tiket dan penyewaan bus online dengan fitur pemilihan kursi interaktif, pembayaran digital, dan manajemen armada.',
    images: Array.from({ length: 10 }, (_, i) => `images/2.bus/${i + 1}.PNG`)
  },
  {
    id: 0,
    title: 'Aplikasi Pengajuan Cuti Pegawai',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    img: 'images/1.cuti/1.PNG',
    github: 'https://github.com/khoirulanam5/Sistem-Pengajuan-Cuti-Pegawai-Berbasis-Web.git',
    desc: 'Sistem pengajuan cuti pegawai digital dengan alur persetujuan multi-level, kalender cuti tim, saldo cuti otomatis, dan notifikasi status.',
    images: Array.from({ length: 10 }, (_, i) => `images/1.cuti/${i + 1}.PNG`)
  }
];

/* =========================================================
   DOM REFERENCES
   ========================================================= */
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const scrollTopBtn = document.getElementById('scroll-top');
const projectModal = document.getElementById('project-modal');
const lightbox   = document.getElementById('lightbox');

/* =========================================================
   INJECT NAV-LINKS LANGSUNG KE <body>
   Ini satu-satunya cara agar position:fixed bekerja benar
   di mobile — jauh dari semua stacking context (backdrop-filter
   pada nav, transform animasi, dll).
   ========================================================= */
const navLinks = document.createElement('ul');
navLinks.id        = 'nav-links';
navLinks.className = 'nav-links';
navLinks.innerHTML = `
  <li><a href="#about">About</a></li>
  <li><a href="#skill">Skills</a></li>
  <li><a href="#portofolio">Projects</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#contact">Contact</a></li>
`;
document.body.appendChild(navLinks);

/* =========================================================
   MOBILE NAV
   ========================================================= */

// Create overlay element once
const navOverlay = document.createElement('div');
navOverlay.id = 'nav-overlay';
document.body.appendChild(navOverlay);

function openNav() {
  navLinks.classList.add('open');
  hamburger.classList.add('active');
  navOverlay.classList.add('show');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  navOverlay.classList.remove('show');
  document.body.style.overflow = ''; // restore scroll
}

function toggleNav() {
  navLinks.classList.contains('open') ? closeNav() : openNav();
}

// Close nav when overlay is tapped
navOverlay.addEventListener('click', closeNav);

// Close nav when any nav link is tapped (smooth scroll still works)
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

// Close nav on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeNav();
    closeModal();
    closeLightbox();
  }
});

/* =========================================================
   RENDER PROJECTS
   ========================================================= */
const grid = document.getElementById('projects-grid');

projects.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.style.transitionDelay = `${(i % 6) * 0.06}s`;
  card.addEventListener('click', () => openModal(p));

  card.innerHTML = `
    <img class="project-thumb" src="${p.img}" alt="${p.title}"
         onerror="this.outerHTML='<div class=\\'project-thumb-placeholder\\'><i class=\\'fas fa-code\\'></i></div>'">
    <div class="project-body">
      <div class="project-stack">${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}</div>
      <div class="project-title">${p.title}</div>
    </div>
    <div class="project-arrow"><i class="fas fa-arrow-up-right-from-square"></i></div>
  `;

  grid.appendChild(card);
});

/* =========================================================
   PROJECT MODAL
   ========================================================= */
function openModal(p) {
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent  = p.desc;
  document.getElementById('modal-github').href       = p.github;
  document.getElementById('modal-stack').innerHTML   = p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('');

  const imgs = document.getElementById('modal-images');
  imgs.innerHTML = '';
  (p.images || []).forEach(src => {
    const wrap = document.createElement('div');
    wrap.className = 'modal-img-wrap';
    wrap.innerHTML = `
      <img src="${src}" alt="${p.title}"
           onerror="this.outerHTML='<div class=\\'modal-img-placeholder\\'><i class=\\'fas fa-image\\'></i></div>'"
           onclick="openLightbox('${src}')">
    `;
    imgs.appendChild(wrap);
  });

  projectModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  projectModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal when backdrop is clicked
document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);

/* =========================================================
   LIGHTBOX
   ========================================================= */
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

/* =========================================================
   CUSTOM CURSOR (desktop only)
   ========================================================= */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

if (cursor && ring && window.matchMedia('(pointer: fine)').matches) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function animCursor() {
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animCursor);
  })();

  document.querySelectorAll('a, button, .project-card, .modal-img-wrap').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}

/* =========================================================
   NAVBAR SCROLL + SCROLL-TO-TOP BUTTON
   ========================================================= */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  navbar.classList.toggle('scrolled', scrolled);
  navLinks.classList.toggle('scrolled', scrolled);
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

/* =========================================================
   SCROLL REVEAL + SKILL BAR ANIMATION
   ========================================================= */
const skillsAnimated = new Set();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');

    // Animate skill bar on first reveal
    if (entry.target.dataset.pct && !skillsAnimated.has(entry.target)) {
      skillsAnimated.add(entry.target);
      setTimeout(() => {
        const fill = entry.target.querySelector('.skill-fill');
        if (fill) fill.style.width = entry.target.dataset.pct + '%';
      }, 100);
    }

    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .skill-item').forEach(el => revealObserver.observe(el));