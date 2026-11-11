import { supabase } from './supabase-init.js';

/** Render navbar ke elemen #navbar. Panggil di setiap halaman setelah wajibLogin(). */
export function renderNavbar(halamanAktif) {
  const el = document.getElementById('navbar');
  if (!el) return;

  // Penanda halaman aktif: class "active" + aria-current (gayanya ada di assets/style.css)
  const aktif = (nama) => halamanAktif === nama ? 'class="active" aria-current="page"' : '';

  el.innerHTML = `
    <style>
      .logo-koin{flex:none;display:inline-flex;perspective:600px;}
      .logo-koin-img{
        width:42px;height:42px;border-radius:50%;object-fit:contain;
        background:#fff;padding:3px;box-shadow:0 0 0 2px #f3bd52;
        animation:koin-putar 7s ease-in-out infinite;
      }
      .logo-koin-img:hover{animation:koin-hover .9s ease-in-out;}
      @keyframes koin-putar{0%,75%{transform:rotateY(0deg);}100%{transform:rotateY(360deg);}}
      @keyframes koin-hover{from{transform:rotateY(0deg);}to{transform:rotateY(360deg);}}
      @media (prefers-reduced-motion:reduce){.logo-koin-img{animation:none !important;}}
    </style>
    <div class="navbar">
      <div class="brand">
        <span class="logo-koin">
          <img class="logo-koin-img" src="assets/logo-sekolah.png" alt="Logo sekolah"
               onerror="this.parentNode.style.display='none'">
        </span>
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
