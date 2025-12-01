import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold font-display shadow-lg shadow-blue-200">
            K
          </div>
          <h1 className="text-xl font-display font-bold text-slate-800 tracking-tight">
            Kata<span className="text-blue-500">-Fix</span>
          </h1>
        </div>
        <div className="hidden sm:block">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium border border-blue-100">
            Pemeriksa Kebakuan Kata AI
          </span>
        </div>
      </div>
    </header>
  );
};
