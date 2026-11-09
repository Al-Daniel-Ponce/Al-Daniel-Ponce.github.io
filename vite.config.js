import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // This is a GitHub user site (Al-Daniel-Ponce.github.io), so it is served from the root.
  base: '/',
});
