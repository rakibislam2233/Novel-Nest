import React from "react";
import BookCard from "./BookCard";
import { TBook } from "@/types/Book";

const FeaturedBooks = async () => {
  const res = await fetch("http://localhost:3000/api/books");
  const data = await res.json();
  return (
    <div className="w-full max-w-[1250px] mx-auto mt-10 py-5">
      <h1 className="text-2xl font-semibold  text-center">Featured Books</h1>
      <div className="flex justify-center items-center gap-3 my-5">
        <button className="px-5 py-1.5 border border-pink-500 rounded-md font-semibold hover:bg-pink-500  text-gray-900 hover:text-white duration-500 transition-all">
          Featured
        </button>
        <button className="px-5 py-1.5 border border-pink-500 rounded-md font-semibold hover:bg-pink-500  text-gray-900 hover:text-white duration-500 transition-all">
          On Sale
        </button>
        <button className="px-5 py-1.5 border border-pink-500 rounded-md font-semibold hover:bg-pink-500  text-gray-900 hover:text-white duration-500 transition-all">
          Most Viewed
        </button>
      </div>
      <div className="w-full grid grid-cols-1  md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.data?.slice(0, 15).map((book: TBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
