import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    app: {
        head: {
            link: [{ rel: "icon", href: "/favicon.ico" }],
        },
    },
    devtools: { enabled: false },
    css: ["~/assets/css/main.css"],
    vite: { plugins: [tailwindcss()] },
    modules: ["@nuxtjs/google-fonts", "@solar-icons/nuxt"],
    solarIcons: {
        // prefix for auto-import
        namePrefix: "solar",
        autoImport: true,
        provider: true,
        // configuration icon
        color: "currentColor",
        size: 32,
        weight: "Linear",
        mirrored: false,
    },
    googleFonts: {
        families: {
            Poppins: true,
        },
    },
});
