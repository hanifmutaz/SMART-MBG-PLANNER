/* ═══════════════════════════════════════
   DATA PER JENJANG
═══════════════════════════════════════ */
const JENJANG_DATA = {
    sd: {
        label: 'SD', sekolah: 'SD Negeri 1 Jakarta',
        siswa: 450, anggaran: 12500, budgetMax: 16000,
        akgPct: 97, akgTarget: 85,
        warnItems: ['Ayam', 'Sayur hijau', 'Telur'],
        AKG: { kal: 2100, pro: 56, kar: 300, lem: 65 },
        barData: [89, 88, 72, 85, 87],
        barDataPro: [80, 85, 65, 90, 82],
        barDataLem: [92, 88, 78, 88, 90],
        barDataKar: [95, 92, 80, 92, 94],
        warnDays: [2],
        menus: [
            { name: 'Nasi Kuning + Ayam Bakar', items: [{ nama: 'Nasi kuning', kal: 220, pro: 5, kar: 46, lem: 2 }, { nama: 'Ayam bakar', kal: 220, pro: 28, kar: 8, lem: 9 }, { nama: 'Tumis kangkung', kal: 60, pro: 3, kar: 6, lem: 3 }, { nama: 'Tempe goreng', kal: 180, pro: 11, kar: 10, lem: 12 }, { nama: 'Susu UHT', kal: 120, pro: 6, kar: 12, lem: 5 }, { nama: 'Pisang', kal: 89, pro: 1, kar: 23, lem: 0 }] },
            { name: 'Ikan Goreng + Sop Sayur', items: [{ nama: 'Nasi putih', kal: 204, pro: 4, kar: 44, lem: 0 }, { nama: 'Ikan goreng', kal: 170, pro: 24, kar: 2, lem: 8 }, { nama: 'Sop sayur', kal: 55, pro: 3, kar: 8, lem: 2 }, { nama: 'Tahu goreng', kal: 139, pro: 9, kar: 4, lem: 10 }, { nama: 'Jeruk', kal: 62, pro: 1, kar: 15, lem: 0 }] },
            { name: 'Pecel Ayam', items: [{ nama: 'Ayam goreng', kal: 285, pro: 30, kar: 6, lem: 15 }, { nama: 'Nasi uduk', kal: 180, pro: 4, kar: 36, lem: 3 }, { nama: 'Bihun goreng', kal: 133, pro: 3, kar: 28, lem: 1 }, { nama: 'Lalapan', kal: 20, pro: 1, kar: 3, lem: 0 }, { nama: 'Yakult', kal: 50, pro: 1, kar: 11, lem: 0 }, { nama: 'Pisang', kal: 89, pro: 1, kar: 23, lem: 0 }] },
            { name: 'Ayam Suwir + Sup', items: [{ nama: 'Nasi putih', kal: 204, pro: 4, kar: 44, lem: 0 }, { nama: 'Ayam suwir', kal: 190, pro: 26, kar: 5, lem: 8 }, { nama: 'Sup sayuran', kal: 55, pro: 3, kar: 8, lem: 2 }, { nama: 'Tempe goreng', kal: 180, pro: 11, kar: 10, lem: 12 }, { nama: 'Semangka', kal: 50, pro: 1, kar: 12, lem: 0 }] },
            { name: 'Semur Daging + Nasi', items: [{ nama: 'Nasi putih', kal: 204, pro: 4, kar: 44, lem: 0 }, { nama: 'Daging semur', kal: 240, pro: 22, kar: 10, lem: 13 }, { nama: 'Oseng buncis', kal: 70, pro: 3, kar: 8, lem: 3 }, { nama: 'Tahu goreng', kal: 139, pro: 9, kar: 4, lem: 10 }, { nama: 'Pepaya', kal: 60, pro: 1, kar: 15, lem: 0 }] }
        ]
    },
    smp: {
        label: 'SMP', sekolah: 'SMP Negeri 12 Jakarta',
        siswa: 520, anggaran: 14200, budgetMax: 18000,
        akgPct: 93, akgTarget: 85,
        warnItems: ['Daging sapi', 'Brokoli'],
        AKG: { kal: 2400, pro: 65, kar: 350, lem: 80 },
        barData: [91, 92, 88, 94, 90],
        barDataPro: [85, 90, 82, 88, 86],
        barDataLem: [88, 85, 90, 92, 87],
        barDataKar: [94, 96, 85, 95, 93],
        warnDays: [],
        menus: [
            { name: 'Nasi + Daging Rendang', items: [{ nama: 'Nasi putih', kal: 240, pro: 5, kar: 52, lem: 0 }, { nama: 'Rendang daging', kal: 310, pro: 32, kar: 8, lem: 18 }, { nama: 'Sayur asem', kal: 75, pro: 4, kar: 10, lem: 2 }, { nama: 'Tempe bacem', kal: 200, pro: 12, kar: 14, lem: 11 }, { nama: 'Susu UHT', kal: 130, pro: 7, kar: 13, lem: 5 }, { nama: 'Pisang', kal: 89, pro: 1, kar: 23, lem: 0 }] },
            { name: 'Ayam Geprek + Nasi', items: [{ nama: 'Nasi putih', kal: 240, pro: 5, kar: 52, lem: 0 }, { nama: 'Ayam geprek', kal: 320, pro: 35, kar: 10, lem: 16 }, { nama: 'Lalapan segar', kal: 30, pro: 2, kar: 5, lem: 0 }, { nama: 'Tahu goreng', kal: 139, pro: 9, kar: 4, lem: 10 }, { nama: 'Jeruk', kal: 62, pro: 1, kar: 15, lem: 0 }] },
            { name: 'Ikan Salmon + Brokoli', items: [{ nama: 'Nasi merah', kal: 220, pro: 5, kar: 45, lem: 2 }, { nama: 'Ikan salmon panggang', kal: 280, pro: 38, kar: 0, lem: 14 }, { nama: 'Tumis brokoli', kal: 80, pro: 5, kar: 9, lem: 3 }, { nama: 'Perkedel kentang', kal: 180, pro: 6, kar: 22, lem: 8 }, { nama: 'Susu UHT', kal: 130, pro: 7, kar: 13, lem: 5 }] },
            { name: 'Bakso + Mie', items: [{ nama: 'Mie bakso', kal: 350, pro: 20, kar: 42, lem: 10 }, { nama: 'Bakso sapi', kal: 200, pro: 18, kar: 12, lem: 8 }, { nama: 'Sayur caisim', kal: 50, pro: 3, kar: 6, lem: 1 }, { nama: 'Tahu rebus', kal: 100, pro: 7, kar: 3, lem: 5 }, { nama: 'Semangka', kal: 60, pro: 1, kar: 15, lem: 0 }] },
            { name: 'Soto Ayam + Nasi', items: [{ nama: 'Nasi putih', kal: 240, pro: 5, kar: 52, lem: 0 }, { nama: 'Soto ayam', kal: 290, pro: 28, kar: 15, lem: 12 }, { nama: 'Perkedel jagung', kal: 170, pro: 5, kar: 20, lem: 8 }, { nama: 'Tempe goreng', kal: 180, pro: 11, kar: 10, lem: 12 }, { nama: 'Pepaya', kal: 60, pro: 1, kar: 15, lem: 0 }] }
        ]
    },
    sma: {
        label: 'SMA', sekolah: 'SMA Negeri 5 Jakarta',
        siswa: 380, anggaran: 15800, budgetMax: 20000,
        akgPct: 89, akgTarget: 85,
        warnItems: ['Ikan tuna', 'Alpukat'],
        AKG: { kal: 2650, pro: 72, kar: 400, lem: 90 },
        barData: [87, 90, 82, 88, 85],
        barDataPro: [82, 88, 78, 85, 80],
        barDataLem: [85, 88, 80, 90, 84],
        barDataKar: [90, 93, 82, 91, 88],
        warnDays: [2, 4],
        menus: [
            { name: 'Nasi + Steak Ayam Grill', items: [{ nama: 'Nasi merah', kal: 220, pro: 5, kar: 45, lem: 2 }, { nama: 'Ayam grill', kal: 380, pro: 42, kar: 5, lem: 18 }, { nama: 'Salad sayur', kal: 80, pro: 4, kar: 10, lem: 3 }, { nama: 'Tempe panggang', kal: 190, pro: 13, kar: 11, lem: 12 }, { nama: 'Susu UHT', kal: 130, pro: 7, kar: 13, lem: 5 }, { nama: 'Apel', kal: 80, pro: 0, kar: 21, lem: 0 }] },
            { name: 'Tuna Teriyaki + Nasi', items: [{ nama: 'Nasi putih', kal: 240, pro: 5, kar: 52, lem: 0 }, { nama: 'Tuna teriyaki', kal: 290, pro: 40, kar: 8, lem: 12 }, { nama: 'Tumis sayur mix', kal: 90, pro: 5, kar: 12, lem: 3 }, { nama: 'Tahu goreng', kal: 139, pro: 9, kar: 4, lem: 10 }, { nama: 'Jeruk', kal: 62, pro: 1, kar: 15, lem: 0 }] },
            { name: 'Gado-gado Protein', items: [{ nama: 'Lontong', kal: 180, pro: 4, kar: 38, lem: 1 }, { nama: 'Telur rebus', kal: 155, pro: 13, kar: 1, lem: 11 }, { nama: 'Tahu & tempe', kal: 240, pro: 18, kar: 14, lem: 15 }, { nama: 'Sayur rebus', kal: 70, pro: 4, kar: 9, lem: 2 }, { nama: 'Saus kacang', kal: 120, pro: 5, kar: 10, lem: 7 }, { nama: 'Susu UHT', kal: 130, pro: 7, kar: 13, lem: 5 }] },
            { name: 'Nasi + Sapi Lada Hitam', items: [{ nama: 'Nasi putih', kal: 240, pro: 5, kar: 52, lem: 0 }, { nama: 'Sapi lada hitam', kal: 360, pro: 38, kar: 10, lem: 18 }, { nama: 'Cah kangkung', kal: 65, pro: 3, kar: 7, lem: 3 }, { nama: 'Perkedel tahu', kal: 140, pro: 8, kar: 8, lem: 8 }, { nama: 'Semangka', kal: 60, pro: 1, kar: 15, lem: 0 }] },
            { name: 'Nasi + Ayam Bakar Kecap', items: [{ nama: 'Nasi putih', kal: 240, pro: 5, kar: 52, lem: 0 }, { nama: 'Ayam bakar kecap', kal: 350, pro: 38, kar: 15, lem: 14 }, { nama: 'Sup tomat sayur', kal: 70, pro: 3, kar: 9, lem: 2 }, { nama: 'Tempe mendoan', kal: 200, pro: 12, kar: 12, lem: 12 }, { nama: 'Pisang', kal: 89, pro: 1, kar: 23, lem: 0 }] }
        ]
    }
};

const LAPORAN_DATA = {
    sd: {
        avgAKG: 91, totalAnggaran: 'Rp 54,2jt', menuCount: 4, warnDays: 5,
        histori: [
            { periode: '24–28 Mar 2026', jenjang: 'SD', akg: 91, cost: 11960, status: 'ok' },
            { periode: '17–21 Mar 2026', jenjang: 'SD', akg: 88, cost: 12100, status: 'ok' },
            { periode: '10–14 Mar 2026', jenjang: 'SD', akg: 79, cost: 11700, status: 'warn' },
            { periode: '3–7 Mar 2026', jenjang: 'SD', akg: 93, cost: 12300, status: 'ok' },
            { periode: '24–28 Feb 2026', jenjang: 'SD', akg: 90, cost: 11900, status: 'ok' }
        ]
    },
    smp: {
        avgAKG: 93, totalAnggaran: 'Rp 68,4jt', menuCount: 4, warnDays: 2,
        histori: [
            { periode: '24–28 Mar 2026', jenjang: 'SMP', akg: 93, cost: 14200, status: 'ok' },
            { periode: '17–21 Mar 2026', jenjang: 'SMP', akg: 91, cost: 13800, status: 'ok' },
            { periode: '10–14 Mar 2026', jenjang: 'SMP', akg: 87, cost: 14100, status: 'ok' },
            { periode: '3–7 Mar 2026', jenjang: 'SMP', akg: 95, cost: 14500, status: 'ok' },
            { periode: '24–28 Feb 2026', jenjang: 'SMP', akg: 82, cost: 13600, status: 'warn' }
        ]
    },
    sma: {
        avgAKG: 89, totalAnggaran: 'Rp 63,8jt', menuCount: 4, warnDays: 7,
        histori: [
            { periode: '24–28 Mar 2026', jenjang: 'SMA', akg: 89, cost: 15800, status: 'ok' },
            { periode: '17–21 Mar 2026', jenjang: 'SMA', akg: 85, cost: 15200, status: 'ok' },
            { periode: '10–14 Mar 2026', jenjang: 'SMA', akg: 76, cost: 14800, status: 'warn' },
            { periode: '3–7 Mar 2026', jenjang: 'SMA', akg: 91, cost: 15600, status: 'ok' },
            { periode: '24–28 Feb 2026', jenjang: 'SMA', akg: 78, cost: 14900, status: 'warn' }
        ]
    }
};

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let activeJenjang = 'sd';
let activeDay = (() => { const d = new Date().getDay(); return d === 0 || d === 6 ? 4 : d - 1; })();
let charts = {};

/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
const topbarTitles = {
    dashboard: '<b>Dashboard</b> — Sistem Perencanaan Menu MBG',
    perencanaan: '<b>Perencanaan Menu</b> — Buat Menu Mingguan Baru',
    stok: '<b>Manajemen Stok</b> — Kelola Bahan Makanan',
    laporan: '<b>Laporan</b> — Rekap & Analisis',
    pengaturan: '<b>Pengaturan</b> — Konfigurasi Akun & Sistem',
    bantuan: '<b>Bantuan</b> — Pusat Bantuan Smart MBG Planner',
};

function navigate(pageId, navEl) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    if (navEl) navEl.classList.add('active');
    document.getElementById('topbarTitle').innerHTML = topbarTitles[pageId] || pageId;
    if (pageId === 'dashboard') initDashboardCharts();
    if (pageId === 'laporan') { renderLapStats(); renderLapHistori(); initLaporanCharts(); }
}

/* ═══════════════════════════════════════
   UTILS
═══════════════════════════════════════ */
function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.style.display = 'flex';
    setTimeout(() => t.style.display = 'none', 2500);
}
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id, e) { if (!e || e.target.classList.contains('modal-overlay')) document.getElementById(id).classList.remove('open'); }

const now = new Date();
const tsStr = 'Terakhir diperbarui: ' + now.toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
['ftDash', 'ftPeren', 'ftStok', 'ftLaporan', 'ftPengaturan', 'ftBantuan'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = tsStr;
});

/* ═══════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════ */
const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum'];
const dates = ['24 Mar', '25 Mar', '26 Mar', '27 Mar', '28 Mar'];
const fullDays = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

function setJbDash(el, j) {
    el.parentElement.querySelectorAll('.jb').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    activeJenjang = j;
    activeDay = 0;
    renderDashStats();
    renderDayTabs();
    renderDayMenu();
    refreshBarChart();
}

function renderDashStats() {
    const d = JENJANG_DATA[activeJenjang];
    const pct = Math.round(d.anggaran / d.budgetMax * 100);
    document.getElementById('sidebarSekolah').textContent = d.sekolah;
    document.getElementById('topbarSekolah').textContent = d.sekolah;
    document.getElementById('dashStats').innerHTML = `
        <div class="stat-card">
            <div class="stat-top"><span class="stat-top-label">Total Siswa Dilayani</span><div class="stat-icon" style="background:var(--blue-dim)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4D9EFF" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div></div>
            <div class="stat-val">${d.siswa}</div><div class="stat-sub up">▲ +5% vs bulan lalu</div>
        </div>
        <div class="stat-card">
            <div class="stat-top"><span class="stat-top-label">Kepatuhan Gizi Rata-rata</span><div class="stat-icon" style="background:var(--green-dim)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00D68F" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div></div>
            <div class="donut-row"><canvas id="donutChart" width="52" height="52"></canvas><div><div class="stat-val">${d.akgPct}%</div><div class="stat-sub up">Di atas target ${d.akgTarget}%</div></div></div>
        </div>
        <div class="stat-card">
            <div class="stat-top"><span class="stat-top-label">Status Anggaran / Siswa</span><div class="stat-icon" style="background:var(--amber-dim)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div></div>
            <div class="stat-val" style="font-size:17px;margin-bottom:4px">Rp ${d.anggaran.toLocaleString('id')}</div>
            <div style="margin-top:2px"><div class="prog-labels"><span>Aktual</span><span style="color:var(--text)">Rp ${d.anggaran.toLocaleString('id')} / Rp ${d.budgetMax.toLocaleString('id')}</span></div><div class="prog-track"><div class="prog-fill" style="width:${pct}%;background:var(--green)"></div></div></div>
            <div class="stat-sub dim" style="margin-top:3px">${pct}% dari batas anggaran</div>
        </div>
        <div class="stat-card" style="border-color:rgba(245,166,35,.2)">
            <div class="stat-top"><span class="stat-top-label" style="color:var(--amber)">⚠ Peringatan Stok Rendah</span></div>
            <div class="stat-val" style="color:var(--amber)">${d.warnItems.length} item</div>
            <div class="warn-pills">${d.warnItems.map(i => `<span class="warn-pill">${i}</span>`).join('')}</div>
        </div>`;
    // Re-init donut
    setTimeout(() => {
        const ctx = document.getElementById('donutChart');
        if (ctx && !charts.donut) {
            charts.donut = new Chart(ctx, { type: 'doughnut', data: { datasets: [{ data: [d.akgPct, 100 - d.akgPct], backgroundColor: ['#00D68F', 'rgba(255,255,255,0.05)'], borderWidth: 0 }] }, options: { cutout: '76%', plugins: { legend: { display: false }, tooltip: { enabled: false } }, responsive: false } });
        } else if (ctx && charts.donut) {
            charts.donut.data.datasets[0].data = [d.akgPct, 100 - d.akgPct];
            charts.donut.update();
        }
    }, 50);
    document.getElementById('barChartTitle').textContent = `Kepatuhan Gizi Harian — Minggu Ini (${d.label})`;
}

function calcTot(items) { return items.reduce((a, b) => ({ kal: a.kal + b.kal, pro: a.pro + b.pro, kar: a.kar + b.kar, lem: a.lem + b.lem }), { kal: 0, pro: 0, kar: 0, lem: 0 }) }
function akgPct(tot, AKG) { return Math.round(((tot.kal / AKG.kal) + (tot.pro / AKG.pro) + (tot.kar / AKG.kar) + (tot.lem / AKG.lem)) / 4 * 100) }

function renderDayTabs() {
    const d = JENJANG_DATA[activeJenjang];
    document.getElementById('dayTabs').innerHTML = days.map((day, i) =>
        `<button class="day-tab${i === activeDay ? ' active' : ''}${d.warnDays.includes(i) ? ' warn-day' : ''}" onclick="selectDay(${i})">${day} <span style="font-size:9px;opacity:.7">${dates[i]}</span></button>`
    ).join('');
}

function renderDayMenu() {
    const d = JENJANG_DATA[activeJenjang];
    const m = d.menus[activeDay];
    const tot = calcTot(m.items);
    const pct = akgPct(tot, d.AKG);
    const good = pct >= 85;
    document.getElementById('menuName').textContent = m.name;
    document.getElementById('menuDate').textContent = `${fullDays[activeDay]}, ${dates[activeDay]} 2026`;
    const badge = document.getElementById('akg-badge');
    badge.textContent = `${pct}% AKG`;
    badge.className = `akg-badge ${good ? 'good' : 'warn'}`;
    document.getElementById('menuBody').innerHTML = m.items.map(it =>
        `<tr><td>${it.nama}</td><td>${it.kal}</td><td>${it.pro}</td><td>${it.kar}</td><td>${it.lem}</td></tr>`
    ).join('') +
        `<tr class="total-row"><td>Total</td><td>${tot.kal}</td><td>${tot.pro}</td><td>${tot.kar}</td><td>${tot.lem}</td></tr>
         <tr class="akgrow"><td>Target AKG (${d.label})</td><td>${d.AKG.kal}</td><td>${d.AKG.pro}</td><td>${d.AKG.kar}</td><td>${d.AKG.lem}</td></tr>`;
}

function selectDay(i) { activeDay = i; renderDayTabs(); renderDayMenu(); }

function refreshBarChart() {
    const d = JENJANG_DATA[activeJenjang];
    if (charts.bar) {
        charts.bar.data.datasets[0].data = d.barData;
        charts.bar.data.datasets[1].data = d.barDataPro;
        charts.bar.data.datasets[2].data = d.barDataLem;
        charts.bar.data.datasets[3].data = d.barDataKar;
        charts.bar.update();
    }
}

function initDashboardCharts() {
    if (charts.bar) return;
    const d = JENJANG_DATA[activeJenjang];
    renderDashStats();
    charts.bar = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
            datasets: [
                { label: 'Kalori', data: d.barData, backgroundColor: 'rgba(0,214,143,0.55)', borderRadius: 3 },
                { label: 'Protein', data: d.barDataPro, backgroundColor: 'rgba(77,158,255,0.55)', borderRadius: 3 },
                { label: 'Lemak', data: d.barDataLem, backgroundColor: 'rgba(245,166,35,0.55)', borderRadius: 3 },
                { label: 'Karbohidrat', data: d.barDataKar, backgroundColor: 'rgba(167,139,250,0.55)', borderRadius: 3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#6B6A75', font: { size: 10 }, boxWidth: 8, boxHeight: 8 } } }, scales: { x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6B6A75', font: { size: 10 } } }, y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6B6A75', font: { size: 10 }, callback: v => v + '%' }, min: 0, max: 120 } } }
    });
    charts.line = new Chart(document.getElementById('lineChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
            datasets: [
                { label: 'Perencanaan', data: [8200, 8500, 8800, 9000, 9200], borderColor: '#00D68F', backgroundColor: 'rgba(0,214,143,0.08)', tension: .4, borderWidth: 1.5, pointRadius: 3, fill: true },
                { label: 'Aktual', data: [7800, 8200, 8600, 8700, 9000], borderColor: '#F5A623', backgroundColor: 'transparent', tension: .4, borderWidth: 1.5, pointRadius: 3, borderDash: [4, 3] }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#6B6A75', font: { size: 10 }, boxWidth: 8, boxHeight: 8 } } }, scales: { x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6B6A75', font: { size: 10 } } }, y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6B6A75', font: { size: 10 }, callback: v => 'Rp ' + (v / 1000).toFixed(0) + 'rb' } } } }
    });
}

/* ═══════════════════════════════════════
   LAPORAN
═══════════════════════════════════════ */
let lapJenjang = 'sd';

function setJbLap(el, j) {
    el.parentElement.querySelectorAll('.jb').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    lapJenjang = j;
    renderLapStats();
    renderLapHistori();
    refreshLapCharts();
    document.getElementById('akgChartTitle').textContent = `Tren Pemenuhan AKG — Maret 2026 (${JENJANG_DATA[j].label})`;
}

function renderLapStats() {
    const d = LAPORAN_DATA[lapJenjang];
    document.getElementById('lapStats').innerHTML = `
        <div class="stat-card"><div class="stat-top"><span class="stat-top-label">Rata-rata AKG Bulan Ini</span></div><div class="stat-val" style="color:var(--green)">${d.avgAKG}%</div><div class="stat-sub up">▲ +3% vs bulan lalu</div></div>
        <div class="stat-card"><div class="stat-top"><span class="stat-top-label">Total Anggaran Terpakai</span></div><div class="stat-val" style="font-size:17px">${d.totalAnggaran}</div><div class="stat-sub warn">86% dari alokasi</div></div>
        <div class="stat-card"><div class="stat-top"><span class="stat-top-label">Menu Dibuat Bulan Ini</span></div><div class="stat-val">${d.menuCount}</div><div class="stat-sub dim">Perencanaan mingguan</div></div>
        <div class="stat-card"><div class="stat-top"><span class="stat-top-label">Hari AKG Di Bawah Target</span></div><div class="stat-val" style="color:var(--amber)">${d.warnDays}</div><div class="stat-sub warn">dari 20 hari kerja</div></div>`;
}

function renderLapHistori() {
    const d = LAPORAN_DATA[lapJenjang];
    document.getElementById('lapHistoriBody').innerHTML = d.histori.map(h => `
        <tr>
            <td>${h.periode}</td>
            <td><span class="badge ${h.jenjang === 'SD' ? 'blue' : h.jenjang === 'SMP' ? 'purple' : 'amber'}">${h.jenjang}</span></td>
            <td style="color:${h.akg >= 85 ? 'var(--green)' : 'var(--amber)'};font-family:var(--mono)">${h.akg}%</td>
            <td style="font-family:var(--mono)">Rp ${h.cost.toLocaleString('id')}</td>
            <td><span class="badge ${h.status === 'ok' ? 'ok' : 'warn'}">${h.status === 'ok' ? 'Diterapkan' : 'Di bawah target'}</span></td>
            <td><button class="btn btn-ghost btn-sm" style="font-size:10px">Lihat</button></td>
        </tr>`).join('');
}

function initLaporanCharts() {
    if (charts.akg) return;
    charts.akg = new Chart(document.getElementById('akgChart'), {
        type: 'line',
        data: {
            labels: ['3 Mar', '6', '9', '12', '15', '18', '21', '24', '27'],
            datasets: [
                { label: 'Kalori %', data: [85, 88, 76, 80, 92, 90, 88, 95, 89], borderColor: '#00D68F', backgroundColor: 'rgba(0,214,143,0.06)', tension: .4, borderWidth: 1.5, pointRadius: 3, fill: true },
                { label: 'Protein %', data: [78, 82, 70, 75, 88, 85, 82, 90, 84], borderColor: '#4D9EFF', backgroundColor: 'transparent', tension: .4, borderWidth: 1.5, pointRadius: 2 },
                { label: 'Target 85%', data: [85, 85, 85, 85, 85, 85, 85, 85, 85], borderColor: 'rgba(255,255,255,.15)', borderDash: [6, 4], borderWidth: 1, pointRadius: 0 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#6B6A75', font: { size: 10 }, boxWidth: 8, boxHeight: 8 } } }, scales: { x: { grid: { color: 'rgba(255,255,255,.04)' }, ticks: { color: '#6B6A75', font: { size: 10 } } }, y: { grid: { color: 'rgba(255,255,255,.04)' }, ticks: { color: '#6B6A75', font: { size: 10 }, callback: v => v + '%' }, min: 60, max: 110 } } }
    });
    charts.budget = new Chart(document.getElementById('budgetChart'), {
        type: 'bar',
        data: {
            labels: ['M1', 'M2', 'M3', 'M4'],
            datasets: [
                { label: 'Perencanaan', data: [14400000, 14400000, 14400000, 14400000], backgroundColor: 'rgba(0,214,143,.2)', borderColor: '#00D68F', borderWidth: 1, borderRadius: 4 },
                { label: 'Aktual', data: [12950000, 13700000, 13200000, 14350000], backgroundColor: 'rgba(245,166,35,.4)', borderColor: '#F5A623', borderWidth: 1, borderRadius: 4 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#6B6A75', font: { size: 10 }, boxWidth: 8, boxHeight: 8 } } }, scales: { x: { grid: { color: 'rgba(255,255,255,.04)' }, ticks: { color: '#6B6A75', font: { size: 10 } } }, y: { grid: { color: 'rgba(255,255,255,.04)' }, ticks: { color: '#6B6A75', font: { size: 10 }, callback: v => 'Rp ' + (v / 1000000).toFixed(0) + 'jt' } } } }
    });
}

function refreshLapCharts() {
    const akgDataMap = {
        sd: { kal: [85, 88, 76, 80, 92, 90, 88, 95, 89], pro: [78, 82, 70, 75, 88, 85, 82, 90, 84] },
        smp: { kal: [88, 91, 85, 90, 95, 93, 90, 96, 92], pro: [82, 86, 80, 85, 90, 88, 85, 92, 88] },
        sma: { kal: [83, 87, 79, 84, 90, 88, 85, 91, 87], pro: [78, 82, 75, 80, 85, 83, 80, 87, 83] }
    };
    const budgetMap = {
        sd: { plan: [14400000, 14400000, 14400000, 14400000], actual: [12950000, 13700000, 13200000, 14350000] },
        smp: { plan: [18720000, 18720000, 18720000, 18720000], actual: [16800000, 17400000, 17100000, 18200000] },
        sma: { plan: [15200000, 15200000, 15200000, 15200000], actual: [13900000, 14500000, 14100000, 15100000] }
    };
    if (charts.akg) { charts.akg.data.datasets[0].data = akgDataMap[lapJenjang].kal; charts.akg.data.datasets[1].data = akgDataMap[lapJenjang].pro; charts.akg.update(); }
    if (charts.budget) { charts.budget.data.datasets[0].data = budgetMap[lapJenjang].plan; charts.budget.data.datasets[1].data = budgetMap[lapJenjang].actual; charts.budget.update(); }
}

/* ═══════════════════════════════════════
   PERENCANAAN MENU
═══════════════════════════════════════ */
let currentStep = 0;
let procStep = 0;
const stepsDef = [
    { num: '01', label: 'Parameter Dasar', sub: 'Anggaran & jenjang' },
    { num: '02', label: 'Bahan Makanan', sub: 'Daftar & stok' },
    { num: '03', label: 'Proses Sistem', sub: 'Optimasi menu' },
    { num: '04', label: 'Hasil Menu', sub: 'Review & simpan' }
];
const bahanList = [
    { nama: 'Beras', jumlah: 150, satuan: 'gram', harga: 14000, stok: 50, kal: 540 },
    { nama: 'Ayam fillet', jumlah: 100, satuan: 'gram', harga: 35000, stok: 12, kal: 165 },
    { nama: 'Telur', jumlah: 2, satuan: 'butir', harga: 28000, stok: 80, kal: 90 },
    { nama: 'Tahu', jumlah: 80, satuan: 'gram', harga: 8000, stok: 20, kal: 60 },
    { nama: 'Tempe', jumlah: 80, satuan: 'gram', harga: 10000, stok: 18, kal: 160 },
    { nama: 'Bayam', jumlah: 1, satuan: 'ikat', harga: 5000, stok: 5, kal: 23 },
    { nama: 'Kangkung', jumlah: 1, satuan: 'ikat', harga: 4000, stok: 8, kal: 19 },
    { nama: 'Wortel', jumlah: 80, satuan: 'gram', harga: 8000, stok: 15, kal: 33 },
    { nama: 'Susu UHT', jumlah: 200, satuan: 'ml', harga: 7500, stok: 30, kal: 130 },
    { nama: 'Minyak goreng', jumlah: 10, satuan: 'ml', harga: 18000, stok: 15, kal: 88 }
];
const resultMenus = [
    { name: 'Nasi Kuning + Ayam Bakar', kal: 889, pro: 54, kar: 105, lem: 31, cost: 11800, items: [{ nama: 'Nasi kuning', kal: 220, pro: 5, kar: 46, lem: 2 }, { nama: 'Ayam bakar', kal: 220, pro: 28, kar: 8, lem: 9 }, { nama: 'Tumis kangkung', kal: 60, pro: 3, kar: 6, lem: 3 }, { nama: 'Tempe goreng', kal: 180, pro: 11, kar: 10, lem: 12 }, { nama: 'Susu UHT', kal: 120, pro: 6, kar: 12, lem: 5 }, { nama: 'Pisang', kal: 89, pro: 1, kar: 23, lem: 0 }] },
    { name: 'Ikan Goreng + Sop', kal: 830, pro: 41, kar: 73, lem: 20, cost: 11200, items: [{ nama: 'Nasi putih', kal: 204, pro: 4, kar: 44, lem: 0 }, { nama: 'Ikan goreng', kal: 170, pro: 24, kar: 2, lem: 8 }, { nama: 'Sop sayur', kal: 55, pro: 3, kar: 8, lem: 2 }, { nama: 'Tahu goreng', kal: 139, pro: 9, kar: 4, lem: 10 }, { nama: 'Jeruk', kal: 62, pro: 1, kar: 15, lem: 0 }] },
    { name: 'Pecel Ayam', kal: 837, pro: 41, kar: 111, lem: 20, cost: 10900, items: [{ nama: 'Ayam goreng', kal: 285, pro: 30, kar: 6, lem: 15 }, { nama: 'Nasi uduk', kal: 180, pro: 4, kar: 36, lem: 3 }, { nama: 'Bihun goreng', kal: 133, pro: 3, kar: 28, lem: 1 }, { nama: 'Lalapan', kal: 20, pro: 1, kar: 3, lem: 0 }, { nama: 'Yakult', kal: 50, pro: 1, kar: 11, lem: 0 }] },
    { name: 'Ayam Suwir + Sup', kal: 679, pro: 45, kar: 79, lem: 22, cost: 11500, items: [{ nama: 'Nasi putih', kal: 204, pro: 4, kar: 44, lem: 0 }, { nama: 'Ayam suwir', kal: 190, pro: 26, kar: 5, lem: 8 }, { nama: 'Sup sayuran', kal: 55, pro: 3, kar: 8, lem: 2 }, { nama: 'Tempe goreng', kal: 180, pro: 11, kar: 10, lem: 12 }, { nama: 'Semangka', kal: 50, pro: 1, kar: 12, lem: 0 }] },
    { name: 'Semur Daging + Nasi', kal: 763, pro: 40, kar: 90, lem: 27, cost: 12300, items: [{ nama: 'Nasi putih', kal: 204, pro: 4, kar: 44, lem: 0 }, { nama: 'Daging semur', kal: 240, pro: 22, kar: 10, lem: 13 }, { nama: 'Oseng buncis', kal: 70, pro: 3, kar: 8, lem: 3 }, { nama: 'Tahu goreng', kal: 139, pro: 9, kar: 4, lem: 10 }, { nama: 'Pepaya', kal: 60, pro: 1, kar: 15, lem: 0 }] }
];
const warnResultDays = [2, 3];
let resultActiveDay = 4;

function renderStepper() {
    document.getElementById('stepperWrap').innerHTML = stepsDef.map((st, i) => {
        const state = i < currentStep ? 'done' : i === currentStep ? 'active' : 'idle';
        const conn = i < stepsDef.length - 1 ? `<div class="step-connector${i < currentStep ? ' done' : ''}"></div>` : '';
        return `<div class="step-item"><div class="step-circle ${state}">${state === 'done' ? '✓' : st.num}</div><div class="step-info${state === 'active' ? ' active' : ''}"><p>${st.label}</p><span>${st.sub}</span></div></div>${conn}`;
    }).join('');
}

function renderStep() {
    renderStepper();
    const c = document.getElementById('stepContent');
    if (currentStep === 0) c.innerHTML = renderStep1();
    else if (currentStep === 1) c.innerHTML = renderStep2();
    else if (currentStep === 2) { c.innerHTML = renderStep3(); startProc(); }
    else if (currentStep === 3) c.innerHTML = renderStep4();
}

function renderStep1() {
    return `<div class="form-card"><div class="form-card-title">Parameter Dasar</div><div class="form-card-sub">Tentukan anggaran, jenjang, dan periode perencanaan</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px">
        <div class="form-group"><label>Sekolah</label><select class="form-select-full"><option>SD Negeri 1 Jakarta</option><option>SMP Negeri 12 Jakarta</option><option>SMA Negeri 5 Jakarta</option></select></div>
        <div class="form-group"><label>Jenjang</label><select class="form-select-full"><option>SD (6–12 tahun) · Rp 16.000/siswa</option><option>SMP (12–15 tahun) · Rp 18.000/siswa</option><option>SMA (15–18 tahun) · Rp 20.000/siswa</option></select></div>
        <div class="form-group"><label>Periode</label><select class="form-select-full"><option>31 Mar – 4 Apr 2026</option><option>7 Apr – 11 Apr 2026</option></select></div>
        <div class="form-group"><label>Anggaran / siswa / hari (Rp)</label><input class="form-input" type="number" value="16000"><div class="form-hint">SD: Rp 16.000 · SMP: Rp 18.000 · SMA: Rp 20.000</div></div>
        <div class="form-group"><label>Jumlah siswa</label><input class="form-input" type="number" value="450"></div>
        <div class="form-group"><label>Wilayah</label><select class="form-select-full"><option>Jakarta Pusat</option><option>Jakarta Selatan</option></select></div>
    </div>
    <div style="display:flex;justify-content:flex-end"><button class="btn btn-primary" onclick="goStep(1)">Lanjut → Isi Bahan Makanan</button></div></div>`;
}

function renderStep2() {
    const rows = bahanList.map((b, i) =>
        `<tr><td>${b.nama}</td><td style="font-family:var(--mono)">${b.jumlah} ${b.satuan}</td><td style="font-family:var(--mono)">Rp ${b.harga.toLocaleString('id')}/kg</td><td>${b.stok} kg</td><td><div class="kal-bar"><div class="kal-fill" style="width:${Math.min(b.kal / 6, 100)}%"></div></div><span style="font-size:10px;font-family:var(--mono)">${b.kal} kkal</span></td><td><button class="btn btn-danger btn-sm" onclick="removeBahan(${i})">Hapus</button></td></tr>`
    ).join('');
    return `<div class="form-card"><div class="form-card-title">Daftar Bahan Makanan</div><div class="form-card-sub">Tambahkan bahan yang tersedia di dapur.</div>
    <div class="bahan-header"><span style="font-size:11px;color:var(--text-dim)">${bahanList.length} bahan</span><button class="btn btn-primary btn-sm" onclick="showToast('Tambah bahan: form siap')">+ Tambah Bahan</button></div>
    <div class="bahan-table-wrap"><table class="bt"><thead><tr><th>Nama Bahan</th><th>Porsi</th><th>Harga</th><th>Stok</th><th>Kalori est.</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
    <div style="display:flex;justify-content:space-between;margin-top:14px"><button class="btn btn-ghost" onclick="goStep(0)">← Kembali</button><button class="btn btn-primary" onclick="goStep(2)"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>Proses Otomatis</button></div></div>`;
}

function renderStep3() {
    return `<div class="processing-card"><div class="spinner" id="spinner"></div><div style="font-size:14px;font-weight:600;color:var(--text)">Sistem Sedang Memproses...</div><div style="font-size:11px;color:var(--text-dim)">Optimasi menu · 5 hari × 450 siswa</div>
    <div class="proc-steps" id="procSteps">
        <div class="proc-step" id="ps0"><span class="proc-dot active-s" id="pd0"></span>Membaca data bahan makanan...</div>
        <div class="proc-step" id="ps1"><span class="proc-dot" id="pd1"></span>Mengambil data nilai gizi...</div>
        <div class="proc-step" id="ps2"><span class="proc-dot" id="pd2"></span>Menjalankan algoritma optimasi menu...</div>
        <div class="proc-step" id="ps3"><span class="proc-dot" id="pd3"></span>Menyeimbangkan variasi menu per hari...</div>
        <div class="proc-step" id="ps4"><span class="proc-dot" id="pd4"></span>Validasi pemenuhan AKG per jenjang...</div>
    </div>
    <div style="width:100%;max-width:340px"><div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-dim);margin-bottom:4px"><span>Progres</span><span id="procPct">0%</span></div><div style="height:4px;background:var(--border);border-radius:2px"><div id="procBar" style="height:4px;background:var(--green);border-radius:2px;width:0%;transition:width .4s"></div></div></div></div>`;
}

function renderStep4() {
    const AKG = JENJANG_DATA[activeJenjang].AKG;
    const m = resultMenus[resultActiveDay];
    const pct = Math.round((m.kal / AKG.kal + m.pro / AKG.pro + m.kar / AKG.kar + m.lem / AKG.lem) / 4 * 100);
    const isWarn = warnResultDays.includes(resultActiveDay);
    const dayLabels = ['Sen 31/3', 'Sel 1/4', 'Rab 2/4', 'Kam 3/4', 'Jum 4/4'];
    const tabs = dayLabels.map((d, i) => `<button class="mdt${i === resultActiveDay ? ' active' : ''}${warnResultDays.includes(i) ? ' warn' : ''}" onclick="selectRDay(${i})">${d}</button>`).join('');
    const avgAKG = Math.round(resultMenus.reduce((a, b) => a + (b.kal / AKG.kal + b.pro / AKG.pro + b.kar / AKG.kar + b.lem / AKG.lem) / 4, 0) / 5 * 100);
    const avgCost = Math.round(resultMenus.reduce((a, b) => a + b.cost, 0) / 5);
    const rows = m.items.map(it => `<tr><td>${it.nama}</td><td>${it.kal}</td><td>${it.pro}</td><td>${it.kar}</td><td>${it.lem}</td></tr>`).join('');
    const warnBox = isWarn ? `<div class="warning-box"><div class="warning-box-title"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>AKG belum optimal (${pct}%)</div><ul style="padding-left:16px"><li style="font-size:11px;color:var(--amber)">Protein kurang ±12g — tambah telur/tempe</li><li style="font-size:11px;color:var(--amber)">Karbohidrat kurang ±45g — tambah buah/nasi</li></ul></div>` : '';
    return `<div class="form-card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><div><div class="form-card-title">Hasil Menu Mingguan</div><div class="form-card-sub">${JENJANG_DATA[activeJenjang].sekolah} · 31 Mar–4 Apr · ${JENJANG_DATA[activeJenjang].label}</div></div><button class="btn btn-ghost btn-sm">Ekspor PDF</button></div>
    <div class="result-stats"><div class="rstat"><div class="rstat-label">Rata-rata AKG</div><div class="rstat-val" style="color:var(--green)">${avgAKG}%</div><div style="font-size:10px;color:var(--green)">Di atas 85%</div></div><div class="rstat"><div class="rstat-label">Biaya/siswa/hari</div><div class="rstat-val">Rp ${(avgCost / 1000).toFixed(1)}rb</div></div><div class="rstat"><div class="rstat-label">Total/minggu</div><div class="rstat-val">Rp ${Math.round(avgCost * 5 * JENJANG_DATA[activeJenjang].siswa / 1000000).toFixed(1)}jt</div></div><div class="rstat" style="${warnResultDays.length ? 'border:1px solid rgba(245,166,35,.3)' : ''}"><div class="rstat-label">Hari warning AKG</div><div class="rstat-val" style="color:${warnResultDays.length ? 'var(--amber)' : 'var(--green)'}">${warnResultDays.length} hari</div></div></div>
    <div class="menu-day-tabs">${tabs}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px"><span style="font-size:12px;font-weight:600;color:var(--green)">${m.name}</span><span style="font-size:11px;font-family:var(--mono);padding:2px 8px;border-radius:4px;background:${isWarn ? 'var(--amber-dim)' : 'var(--green-dim)'};color:${isWarn ? 'var(--amber)' : 'var(--green)'}">${pct}% AKG</span></div>
    <div class="result-table-wrap"><table class="rt"><thead><tr><th>Bahan</th><th>Kalori</th><th>Protein</th><th>Karbo</th><th>Lemak</th></tr></thead><tbody>${rows}<tr class="tot-row"><td>Total</td><td>${m.kal}</td><td>${m.pro}</td><td>${m.kar}</td><td>${m.lem}</td></tr><tr class="akg-row"><td>Target AKG (${JENJANG_DATA[activeJenjang].label})</td><td>${AKG.kal}</td><td>${AKG.pro}</td><td>${AKG.kar}</td><td>${AKG.lem}</td></tr></tbody></table></div>
    ${warnBox}
    <div class="action-row"><button class="btn btn-ghost" onclick="goStep(1)">← Ubah Bahan</button><button class="btn btn-primary" onclick="showToast('Menu berhasil disimpan & diterapkan!')">✓ Simpan & Terapkan</button></div></div>`;
}

function goStep(n) { currentStep = n; renderStep(); }
function selectRDay(i) { resultActiveDay = i; document.getElementById('stepContent').innerHTML = renderStep4(); }
function removeBahan(i) { bahanList.splice(i, 1); document.getElementById('stepContent').innerHTML = renderStep2(); }

function startProc() {
    const steps = ['ps0', 'ps1', 'ps2', 'ps3', 'ps4'];
    const dots = ['pd0', 'pd1', 'pd2', 'pd3', 'pd4'];
    const dur = [600, 900, 1200, 700, 800];
    let el = 0;
    const tot = dur.reduce((a, b) => a + b, 0);
    procStep = 0;
    function tick() {
        if (procStep >= steps.length) { setTimeout(() => goStep(3), 400); return; }
        const s = document.getElementById(steps[procStep]);
        const d = document.getElementById(dots[procStep]);
        if (s) s.classList.add('active-s');
        if (d) d.classList.add('active-s');
        setTimeout(() => {
            if (s) { s.classList.remove('active-s'); s.classList.add('done'); }
            if (d) { d.classList.remove('active-s'); d.classList.add('done'); }
            if (procStep + 1 < steps.length) {
                const nd = document.getElementById(dots[procStep + 1]);
                if (nd) nd.classList.add('active-s');
            }
            el += dur[procStep];
            const pct = Math.round(el / tot * 100);
            const bar = document.getElementById('procBar');
            const pctEl = document.getElementById('procPct');
            if (bar) bar.style.width = pct + '%';
            if (pctEl) pctEl.textContent = pct + '%';
            procStep++;
            tick();
        }, dur[procStep]);
    }
    tick();
}

/* ═══════════════════════════════════════
   STOK
═══════════════════════════════════════ */
const stokData = [
    { id: 1, nama: 'Beras', kat: 'Karbohidrat', stok: 50, satuan: 'kg', min: 20, harga: 14000, exp: '2026-06-01', status: 'ok' },
    { id: 2, nama: 'Ayam fillet', kat: 'Protein', stok: 12, satuan: 'kg', min: 10, harga: 35000, exp: '2026-04-05', status: 'warn' },
    { id: 3, nama: 'Telur', kat: 'Protein', stok: 80, satuan: 'butir', min: 60, harga: 2000, exp: '2026-04-02', status: 'warn' },
    { id: 4, nama: 'Tahu', kat: 'Protein', stok: 20, satuan: 'kg', min: 8, harga: 8000, exp: '2026-04-04', status: 'ok' },
    { id: 5, nama: 'Tempe', kat: 'Protein', stok: 18, satuan: 'kg', min: 8, harga: 10000, exp: '2026-04-03', status: 'ok' },
    { id: 6, nama: 'Sayur hijau', kat: 'Sayuran', stok: 3, satuan: 'kg', min: 8, harga: 5000, exp: '2026-03-30', status: 'danger' },
    { id: 7, nama: 'Bayam', kat: 'Sayuran', stok: 5, satuan: 'kg', min: 8, harga: 4000, exp: '2026-03-29', status: 'danger' },
    { id: 8, nama: 'Wortel', kat: 'Sayuran', stok: 15, satuan: 'kg', min: 5, harga: 8000, exp: '2026-04-10', status: 'ok' },
    { id: 9, nama: 'Susu UHT', kat: 'Minuman', stok: 30, satuan: 'liter', min: 15, harga: 7500, exp: '2026-05-01', status: 'ok' },
    { id: 10, nama: 'Minyak goreng', kat: 'Lemak', stok: 15, satuan: 'liter', min: 5, harga: 18000, exp: '2026-06-30', status: 'ok' },
    { id: 11, nama: 'Ikan salmon', kat: 'Protein', stok: 7, satuan: 'kg', min: 6, harga: 65000, exp: '2026-04-02', status: 'ok' },
    { id: 12, nama: 'Kangkung', kat: 'Sayuran', stok: 8, satuan: 'ikat', min: 5, harga: 4000, exp: '2026-04-01', status: 'ok' },
    { id: 13, nama: 'Pepaya', kat: 'Buah', stok: 12, satuan: 'buah', min: 4, harga: 6000, exp: '2026-04-04', status: 'ok' },
    { id: 14, nama: 'Pisang', kat: 'Buah', stok: 25, satuan: 'buah', min: 8, harga: 5000, exp: '2026-04-06', status: 'ok' },
    { id: 15, nama: 'Kentang', kat: 'Karbohidrat', stok: 22, satuan: 'kg', min: 8, harga: 12000, exp: '2026-04-15', status: 'ok' },
    { id: 16, nama: 'Gula pasir', kat: 'Lainnya', stok: 10, satuan: 'kg', min: 3, harga: 16000, exp: '2026-08-01', status: 'ok' }
];
const auditData = [
    { aksi: 'Tambah Stok', bahan: 'Beras', detail: '+ 20 kg (50→70)', time: '28 Mar · 09:14', type: 'ok' },
    { aksi: 'Kurangi Stok', bahan: 'Sayur hijau', detail: '- 12 kg (15→3)', time: '27 Mar · 14:22', type: 'danger' },
    { aksi: 'Tambah Stok', bahan: 'Ayam fillet', detail: '+ 5 kg (7→12)', time: '27 Mar · 10:05', type: 'ok' },
    { aksi: 'Edit Data', bahan: 'Telur', detail: 'Min. stok 60→80 butir', time: '26 Mar · 16:40', type: 'info' },
    { aksi: 'Tambah Bahan', bahan: 'Pisang', detail: 'Baru · 25 buah', time: '24 Mar · 08:55', type: 'ok' }
];
let stokQuery = '', stokStat = '', stokKat = '';

function formatExp(d) {
    const ref = new Date('2026-03-28'), exp = new Date(d);
    const diff = Math.round((exp - ref) / 86400000);
    const str = exp.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
    if (diff <= 0) return `<span style="color:var(--red);font-family:var(--mono)">${str}</span>`;
    if (diff <= 3) return `<span style="color:var(--red);font-family:var(--mono)">${str} (${diff}h)</span>`;
    if (diff <= 7) return `<span style="color:var(--amber);font-family:var(--mono)">${str} (${diff}h)</span>`;
    return `<span style="color:var(--text-dim);font-family:var(--mono)">${str}</span>`;
}

function renderStokTable() {
    let d = [...stokData];
    if (stokQuery) d = d.filter(x => x.nama.toLowerCase().includes(stokQuery.toLowerCase()));
    if (stokStat) d = d.filter(x => x.status === stokStat);
    if (stokKat) d = d.filter(x => x.kat === stokKat);
    document.getElementById('stokCount').textContent = d.length + ' bahan';
    document.getElementById('stokBody').innerHTML = d.map(x => {
        const pct = Math.round(x.stok / Math.max(x.stok, x.min) * 100);
        const col = x.status === 'danger' ? 'var(--red)' : x.status === 'warn' ? 'var(--amber)' : 'var(--green)';
        const badge = x.status === 'danger' ? '<span class="badge danger">Kritis</span>' : x.status === 'warn' ? '<span class="badge warn">Rendah</span>' : '<span class="badge ok">Aman</span>';
        const katBadge = x.kat === 'Protein' ? 'blue' : x.kat === 'Sayuran' ? 'ok' : x.kat === 'Karbohidrat' ? 'amber' : x.kat === 'Buah' ? 'purple' : 'info';
        return `<tr>
            <td>${x.nama}</td>
            <td><span class="badge ${katBadge}">${x.kat}</span></td>
            <td><div class="stok-bar-wrap"><div class="stok-bar-bg"><div class="stok-bar-fill" style="width:${Math.min(pct, 100)}%;background:${col}"></div></div><span style="font-family:var(--mono);font-size:10px;min-width:40px;text-align:right">${x.stok} ${x.satuan}</span></div></td>
            <td style="font-family:var(--mono);font-size:10px;color:var(--text-dim)">${x.min} ${x.satuan}</td>
            <td style="font-family:var(--mono);font-size:10px">Rp ${x.harga.toLocaleString('id')}</td>
            <td>${formatExp(x.exp)}</td>
            <td>${badge}</td>
            <td><div class="act-btns"><button class="btn btn-ghost btn-sm" style="padding:3px 7px;font-size:10px" onclick="editStok(${x.id})">Edit</button><button class="btn btn-warning btn-sm" style="padding:3px 7px;font-size:10px" onclick="restockItem(${x.id})">+Stok</button></div></td>
        </tr>`;
    }).join('');
}

function renderAudit() {
    document.getElementById('auditLog').innerHTML = auditData.map(a =>
        `<div class="audit-item"><div class="audit-header"><span class="audit-action">${a.aksi} — <b>${a.bahan}</b></span><span class="audit-time">${a.time}</span></div><div class="audit-detail">${a.detail}</div></div>`
    ).join('');
}

function filterStok(q) { stokQuery = q; renderStokTable(); }
function filterStokStatus(s) { stokStat = s; renderStokTable(); }
function filterStokKat(k) { stokKat = k; renderStokTable(); }

function editStok(id) {
    const x = stokData.find(d => d.id === id);
    if (!x) return;
    document.getElementById('stokFormTitle').textContent = 'Edit — ' + x.nama;
    document.getElementById('sf_nama').value = x.nama;
    document.getElementById('sf_stok').value = x.stok;
    document.getElementById('sf_satuan').value = x.satuan;
    document.getElementById('sf_min').value = x.min;
    document.getElementById('sf_harga').value = x.harga;
    document.getElementById('sf_exp').value = x.exp;
}

function restockItem(id) {
    const x = stokData.find(d => d.id === id);
    if (!x) return;
    const j = prompt(`Tambah stok ${x.nama} (${x.satuan}):`);
    if (j && !isNaN(j)) {
        const old = x.stok;
        x.stok += parseInt(j);
        if (x.stok >= x.min) x.status = 'ok';
        auditData.unshift({ aksi: 'Tambah Stok', bahan: x.nama, detail: `+ ${j} ${x.satuan} (${old}→${x.stok})`, time: 'Baru saja', type: 'ok' });
        renderStokTable();
        renderAudit();
        showToast(`Stok ${x.nama} berhasil ditambah!`);
    }
}

function saveStokItem() {
    const n = document.getElementById('sf_nama').value.trim();
    if (!n) return;
    showToast(`Bahan "${n}" berhasil disimpan.`);
    resetStokForm();
}

function resetStokForm() {
    ['sf_nama', 'sf_stok', 'sf_min', 'sf_harga', 'sf_exp'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('sf_satuan').value = 'kg';
    document.getElementById('stokFormTitle').textContent = 'Form Tambah Bahan';
}

function showStokForm() {
    resetStokForm();
    document.getElementById('stokFormCard').scrollIntoView({ behavior: 'smooth' });
}

/* ═══════════════════════════════════════
   SETTINGS & HELP
═══════════════════════════════════════ */
function showSpanel(id, btn) {
    document.querySelectorAll('.spanel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
    document.getElementById('spanel-' + id).classList.add('active');
    btn.classList.add('active');
}

function showHpanel(id, btn) {
    document.querySelectorAll('.hpanel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.htab').forEach(b => b.classList.remove('active'));
    document.getElementById('hpanel-' + id).classList.add('active');
    btn.classList.add('active');
}

function toggleFaq(el) {
    const item = el.parentElement;
    const was = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!was) item.classList.add('open');
}

function toggleGuide(card) {
    const was = card.classList.contains('expanded');
    document.querySelectorAll('.guide-card').forEach(c => c.classList.remove('expanded'));
    if (!was) card.classList.add('expanded');
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
renderDayTabs();
renderDayMenu();
initDashboardCharts();
renderStep();
renderStokTable();
renderAudit();
renderLapStats();
renderLapHistori();

/* ═══════════════════════════════════════
   RESPONSIVE / MOBILE NAV
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   RESPONSIVE / MOBILE NAV
═══════════════════════════════════════ */

function syncBottomNav(pageId) {
    const bnMap = {
        dashboard: 'bn-dashboard',
        perencanaan: 'bn-perencanaan',
        stok: 'bn-stok',
        laporan: 'bn-laporan',
        pengaturan: 'bn-more',
        bantuan: 'bn-more'
    };
    document.querySelectorAll('.bn-item').forEach(el => el.classList.remove('active'));
    const bnEl = document.getElementById(bnMap[pageId]);
    if (bnEl) bnEl.classList.add('active');

    document.querySelectorAll('.drawer-item[id]').forEach(el => el.classList.remove('active'));
    const diEl = document.getElementById('di-' + pageId);
    if (diEl) diEl.classList.add('active');
}

function mobileNavigate(pageId) {
    // Show the right page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageEl = document.getElementById('page-' + pageId);
    if (pageEl) pageEl.classList.add('active');

    // Update topbar title
    document.getElementById('topbarTitle').innerHTML = topbarTitles[pageId] || pageId;

    // Trigger data init if needed
    if (pageId === 'dashboard') initDashboardCharts();
    if (pageId === 'laporan') { renderLapStats(); renderLapHistori(); initLaporanCharts(); }
    if (pageId === 'perencanaan') renderStep();

    // Sync sidebar nav (desktop) & bottom nav (mobile)
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const sidebarEl = document.querySelector(`.nav-item[onclick*="'${pageId}'"]`);
    if (sidebarEl) sidebarEl.classList.add('active');

    syncBottomNav(pageId);
}

function openDrawer() {
    const overlay = document.getElementById('drawerOverlay');
    if (!overlay) return;
    overlay.style.display = 'flex';
    requestAnimationFrame(() => overlay.classList.add('open'));
}

function closeDrawer() {
    const overlay = document.getElementById('drawerOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    setTimeout(() => {
        if (!overlay.classList.contains('open')) overlay.style.display = 'none';
    }, 250);
}

// Also sync bottom nav when desktop sidebar nav is clicked
const _nav = navigate;
navigate = function (pageId, navEl) {
    _nav(pageId, navEl);
    syncBottomNav(pageId);
};

// Init
syncBottomNav('dashboard');