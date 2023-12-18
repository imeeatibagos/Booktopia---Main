import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetch the API
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <BookCard books={books} headline="Most Read Books" />
    </div>
  );
};

export default FavoriteBooks;
