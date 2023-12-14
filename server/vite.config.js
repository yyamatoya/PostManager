import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    server: {
        port: 5173,
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
    },
});
process.env.VITE_APP_VERSION = JSON.stringify(process.env.npm_package_version).replaceAll('"', '');
