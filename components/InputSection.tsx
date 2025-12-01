import React from 'react';

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
}

export const InputSection: React.FC<InputSectionProps> = ({ input, setInput, onAnalyze, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.metaKey) {
      onAnalyze();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50/50">
      <label htmlFor="text-input" className="block text-sm font-semibold text-slate-700 mb-2 font-display">
        Masukkan Teks Anda
      </label>
      <div className="relative">
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ketik atau tempel paragraf di sini untuk diperiksa..."
          className="w-full h-48 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none text-slate-700 leading-relaxed placeholder:text-slate-400"
          disabled={isLoading}
        />
        <div className="absolute bottom-4 right-4 text-xs text-slate-400 pointer-events-none">
          {input.length} Karakter
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button
          onClick={onAnalyze}
          disabled={!input.trim() || isLoading}
          className={`
            relative overflow-hidden group px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 shadow-lg shadow-blue-200/50
            ${!input.trim() || isLoading 
              ? 'bg-slate-300 cursor-not-allowed shadow-none' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-[1.02] hover:shadow-blue-300/50'
            }
          `}
        >
          <span className={`flex items-center gap-2 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Periksa Kata
          </span>
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
