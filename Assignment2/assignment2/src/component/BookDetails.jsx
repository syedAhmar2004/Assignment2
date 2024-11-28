
import React from "react";

const BookDetails = ({ books }) => {
    return (
        <div>
            <h2>Book Details</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>Title:</strong> {book.title}, 
                        <strong> Author:</strong> {book.author}, 
                        <strong> Rating:</strong> {book.rating}, 
                        <strong> Genre:</strong> {book.genre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookDetails;
