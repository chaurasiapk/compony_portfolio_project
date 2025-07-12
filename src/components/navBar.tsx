/**
 * Navigation Bar Component
 *
 * This component provides the main navigation for the portfolio website.
 * It includes a responsive design with smooth scrolling navigation,
 * dynamic shadow effects on scroll, and mobile menu support.
 */

import React, { useEffect, useRef } from 'react';

/**
 * NavBar Component
 *
 * A responsive navigation bar with:
 * - Fixed positioning with backdrop blur effect
 * - Dynamic shadow on scroll
 * - Smooth scrolling to sections
 * - Mobile-responsive design
 */
export const NavBar: React.FC = () => {
  // Reference to the navigation container for scroll effects
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Effect to handle scroll-based styling changes
  useEffect(() => {
    const handleScroll = () => {
      if (navContainerRef.current) {
        // Add shadow when scrolled past 80px
        if (window.pageYOffset > 80) {
          navContainerRef.current.classList.add('shadow-lg');
        } else {
          navContainerRef.current.classList.remove('shadow-lg');
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smooth scroll to a specific section
   * @param offset - The vertical offset to scroll to
   */
  const scrollToSection = (offset: number) => {
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo section */}
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            d<span className="text-[#ff7069]">/</span>code
          </h3>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(0)}
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(900)}
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(1800)}
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection(2750)}
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Testimonial
            </button>
            <button
              onClick={() => scrollToSection(3650)}
              className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-300">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
