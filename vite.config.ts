import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  build: {
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    assetsInlineLimit: 4096,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'react-dev-locator',
        ],
      },
    }), 
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/images/',
          dest: 'images/',
        },
        {
          src: 'public/music/',
          dest: 'music/',
        },
        {
          src: 'public/videos/',
          dest: 'videos/',
        },
      ],
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
})
