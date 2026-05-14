# Caesar Cipher Cryptography Tool

Web aplikasi untuk enkripsi dan dekripsi pesan menggunakan algoritma Caesar Cipher dengan ASCII mod 256.

## 🚀 Fitur

- 🔒 **Enkripsi & Dekripsi** - Menggunakan Caesar Cipher dengan ASCII mod 256
- 📊 **Visualisasi Step-by-Step** - Lihat proses transformasi setiap karakter
- 📜 **Riwayat Operasi** - Track semua operasi enkripsi/dekripsi
- 📋 **Tabel ASCII** - Referensi lengkap karakter ASCII dengan terjemahan Indonesia
- ℹ️ **Penjelasan Lengkap** - Dokumentasi cara kerja algoritma
- 📱 **Responsive Design** - Optimal untuk desktop, tablet, dan mobile

## 🛠️ Teknologi

- HTML5
- CSS3 (Custom styling dengan gradient)
- Vanilla JavaScript (No framework)

## 📦 Struktur File

```
├── index.html      # Struktur HTML utama
├── style.css       # Styling dan responsive design
├── script.js       # Logika aplikasi dan algoritma
├── vercel.json     # Konfigurasi Vercel
└── README.md       # Dokumentasi
```

## 🌐 Deploy ke Vercel

### Cara 1: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Cara 2: Via GitHub + Vercel Dashboard

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Deploy otomatis!

## 💻 Menjalankan Lokal

Cukup buka file `index.html` di browser, atau gunakan live server:

```bash
# Jika pakai Python
python -m http.server 8000

# Jika pakai Node.js
npx serve
```

## 📖 Cara Penggunaan

1. **Masukkan pesan** di kolom Message
2. **Pilih key** (0-255) untuk shift
3. **Klik Encrypt** untuk enkripsi atau **Decrypt** untuk dekripsi
4. **Lihat hasil** di bagian Result
5. **Cek visualization** untuk melihat proses detail
6. **Review history** untuk melihat riwayat operasi

## 🔐 Tentang Caesar Cipher

Caesar Cipher adalah teknik enkripsi substitusi sederhana yang menggeser setiap karakter dalam pesan sebanyak posisi tertentu. Implementasi ini menggunakan:

- **Algoritma**: Caesar Cipher
- **Range**: ASCII 0-255 (extended ASCII)
- **Rumus Enkripsi**: `(ASCII + Key) mod 256`
- **Rumus Dekripsi**: `(ASCII - Key + 256) mod 256`

## ⚠️ Catatan Keamanan

Caesar Cipher adalah algoritma pembelajaran dan **TIDAK AMAN** untuk penggunaan produksi. Gunakan hanya untuk:
- Pembelajaran kriptografi
- Demonstrasi konsep
- Proyek edukasi

Untuk keamanan nyata, gunakan algoritma modern seperti AES, RSA, atau ChaCha20.

## 📄 Lisensi

MIT License - Bebas digunakan untuk pembelajaran dan proyek pribadi.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk pembelajaran kriptografi
