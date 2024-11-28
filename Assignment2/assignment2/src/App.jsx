import React from "react";
import { Books } from "./books";
import HighRatedBooks from "./HighRatedBooks";
import BookDetails from "./BookDetails";
import FictionBooks from "./FictionBooks";
import BookAuthors from "./BookAuthors";

const App = () => {
    return (
        <div>
            <h1>Book Management App</h1>
            <HighRatedBooks books={Books} />
            <BookDetails books={Books} />
            <FictionBooks books={Books} />
            <BookAuthors books={Books} />
        </div>
    );
};

export default App;
