// src/BookAuthors.jsx

import React from "react";

const BookAuthors = ({ books }) => {
    const authors = books.map(book => book.author);

    return (
        <div>
            <h2>Book Authors</h2>
            <ul>
                {authors.map((author, index) => (
                    <li key={index}>{author}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookAuthors;
