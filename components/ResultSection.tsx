import React from 'react';
import { AnalysisResult } from '../types';

interface ResultSectionProps {
  result: AnalysisResult;
}

export const ResultSection: React.FC<ResultSectionProps> = ({ result }) => {
  // Determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-500 bg-emerald-50 border-emerald-100';
    if (score >= 70) return 'text-blue-500 bg-blue-50 border-blue-100';
    if (score >= 50) return 'text-amber-500 bg-amber-50 border-amber-100';
    return 'text-rose-500 bg-rose-50 border-rose-100';
  };

  const scoreClass = getScoreColor(result.persentase_kebakuan);

  return (
    <div className="space-y-6 animate-fade-in-up">
      
      {/* Score Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50/50 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-lg font-display font-bold text-slate-800">Hasil Analisis</h2>
          <p className="text-slate-500 text-sm mt-1">Berikut adalah ringkasan pemeriksaan kebakuan teks Anda.</p>
        </div>
        <div className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${scoreClass}`}>
          <div className="text-3xl font-bold font-display">{result.persentase_kebakuan}%</div>
          <div className="text-xs font-semibold uppercase tracking-wide opacity-80">
            Tingkat<br/>Kebakuan
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Corrections List */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50/50 h-full">
          <h3 className="text-md font-display font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            Kata Tidak Baku Ditemukan
          </h3>
          
          {result.saran_kata_baku.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-center bg-slate-50 rounded-xl border border-slate-100 border-dashed">
              <span className="text-4xl mb-2">✨</span>
              <p className="text-slate-600 font-medium">Tidak ada kata tidak baku!</p>
              <p className="text-slate-400 text-xs">Teks Anda sudah sesuai kaidah.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {result.saran_kata_baku.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors group">
                  <div className="flex-1">
                    <div className="text-rose-500 line-through decoration-rose-300 decoration-2 text-sm">
                      {item.original}
                    </div>
                  </div>
                  <div className="px-2 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-emerald-600 font-medium text-sm">
                      {item.correction}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Corrected Text */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50/50 flex flex-col h-full">
          <h3 className="text-md font-display font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Versi Teks Koreksi AI
          </h3>
          <div className="flex-grow p-4 bg-primary-50/50 rounded-xl border border-blue-100 text-slate-700 leading-relaxed text-sm overflow-y-auto max-h-[400px]">
            {result.teks_koreksi}
          </div>
          <div className="mt-4 flex justify-end">
             <button 
                onClick={() => navigator.clipboard.writeText(result.teks_koreksi)}
                className="text-xs font-medium text-blue-500 hover:text-blue-700 flex items-center gap-1 transition-colors"
             >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
               </svg>
               Salin Teks
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};
