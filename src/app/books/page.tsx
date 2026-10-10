import React from 'react';
import Book from '../component/Book';
import { IBook } from '../types/books.type';


const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`, {
    cache: "no-store", // Ensures fresh data fetch in Next.js App Router
  });

  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }

  // Fixed: Added 'await' to response.json()
  const data = await response.json();
  return data;
};

const BooksPage = async () => {
    const books = await getBooks();
    return (
        <div>
            <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-indigo-400 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              Curated Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
               All Book List
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Explore timeless classics and modern favorites across various categories.
            </p>
          </div>

          <div className="text-slate-400 text-sm font-medium bg-slate-800/60 px-4 py-2 rounded-lg border border-slate-700/50 self-start md:self-auto">
            Total Books: <span className="text-indigo-400 font-bold">{books.length}</span>
          </div>
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book:IBook, index:number) => (
            <Book key={index} book={book}></Book>
          ))}
        </div>

      </div>
    </section>
        </div>
    );
};

export default BooksPage;