/**
 * Testimonials Component
 *
 * This component displays client testimonials with a quote and client information.
 * It features GSAP animations for scroll-triggered effects and
 * a responsive layout with quote styling and client details.
 */

import React, { useRef, useEffect } from 'react';
import image6 from '../assets/images/image6.png';
import quote from '../assets/images/quote.png';
import ceo from '../assets/images/ceo.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials Component
 *
 * Displays client testimonials with:
 * - GSAP scroll animations for text and image
 * - Quote styling with decorative elements
 * - Client information with avatar
 * - Responsive grid layout
 */
export const Testimonials: React.FC = () => {
  // Refs for GSAP animations
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // GSAP animations for scroll-triggered entrance effects
  useEffect(() => {
    // Text content animation (slides in from left)
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Image animation (slides in from right)
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial content section */}
          <div ref={textRef} className="space-y-8 order-2 lg:order-1">
            {/* Quote section with decorative elements */}
            <div className="relative">
              <img
                className="w-8 h-8 mb-4 scale-x-[-1]"
                src={quote}
                alt="Quote"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                They worked so hard to fulfill our goal
                <img className="w-8 h-8 mt-4" src={quote} alt="Quote" />
              </h3>
            </div>

            {/* Client information section */}
            <div className="flex items-center space-x-4">
              {/* Client avatar */}
              <div className="flex-shrink-0">
                <img
                  src={ceo}
                  alt="CEO"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              {/* Client details */}
              <div>
                <h5 className="text-lg font-semibold text-white">
                  Wade Warren
                </h5>
                <p className="text-blue-400">CEO, Unicraft</p>
              </div>
            </div>
          </div>

          {/* Testimonial image section */}
          <div
            ref={imageRef}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <img
              src={image6}
              alt="Testimonials illustration"
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
