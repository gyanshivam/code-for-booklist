import "./App.css";
import { books as staticBooks } from "./Books";
import Book from "./Book";
import { useEffect, useState } from "react";

export default function App() {
  const [books, setBooks] = useState(staticBooks);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(books.length);
  }, [books]);

  const getBook = (id) => {
    const bookID = books.find((book) => book.id === id);
    console.log(bookID);
  };

  return (
    <div classsName="appishere">
      <div>
        <h1>Best Seller Self Help Books</h1>
      </div>

      <section className="booklist">
        {books.map((book, index) => (
          <Book key={book.id} {...book} getBook={getBook} index={index + 1} />
        ))}
      </section>
    </div>
  );
}
