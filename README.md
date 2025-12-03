# 📝 Kata-Fix — Pemeriksa Kebakuan Kata Bahasa Indonesia

Aplikasi web yang menggunakan AI (Google Gemini) untuk memeriksa kebakuan kata dalam teks Bahasa Indonesia sesuai dengan KBBI dan PUEBI.

## ✨ Fitur

- ✅ **Analisis Kebakuan Kata** - Deteksi kata tidak baku dalam teks
- ✅ **Saran Perbaikan** - Rekomendasi kata baku yang sesuai KBBI
- ✅ **Koreksi Otomatis** - Hasilkan versi teks yang sudah diperbaiki
- ✅ **Skor Kebakuan** - Persentase seberapa baku teks Anda
- ✅ **Antarmuka Modern** - Desain responsif dengan Tailwind CSS
- ✅ **Real-time Processing** - Analisis cepat dengan Gemini API

## 🚀 Demo Live

**[https://katafix.vercel.app](https://katafix.vercel.app)** 

## 🛠️ Teknologi

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **AI API**: Google Gemini 2.5 Flash
- **Deployment**: Vercel
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Instalasi Lokal

### Prerequisites
- Node.js 18+ dan npm/yarn/pnpm

### Langkah-langkah
1. **Clone repository**
   ```bash
   git clone https://github.com/romitechdev/kata-fix.git
   cd kata-fix
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Setup Environment Variables**
   - Buat file `.env.local` di root project
   - Dapatkan API key dari [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Tambahkan ke `.env.local`:
     ```env
     VITE_GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Jalankan development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

5. **Buka browser**
   - Buka [http://localhost:3000](http://localhost:3000)

## 🏗️ Build untuk Production

```bash
# Build aplikasi
npm run build

# Preview build
npm run preview
```

File hasil build akan ada di folder `dist/`.

## 🌐 Deployment ke Vercel

### Metode 1: GitHub Integration (Recommended)
1. Push kode ke GitHub repository
2. Login ke [Vercel](https://vercel.com)
3. Pilih "Import Project"
4. Pilih repository Anda
5. Tambahkan Environment Variable:
   - Key: `VITE_GEMINI_API_KEY`
   - Value: `your_gemini_api_key`
6. Klik "Deploy"

### Metode 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

## 📁 Struktur Project

```
kata-fix/
├── components/
│   ├── Header.tsx
│   ├── InputSection.tsx
│   └── ResultSection.tsx
├── services/
│   └── geminiService.ts
├── types.ts
├── App.tsx
├── index.html
├── index.tsx
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🔧 Konfigurasi

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API Key | ✅ |

### Tailwind CSS
Konfigurasi custom di `index.html`:
- Font utama: Inter
- Font display: Poppins
- Warna utama: Sky Blue palette

## 🧪 Testing

```bash
# Pastikan TypeScript tidak ada error
npx tsc --noEmit

# Build test
npm run build

# Preview test
npm run preview
```

## 🤝 Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

MIT License. Lihat file [LICENSE](LICENSE) untuk detail.

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   ```
   Error: Invalid API Key
   ```
   **Solution**: Pastikan `VITE_GEMINI_API_KEY` sudah di-set di Environment Variables Vercel.

2. **Build Error di Vercel**
   ```
   Failed to compile TypeScript
   ```
   **Solution**: Test build lokal dulu: `npm run build`

3. **CORS Error**
   ```
   Access to fetch at '...' from origin '...' has been blocked by CORS policy
   ```
   **Solution**: Pastikan API key valid dan region sesuai.

4. **Blank Page setelah Deploy**
   **Solution**: Periksa console error dan pastikan semua asset ter-load dengan benar.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/romitechdev/kata-fix/issues)
- **Email**: rominmuh230@gmail.com
- **Website**: [kata-fix.vercel.app](https://katafix.vercel.app)

## 🙏 Credit

- **Google Gemini API** untuk AI capabilities
- **KBBI** sebagai referensi kebakuan bahasa
- **Vercel** untuk hosting platform
- **React & Vite** untuk framework
