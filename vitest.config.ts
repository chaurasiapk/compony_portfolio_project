/**
 * Vitest Configuration
 * 
 * This file configures the testing environment for the portfolio project.
 * It sets up the testing framework with proper DOM simulation and global test utilities.
 */

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Enable global test utilities (describe, it, expect, etc.)
    globals: true,
    
    // Use jsdom to simulate browser environment for DOM testing
    environment: 'jsdom',
    
    // Setup files to run before tests (for global test configuration)
    setupFiles: ['./src/test/setup.ts'],
  },
}); 