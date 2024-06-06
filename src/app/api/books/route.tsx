import dbConnect from "@/lib/DB/dbConnect";
import Book from "@/models/Book/Book";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");

    const query: { main_category?: string } = {};
    if (category) {
      query.main_category = category;
    }

    // Perform the query
    const books = await Book.find(query);

    return new Response(
      JSON.stringify({
        success: true,
        message: "All books retrieved successfully",
        data: books,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    console.error("Error fetching books:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to retrieve books",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
