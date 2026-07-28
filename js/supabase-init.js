// =====================================================
// Inisialisasi Supabase (dipakai di semua halaman)
// =====================================================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
import { SUPABASE_CONFIG } from './supabase-config.js';

export const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

/**
 * Pastikan pengguna sudah login. Jika belum, lempar ke login.html.
 * Mengembalikan Promise<User>.
 */
export async function wajibLogin() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    const tujuan = encodeURIComponent(location.pathname + location.search);
    location.href = 'login.html?kembali=' + tujuan;
    return new Promise(() => {}); // hentikan eksekusi halaman, redirect sedang berjalan
  }
  return session.user;
}

/** Upload 1 file gambar ke bucket storage, kembalikan URL publiknya. */
export async function unggahGambar(file, bucket) {
  if (!file) return null;
  const namaFile = Date.now() + '_' + Math.random().toString(36).slice(2) + '_' + file.name.replace(/[^a-zA-Z0-9.\-]/g, '_');
  const { error } = await supabase.storage.from(bucket).upload(namaFile, file);
  if (error) throw error;
  const { data } = supabase.storage.from(bucket).getPublicUrl(namaFile);
  return data.publicUrl;
}

/** Format tanggal ISO (YYYY-MM-DD) ke format Indonesia. */
export function tanggalIndo(tanggalIso) {
  if (!tanggalIso) return '-';
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  const [y, m, d] = tanggalIso.split('-').map(Number);
  if (!y || !m || !d) return tanggalIso;
  return `${d} ${bulan[m - 1]} ${y}`;
}

/** Ubah textarea (satu poin per baris) jadi array poin bersih. */
export function poinDariTeks(teks) {
  return (teks || '')
    .split(/\r\n|\r|\n/)
    .map(s => s.trim())
    .filter(s => s !== '');
}

export function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}
