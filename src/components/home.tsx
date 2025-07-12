/**
 * Home Component
 *
 * This component represents the hero section of the portfolio website.
 * It features an animated typewriter effect, GSAP animations,
 * and a responsive layout with compelling copy and imagery.
 */

import React, { useRef, useEffect, useState } from 'react';
import image1 from '../assets/images/image1.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Keywords for the typewriter effect
const keywords = ['design', 'build', 'craft', 'code'];

/**
 * Home Component
 *
 * Hero section featuring:
 * - Animated typewriter effect for dynamic text
 * - GSAP-powered scroll animations
 * - Responsive grid layout
 * - Call-to-action button
 */
export const Home: React.FC = () => {
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // State for typewriter effect
  const [currentWord, setCurrentWord] = useState(0);
  const [showWord, setShowWord] = useState(true);

  // Typewriter effect for headline keywords
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWord(false);
      setTimeout(() => {
        setCurrentWord(prev => (prev + 1) % keywords.length);
        setShowWord(true);
      }, 300);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [currentWord, showWord]);

  // GSAP animations for scroll-triggered effects
  useEffect(() => {
    // Container animation
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

    // Text elements animation with stagger effect
    if (headlineRef.current && subRef.current && btnRef.current) {
      gsap.fromTo(
        [headlineRef.current, subRef.current, btnRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Image animation
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
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="home-container"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Animated headline with typewriter effect */}
            <h1
              ref={headlineRef}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              We{' '}
              <span className="text-[#ff7069] relative inline-block min-w-[90px]">
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    showWord ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  } inline-block`}
                  style={{ minWidth: 60 }}
                >
                  {keywords[currentWord]}
                </span>
                <span
                  className="absolute left-0 top-0 animate-blink w-2 h-full bg-[#ff7069]"
                  style={{
                    display: showWord ? 'inline-block' : 'none',
                    width: 2,
                    marginLeft: 4,
                  }}
                />
              </span>{' '}
              your feelings,{' '}
              <span className="text-[#ff7069] relative inline-block min-w-[90px]">
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    showWord ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  } inline-block`}
                  style={{ minWidth: 60 }}
                >
                  {keywords[(currentWord + 1) % keywords.length]}
                </span>
                <span
                  className="absolute left-0 top-0 animate-blink w-2 h-full bg-[#ff7069]"
                  style={{
                    display: showWord ? 'inline-block' : 'none',
                    width: 2,
                    marginLeft: 4,
                  }}
                />
              </span>{' '}
              emotions
            </h1>

            {/* Subtitle text */}
            <p ref={subRef} className="text-xl text-gray-300 leading-relaxed">
              We talented people with latest technologies can help you to fulfil
              your dream.
            </p>

            {/* Call-to-action button */}
            <button
              ref={btnRef}
              className="bg-[#ff7069] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              All work
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Image section */}
          <div
            ref={imageRef}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <img
              src={image1}
              alt="Home illustration"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS for blinking cursor animation (add to global CSS):
// .animate-blink { animation: blink 1s steps(2, start) infinite; }
// @keyframes blink { to { visibility: hidden; } }
