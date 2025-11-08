import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
        input: {
            main: resolve(__dirname, 'src/index.html'),
            movie: resolve(__dirname, 'src/movie.html'),
            search: resolve(__dirname, 'src/search.html'),
        },
        },
    },
})