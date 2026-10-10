'use client';

import React, { useContext } from 'react';
import { IBook } from '../types/books.type';
import { BookContext } from '../context/BookContext';
import { toast } from 'react-toastify';

const ReadBookButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext);

  // Check if the book is already in the collection
  const isAlreadyRead = readBooks.some((b) => b.bookId === book.bookId);

  const handleReadBook = () => {
    if (isAlreadyRead) {
      toast.info(`"${book.bookName}" is already in your Read list!`, {
        icon: 'ℹ️',
      });
      return;
    }

    setReadBooks([...readBooks, book]);
    toast.success(`"${book.bookName}" added to Read Books!`, {
      icon: '📚',
    });
  };

  return (
    <div>
      <button
        className={`w-full py-3.5 px-6 font-semibold rounded-xl transition-all text-center ${
          isAlreadyRead
            ? 'bg-slate-700 text-slate-400 cursor-not-allowed border border-slate-600/50'
            : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
        }`}
        onClick={handleReadBook}
        disabled={isAlreadyRead}
      >
        {isAlreadyRead ? 'Already in Read List' : 'Add to Read Book'}
      </button>
    </div>
  );
};

export default ReadBookButton;