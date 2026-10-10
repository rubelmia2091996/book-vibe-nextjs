import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-4">
      <div className="relative flex flex-col items-center space-y-6">
        
        {/* Pulsing Glow Background Effect */}
        <div className="absolute w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

        {/* Animated Brand Icon / Spinner */}
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-xl shadow-indigo-500/30">
          <svg
            className="w-8 h-8 text-white animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>

        {/* Loading Text & Branding */}
        <div className="text-center space-y-2 relative z-10">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Loading <span className="text-indigo-400">NexusBooks</span>...
          </h2>
          <p className="text-sm text-slate-400 font-medium">
            Please wait while we prepare your bookshelf.
          </p>
        </div>

        {/* Bouncing Progress Dots */}
        <div className="flex space-x-2 pt-2">
          <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-bounce" />
        </div>

      </div>
    </div>
  );
};

export default Loading;