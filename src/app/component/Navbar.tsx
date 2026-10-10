'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo & Brand Name */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              Nexus<span className="text-indigo-400">Books</span>
            </span>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
            <Link href="/books" className="hover:text-indigo-400 transition-colors">All Books</Link>
            <Link href="/read-books" className="hover:text-indigo-400 transition-colors">Listed Books</Link>
            <Link href="/read-book-time" className="hover:text-indigo-400 transition-colors">Reading Time</Link>
            <Link href="/wishlist" className="hover:text-indigo-400 transition-colors">Wishlist Books</Link>
          </div>

          {/* Right: Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link href="/signin" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors" > Sign In </Link>
            <Link href="/books" className="px-5 py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all duration-200 transform hover:-translate-y-0.5" > Sign Up </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-1 text-base font-medium text-slate-300">
            <Link href="/" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-white transition-colors" > Home </Link>
            <Link href="/books" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-white transition-colors" > All Books </Link>
            <Link href="/read-books" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-white transition-colors"> Listed Books </Link>
            <Link href="/read-book-time" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-white transition-colors"> Reading Time </Link>
            <Link href="/wishlist" onClick={() => setIsOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-white transition-colors" >Wishlist Books </Link>
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <Link href="/signin" onClick={() => setIsOpen(false)} className="w-full text-center py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors" > Sign In </Link>
            <Link href="/books" onClick={() => setIsOpen(false)} className="w-full text-center py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-md transition-colors" > Sign Up </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;