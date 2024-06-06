export const GET = (request: Request) => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Welcome to the server",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
