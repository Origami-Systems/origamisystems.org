import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            origins: ["https://the-house-app.com"],
        }),
        {
            headers: {
                "Access-Control-Allow-Origin": "https://the-house-app.com",
                "Content-Type": "application/json",
            },
        },
    );
};
