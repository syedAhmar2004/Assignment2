// src/FictionBooks.jsx

import React from "react";
import BookCard from "./BookCard";

const FictionBooks = ({ books }) => {
    const fictionBooks = books.filter(book => book.genre.toLowerCase() === "fiction");

    return (
        <div>
            <h2>Fiction Books</h2>
            <div className="book-list">
                {fictionBooks.map(book => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        rating={book.rating}
                        genre={book.genre}
                    />
                ))}
            </div>
        </div>
    );
};

export default FictionBooks;
