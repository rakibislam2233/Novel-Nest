import { TBook } from "@/types/Book";
import BookCard from "./BookCard";
import SectionTitle from "@/utils/SectionTitle";
const BestSelling = async () => {
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-cache",
  });
  const data = await res.json();
  return (
    <div className="w-full max-w-[1250px] mx-auto mt-10 py-5">
      <SectionTitle title="Bestselling Books" btnName="View More" />
      <div className="w-full grid grid-cols-1  md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.data?.slice(0, 5).map((book: TBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
