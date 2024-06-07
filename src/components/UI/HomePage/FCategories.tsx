import Image from "next/image";
import { use } from "react";

async function fetchBooks() {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
}

const FCategories = () => {
  const { data: fictionBooks  } = use(fetchBooks());
  const fiction1 = fictionBooks[0];
  const fiction2 = fictionBooks[1];
  const fiction3 = fictionBooks[2];
  return (
    <div className="w-full max-w-[1250px] mx-auto mt-5 py-5">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center">
        <div className="w-full rounded bg-gray-50 p-3">
          <h1 className="text-xl font-semibold text-center mb-3">
            Fiction Book
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <div className="relative w-full h-full col-span-1 row-span-2  p-5  border">
              <Image fill src={fiction3?.image} alt="image" />
            </div>
            <div className="relative w-full h-32  p-5  border">
              <Image fill src={fiction1?.image} alt="image" />
            </div>
            <div className="relative w-full h-32   p-5  border">
              <Image fill src={fiction2?.image} alt="image" />
            </div>
          </div>
        </div>
        <div className="w-full rounded bg-gray-50 p-3">
          <h1 className="text-xl font-semibold text-center mb-3">
            Non Fiction Book
          </h1>
          <div className="grid grid-cols-3  gap-3">
            <div className="relative w-full h-32  p-5  border">
              <Image fill src={fiction3?.image} alt="image" />
            </div>
            <div className="relative w-full h-32  p-5  border">
              <Image fill src={fiction1?.image} alt="image" />
            </div>
            <div className="relative w-full h-32   p-5  border">
              <Image fill src={fiction2?.image} alt="image" />
            </div>
            <div className="relative w-full h-32  p-5  border">
              <Image fill src={fiction3?.image} alt="image" />
            </div>
            <div className="relative w-full h-32  p-5  border">
              <Image fill src={fiction1?.image} alt="image" />
            </div>
            <div className="relative w-full h-32   p-5  border">
              <Image fill src={fiction2?.image} alt="image" />
            </div>
          </div>
        </div>
        <div className="w-full rounded bg-gray-50 p-3">
          <h1 className="text-xl font-semibold text-center mb-3">
            Children Books
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <div className="relative w-full h-full row-span-1  p-5  border">
              <Image fill src={fiction3?.image} alt="image" />
            </div>
            <div className="relative w-full h-full col-span-1 row-span-2 p-5  border">
              <Image fill src={fiction1?.image} alt="image" />
            </div>
            <div className="relative w-full h-32  row-span-1   p-5  border">
              <Image fill src={fiction2?.image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCategories;
