'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/';
      }
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col items-center justify-center p-6 selection:bg-indigo-500 selection:text-white font-sans">
      
      {/* Card wrapper */}
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800/80 rounded-2xl p-8 text-center shadow-2xl backdrop-blur-xl">
        
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-6">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>404 Error</span>
        </div>

        {/* Big Code */}
        <h1 className="text-7xl font-extrabold tracking-tight mb-3 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading & Description */}
        <h2 className="text-xl font-bold mb-2 text-slate-200">
          Page not found
        </h2>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or doesn’t exist.
        </p>

        {/* Action Buttons */}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2"
          >
            <span>🏠</span>
            <span>Return Home</span>
          </Link>
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>←</span>
            <span>Go Back</span>
          </button>
        </div>

      </div>

      {/* Footer text */}
      <footer className="mt-8 text-xs text-slate-600 font-mono">
        app/not-found.tsx
      </footer>

    </div>
  );
}