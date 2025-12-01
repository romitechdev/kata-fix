import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load env dari file .env
    const env = loadEnv(mode, process.cwd(), '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // HAPUS define untuk process.env
      // Vite akan otomatis handle import.meta.env
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});