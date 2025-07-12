/**
 * Services Component
 *
 * This component showcases the AR (Augmented Reality) real estate solution.
 * It features GSAP animations for scroll-triggered effects and
 * a responsive layout highlighting the service offering.
 */

import React, { useRef, useEffect } from 'react';
import image2 from '../assets/images/image2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Services Component
 *
 * Displays the AR real estate solution with:
 * - Scroll-triggered GSAP animations
 * - Responsive grid layout
 * - Service description and call-to-action
 * - Featured image with shadow effects
 */
export const Services: React.FC = () => {
  // Reference for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP animation for scroll-triggered entrance effect
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div id="services-container" ref={containerRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Service title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Real AR - Real estate virtual solution
            </h1>

            {/* Service description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              Augmentation reality solution with latest technology enhances real
              estate.
            </p>

            {/* Call-to-action button */}
            <button className="bg-[#ff7069] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105">
              Learn more
            </button>
          </div>

          {/* Image section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img
              src={image2}
              alt="AR Real Estate Solution"
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
