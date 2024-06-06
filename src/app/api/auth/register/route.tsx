export const GET = async (request: Request) => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Register route",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
