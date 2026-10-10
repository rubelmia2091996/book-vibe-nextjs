"use client";
import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { IBook } from '../types/books.type';

interface IBookContext {
    readBooks: IBook[];
    setReadBooks: Dispatch<SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const BookContext = createContext<IBookContext>({
    readBooks: [],
    setReadBooks: () => {},
    wishlist: [],
    setWishlist: () => {},
});

const BookProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishlist, setWishlist] = useState<IBook[]>([]);
    
    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
    };

    return <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>;
};

export default BookProvider;