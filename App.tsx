import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { ResultSection } from './components/ResultSection';
import { analyzeText } from './services/geminiService';
import { AnalysisResult } from './types';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeText(inputText);
      setResult(data);
    } catch (err: any) {
      setError(
        "Maaf, terjadi kesalahan saat menghubungi AI. Silakan periksa koneksi internet atau coba lagi nanti."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 font-sans pb-20">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Intro */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800">
            Tulis Bahasa Indonesia yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Baik & Benar</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            Deteksi otomatis kata tidak baku dan dapatkan saran perbaikan sesuai kaidah KBBI & PUEBI dalam hitungan detik.
          </p>
        </div>

        <div className="space-y-8">
          <InputSection 
            input={inputText}
            setInput={setInputText}
            onAnalyze={handleAnalyze}
            isLoading={loading}
          />

          {error && (
            <div className="animate-fade-in p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-sm font-bold text-rose-700">Terjadi Kesalahan</h3>
                <p className="text-sm text-rose-600 mt-1">{error}</p>
              </div>
            </div>
          )}

          {result && !loading && (
            <ResultSection result={result} />
          )}
        </div>
      </main>

      <footer className="text-center py-6 text-slate-400 text-sm border-t border-blue-50/50 mt-10">
        <p>© {new Date().getFullYear()} Kata-Fix. Ditenagai oleh Gemini AI.</p>
      </footer>
    </div>
  );
}

export default App;
