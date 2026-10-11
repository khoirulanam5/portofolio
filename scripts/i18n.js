/* ── i18n: Indonesia (default) / English ── */
(function () {
  const KEY = 'portfolio-lang';
  let lang = 'id';
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'id') lang = s; } catch (e) {}

  /* [Indonesia, English] — teks HTML dicocokkan dengan salah satu sisi */
  const PAIRS = [
    ['Portofolio', 'Portfolio'],
    ['Tersedia untuk bekerja', 'Available for work'],
    ['Rekrut Saya', 'Hire Me'],
    ['Unduh CV', 'Download CV'],
    ['Fullstack Web Developer — membangun aplikasi web yang fungsional, responsif, dan berorientasi pengguna.', 'Fullstack Web Developer — building functional, responsive, and user-oriented web applications.'],
    /* nav & judul */
    ['Tentang', 'About'], ['Keahlian', 'Skills'], ['Proyek', 'Projects'], ['Pengalaman', 'Experience'], ['Kontak', 'Contact'],
    ['Tentang Saya', 'About Me'], ['Keahlian Teknis', 'Technical Skills'], ['Karya', 'Work'],
    ['Pengalaman Kerja', 'Work Experience'], ['Karier', 'Career'], ['Pendidikan', 'Education'], ['Hubungi Saya', 'Contact Me'],
    /* about */
    ['Halo! Saya Khoirul Anam, seorang Fullstack Web Developer dengan pengalaman lebih dari 2 tahun dalam merancang dan mengembangkan aplikasi web yang fungsional, responsif, dan berorientasi pengguna.',
     "Hello! I'm Khoirul Anam, a Fullstack Web Developer with more than 2 years of experience designing and building functional, responsive, user-oriented web applications."],
    ['Saya mengkhususkan diri pada backend development menggunakan PHP, CodeIgniter, dan Laravel, termasuk merancang dan mengintegrasikan REST API, dengan pengalaman langsung dalam membangun sistem yang aman dan skalabel. Di sisi frontend, saya menggunakan HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, dan Vue.js untuk membangun antarmuka yang interaktif dan responsif.',
     'I specialize in backend development with PHP, CodeIgniter, and Laravel, including designing and integrating REST APIs, with hands-on experience building secure and scalable systems. On the frontend, I use HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Vue.js to build interactive, responsive interfaces.'],
    ['Untuk meningkatkan performa dan keandalan sistem, saya menggunakan Redis untuk caching, RabbitMQ untuk antrean pesan, MinIO untuk object storage, dan Sentry untuk monitoring error.',
     'To improve system performance and reliability, I use Redis for caching, RabbitMQ for message queuing, MinIO for object storage, and Sentry for error monitoring.'],
    ['Selain development, saya memiliki pemahaman yang kuat tentang analisis dan desain sistem menggunakan FOD, UML, ERD, dan Flowchart untuk mendukung perencanaan terstruktur.',
     'Besides development, I have a solid understanding of system analysis and design using FOD, UML, ERD, and Flowcharts to support structured planning.'],
    ['Saya juga menggunakan Git dan Docker untuk menjaga alur kerja pengembangan yang efisien, version control, dan lingkungan deployment yang konsisten.',
     'I also use Git and Docker to keep the development workflow efficient, with proper version control and consistent deployment environments.'],
    ['Lokasi', 'Location'], ['Bahasa', 'Languages'], ['Indonesia, English', 'Indonesian, English'],
    ['Alamat', 'Address'], ['Telepon', 'Phone'],
    /* experience */
    ['Feb 2026 – Saat ini', 'Feb 2026 – Present'], ['Jul 2024 – Saat ini', 'Jul 2024 – Present'],
    ['Des 2022 – Feb 2023', 'Dec 2022 – Feb 2023'], ['Agust 2019 – Des 2020', 'Aug 2019 – Dec 2020'], ['Jul 2018 – Jun 2019', 'Jul 2018 – Jun 2019'],
    ['Staff Magang', 'Intern'], ['Staff Magang IT', 'IT Intern'], ['Operator Mesin', 'Machine Operator'],
    ['Dinas Kesehatan Kab. Kudus', 'Kudus Regency Health Office'],
    ['Mengembangkan dan memelihara aplikasi web internal menggunakan CodeIgniter dan MySQL, termasuk merancang dan mengintegrasikan REST API.', 'Developing and maintaining internal web applications using CodeIgniter and MySQL, including designing and integrating REST APIs.'],
    ['Mendesain antarmuka interaktif dan responsif menggunakan HTML, CSS, JavaScript, dan Bootstrap.', 'Designing interactive, responsive interfaces using HTML, CSS, JavaScript, and Bootstrap.'],
    ['Membangun sistem internal serta mengotomatisasi proses pengolahan data, dengan pemrosesan latar belakang secara asinkron menggunakan RabbitMQ.', 'Building internal systems and automating data processing, with asynchronous background processing using RabbitMQ.'],
    ['Mengimplementasikan Redis untuk caching agar respons aplikasi lebih cepat.', 'Implementing Redis caching to speed up application responses.'],
    ['Mengelola penyimpanan file dan dokumen menggunakan MinIO (object storage).', 'Managing file and document storage using MinIO (object storage).'],
    ['Memantau error dan performa aplikasi secara real-time menggunakan Sentry.', 'Monitoring application errors and performance in real time using Sentry.'],
    ['Menggunakan Git dan Docker untuk version control dan deployment.', 'Using Git and Docker for version control and deployment.'],
    ['Berkolaborasi dengan tim untuk meningkatkan pengalaman pengguna pada sistem internal kampus.', "Collaborating with the team to improve user experience on the campus's internal systems."],
    ['Mengembangkan website dinamis yang user-friendly dan disesuaikan dengan kebutuhan klien.', 'Developing dynamic, user-friendly websites tailored to client needs.'],
    ['Melakukan analisis dan perancangan sistem menggunakan FOD, UML, ERD, dan Flowchart.', 'Performing system analysis and design using FOD, UML, ERD, and Flowcharts.'],
    ['Mengelola backend menggunakan PHP, CodeIgniter, Laravel, dan REST API; database MySQL, SQLite, dan PostgreSQL.', 'Managing backends with PHP, CodeIgniter, Laravel, and REST APIs; databases with MySQL, SQLite, and PostgreSQL.'],
    ['Mendesain antarmuka menggunakan HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, dan Vue.js.', 'Designing interfaces with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Vue.js.'],
    ['Menggunakan Git dan Docker untuk version control serta otomatisasi development.', 'Using Git and Docker for version control and development automation.'],
    ['Mengelola data pengeluaran bulanan menggunakan Microsoft Excel.', 'Managing monthly expense data using Microsoft Excel.'],
    ['Mengoperasikan sistem web ANJAB untuk entri dan sinkronisasi data.', 'Operating the ANJAB web system for data entry and synchronization.'],
    ['Merancang dan mengembangkan sistem e-Cuti berbasis web untuk digitalisasi pengelolaan cuti pegawai.', 'Designing and developing a web-based e-Leave system to digitize employee leave management.'],
    ['Mengoperasikan mesin potong kain berskala besar dengan akurasi tinggi.', 'Operating large-scale fabric cutting machines with high accuracy.'],
    ['Mengoperasikan mesin pencelupan untuk proses pewarnaan kain.', 'Operating dyeing machines for fabric coloring.'],
    ['Mengoperasikan mesin sablon dan mesin hamada cetak tinggi.', 'Operating screen-printing and Hamada high-print machines.'],
    ['Memproduksi berbagai jenis kartu: KTP, ATM, dan SIM card.', 'Producing various card types: ID cards (KTP), ATM cards, and SIM cards.'],
    /* education */
    ['S1 Sistem Informasi', "Bachelor's in Information Systems"], ['Produksi Grafika', 'Graphic Production'],
    ['Menempuh pendidikan di bidang Sistem Informasi dengan fokus pada pengembangan perangkat lunak, analisis dan perancangan sistem, manajemen basis data, serta penerapan teknologi informasi untuk kebutuhan bisnis dan organisasi.',
     'Studied Information Systems with a focus on software development, system analysis and design, database management, and applying information technology to business and organizational needs.'],
    ['Mempelajari dasar-dasar produksi grafika, desain visual, dan teknik percetakan, serta membangun pemahaman awal tentang komputer dan teknologi sebagai fondasi keterampilan teknis digital.',
     'Learned the fundamentals of graphic production, visual design, and printing techniques, and built early knowledge of computers and technology as a foundation for digital technical skills.'],
    /* form & modal */
    ['Kirim Pesan', 'Send Message'], ['Lihat di GitHub', 'View on GitHub'],
    ['Nama Anda', 'Your Name'], ['Subjek', 'Subject'], ['Email Anda', 'Your Email'], ['Pesan Anda...', 'Your message...']
  ];

  /* Project [title, description] dalam English, berdasarkan id project.
     Judul = nama aplikasi (sama di ID dan EN). */
  const P = {
    39: ['InvenROP', 'Web-based inventory system that automates recording of incoming/outgoing goods and raw material stock in real time, using Reorder Point (ROP) and Safety Stock to determine the right reorder time and prevent stockouts.'],
    38: ['SIMKIOS', 'Location-based monitoring system for traditional market kiosks showing kiosk status and occupancy in real time, with Simple Additive Weighting (SAW) to prioritize vacant kiosks by accessibility, location, rent, and occupancy.'],
    37: ['FurniFit', 'Furniture customization recommender using Mamdani Fuzzy Logic to assess dimension and price fit, and a Knapsack algorithm to choose the best furniture combination for room size and budget, with a 3D layout visualization.'],
    36: ['SPK-Restok', 'Decision support system for prioritizing restocks with Simple Additive Weighting (SAW) based on stock level, sales, price, lead time, and demand, helping building-material stores control inventory more objectively.'],
    35: ['PhoneRank', 'Decision support system for choosing the best smartphone using Multi Attribute Utility Theory (MAUT), with multiple roles (Owner, Admin, Customer), ranking phones by defined criteria and weights.'],
    34: ['SIM-Resto', 'Web-based restaurant management system handling the order flow from cashier to kitchen, sales transactions, and raw material stock using First In First Out (FIFO) to reduce expiry risk.'],
    33: ['HotelRec', 'Hotel room facility recommender using the Apriori and FP-Growth algorithms to efficiently find association patterns in guest transaction data.'],
    32: ['SIKASIR', 'Web-based cashier app for managing sales transactions, product stock, daily reports, and customer data in real time.'],
    31: ['SIPBAP', 'Information system for submitting and managing agricultural equipment aid, streamlining administration between farmers and the relevant agency.'],
    30: ['SIBK', 'Student counseling management system for recording sessions, progress reports, and communication between counselors and students.'],
    29: ['E-BAP', 'Digital system for managing official examination reports for an immigration office, with digital signatures and document archiving.'],
    28: ['SIPELWA', 'Web-based service system for foreign nationals to simplify administration, data collection, and permit application status monitoring.'],
    27: ['E-UMKM', 'Online MSME submission and verification system that simplifies registration, business data validation, and reporting to the relevant agency.'],
    26: ['WMS Gudang', 'Comprehensive warehouse management system with stock recording, goods receipt and issue, and periodic inventory reports.'],
    25: ['E-Pengadaan', 'Procurement system that automates requests, approvals, purchasing, and goods receipt in one integrated platform.'],
    24: ['PerpusQR', 'Digital library with QR code book lending, collection search, member management, and automatic return notifications.'],
    23: ['MenuOrder', 'Web-based food ordering system with an interactive menu, shopping cart, table management, and real-time kitchen orders.'],
    22: ['SIMOBAT', 'Pharmacy medicine stock system with low-stock notifications, expiry date monitoring, and monthly usage reports.'],
    21: ['InvenBan', 'Inventory system for motorcycle tire shops with stock management by size, brand, and type, plus daily sales reports.'],
    20: ['SPK-Prestasi', 'Decision support system for selecting outstanding students using Profile Matching with measurable academic and non-academic criteria.'],
    19: ['SIREMED', 'Electronic medical records for clinics and community health centers with visit history, digital prescriptions, and health statistics reports.'],
    18: ['TopSiswa', 'Decision support system for determining the best student using TOPSIS, with criteria weights configurable by the admin.'],
    17: ['SIMTER', 'Bus terminal management system for recording arrivals/departures, passenger data, fees, and operational reports.'],
    16: ['SIMCATER', 'Catering order and management system with a menu planner, delivery schedule, automatic invoices, and raw material management.'],
    15: ['RentCar', 'Complete car rental system with fleet management, online booking, automatic cost calculation, and periodic revenue reports.'],
    14: ['SILUKA', 'Integrated clinic information system covering patient registration, doctor queues, medical records, pharmacy, and digital patient billing.'],
    13: ['AquaShop', 'Online aquarium store with a product catalog, order management, fish and equipment stock, and integrated sales reports.'],
    12: ['E-Stunting', 'Web-based toddler growth monitoring for early stunting detection, with growth charts, risk alerts, and posyandu reports.'],
    11: ['SIAS-RS', 'Non-medical hospital inventory system with asset QR codes, inter-department transfers, and asset condition reports.'],
    10: ['SIKINERJA', 'Employee KPI evaluation system with customizable performance indicators, a performance dashboard, and per-period assessment reports.'],
    9: ['E-Maintenance', 'Operational vehicle maintenance management with service schedules, repair history, maintenance costs, and routine schedule alerts.'],
    8: ['E-Surat', 'Digital correspondence system for government and private institutions with incoming/outgoing mail, dispositions, and structured document archives.'],
    7: ['E-Presensi', 'Web-based employee attendance with QR code integration, automatic attendance recap, online leave requests, and monthly reports.'],
    6: ['SIM-Inventori', 'General inventory management with in/out recording, minimum stock alerts, stock reports, and supplier management.'],
    5: ['TaStore', 'Muslim fashion online store with a product catalog, shopping cart, order and shipping management, and sales reports.'],
    4: ['SparepartKu', 'Vehicle spare parts sales system with per-category stock management, quick search, cashier transactions, and daily stock reports.'],
    3: ['StokRoti', 'Bread raw material inventory using FIFO so the oldest materials are used first, with expiry alerts.'],
    2: ['E-Tiket Bus', 'Online bus ticketing and rental platform with interactive seat selection, digital payments, and fleet management.'],
    1: ['E-Cuti', 'Digital leave request system with multi-level approval, team leave calendar, automatic leave balance, and status notifications.']
  };

  const idx = new Map();
  PAIRS.forEach(p => { idx.set(p[0], p); idx.set(p[1], p); });
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const orig = new WeakMap();
  const i = () => (lang === 'en' ? 1 : 0);

  function translateText() {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement && n.parentElement.closest('script,style,.project-title,#modal-title,#modal-desc')
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    let n;
    while ((n = w.nextNode())) {
      const raw = n.nodeValue, k = norm(raw);
      if (!k) continue;
      let pair = orig.get(n);
      if (!pair) { pair = idx.get(k); if (!pair) continue; orig.set(n, pair); }
      n.nodeValue = raw.match(/^\s*/)[0] + pair[i()] + raw.match(/\s*$/)[0];
    }
  }

  function translatePlaceholders() {
    document.querySelectorAll('[placeholder]').forEach(el => {
      if (!el.dataset.ph) el.dataset.ph = el.getAttribute('placeholder');
      const pair = idx.get(el.dataset.ph);
      if (pair) el.setAttribute('placeholder', pair[i()]);
    });
  }

  const proj = p => (lang === 'en' && P[p.id]) ? { title: P[p.id][0], desc: P[p.id][1] } : { title: p.title, desc: p.desc };

  function translateProjects() {
    document.querySelectorAll('#projects-grid .project-card').forEach((card, n) => {
      const t = proj(projects[n]);
      const title = card.querySelector('.project-title');
      const img = card.querySelector('.project-thumb');
      if (title) title.textContent = t.title;
      if (img) img.alt = t.title;
    });
  }

  /* Modal: bungkus openModal bawaan main.js */
  let currentProject = null;
  const baseOpen = window.openModal;
  function fillModal() {
    if (!currentProject) return;
    const t = proj(currentProject);
    document.getElementById('modal-title').textContent = t.title;
    document.getElementById('modal-desc').textContent = t.desc;
  }
  window.openModal = function (p) { baseOpen(p); currentProject = p; fillModal(); };

  /* Tombol bahasa */
  const style = document.createElement('style');
  style.textContent = `
    .lang-switch{display:inline-flex;border:1px solid var(--border);border-radius:999px;padding:2px;background:var(--dark3)}
    .lang-switch button{background:none;border:none;color:var(--muted);font:500 .72rem var(--font-body);letter-spacing:.08em;padding:.3rem .65rem;border-radius:999px;cursor:pointer;transition:background .2s,color .2s}
    .lang-switch button.active{background:var(--green);color:#fff}
    .lang-switch--mobile{display:none}
    .nav-right{display:flex;align-items:center;gap:.9rem}
    @media (max-width:768px){
      .lang-switch--mobile{display:inline-flex}
      .nav-links .lang-item{display:none !important}
    }`;
  document.head.appendChild(style);

  function makeSwitch(cls) {
    const d = document.createElement('div');
    d.className = 'lang-switch ' + cls;
    d.innerHTML = '<button type="button" data-lang="id">ID</button><button type="button" data-lang="en">EN</button>';
    d.addEventListener('click', e => { const b = e.target.closest('button[data-lang]'); if (b) setLang(b.dataset.lang); });
    return d;
  }

  const navRight = document.createElement('div');
  navRight.className = 'nav-right';
  navRight.appendChild(makeSwitch('lang-switch--mobile'));
  navRight.appendChild(document.getElementById('hamburger'));
  document.getElementById('navbar').appendChild(navRight);

  const li = document.createElement('li');
  li.className = 'lang-item';
  li.appendChild(makeSwitch('lang-switch--desktop'));
  document.getElementById('nav-links').appendChild(li);

  function setLang(l) {
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l;
    translateText();
    translatePlaceholders();
    translateProjects();
    fillModal();
    const t = idx.get('Portofolio');
    document.title = t[i()];
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  }

  setLang(lang);
})();