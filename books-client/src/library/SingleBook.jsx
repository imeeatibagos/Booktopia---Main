import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, bookPdfUrl } =
    useLoaderData();
  return (
    <div>
      <div className="mt-28 px-4 lg:px-24">
        <img src={imageURL} alt="" className="h-96" />
        <h2>{bookTitle}</h2>
        <p>{bookDescription}</p>
      </div>
      <Link to={bookPdfUrl} className="mt-12 block">
        <button
          className="bg-blue-700 text-white font-semibold px-5 py-2 rounded
        hover:bg-black transition-all duration-300"
        >
          Read More
        </button>
      </Link>
    </div>
  );
};

export default SingleBook;
