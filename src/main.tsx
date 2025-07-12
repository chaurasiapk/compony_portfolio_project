/**
 * Main Application Entry Point
 *
 * This file serves as the entry point for the React application.
 * It initializes the React app, sets up smooth scrolling with Lenis,
 * and renders the main App component.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

// Lenis smooth scroll setup for enhanced user experience
import Lenis from '@studio-freight/lenis';

// Initialize Lenis smooth scrolling with custom configuration
const lenis = new Lenis({
  duration: 1.2, // Animation duration in seconds
  touchMultiplier: 2, // Touch sensitivity multiplier
});

// Request animation frame function for smooth scrolling
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// Start the animation frame loop
requestAnimationFrame(raf);

// Create and render the React application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
