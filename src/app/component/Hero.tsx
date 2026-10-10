import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerImage from '@/assets/book.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-16 lg:py-24">
      {/* Background Decorative Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Side: Tagline & Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Over 10,000+ Books Available
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
              Books to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Freshen Up</span> Your Bookshelf
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore thousands of captivating stories, insightful non-fiction, and timeless classics. Find your next favorite read and elevate your personal collection today.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/books"
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 text-center transform hover:-translate-y-0.5"
              >
                Explore Books
              </Link>
              <Link
                href="/bestsellers"
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold rounded-xl transition-all duration-200 text-center"
              >
                View Bestsellers
              </Link>
            </div>

            {/* Social Proof / Stats */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">50k+</p>
                <p className="text-xs text-slate-400">Happy Readers</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">10k+</p>
                <p className="text-xs text-slate-400">Book Titles</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">4.9 ★</p>
                <p className="text-xs text-slate-400">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Side: Featured Book Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl transform rotate-3 scale-95 opacity-30 blur-xl"></div>

              {/* Graphic Container Card */}
              <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700/60 p-6 sm:p-8 backdrop-blur-sm shadow-2xl flex items-center justify-center min-h-[320px] sm:min-h-[380px]">
                <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
                  <Image
                    src={bannerImage}
                    alt="Featured Book"
                    className="object-contain max-h-full drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;