interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;  // e.g. "9:00 AM"
  endTime: string;    // e.g. "12:00 PM"
  description?: string;
  location: string;
  category: string;
}

"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { database } from "@/lib/firebase";
import { motion } from "framer-motion";

const formatDescription = (text: string) => {
  if (!text) return '';
  const urlRegex = /(.+?)\s*\((https?:\/\/[^\s)]+)\)/g;
  return text.replace(urlRegex, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#3945cb] hover:text-[#2d37a0] underline">$1</a>');
};

// Helper function to get current Philippine Time
const getCurrentPHTime = () => {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
};

export default function CalendarPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(getCurrentPHTime());
  const [isLoading, setIsLoading] = useState(true);

  // Get current month and year for default display
  const getCurrentMonthYear = () => {
    const now = new Date();
    return {
      month: now.toLocaleDateString('en-US', { month: 'long' }),
      year: now.getFullYear()
    };
  };

  useEffect(() => {
    if (!database) {
      console.error('Database not initialized');
      setIsLoading(false);
      return;
    }

    try {
      const eventsRef = ref(database, 'events');
      const unsubscribe = onValue(eventsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const eventsList = Object.entries(data).map(([id, event]: [string, any]) => ({
            id,
            ...event
          }));

          // Sort events by date and time
          const sortedEvents = eventsList.sort((a, b) => {
            const dateA = new Date(a.date + ' ' + a.endTime);
            const dateB = new Date(b.date + ' ' + b.endTime);
            return dateA.getTime() - dateB.getTime();
          });

          // Filter out past events and delete them from database using Philippine Time
          const now = getCurrentPHTime();
          const currentEvents = sortedEvents.filter(event => {
            const eventEndTime = new Date(new Date(event.date + ' ' + event.endTime).toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
            const isPastEvent = eventEndTime < now;
            
            // Delete past events from database
            if (isPastEvent && database) {
              const eventRef = ref(database, `events/${event.id}`);
              remove(eventRef).catch(error => {
                console.error('Error removing past event:', error);
              });
            }
            
            return !isPastEvent;
          });

          setEvents(currentEvents);
        } else {
          setEvents([]);
        }
        setIsLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
      setIsLoading(false);
    }
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const toggleEventDetails = (index: number) => {
    setExpandedEventId(expandedEventId === index ? null : index);
  };

  // Filter events for current month and year, hiding past months using Philippine Time
  const currentMonthEvents = events.filter(event => {
    const eventDate = new Date(new Date(event.date).toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    const now = getCurrentPHTime();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    // Only show events from current month onwards
    if (eventDate.getFullYear() === currentYear) {
      if (eventDate.getMonth() < currentMonth) {
        return false;
      }
      return eventDate.getMonth() === currentDate.getMonth();
    }
    
    return false;
  }).sort((a, b) => {
    const dateA = new Date(new Date(a.date).toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    const dateB = new Date(new Date(b.date).toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    return dateA.getTime() - dateB.getTime();
  });

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      
      // Don't allow going to past months of current year
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();
      
      if (newDate.getFullYear() === currentYear && newDate.getMonth() < currentMonth) {
        return prevDate;
      }
      
      // Don't allow going to previous years
      if (newDate.getFullYear() < currentYear) {
        return prevDate;
      }
      
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      
      // Don't allow going beyond current year
      const currentYear = new Date().getFullYear();
      if (newDate.getFullYear() > currentYear) {
        return prevDate;
      }
      
      return newDate;
    });
  };

  // Format the current month and year
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Reset to current month when component mounts
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Toast Notification */}
      <div className={`
        fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        transform transition-all duration-300 ease-in-out
        ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}
      `}>
        <div className="bg-[#3945cb] text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium">Link copied to clipboard!</span>
        </div>
      </div>

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
                <Link href="/calendar" className="text-[#3945cb] hover:text-[#868de4] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#868de4] after:transition-all after:duration-300">
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
            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Home
            </Link>
            <Link href="/calendar" className="block px-3 py-2 text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
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
              Calendar
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with our church events, services, and activities. Join us in building a vibrant community of faith.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="bg-[#f8f8ff] py-8 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Month View Header */}
          <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-xl p-4 mb-6 flex items-center justify-between border border-gray-100">
            {/* Left - Copy Link */}
            <button 
              onClick={handleCopyLink}
              className="p-2 hover:bg-[#3945cb]/5 rounded-lg transition-all duration-300 text-gray-600 hover:text-[#3945cb] hover:scale-110"
              title="Copy calendar link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>

            {/* Center - Month View Title */}
            <div className="text-center transform transition-all duration-300 hover:scale-105">
              <div className="text-sm font-medium text-[#3945cb]/70 mb-0.5">Month View</div>
              <h2 className="text-lg font-semibold bg-gradient-to-r from-[#3945cb] to-[#5563e5] bg-clip-text text-transparent">
                {formatMonthYear(currentDate)}
              </h2>
            </div>

            {/* Right - Navigation */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-[#3945cb]/5 rounded-lg transition-all duration-300 text-gray-600 hover:text-[#3945cb] hover:scale-110" onClick={goToPreviousMonth}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 hover:bg-[#3945cb]/5 rounded-lg transition-all duration-300 text-gray-600 hover:text-[#3945cb] hover:scale-110" onClick={goToNextMonth}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-2">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-12 flex justify-center items-center border border-gray-100"
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-12 h-12 border-4 border-[#3945cb]/10 border-t-[#3945cb] rounded-full"
                />
              </motion.div>
            ) : currentMonthEvents.length > 0 ? (
              currentMonthEvents.map((event, index) => {
                // Ensure we have a valid date
                const eventDate = event.date ? new Date(event.date) : null;
                if (!eventDate || isNaN(eventDate.getTime())) {
                  return null; // Skip invalid dates
                }

                return (
                  <div 
                    key={event.id} 
                    className="group bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg shadow-[#3945cb]/5 hover:shadow-xl hover:shadow-[#3945cb]/10 transition-all duration-300 border border-gray-100 hover:border-[#3945cb]/20"
                  >
                    <div className="flex items-start gap-2">
                      <div className="bg-gradient-to-br from-[#3945cb]/5 to-[#5563e5]/5 rounded-xl p-2 text-center min-w-[60px] border border-[#3945cb]/10 group-hover:border-[#3945cb]/30 transition-all duration-300">
                        <div className="text-xs font-medium text-[#3945cb]/70 uppercase">
                          {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="text-xl font-bold bg-gradient-to-r from-[#3945cb] to-[#5563e5] bg-clip-text text-transparent">
                          {eventDate.getDate()}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-[#3945cb] transition-colors duration-300 truncate">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <p className="text-sm text-gray-600">
                            {event.startTime} - {event.endTime} (PHT)
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        {(() => {
                          const today = new Date();
                          const tomorrow = new Date(today);
                          tomorrow.setDate(today.getDate() + 1);
                          
                          if (eventDate.toDateString() === today.toDateString()) {
                            return <p className="text-[#3945cb] text-xs mt-1 font-medium">Happening Today!</p>;
                          } else if (eventDate.toDateString() === tomorrow.toDateString()) {
                            return <p className="text-[#3945cb] text-xs mt-1 font-medium">We&apos;re excited to see you tomorrow!</p>;
                          }
                          return null;
                        })()}
                      </div>
                      <button 
                        onClick={() => toggleEventDetails(index)}
                        className="p-1.5 hover:bg-[#3945cb]/5 rounded-lg transition-all duration-300 text-gray-400 hover:text-[#3945cb] flex-shrink-0"
                      >
                        <svg 
                          className={`w-4 h-4 transform transition-transform duration-300 ${expandedEventId === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {/* Event Details */}
                    <div 
                      className={`
                        mt-2 pl-[70px] text-gray-600
                        transform transition-all duration-300 origin-top
                        ${expandedEventId === index 
                          ? 'opacity-100 max-h-96 scale-y-100' 
                          : 'opacity-0 max-h-0 scale-y-0 overflow-hidden'}
                      `}
                    >
                      <div className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatDescription(event.description || '') }} />
                    </div>
                  </div>
                );
              }).filter(Boolean)
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-100"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <svg 
                    className="w-16 h-16 mx-auto mb-4 text-[#3945cb]/30" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
                <p className="text-gray-600">
                  Stay tuned! New events will be added soon.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            ©2025 Christ Life Bacoor. All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
} 