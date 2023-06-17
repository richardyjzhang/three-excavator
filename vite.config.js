import path from "path";

export default {
    root: path.join(__dirname, "src"),
    base: './',
    server: {
        host: true,
    },
    build: {
        outDir: path.join(__dirname, "dist"),
        emptyOutDir: true,
        sourcemap: true,
    }
}