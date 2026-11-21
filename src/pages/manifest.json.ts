import type { APIRoute } from "astro";
import { Apps } from "@origami-systems/config";

export const GET: APIRoute = () =>
    Response.json({
        name: Apps.website.title,
        short_name: Apps.website.short_title,
        description: Apps.website.description,
        display: "standalone",
        start_url: "/",
        background_color: "#000001",
        theme_color: "#000001",
        icons: [
            { src: "/icons/192x192.png", sizes: "192x192", type: "image/png" },
            { src: "/icons/512x512.png", sizes: "512x512", type: "image/png" },
        ],
    });
