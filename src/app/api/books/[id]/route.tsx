import Book from "@/models/Book/Book";
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const book = await Book.findById(id);
    if (!book) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Book not found",
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Book retrieved successfully",
        data: book,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while retrieving the book",
        error: error.message, // Include the error message in the response
      }),
      {
        status: 500, // Internal server error status code
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
