import { TBook } from "@/types/Book";
import Image from "next/image";
import React from "react";

const BookCard = ({ book }: { book: TBook }) => {
  const { _id, title, rating, image, author, price } = book;
  return (
    <div className="w-full border ">
      <div className="w-full h-56 relative">
        <Image fill src={image} alt="image" />
      </div>
      <div className="p-2">
        <h1 className="text-lg">{title}</h1>
        <p className="text-sm">{author}</p>
        <p className="text-lg font-semibold text-pink-500">${price}</p>
      </div>
    </div>
  );
};

export default BookCard;
