'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/project', label: 'Projects' },
    { href: '/workexperience', label: 'Work Experience' },
  ];

  const isActive = (path) => pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        
        {/* Logo or Branding */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          MyPortfolio
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 transition"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          id="navbar-menu"
          className={`w-full md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'
          } md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded-md transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
