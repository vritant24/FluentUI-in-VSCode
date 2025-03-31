import react from '@vitejs/plugin-react';
import { defineConfig, normalizePath } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        sourcemap: true,
        target: 'chrome58',
    }
});