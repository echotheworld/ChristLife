"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Globe from "@/components/magicui/globe";
import { useState } from "react";
import Link from "next/link";

export default function About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Brand */}
            <div className="w-[140px] sm:w-[180px] flex justify-start">
              <Link href="/" className="flex items-center group">
                <span className="text-xl sm:text-2xl font-bold text-[#3945cb] group-hover:text-[#868de4] transition-colors duration-200">ChristLife.</span>
              </Link>
            </div>
            
            {/* Navigation Links - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="flex items-center space-x-8 lg:space-x-12">
                <Link href="/" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Home
                </Link>
                <Link href="/leadership" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Leadership
                </Link>
                <Link href="/resources" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Resources
                </Link>
                <Link href="/about" className="text-[#3945cb] hover:text-[#868de4] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#868de4] after:transition-all after:duration-300">
                  About Us
                </Link>
              </div>
            </div>

            {/* Social Media Links - Hidden on Mobile */}
            <div className="hidden md:flex w-[140px] sm:w-[180px] justify-end items-center space-x-4 lg:space-x-6">
              <a 
                href="https://www.facebook.com/ChristLifeBacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/christlifebacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-[#3945cb] focus:outline-none"
              >
                <svg 
                  className="h-6 w-6 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen 
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 6h16M4 12h16M4 18h16"
                    } 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="px-4 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Home
            </Link>
            <Link href="/leadership" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Leadership
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Resources
            </Link>
            <Link href="/about" className="block px-3 py-2 text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              About Us
            </Link>
            {/* Social Media Links for Mobile */}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a 
                href="https://www.facebook.com/ChristLifeBacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/christlifebacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner - 1/3 Size */}
      <section className="relative w-full min-h-[33vh] bg-white overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#3945cb] mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600">
              Discover our story, mission, and the heart behind Christ Life Church Bacoor.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative w-full py-16 sm:py-24 bg-[#f8f8ff] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Vision & Mission Content */}
            <div className="space-y-16">
              {/* Vision Statement */}
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <svg className="w-8 h-8 text-[#3945cb] transform hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] hover:text-[#868de4] transition-all duration-500">
                    Vision Statement
                  </h2>
                </div>
                <div className="relative pl-11">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3945cb] to-[#868de4]" />
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-500">
                    Envision Bacoor as a city where God&apos;s presence dwells, filled with an army of worshippers from every generation.
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <svg className="w-8 h-8 text-[#3945cb] transform hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] hover:text-[#868de4] transition-all duration-500">
                    Mission Statement
                  </h2>
                </div>
                <div className="relative pl-11">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3945cb] to-[#868de4]" />
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-500">
                    To raise up faithful image-bearers who pursue excellence in serving God, cultivate a heart of worship, and share His love with everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Globe Component */}
            <div className="relative h-[600px] w-full -mt-50 hidden sm:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Church History Timeline Section */}
      <section className="relative w-full py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3945cb] mb-4">Our History</h2>
            <p className="text-lg text-gray-600">A testament to God&apos;s faithfulness through the years</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute lg:left-1/2 left-4 lg:transform lg:-translate-x-1/2 w-0.5 h-full">
              <div className="absolute inset-0 animate-gradient-flow" />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-24">
              {/* 1986 - Foundation */}
              <div className="relative group">
                <div className="flex lg:justify-center justify-start lg:pl-0 pl-4 mb-4 sm:mb-8">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#3945cb] border-4 border-white shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                  <div className="text-left lg:text-right lg:pr-12 pl-8 lg:pl-4 pr-4 sm:px-6 group-hover:-translate-x-2 transition-transform duration-300">
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#3945cb] mb-2 sm:mb-4 group-hover:text-[#868de4] transition-colors duration-300">Foundation (1986)</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      In August 1986, Rev. Francita P. Ucat founded the Christ Life Prayer Ministry, Inc. with a small group of dedicated individuals united in prayer. This humble beginning flourished, and by December 1997, we officially registered as a ministry (SEC Reg. No. A1997-218931).
                    </p>
                  </div>
                  <div className="hidden lg:block" />
                </div>
              </div>

              {/* 2007 - Leadership Transition */}
              <div className="relative group">
                <div className="flex lg:justify-center justify-start lg:pl-0 pl-4 mb-4 sm:mb-8">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#3945cb] border-4 border-white shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                  <div className="hidden lg:block" />
                  <div className="text-left lg:pl-12 pl-8 pr-4 sm:px-6 group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#3945cb] mb-2 sm:mb-4 group-hover:text-[#868de4] transition-colors duration-300">Leadership Transition (2007)</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      In 2007, Rev. Ucat appointed Ptr. Tito &quot;Jun&quot; Feolino and Ptr. Eira Feolino as Senior Pastors in Bacoor. They began their ministry at 51 Narra St., Villa Esperanza Phase 2, Molino 2, Bacoor City, Cavite, alongside their two children, Jericho and Jirehl. Under their leadership, our church family grew stronger and made a meaningful impact in the community.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022 - A Time of Loss */}
              <div className="relative group">
                <div className="flex lg:justify-center justify-start lg:pl-0 pl-4 mb-4 sm:mb-8">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#3945cb] border-4 border-white shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                  <div className="text-left lg:text-right lg:pr-12 pl-8 lg:pl-4 pr-4 sm:px-6 group-hover:-translate-x-2 transition-transform duration-300">
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#3945cb] mb-2 sm:mb-4 group-hover:text-[#868de4] transition-colors duration-300">A Time of Loss (2022)</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      On December 4, 2022, Ptr. Tito &quot;Jun&quot; Feolino tragically passed away following an accident. His sudden loss was deeply felt by the congregation and the community he served so faithfully. In this challenging time, God provided strength through the next generation. Ptr. Jericho Feolino stepped up to serve as Special Assistant to the Senior Pastor, ensuring continuity in leadership and honoring his father&apos;s legacy.
                    </p>
                  </div>
                  <div className="hidden lg:block" />
                </div>
              </div>

              {/* Present - A Journey of Faith */}
              <div className="relative group">
                <div className="flex lg:justify-center justify-start lg:pl-0 pl-4 mb-4 sm:mb-8">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#3945cb] border-4 border-white shadow-lg group-hover:scale-125 group-hover:shadow-xl transition-all duration-300" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                  <div className="hidden lg:block" />
                  <div className="text-left lg:pl-12 pl-8 pr-4 sm:px-6 group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-lg sm:text-2xl font-semibold text-[#3945cb] mb-2 sm:mb-4 group-hover:text-[#868de4] transition-colors duration-300">A Journey of Faith</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      As we reflect on our journey, we see it as a testament to God&apos;s faithfulness even in difficult times. Our growth is not solely by our own efforts but through His grace. Looking ahead, we are filled with hope and excitement for what God has yet to accomplish in our lives and ministry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full py-8 sm:py-16 md:py-24 bg-[#f8f8ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] mb-2 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-gray-600">The foundational principles that guide our faith and actions</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-8">
            {/* Being God's Image */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 hover:-translate-y-2 flex flex-col h-full cursor-pointer transform perspective-1000 relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#3945cb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-white text-sm sm:text-base font-bold">1</span>
              </div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3945cb] transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] mb-2 sm:mb-3 group-hover:text-[#868de4] transition-colors duration-300 text-center">Being God&apos;s Image</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-center relative transform group-hover:scale-105">
                  We value human dignity. Every person bears God&apos;s image, making each life uniquely valuable and purposeful. Therefore, we treat all people with respect, honor their potential, and protect their dignity.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#3945cb] mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Bearing God's Name */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 hover:-translate-y-2 flex flex-col h-full cursor-pointer transform perspective-1000 relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#3945cb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-white text-sm sm:text-base font-bold">2</span>
              </div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3945cb] transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] mb-2 sm:mb-3 group-hover:text-[#868de4] transition-colors duration-300 text-center">Bearing God&apos;s Name</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-center relative transform group-hover:scale-105">
                  We value faithful representation. When we carry God&apos;s name, we represent His character to others. Therefore, we commit to actions and attitudes that reflect His goodness in our community.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#3945cb] mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Becoming God's Family */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 hover:-translate-y-2 flex flex-col h-full cursor-pointer transform perspective-1000 relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#3945cb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-white text-sm sm:text-base font-bold">3</span>
              </div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3945cb] transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] mb-2 sm:mb-3 group-hover:text-[#868de4] transition-colors duration-300 text-center">Becoming God&apos;s Family</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-center relative transform group-hover:scale-105">
                  We value genuine community. God designed us to grow through authentic relationships and meaningful connections. Therefore, we create spaces where real fellowship and mutual support thrive.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#3945cb] mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Breathing God's Word */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 hover:-translate-y-2 flex flex-col h-full cursor-pointer transform perspective-1000 relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#3945cb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-white text-sm sm:text-base font-bold">4</span>
              </div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3945cb] transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] mb-2 sm:mb-3 group-hover:text-[#868de4] transition-colors duration-300 text-center">Breathing God&apos;s Word</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-center relative transform group-hover:scale-105">
                  We value Scripture&apos;s guidance. God&apos;s Word provides wisdom and direction for all areas of life. Therefore, we base our decisions and practices on biblical principles and teaching.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#3945cb] mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Believing God's Truth */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 hover:-translate-y-2 flex flex-col h-full cursor-pointer transform perspective-1000 relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#3945cb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-white text-sm sm:text-base font-bold">5</span>
              </div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3945cb] transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] mb-2 sm:mb-3 group-hover:text-[#868de4] transition-colors duration-300 text-center">Believing God&apos;s Truth</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-center relative transform group-hover:scale-105">
                  We value enduring truth. In a world of changing values, God&apos;s truth remains constant and reliable. Therefore, we stand firm in biblical convictions while engaging our culture with grace.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#3945cb] mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Building God's Kingdom */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 hover:-translate-y-2 flex flex-col h-full cursor-pointer transform perspective-1000 relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#3945cb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-white text-sm sm:text-base font-bold">6</span>
              </div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3945cb] transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] mb-2 sm:mb-3 group-hover:text-[#868de4] transition-colors duration-300 text-center">Building God&apos;s Kingdom</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-center relative transform group-hover:scale-105">
                  We value lasting impact. God&apos;s kingdom purpose gives meaning to all we do. Therefore, we invest our resources and efforts in work that advances His vision for our world.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#3945cb] mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Bringing God's Glory */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 hover:-translate-y-2 flex flex-col h-full cursor-pointer transform perspective-1000 relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#3945cb] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span className="text-white text-sm sm:text-base font-bold">7</span>
              </div>
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3945cb] transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] mb-2 sm:mb-3 group-hover:text-[#868de4] transition-colors duration-300 text-center">Bringing God&apos;s Glory</h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-all duration-300 text-center relative transform group-hover:scale-105">
                  We value God&apos;s honor. Our highest purpose is to make God known and celebrated. Therefore, we pursue excellence in all things to reflect His greatness to others.
                </p>
              </div>
              <div className="h-1 w-0 bg-[#3945cb] mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Declaration of Faith Section */}
      <section className="relative w-full py-8 sm:py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] mb-2 sm:mb-4">What We Believe</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              At our core, we embrace the historic Christian faith, made simple and accessible for everyone. Because following Jesus should be clear, not complicated.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {/* God */}
            <div className="group">
              <button className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#f8f8ff] rounded-xl hover:bg-[#3945cb]/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] text-left">God</h3>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3945cb] transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-96">
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    There&apos;s one God who exists in three persons: Father, Son (Jesus), and Holy Spirit. He created everything, loves everyone, and invites all people into relationship with Him.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    [Genesis 1:1; Deuteronomy 6:4; Matthew 3:16-17; John 3:16-17; 2 Corinthians 13:14]
                  </p>
                </div>
              </div>
            </div>

            {/* Jesus Christ */}
            <div className="group">
              <button className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#f8f8ff] rounded-xl hover:bg-[#3945cb]/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] text-left">Jesus Christ</h3>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3945cb] transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-96">
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Jesus is God who became human. He lived the perfect life we couldn&apos;t live, died the death we deserved, and rose again to prove He was who He said He was. Through His life, death, and resurrection, He made a way back to God for everyone.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    [John 1:14; Colossians 1:15-20; Philippians 2:5-11; 1 Corinthians 15:3-8; Romans 5:8]
                  </p>
                </div>
              </div>
            </div>

            {/* Holy Spirit */}
            <div className="group">
              <button className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#f8f8ff] rounded-xl hover:bg-[#3945cb]/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] text-left">Holy Spirit</h3>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3945cb] transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-96">
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    The Holy Spirit is God&apos;s presence in our lives from the moment we trust Jesus. He&apos;s not weird or scary – He&apos;s our helper who transforms us from the inside out, producing the kind of life we&apos;ve always wanted but couldn&apos;t achieve on our own.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    [John 14:16-17; Galatians 5:22-23; Romans 8:26; Acts 1:8; Ephesians 1:13-14]
                  </p>
                </div>
              </div>
            </div>

            {/* Humanity */}
            <div className="group">
              <button className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#f8f8ff] rounded-xl hover:bg-[#3945cb]/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] text-left">Humanity</h3>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3945cb] transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-96">
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Every person matters to God. Period. We&apos;re all created in God&apos;s image with incredible value, but we&apos;re also all broken by sin. The good news? God loves us anyway and has a plan to restore us.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    [Genesis 1:27; Psalm 139:13-16; Romans 3:23; 1 John 4:9-10; 2 Corinthians 5:17-18]
                  </p>
                </div>
              </div>
            </div>

            {/* Salvation */}
            <div className="group">
              <button className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#f8f8ff] rounded-xl hover:bg-[#3945cb]/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] text-left">Salvation</h3>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3945cb] transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-96">
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Salvation is God&apos;s gift to us, not something we earn. It&apos;s as simple as trust: we trust what Jesus did for us rather than what we can do for ourselves. This brings forgiveness for our past, purpose for our present, and hope for our future.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    [Ephesians 2:8-9; Romans 6:23; John 3:16-17; Titus 3:4-7; 2 Corinthians 5:21]
                  </p>
                </div>
              </div>
            </div>

            {/* The Bible */}
            <div className="group">
              <button className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#f8f8ff] rounded-xl hover:bg-[#3945cb]/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] text-left">The Bible</h3>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3945cb] transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-96">
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    The Bible is God&apos;s story of love for the world. Written over centuries by various authors inspired by God, it shows us who God is and how to live life His way. It&apos;s truthful, practical, and still relevant today.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    [2 Timothy 3:16-17; Psalm 119:105; Hebrews 4:12; 2 Peter 1:20-21; Joshua 1:8]
                  </p>
                </div>
              </div>
            </div>

            {/* The Return of Jesus */}
            <div className="group">
              <button className="w-full flex items-center justify-between p-4 sm:p-6 bg-[#f8f8ff] rounded-xl hover:bg-[#3945cb]/5 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#3945cb] text-left">The Return of Jesus</h3>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3945cb] transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-96">
                <div className="p-4 sm:p-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Jesus promised He would return to make everything right. While we don&apos;t know when, we live with hope and purpose, inviting others to be ready for that day by following Jesus now.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    [Acts 1:11; Matthew 24:36; Revelation 21:1-5; 1 Thessalonians 4:13-18; Titus 2:11-14]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto italic">
              While we respect various Christian traditions, we are simply focused on following Jesus Christ, who said &quot;I am the way, the truth, and the life&quot; (John 14:6). The church does not belong to any denomination.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="relative w-full py-16 sm:py-24 bg-[#f8f8ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3945cb] mb-4">Join Us Every Sunday at 10AM</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We&apos;d love to have you worship with us. Come as you are!
            </p>
          </div>
          
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.52135336389233!2d120.98699748516086!3d14.407457974335108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d30044128507%3A0xdeb49b6858e7485a!2sChrist%20Life%20Bacoor!5e0!3m2!1sen!2sph!4v1736956154371!5m2!1sen!2sph" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <a 
              href="https://maps.app.goo.gl/w5e8vkLBMCxvPJea9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#3945cb] text-white rounded-lg hover:bg-[#868de4] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Add your about page content here */}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            ©2025 Christ Life Bacoor. All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
} 