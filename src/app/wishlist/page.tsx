"use client";

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { BookContext } from '../context/BookContext';
import Book from '../component/Book';
import { IBook } from '@/app/types/books.type';

const WishlistBookPage = () => {
  const { wishlist } = useContext(BookContext);
  const [sortBy, setSortBy] = useState<string>('rating');

  // Sorting logic based on the 4 dropdown options
  const sortedWishlist = [...wishlist].sort((a: IBook, b: IBook) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating; // Highest rating first
    }
    if (sortBy === 'pages') {
      return b.totalPages - a.totalPages; // Most pages first
    }
    if (sortBy === 'year') {
      return b.yearOfPublishing - a.yearOfPublishing; // Newest publishing year first
    }
    if (sortBy === 'name') {
      return a.bookName.localeCompare(b.bookName); // Alphabetical A-Z
    }
    return 0;
  });

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <span className="text-indigo-400 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              Personal Collection
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              Read Books
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              All the books you have successfully completed.
            </p>
          </div>

          {/* Right Side: Total Count & Dropdown */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-slate-400 text-sm font-medium bg-slate-800/60 px-4 py-2.5 rounded-xl border border-slate-700/50">
              Total Completed: <span className="text-indigo-400 font-bold">{wishlist.length}</span>
            </div>

            {/* 4-Option Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort books by"
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-sm font-medium px-4 py-2.5 rounded-xl border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer shadow-sm"
              >
                <option value="rating" className="bg-slate-900 text-slate-200">
                  Sort by: Rating (High to Low)
                </option>
                <option value="pages" className="bg-slate-900 text-slate-200">
                  Sort by: Total Pages
                </option>
                <option value="year" className="bg-slate-900 text-slate-200">
                  Sort by: Publishing Year
                </option>
                <option value="name" className="bg-slate-900 text-slate-200">
                  Sort by: Name (A - Z)
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty State when no books read */}
        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-slate-800/40 rounded-2xl border border-slate-800/80 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">No Read Books Yet</h3>
            <p className="text-slate-400 max-w-md mx-auto text-sm">
              You haven't marked any books as read. Browse the collection and start adding to your read list!
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-sm shadow-lg shadow-indigo-600/20"
              >
                Explore Books
              </Link>
            </div>
          </div>
        ) : (
          /* Book Grid using Sorted Data */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedWishlist.map((book, index) => (
              <Book key={index} book={book}></Book>
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default WishlistBookPage;