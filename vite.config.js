import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/',
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'home.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
        playground: resolve(__dirname, 'pages/play-ground.html'),
        works: resolve(__dirname, 'pages/works.html'),
        eislab: resolve(__dirname, 'works/eislab.html'),
        kin: resolve(__dirname, 'works/kin.html'),
      },
      external: [
        /^.*\/js\/vendor\/.*/,
        /^.*\/css\/vendor\/.*/,
      ],
    },
    copyPublicDir: false,
  },
  server: {
    open: '/home.html',
    port: 3000,
  },
  css: {
    devSourcemap: false,
  },
  optimizeDeps: {
    exclude: ['js/vendor/**', 'css/vendor/**'],
  },
});