/**
 * Footer Component
 *
 * This component displays the footer section with navigation links,
 * social media icons, and copyright information.
 * It provides a comprehensive footer with organized link categories.
 */

import React from 'react';

/**
 * Footer navigation links organized by category
 */
const links = [
  {
    title: 'Product',
    items: ['Features', 'Analytics', 'API'],
  },
  {
    title: 'Company',
    items: ['About', 'Blog', 'Careers'],
  },
  {
    title: 'Support',
    items: ['Help Center', 'Contact', 'Status'],
  },
  {
    title: 'Legal',
    items: ['Privacy', 'Terms', 'Security'],
  },
];

/**
 * Social media icons with links and SVG icons
 */
const socialIcons = [
  {
    name: 'GitHub',
    value: 'https://github.com/chaurasiapk',
    svg: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    value: 'https://www.linkedin.com/in/pradeepchaurasia93/',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
      </svg>
    ),
  },
  {
    name: 'Globe',
    value: 'https://chaurasiapk.github.io/profile/',
    svg: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9z"
        />
      </svg>
    ),
  },
  {
    name: 'Document',
    value:
      'https://docs.google.com/document/d/1A2nIt0ZAeT7pIVdSgMdnvIM0BByrUHuoeO__46fPr3I/edit?tab=t.0',
    svg: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    name: 'Mail',
    value: 'mailto:chaurasia.pk6@gmail.com',
    svg: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.797l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7A2.25 2.25 0 012.25 6.993V6.75"
        />
      </svg>
    ),
  },
];

/**
 * Footer Component
 *
 * Displays a comprehensive footer with:
 * - Organized navigation links by category
 * - Social media icons with external links
 * - Copyright information
 * - Responsive design
 */
export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4" style={{ backgroundColor: '#25324a' }}>
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {links.map(col => (
            <div key={col.title} className="flex flex-col items-center">
              {/* Link category title */}
              <h4 className="text-lg font-bold text-white mb-3">{col.title}</h4>

              {/* Link items */}
              <ul className="space-y-2">
                {col.items.map(item => (
                  <li key={item}>
                    <button className="text-gray-300 hover:text-white transition-colors duration-200 text-base focus:outline-none">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-10 mb-6">
          {socialIcons.map(icon => (
            <button
              key={icon.name}
              className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
              aria-label={icon.name}
              onClick={() => window.open(icon.value, '_blank')}
            >
              {icon.svg}
            </button>
          ))}
        </div>

        {/* Copyright Information */}
        <div className="text-center text-gray-400 text-sm">
          © 2025 Compony. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
