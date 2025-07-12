/**
 * Vite Configuration
 * 
 * This file configures the build tool and development server for the portfolio project.
 * It sets up React support, path aliases, development server options, and build optimization.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // Configure plugins for React support
  plugins: [react()],
  
  // Base path for GitHub Pages deployment
  base: '/compony_portfolio_project/',
  
  // Configure module resolution and path aliases
  resolve: {
    alias: {
      // Alias '@' to src directory for cleaner imports
      '@': path.resolve(__dirname, './src'),
    },
    // File extensions to resolve automatically
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true, // Automatically open browser on dev server start
  },
  
  // Build configuration for production
  build: {
    outDir: 'dist',
    sourcemap: true, // Generate source maps for debugging
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
}); 