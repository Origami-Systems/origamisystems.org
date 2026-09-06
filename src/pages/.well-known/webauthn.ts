import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            origins: ["https://the-house-app.com"],
        }),
    );
};
