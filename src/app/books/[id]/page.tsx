import { IBook } from '@/app/types/books.type';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadBookButton from '@/app/component/ReadBookButton';
import WishlistButton from '@/app/component/WishlistButton';



interface IBooksDetailsParams {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise<IBook[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch books data");
    }

    // Fixed: Added 'await' to response.json()
    const data = await response.json();
    return data;
};

const BookDetailPage = async ({ params }: IBooksDetailsParams) => {
    const { id } = await params;
    const bookData = await getBooks();
    const book = bookData.find((book) => book.bookId === Number(id)) as IBook;
    return (
        <main className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Back Navigation */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 font-medium transition-colors group"
                >
                    <svg
                        className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Book List
                </Link>

                {/* Side-by-Side Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT SIDE: Book Cover & Action Buttons */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="relative w-full aspect-[3/4] bg-slate-950 rounded-2xl p-6 border border-slate-800 shadow-2xl flex items-center justify-center">
                            <Image
                                src={book.image}
                                alt={book.bookName}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 450px"
                                className="object-contain p-2"
                            />
                        </div>

                        {/* Quick CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <ReadBookButton book={book}></ReadBookButton>
                            <WishlistButton book={book}></WishlistButton>
                        </div>
                    </div>

                    {/* RIGHT SIDE: All Book Information & Content */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Header: Badge, Rating, Title & Author */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30">
                                    {book.category}
                                </span>
                                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span>{book.rating} / 5.0</span>
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                                {book.bookName}
                            </h1>

                            <p className="text-lg text-slate-400">
                                By <span className="text-indigo-400 font-semibold">{book.author}</span>
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {book.tags?.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-medium bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700/60"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Synopsis / Review */}
                        <div className="space-y-3 pt-4 border-t border-slate-800">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                Synopsis & Review
                            </h2>
                            <p className="text-slate-300 text-base leading-relaxed font-normal">
                                {book.review}
                            </p>
                        </div>

                        {/* Specifications Grid */}
                        <div className="space-y-4 pt-4 border-t border-slate-800">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                Specifications
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <span className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                                        Total Pages
                                    </span>
                                    <span className="text-base font-semibold text-slate-200">
                                        {book.totalPages} Pages
                                    </span>
                                </div>

                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <span className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                                        Published Year
                                    </span>
                                    <span className="text-base font-semibold text-slate-200">
                                        {book.yearOfPublishing}
                                    </span>
                                </div>

                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <span className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                                        Publisher
                                    </span>
                                    <span className="text-base font-semibold text-slate-200 truncate block">
                                        {book.publisher}
                                    </span>
                                </div>

                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <span className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                                        Category
                                    </span>
                                    <span className="text-base font-semibold text-slate-200">
                                        {book.category}
                                    </span>
                                </div>

                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <span className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                                        User Rating
                                    </span>
                                    <span className="text-base font-semibold text-amber-400">
                                        {book.rating}
                                    </span>
                                </div>

                                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                                    <span className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                                        Book Reference
                                    </span>
                                    <span className="text-base font-semibold text-slate-200">
                                        #{book.bookId}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default BookDetailPage;