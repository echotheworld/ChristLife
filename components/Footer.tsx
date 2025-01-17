"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-[#3945cb] mb-4">Christ Life</h3>
            <p className="text-gray-600 mb-4">
              Growing together in faith and community
            </p>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bacoor, Cavite
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sunday Service: 10:00 AM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#3945cb] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-gray-600 hover:text-[#3945cb] transition-colors duration-300">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-gray-600 hover:text-[#3945cb] transition-colors duration-300">
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.facebook.com/ChristLifeBacoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#3945cb] transition-colors duration-300 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/w5e8vkLBMCxvPJea9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#3945cb] transition-colors duration-300"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Christ Life. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 