const BookCard = ({ title, author, rating, genre }) => {
    return (
        <div className="book-card">
            <h2>{title}</h2>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Rating:</strong> {rating} / 5</p>
            <p><strong>Genre:</strong> {genre}</p>
        </div>
    );
};

export default BookCard;
