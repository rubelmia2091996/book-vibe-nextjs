'use client';

import React, { useContext } from 'react';
import { IBook } from '../types/books.type';
import { BookContext } from '../context/BookContext';
import { toast } from 'react-toastify';

const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BookContext);

  // Check if the book is already in the wishlist
  const isInWishlist = wishlist.some((b) => b.bookId === book.bookId);

  const handleWishlistBook = () => {
    if (isInWishlist) {
      toast.info(`"${book.bookName}" is already in your Wishlist!`, {
        icon: 'ℹ️',
      });
      return;
    }

    setWishlist([...wishlist, book]);
    toast.success(`"${book.bookName}" added to Wishlist!`, {
      icon: '🔖',
    });
  };

  return (
    <div>
      <button
        className={`w-full py-3.5 px-6 font-semibold rounded-xl border transition-all text-center ${
          isInWishlist
            ? 'bg-slate-800/50 text-slate-500 border-slate-800 cursor-not-allowed'
            : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200 shadow-sm'
        }`}
        onClick={handleWishlistBook}
        disabled={isInWishlist}
      >
        {isInWishlist ? 'Already in Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default WishlistButton;