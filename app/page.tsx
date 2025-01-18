"use client";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import TypingAnimation from "@/components/magicui/typing-animation";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
                <Link href="/" className="text-[#3945cb] hover:text-[#868de4] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#868de4] after:transition-all after:duration-300">
                  Home
                </Link>
                <Link href="/calendar" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Calendar
                </Link>
                <Link href="/leadership" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
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
            <Link href="/" className="block px-3 py-2 text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Home
            </Link>
            <Link href="/calendar" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Calendar
            </Link>
            <Link href="/leadership" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f8ff] to-transparent">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#3945cb] tracking-tighter mb-6 sm:mb-8">
            <TypingAnimation className="font-bold" />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            a church where anyone has a seat at Jesus&apos; table.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://maps.app.goo.gl/w5e8vkLBMCxvPJea9"
            target="_blank"
            rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#3945cb] text-white rounded-lg font-medium hover:bg-[#868de4] transition-all duration-200 text-base sm:text-lg mx-4 sm:mx-0"
            >
              Join Us This Sunday
            </a>
          </div>
        </div>
        <InteractiveGridPattern
          width={40}
          height={40}
          squares={[32, 24]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "absolute inset-0 opacity-30"
          )}
          squaresClassName="stroke-[#3945cb]/20 [&:hover]:stroke-[#3945cb]/40 [&:hover]:fill-[#3945cb]/10"
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/50"></div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-white/50 to-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* First Row */}
            <div className="col-span-1 sm:col-span-2 relative rounded-2xl overflow-hidden">
              <Image
                src="/images/Bacoor-Church-1.jpg"
                alt="Christ Life Church Bacoor"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/Bacoor-Church-2.jpg"
                alt="Church Service"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>

            {/* Second Row */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/Bacoor-Church-3.jpg"
                alt="Worship Service"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/Bacoor-Church-4.jpg"
                alt="Community"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/Bacoor-Church-5.jpg"
                alt="Fellowship"
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Velocity Scroll Section */}
      <section className="w-full min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-white/80 to-[#f8f8ff] overflow-hidden">
        <div className="relative w-full">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#f8f8ff] to-transparent z-10"></div>
          
          <VelocityScroll defaultVelocity={2} numRows={2} className="py-8 sm:py-10">
            You are valued. You are loved. You are welcome.
          </VelocityScroll>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#f8f8ff] to-transparent z-10"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative w-full py-16 sm:py-32 bg-[#f8f8ff] overflow-hidden">
        <div className="absolute inset-0">
          <InteractiveGridPattern
            width={40}
            height={40}
            squares={[32, 24]}
            className="absolute inset-0 opacity-20"
            squaresClassName="stroke-[#3945cb]/20 [&:hover]:stroke-[#3945cb]/40 [&:hover]:fill-[#3945cb]/10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8ff] via-transparent to-[#f8f8ff]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-12 sm:space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3945cb] hover:scale-105 transition-transform duration-500">Who We Are</h2>
              <p className="text-lg sm:text-xl text-gray-500">Building a community of faith, love, and purpose</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 w-full">
              <div className="flex flex-col items-center space-y-4 sm:space-y-6 group/item hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-[#3945cb]/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-[#3945cb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#3945cb] group-hover/item:text-[#868de4] transition-colors duration-300">Magnify God</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">We glorify God by proclaiming the good news of His Kingdom and inviting everyone to experience His love and grace.</p>
              </div>
              
              <div className="flex flex-col items-center space-y-4 sm:space-y-6 group/item hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-[#3945cb]/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-[#3945cb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#3945cb] group-hover/item:text-[#868de4] transition-colors duration-300">Make Disciples</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">We are committed to living out the teachings of Jesus, following His example, and guiding others to do the same in every area of life.</p>
              </div>
              
              <div className="flex flex-col items-center space-y-4 sm:space-y-6 group/item hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-[#3945cb]/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-[#3945cb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#3945cb] group-hover/item:text-[#868de4] transition-colors duration-300">Make a Difference</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">We strive to create a lasting impact by establishing Christ-centered, Spirit-filled communities that transform lives across generations.</p>
              </div>
            </div>
            
            <div className="pt-8 sm:pt-12">
              <Link href="/about">
                <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-8 sm:px-10 py-3 sm:py-4">
                  <span className="text-white text-base">About Us</span>
                </ShinyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Visit Section */}
      <section className="relative w-full py-16 sm:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <InteractiveGridPattern
            width={40}
            height={40}
            squares={[32, 24]}
            className="absolute inset-0 opacity-10"
            squaresClassName="stroke-[#3945cb]/20 [&:hover]:stroke-[#3945cb]/40 [&:hover]:fill-[#3945cb]/10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Image Side */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group/image">
              <Image
                src="/images/Bacoor-Church-7.jpg"
                alt="Christ Life Church Bacoor Service"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3945cb]/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 translate-y-full group-hover/image:translate-y-0 transition-transform duration-500">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                  <div className="flex items-center space-x-4 text-[#3945cb]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">Every Sunday</p>
                      <p className="text-base sm:text-lg font-bold">10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex flex-col space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#3945cb] hover:scale-105 transition-transform duration-500">Plan Your Visit</h2>
                <div className="h-1 w-16 sm:w-20 bg-[#3945cb]"></div>
              </div>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                Join us for our Sunday service at 10:00 AM in person! We&apos;d love to welcome you into our community and share the joy of worship together.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 text-gray-600 group/item">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-[#3945cb]/20 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#3945cb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg group-hover/item:text-[#3945cb] transition-colors duration-300">Bacoor, Cavite</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 group/item">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3945cb]/10 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-[#3945cb]/20 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#3945cb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg group-hover/item:text-[#3945cb] transition-colors duration-300">Service starts at 10:00 AM</span>
                </div>
              </div>
              <div className="pt-4 sm:pt-8">
                <a 
                  href="https://maps.app.goo.gl/w5e8vkLBMCxvPJea9"
            target="_blank"
            rel="noopener noreferrer"
          >
                  <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3">
                    <span className="text-white text-sm sm:text-base font-medium">Plan A Visit</span>
                  </ShinyButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="relative w-full py-16 sm:py-32 bg-[#f8f8ff] overflow-hidden">
        <div className="absolute inset-0">
          <InteractiveGridPattern
            width={40}
            height={40}
            squares={[32, 24]}
            className="absolute inset-0 opacity-20"
            squaresClassName="stroke-[#3945cb]/20 [&:hover]:stroke-[#3945cb]/40 [&:hover]:fill-[#3945cb]/10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8ff] via-transparent to-[#f8f8ff]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-12 sm:space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3945cb] hover:scale-105 transition-transform duration-500">Get Involved</h2>
              <p className="text-lg sm:text-xl text-gray-500">Be part of our growing community</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
              {/* Connection Card */}
              <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/Bacoor-Church-9.jpg"
                    alt="Connection Card"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                    <h3 className="text-2xl sm:text-2xl font-bold text-white mb-3 sm:mb-3">Connection Card</h3>
                    <p className="text-base sm:text-base text-white/95 mb-6 sm:mb-6 leading-relaxed drop-shadow-lg">
                      We&apos;re excited to meet you! Fill out our connection card so we can personally welcome you and help you find your place in the Church.
                    </p>
                    <a 
                      href="https://forms.gle/LAg9ZnitWNg57xFaA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg overflow-hidden">
                        <span className="text-white text-sm sm:text-base font-medium">Fill Connection Card</span>
                      </ShinyButton>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prayer Request */}
              <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/Bacoor-Church-10.jpg"
                    alt="Prayer Request"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                    <h3 className="text-2xl sm:text-2xl font-bold text-white mb-3 sm:mb-3">Prayer Request</h3>
                    <p className="text-base sm:text-base text-white/95 mb-6 sm:mb-6 leading-relaxed drop-shadow-lg">
                      Your prayer matters to us. Share your heart&apos;s burdens and let our prayer team stand with you in faith, believing for God&apos;s intervention in your life.
                    </p>
                    <a 
                      href="https://forms.gle/tfdMhW8ePHEwYMMB8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg overflow-hidden">
                        <span className="text-white text-sm sm:text-base font-medium">Submit Prayer Request</span>
                      </ShinyButton>
                    </a>
                  </div>
                </div>
              </div>

              {/* Give Now */}
              <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/Bacoor-Church-11.jpg"
                    alt="Give Now"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                    <h3 className="text-2xl sm:text-2xl font-bold text-white mb-3 sm:mb-3">Give Now</h3>
                    <p className="text-base sm:text-base text-white/95 mb-6 sm:mb-6 leading-relaxed drop-shadow-lg">
                      Your generosity fuels our mission to reach more people with God&apos;s love. Partner with us in making a lasting impact in our community and beyond.
                    </p>
                    <a 
                      href="https://forms.gle/bznjKi3Se9dM5reH6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg overflow-hidden">
                        <span className="text-white text-sm sm:text-base font-medium">Give Online Now</span>
                      </ShinyButton>
                    </a>
                  </div>
                </div>
              </div>

              {/* Volunteer */}
              <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[16/9] sm:aspect-[16/9] md:aspect-[16/9] relative overflow-hidden">
                  <Image
                    src="/images/Bacoor-Church-12.jpg"
                    alt="Volunteer"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                    <h3 className="text-2xl sm:text-2xl font-bold text-white mb-3 sm:mb-3">Volunteer</h3>
                    <p className="text-base sm:text-base text-white/95 mb-6 sm:mb-6 leading-relaxed drop-shadow-lg">
                      Your gifts and talents can make a real difference. Join our team of dedicated volunteers and experience the joy of serving God.
                    </p>
                    <a 
                      href="https://forms.gle/X3VthDY7284sejkJA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg overflow-hidden">
                        <span className="text-white text-sm sm:text-base font-medium">Join Volunteer Team</span>
                      </ShinyButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Church Fellowship Services Section */}
      <section className="relative w-full py-16 sm:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <InteractiveGridPattern
            width={40}
            height={40}
            squares={[32, 24]}
            className="absolute inset-0 opacity-10"
            squaresClassName="stroke-[#3945cb]/20 [&:hover]:stroke-[#3945cb]/40 [&:hover]:fill-[#3945cb]/10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-12 sm:space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3945cb] hover:scale-105 transition-transform duration-500">Church Services</h2>
              <p className="text-lg sm:text-xl text-gray-500">Growing together in faith and community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full">
              {/* Kids Life */}
              <div className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#3945cb]/10 transition-all duration-300 shadow-lg shadow-gray-200/50">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/Bacoor-Church-15.jpg"
                    alt="Kids Life"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="relative p-6 sm:p-8">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-4xl font-bold text-[#3945cb]">Kids Life</h3>
                    <a 
                      href="https://www.facebook.com/KidsLifeBacoor"
          target="_blank"
          rel="noopener noreferrer"
                      className="text-[#3945cb] hover:text-[#868de4] transition-colors duration-300"
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-4 sm:mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-base sm:text-xl font-medium">Every Saturday 3:30 PM</span>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    A vibrant and fun-filled ministry where children discover God&apos;s love through engaging activities, Bible stories, and meaningful friendships. We create a safe and nurturing environment for your kids to grow in faith.
                  </p>
                  <a 
                    href="https://www.facebook.com/KidsLifeBacoor"
          target="_blank"
          rel="noopener noreferrer"
                    className="block"
                  >
                    <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3">
                      <span className="text-white text-sm sm:text-base font-medium">Learn More</span>
                    </ShinyButton>
                  </a>
                </div>
              </div>

              {/* Every Generation Youth */}
              <div className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#3945cb]/10 transition-all duration-300 shadow-lg shadow-gray-200/50">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/Bacoor-Church-16.jpg"
                    alt="Every Generation Youth"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6NT87Pi45ODVFRkpLUlNWW1xbOEVHTVtdWlH/2wBDARUXFx4aHR4eHVFLLy9RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="relative p-6 sm:p-8">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-4xl font-bold text-[#3945cb]">Every Generation Youth</h3>
                    <a 
                      href="https://www.facebook.com/EveryGenerationBacoor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3945cb] hover:text-[#868de4] transition-colors duration-300"
                    >
                      <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-4 sm:mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-base sm:text-xl font-medium">Every 4th Sunday at 4:00 PM</span>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    A dynamic community where young people come together to strengthen their faith, build lasting friendships, and discover their God-given purpose through worship, discipleship, and fellowship.
                  </p>
                  <a 
                    href="https://www.facebook.com/EveryGenerationBacoor"
          target="_blank"
          rel="noopener noreferrer"
                    className="block"
                  >
                    <ShinyButton className="bg-[#3945cb] hover:bg-[#868de4] transition-colors duration-300 px-6 sm:px-8 py-2.5 sm:py-3">
                      <span className="text-white text-sm sm:text-base font-medium">Learn More</span>
                    </ShinyButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full py-16 sm:py-32 bg-[#f8f8ff]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-12 sm:space-y-16">
            <div className="space-y-3 sm:space-y-4 text-center">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#3945cb] hover:scale-105 transition-transform duration-500">Frequently Asked Questions</h2>
              <p className="text-lg sm:text-xl text-gray-500">Everything you need to know about joining us</p>
            </div>

            <div className="w-full space-y-3 sm:space-y-4 [&_details]:marker-none [&_summary]:marker-none [&_summary::-webkit-details-marker]:hidden [&_summary::marker]:hidden">
              {/* Location FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-['']">
                  <span className="flex-1">Where are you located?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    You&apos;ll find us at 51 Narra St., Villa Esperanza Phase 2, Molino 2, Bacoor City, Cavite. Don&apos;t worry—it&apos;s easy to locate. If you&apos;re not confident with directions (no shame, we&apos;ve all been there), just open the Waze app or Google Maps then search &quot;Christ Life Bacoor&quot; to guide you.
                  </p>
                </div>
              </details>

              {/* First Time FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What can I expect when I attend for the first time?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Expect to be greeted like a long-lost family member (the kind you actually want to see). From finding your seat to answering your questions, our team is here to make you feel completely at home. By the time you leave, we hope you feel encouraged, inspired, and maybe even like you&apos;ve made a few new friends.
                  </p>
                </div>
              </details>

              {/* Service FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What happens during a church service?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Our services are simple but meaningful. First, we&apos;ll spend time worshiping God through music—it&apos;s uplifting and a great way to refocus your heart. After that, our pastor or an elder will share a Bible-based message that&apos;s not only inspiring but also practical. Think of it as spiritual food you can actually digest on Monday morning.
                  </p>
                </div>
              </details>

              {/* Service Length FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">How long does the service last?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We know you&apos;ve got places to be, so we keep things tight—about 1 hour and 15–30 minutes. Enough time to recharge your soul but not so long that you start wondering what&apos;s for lunch.
                  </p>
                </div>
              </details>

              {/* Dress Code FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What should I wear to church?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Wear whatever feels right to you! Whether it&apos;s jeans and a T-shirt or your Sunday best, you&apos;re welcome here. We&apos;re way more interested in what&apos;s happening in your heart than your wardrobe. (Though, if you wear Crocs with socks, we might just smile extra big because we love bold choices!)
                  </p>
                </div>
              </details>

              {/* New to Church FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">Will I feel out of place if I&apos;ve never been to church before?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Not at all! Everyone has a first time, and we&apos;ve designed everything to make you feel comfortable and welcome. You might feel a little nervous at first—that&apos;s normal—but trust us, by the end, you&apos;ll feel like you belong.
                  </p>
                </div>
              </details>

              {/* Questions FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What if I have questions?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Bring &apos;em on! Whether it&apos;s about faith, church, or where to find the best coffee in Bacoor, we&apos;ve got someone who&apos;d love to chat with you. Look for our pastors or any of our friendly team members—they&apos;re easy to spot because they&apos;re the ones with big smiles and even bigger hearts.
                  </p>
                </div>
              </details>

              {/* Inclusivity FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">Is it okay if I have tattoos, piercings, or colorful hair? What if I&apos;m part of the LGBTQ+ community?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Absolutely. We believe God&apos;s love is for everyone, period. Tattoos, piercings, colorful hair, or whatever makes you, you—you&apos;re welcome here just as you are. No judgment, just open arms and open hearts.
                  </p>
                </div>
              </details>

              {/* Bible FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">How seriously do you take the Bible?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We take the Bible very seriously because it&apos;s the foundation of everything we do. But here&apos;s the thing—we don&apos;t just want you to know what the Bible says; we want to help you live it. That means you&apos;ll hear messages that are both thoughtful and practical, with a sprinkle of encouragement for good measure.
                  </p>
                </div>
              </details>

              {/* Getting Involved FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">How can I get involved in the church community?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We&apos;d love to help you grow! From small groups to Bible studies to volunteer opportunities, there&apos;s something for everyone. Not sure where to start? That&apos;s okay—just ask, and we&apos;ll help you find the perfect fit. Your next step is closer than you think.
                  </p>
                </div>
              </details>

              {/* Doubts FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What if I have doubts about Christianity?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    You&apos;re in the right place. Doubts and questions are part of the journey, and we&apos;re here to walk it with you. This is a safe space to explore, learn, and grow—at your own pace. There&apos;s no rush and no pressure.
                  </p>
                </div>
              </details>

              {/* What to Bring FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What should I bring to church?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Just yourself! If you have a Bible, great—bring it along. If not, don&apos;t worry—we&apos;ll provide everything you need. And if you forget something (like your phone charger), someone here probably has one to lend.
                  </p>
                </div>
              </details>

              {/* Non-Christian FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">Do I need to be a Christian to attend?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Of course! You don&apos;t need to believe to belong here. Whether you&apos;re just curious about faith, have lots of questions, or are simply looking for community, you&apos;re welcome here.
                  </p>
                </div>
              </details>

              {/* Fellowship FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What opportunities are there for fellowship?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We love connecting as a church family! After the service, feel free to stick around, grab a cup of coffee, and chat with others. It&apos;s a great way to meet new people and build relationships.
                  </p>
                </div>
              </details>

              {/* Support FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">What support is available for newcomers?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Thank you for asking! There are many ways to support the ministry, from volunteering your time and talents to giving financially. Every bit of support helps us continue to serve our community and share God&apos;s love.
                  </p>
                </div>
              </details>

              {/* Inviting Others FAQ */}
              <details className="group bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-start justify-between p-4 sm:p-6 cursor-pointer list-none font-semibold text-base sm:text-lg text-[#3945cb] hover:text-[#868de4] transition-colors duration-300 before:content-[''] marker:content-none">
                  <span className="flex-1">Can I invite friends or family to join?</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Absolutely! We&apos;d love for you to bring your friends, family, or even that coworker who&apos;s always curious about church. The more, the merrier!
                  </p>
                </div>
              </details>

              {/* More Questions */}
              <div className="pt-8 text-center">
                <p className="text-gray-600 mb-4">Have more questions? We&apos;d love to hear from you!</p>
                <a 
                  href="mailto:christslifeph@gmail.com"
                  className="inline-flex items-center space-x-2 text-[#3945cb] hover:text-[#868de4] transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">christslifeph@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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