/**
 * Contact Component
 *
 * This component displays the contact section with appointment scheduling,
 * contact details, social media links, and an embedded map.
 * It features GSAP animations for scroll-triggered effects.
 */

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Component
 *
 * Displays contact information with:
 * - Appointment scheduling section
 * - Contact details (address, phone)
 * - Social media links
 * - Embedded Google Maps
 * - GSAP scroll animations
 */
export const Contact: React.FC = () => {
  // Refs for GSAP animations
  const textRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // GSAP animations for scroll-triggered entrance effects
  useEffect(() => {
    // Text content animation (slides up from bottom)
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
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

    // Map animation (slides in from right)
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
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
        {/* Contact Header & Details */}
        <div ref={textRef}>
          {/* Contact Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Appointment title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Schedu<span className="text-[#ff7068]">/</span>e an appointment
              </h3>
            </div>

            {/* Contact description */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                We are always care about your project. Feel free to contact with
                us. We make digital any project with augmented, virtual and
                mixed reality. We offer IoT support as well.
              </p>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Address and Phone Information */}
            <div className="space-y-8">
              {/* Address section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Address
                </h3>
                <p className="text-gray-300">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </p>
              </div>

              {/* Phone section */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Phone</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">+1 629 555 0129</p>
                  <p className="text-gray-300">+1 303 555 0105</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Social/websites
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Facebook',
                  'YouTube',
                  'Dribbble',
                  'Instagram',
                  'Vimeo',
                  'Behance',
                ].map(platform => (
                  <span
                    key={platform}
                    className="hover:text-blue-300 cursor-pointer transition-colors duration-200"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map Section */}
        <div ref={mapRef} className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.52003597069!2d83.3796119512499!3d26.75968838311117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448b28fcff5b%3A0xd3af5c574cc2d6d2!2sGorakhpur%20Junction%20railway%20station!5e0!3m2!1sen!2sin!4v1657014448440!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="Location Map"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
