import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBook } from '../types/books.type';
interface IbookCardProps {
    book:IBook
}
const Book = ({book}:IbookCardProps) => {
    return (
        <div>
            <div className="bg-slate-800/70 border border-slate-700/60 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group">
              {/* Top Section: Image & Meta */}
              <div>
                {/* Book Cover Image Container */}
                <div className="relative w-full h-64 bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-4 mb-4 border border-slate-800 group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative w-full h-full">
                    <Image src={book.image} alt={book.bookName} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain drop-shadow-lg"/>
                  </div>
                  
                  {/* Category Pill Badge */}
                  <span className="absolute top-3 left-3 bg-indigo-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-md shadow">
                    {book.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {book.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-slate-700/60 text-indigo-300 px-2 py-0.5 rounded-md border border-slate-600/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Book Title & Author */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {book.bookName}
                </h3>
                <p className="text-sm text-slate-400 font-medium mb-3">
                  By <span className="text-slate-300">{book.author}</span>
                </p>
              </div>

              {/* Bottom Section: Footer Metadata & Action */}
              <div className="pt-3 border-t border-slate-700/50 space-y-3">
                
                {/* Rating, Pages & Year */}
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1 text-amber-400 font-semibold">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{book.rating}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <span>{book.totalPages} Pages</span>
                    <span>•</span>
                    <span>{book.yearOfPublishing}</span>
                  </div>
                </div>

                {/* Details Button */}
                <Link
                  href={`/books/${book.bookId}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900/60 hover:bg-indigo-600 text-slate-200 hover:text-white font-medium text-xs rounded-xl transition-all duration-200 border border-slate-700/60 hover:border-indigo-500 shadow-sm"
                >
                  View Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

              </div>
            </div>
        </div>
    );
};

export default Book;