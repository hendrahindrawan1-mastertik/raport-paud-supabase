import { supabase } from './supabase-init.js';

/** Render navbar ke elemen #navbar. Panggil di setiap halaman setelah wajibLogin(). */
export function renderNavbar(halamanAktif) {
  const el = document.getElementById('navbar');
  if (!el) return;

  // Penanda halaman aktif: class "active" + aria-current (gayanya ada di assets/style.css)
  const aktif = (nama) => halamanAktif === nama ? 'class="active" aria-current="page"' : '';

  el.innerHTML = `
    <div class="navbar">
      <div class="brand">
        <img src="assets/logo-sekolah.png" alt="Logo sekolah"
             style="width:42px;height:42px;border-radius:50%;object-fit:contain;background:#fff;padding:3px;flex:none;"
             onerror="this.style.display='none'">
        <span>Raport PAUD <span style="font-weight:400;opacity:.8">TAAM Nurul Iman</span></span>
      </div>
      <nav>
        <a href="index.html" ${aktif('dashboard')}>Dashboard</a>
        <a href="siswa.html" ${aktif('siswa')}>Data Siswa</a>
        <a href="kelas.html" ${aktif('kelas')}>Kelas</a>
        <a href="pengaturan.html" ${aktif('pengaturan')}>Pengaturan Sekolah</a>
        <button class="keluar" id="btnKeluar">Keluar</button>
      </nav>
    </div>`;
  document.getElementById('btnKeluar').addEventListener('click', async () => {
    await supabase.auth.signOut();
    location.href = 'login.html';
  });
}
