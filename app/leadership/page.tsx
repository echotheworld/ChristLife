"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Leadership() {
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
                <Link href="/calendar" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Calendar
                </Link>
                <Link href="/leadership" className="text-[#3945cb] hover:text-[#868de4] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#868de4] after:transition-all after:duration-300">
                  Leadership
                </Link>
                <Link href="/resources" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Resources
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
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
            <Link href="/calendar" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Calendar
            </Link>
            <Link href="/leadership" className="block px-3 py-2 text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Leadership
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Resources
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
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
              Our Leadership
            </h1>
            <p className="text-lg text-gray-600">
              Meet the dedicated team that guides our church community with wisdom, love, and a commitment to Christ&apos;s teachings.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles Section */}
      <section className="relative w-full bg-[#f8f8ff] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Senior Pastor */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 sm:px-6 lg:px-8 mb-32 group hover:bg-white/50 rounded-3xl transition-colors duration-500 py-8">
            <div className="w-full md:w-1/2 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
              <div className="relative">
                <Image
                  src="/images/Bacoor-Church-20.png"
                  alt="Ptr. Eira Feolino"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 transform transition-all duration-500 group-hover:translate-x-2">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] group-hover:text-[#868de4] transition-colors duration-300">
                  Ptr. Eira Feolino
                </h2>
                <h3 className="text-xl text-gray-600 font-medium bg-gradient-to-r from-[#3945cb]/10 to-transparent inline-block px-4 py-1 rounded-full">
                  Senior Pastor
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Ptr. Eira Feolino is the Senior Pastor and a guiding force in the Church. Mentored by Rev. Francita P. Ucat, she has grown into a thoughtful and capable leader. Her role as overseer is marked by vision, care, and a deep love for her community. She is also a Board Member of Chris Life Organization, where she contributes valuable insights to further its mission. Ptr. Eira balances strength and compassion, always striving to serve with integrity and purpose. Her leadership is a reflection of her unwavering faith and dedication.
              </p>
            </div>
          </div>

          {/* Special Assistant & Associate Pastor */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 px-4 sm:px-6 lg:px-8 mb-32 group hover:bg-white/50 rounded-3xl transition-colors duration-500 py-8">
            <div className="w-full md:w-1/2 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
              <div className="relative">
                <Image
                  src="/images/Bacoor-Church-21.png"
                  alt="Ptr. Jericho Feolino"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 transform transition-all duration-500 group-hover:-translate-x-2">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] group-hover:text-[#868de4] transition-colors duration-300">
                  Ptr. Jericho Feolino
                </h2>
                <h3 className="text-xl text-gray-600 font-medium bg-gradient-to-r from-[#3945cb]/10 to-transparent inline-block px-4 py-1 rounded-full">
                  Special Assistant to the Senior Pastor | Associate Pastor
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Ptr. Jericho Feolino serves as Special Assistant to the Senior Pastor and Associate Pastor with dedication and a heartfelt commitment to supporting the Church&apos;s mission. A graduate of AWKNGS School of Theology, he has spent over four years extensively studying Biblical Studies, Biblical History, and Biblical Doctrine. Ptr. Jericho is a lifelong learner who combines intellectual growth and a sincere heart for God&apos;s calling.
              </p>
            </div>
          </div>

          {/* Associate Pastor */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 sm:px-6 lg:px-8 mb-32 group hover:bg-white/50 rounded-3xl transition-colors duration-500 py-8">
            <div className="w-full md:w-1/2 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
              <div className="relative">
                <Image
                  src="/images/Bacoor-Church-22.png"
                  alt="Ptr. Gloria Madamba"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 transform transition-all duration-500 group-hover:translate-x-2">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] group-hover:text-[#868de4] transition-colors duration-300">
                  Ptr. Gloria Madamba
                </h2>
                <h3 className="text-xl text-gray-600 font-medium bg-gradient-to-r from-[#3945cb]/10 to-transparent inline-block px-4 py-1 rounded-full">
                  Associate Pastor
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Ptr. Gloria Madamba serves the Church with dedication and care. She oversees the maintenance and beautification of the Church, ensuring it remains a welcoming and inspiring space. Her work often happens behind the scenes, but her impact is felt by all who step through the doors. Ptr. Gloria is a steady presence in the leadership team, always ready to contribute her time and talents. Her commitment to excellence and her genuine love for the Church make her a valued leader.
              </p>
            </div>
          </div>

          {/* Former Senior Pastor */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 px-4 sm:px-6 lg:px-8 group hover:bg-white/50 rounded-3xl transition-colors duration-500 py-8">
            <div className="w-full md:w-1/2 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
              <div className="relative">
                <Image
                  src="/images/Bacoor-Church-23.png"
                  alt="Ptr. Tito &quot;Jun&quot; Feolino"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6 transform transition-all duration-500 group-hover:-translate-x-2">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] group-hover:text-[#868de4] transition-colors duration-300">
                  Ptr. Tito &quot;Jun&quot; Feolino
                </h2>
                <h3 className="text-xl text-gray-600 font-medium bg-gradient-to-r from-[#3945cb]/10 to-transparent inline-block px-4 py-1 rounded-full">
                  Former Co-Senior Pastor
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Ptr. Tito &quot;Jun&quot; Feolino served as Senior Pastor for nearly 15 years, leading with wisdom, dedication, and a heart for worship. His unwavering commitment to God and his congregation left a lasting mark. Although his time was cut short by an unexpected accident, his influence continues to inspire and guide the Church. Ptr. Jun was a devoted husband to Ptr. Eira Feolino and a loving father to Ptr. Jericho and Jirehl. His life was a testament to faith, perseverance, and the enduring power of service.
              </p>
            </div>
          </div>

          {/* Section Separator */}
          <div className="relative py-16">
            <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-[#f8f8ff] px-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#3945cb] to-[#868de4] flex items-center justify-center transform rotate-45">
                  <div className="h-8 w-8 rounded-full bg-[#f8f8ff] transform -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* W.A.R. Department Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#3945cb] mb-6">W.A.R. DEPARTMENT</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The W.A.R. Department draws from Joshua 6:1-23, where victory came through Worshiping God, Administering His Call, and Building a deeper Relationship with Him and His People.
            </p>
          </div>

          {/* Department Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Worship Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden p-4 sm:p-6 hover:-translate-y-2">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3945cb]/20 to-[#868de4]/20 rounded-full group-hover:scale-[1.15] transition-transform duration-500" />
                <Image
                  src="/images/Bacoor-Church-24.png"
                  alt="Jirehl Feolino"
                  fill
                  className="object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#3945cb] mb-1 group-hover:text-[#868de4] transition-colors duration-300">Jirehl Feolino</h3>
                <div className="space-y-1">
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-[#3945cb] to-[#868de4] text-transparent bg-clip-text transform group-hover:scale-110 transition-transform duration-300">Worship</h4>
                  <p className="text-gray-600 font-medium">Department Head</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We guide people into God&apos;s presence. Each service becomes holy ground. Hearts open as we worship together.
                </p>
                <div>
                  <h4 className="text-[#3945cb] font-semibold mb-2">Ministries:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Music</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Singer</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Dance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Administration Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden p-4 sm:p-6 hover:-translate-y-2">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3945cb]/20 to-[#868de4]/20 rounded-full group-hover:scale-[1.15] transition-transform duration-500" />
                <Image
                  src="/images/Bacoor-Church-25.png"
                  alt="Ptr. Jericho Feolino"
                  fill
                  className="object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#3945cb] mb-1 group-hover:text-[#868de4] transition-colors duration-300">Ptr. Jericho Feolino</h3>
                <div className="space-y-1">
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-[#3945cb] to-[#868de4] text-transparent bg-clip-text transform group-hover:scale-110 transition-transform duration-300">Administration</h4>
                  <p className="text-gray-600 font-medium">Department Head</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We serve each ministry with care. Every task matters to God&apos;s mission. Resources flow where needed most.
                </p>
                <div>
                  <h4 className="text-[#3945cb] font-semibold mb-2">Ministries:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Creatives</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Finance</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Operations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Relationship Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden p-4 sm:p-6 hover:-translate-y-2">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3945cb]/20 to-[#868de4]/20 rounded-full group-hover:scale-[1.15] transition-transform duration-500" />
                <Image
                  src="/images/Bacoor-Church-26.png"
                  alt="Marianne Lamberto"
                  fill
                  className="object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#3945cb] mb-1 group-hover:text-[#868de4] transition-colors duration-300">Marianne Lamberto</h3>
                <div className="space-y-1">
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-[#3945cb] to-[#868de4] text-transparent bg-clip-text transform group-hover:scale-110 transition-transform duration-300">Relationship</h4>
                  <p className="text-gray-600 font-medium">Department Head</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We build one strong family here. Everyone belongs at God&apos;s table. Love grows deeper through fellowship.
                </p>
                <div>
                  <h4 className="text-[#3945cb] font-semibold mb-2">Ministries:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Frontiers</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• Kids Life</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• EGEN Youth</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• EVRO Life Group</li>
                    <li className="hover:text-[#3945cb] hover:translate-x-1 transition-all duration-300 cursor-pointer">• LeadHub</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Blank Section */}
      <section className="relative w-full bg-[#f8f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Content will go here */}
        </div>
      </section>

      {/* Empty Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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