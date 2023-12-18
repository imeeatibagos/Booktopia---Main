import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const library = () => {
  const [books, setBooks] = useState([]);

  // Fetch the API
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);
  return (
    <div className="mt-20 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center ">All books are here!</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid:cols-3 grid-cols-1 ">
        {books.map((book) => (
          <Card>
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p>{book.bookDescription}</p>

            <Link to="/library" className=" block">
              <button
                className="bg-blue-700 text-white font-semibold  py-2 rounded
        hover:bg-black transition-all duration-300"
              >
                Explore More
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default library;
