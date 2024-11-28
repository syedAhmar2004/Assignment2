

import React from "react";
import BookCard from "./BookCard";

const HighRatedBooks = ({ books }) => {
    const highRatedBooks = books.filter(book => book.rating > 4.5);

    return (
        <div>
            <h2>High Rated Books</h2>
            <div className="book-list">
                {highRatedBooks.map(book => (
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

export default HighRatedBooks;
