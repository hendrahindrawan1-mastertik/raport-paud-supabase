import { supabase } from './supabase-init.js';

/** Render navbar ke elemen #navbar. Panggil di setiap halaman setelah wajibLogin(). */
export function renderNavbar(halamanAktif) {
  const el = document.getElementById('navbar');
  if (!el) return;
  el.innerHTML = `
    <div class="navbar">
      <div class="brand">🧒 Raport PAUD <span style="font-weight:400;opacity:.8">TAAM Nurul Iman</span></div>
      <nav>
        <a href="index.html" ${halamanAktif==='dashboard'?'style="text-decoration:underline;"':''}>Dashboard</a>
        <a href="siswa.html" ${halamanAktif==='siswa'?'style="text-decoration:underline;"':''}>Data Siswa</a>
        <a href="kelas.html" ${halamanAktif==='kelas'?'style="text-decoration:underline;"':''}>Kelas</a>
        <a href="pengaturan.html" ${halamanAktif==='pengaturan'?'style="text-decoration:underline;"':''}>Pengaturan Sekolah</a>
        <button class="keluar" id="btnKeluar">Keluar</button>
      </nav>
    </div>`;
  document.getElementById('btnKeluar').addEventListener('click', async () => {
    await supabase.auth.signOut();
    location.href = 'login.html';
  });
}
