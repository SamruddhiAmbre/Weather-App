// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Weather-App/', // ← ADD THIS LINE
  plugins: [react()],
});
