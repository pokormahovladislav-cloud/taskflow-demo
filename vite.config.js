import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],

      manifest: {
        name: 'TaskFlow',
        short_name: 'TaskFlow',
        description: 'Застосунок для організації та перегляду завдань',
        theme_color: '#2563eb',
        background_color: '#f3f6fb',
        display: 'standalone',
        start_url: '/',
        scope: '/',

        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: '/index.html',
      },
    }),
  ],
});
