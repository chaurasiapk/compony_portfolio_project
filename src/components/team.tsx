/**
 * Team Component
 *
 * This component displays the team members section of the portfolio.
 * It features a responsive grid layout showcasing team members with
 * their photos, names, and designations with hover effects.
 */

import React, { useRef, useEffect } from 'react';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Team member interface for type safety
 */
interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

/**
 * Team Component
 *
 * Displays team members with:
 * - Responsive grid layout
 * - GSAP scroll animations
 * - Hover effects on team cards
 * - Professional styling with backdrop blur
 */
export const Team: React.FC = () => {
  // Team members data
  const members: TeamMember[] = [
    {
      name: 'Esther Howard',
      designation: 'CEO',
      image: image3,
    },
    {
      name: 'Robert Fox',
      designation: 'Project Manager',
      image: image4,
    },
    {
      name: 'Jenny Wilson',
      designation: 'Lead Designer',
      image: image5,
    },
  ];

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
    <div ref={containerRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our talents</h2>
        </div>

        {/* Team members grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200 border border-white/20"
            >
              {/* Team member photo */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
              />

              {/* Team member name */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>

              {/* Team member designation */}
              <span className="text-blue-400 font-medium">
                {member.designation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
