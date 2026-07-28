// =====================================================
// KONFIGURASI SUPABASE
// =====================================================
// GANTI kedua nilai di bawah ini dengan milik project Supabase Anda.
//
// Cara mendapatkannya:
// 1. Buka https://supabase.com/dashboard, pilih project Anda
// 2. Klik ikon gerigi (Project Settings) di menu kiri bawah
// 3. Klik "Data API" (atau "API" di versi lama)
// 4. Salin "Project URL" -> tempel ke SUPABASE_URL di bawah
// 5. Buka menu "API Keys", salin key dengan label "anon" / "public"
//    (BUKAN "service_role" -- jangan pernah pakai/taruh service_role
//    di file yang bisa dilihat publik seperti ini)
//    -> tempel ke SUPABASE_ANON_KEY di bawah
//
// Panduan lengkap ada di README.md
// =====================================================

export const SUPABASE_CONFIG = {
  url: "GANTI_DENGAN_PROJECT_URL_ANDA",
  anonKey: "GANTI_DENGAN_ANON_KEY_ANDA",
};
