"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ref, onValue, push, update, remove } from "firebase/database";
import { database, app } from "@/lib/firebase";
import EventModal from "./components/EventModal";
import StatCard from "./components/StatCard";

interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description?: string;
  location: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Fetch events from Firebase
  useEffect(() => {
    // Ensure Firebase is initialized
    if (!app) return;
    
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
            const dateA = new Date(`${a.date} ${a.startTime}`);
            const dateB = new Date(`${b.date} ${b.startTime}`);
            return dateA.getTime() - dateB.getTime();
          });
          setEvents(sortedEvents);
        } else {
          setEvents([]);
        }
        setIsLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error fetching events:', error);
      setIsLoading(false);
    }
  }, []);

  const handleAddEvent = async (eventData: Omit<Event, 'id'>) => {
    try {
      const eventsRef = ref(database, 'events');
      await push(eventsRef, eventData);
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/admin');
        router.refresh();
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Helper function to check if an event is upcoming in the current month
  const isUpcomingInCurrentMonth = (event: Event) => {
    const eventDate = new Date(event.date);
    const now = new Date();
    return eventDate > now && eventDate.getMonth() === currentMonth;
  };

  // Helper function to check if an event is upcoming (any month)
  const isUpcoming = (event: Event) => {
    const eventDate = new Date(event.date + ' ' + event.endTime);
    return eventDate > new Date();
  };

  // Remove category from initial form data
  const initialFormData = {
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    location: '',
  };

  const formatDescription = (text: string) => {
    if (!text) return '';
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    return text.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#3945cb] hover:text-[#2d37a0] underline">$1</a>');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200">
            <span className="text-xl font-bold bg-gradient-to-r from-[#3945cb] to-[#5563e5] bg-clip-text text-transparent">
              ChristLife.
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              <a 
                href="#"
                className="flex items-center px-4 py-3 text-sm font-medium text-[#3945cb] bg-[#3945cb]/5 rounded-lg group"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar Management
              </a>
              <Link 
                href="/"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/5 rounded-lg group transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                View Site
              </Link>
            </div>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200">
            <button 
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/5 rounded-lg group transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold bg-gradient-to-r from-[#3945cb] to-[#5563e5] bg-clip-text text-transparent">
            ChristLife.
          </span>
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <button 
              onClick={handleLogout}
              className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8 mt-16 md:mt-0">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Calendar Management</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage your church events and activities
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#3945cb] hover:bg-[#2d37a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3945cb] transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Event
              </motion.button>
            </div>
          </div>

          {isLoading ? (
            // Loading State
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Stats Loading */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      opacity: [0.5, 0.7, 0.5],
                      scale: [1, 1.01, 1] 
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut" 
                    }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-[100px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#3945cb]/10 rounded-lg animate-pulse" />
                      <div className="flex-1 space-y-3">
                        <div className="h-4 bg-[#3945cb]/10 rounded-full w-24 animate-pulse" />
                        <div className="h-6 bg-[#3945cb]/10 rounded-full w-16 animate-pulse" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Table Loading */}
              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                animate={{ 
                  opacity: [0.5, 0.7, 0.5] 
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut" 
                }}
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="h-6 bg-[#3945cb]/10 rounded-full w-32 animate-pulse" />
                </div>
                <div className="p-6 space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="h-4 bg-[#3945cb]/10 rounded-full w-1/3 animate-pulse" />
                      <div className="h-4 bg-[#3945cb]/10 rounded-full w-1/4 animate-pulse" />
                      <div className="h-4 bg-[#3945cb]/10 rounded-full w-1/4 animate-pulse" />
                      <div className="h-4 bg-[#3945cb]/10 rounded-full w-1/6 animate-pulse" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <>
              {/* Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-200"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#3945cb]/10 to-[#5563e5]/10 rounded-lg border border-[#3945cb]/10">
                      <svg className="w-6 h-6 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500">Total Events</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#3945cb] to-[#5563e5] bg-clip-text text-transparent">
                        {events.length}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-200"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#3945cb]/10 to-[#5563e5]/10 rounded-lg border border-[#3945cb]/10">
                      <svg className="w-6 h-6 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500">Upcoming Events</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#3945cb] to-[#5563e5] bg-clip-text text-transparent">
                        {events.filter(isUpcomingInCurrentMonth).length}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Events List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <h2 className="text-lg font-semibold text-gray-900">Events List</h2>
                    <div className="flex items-center gap-2">
                      <select
                        value={currentMonth}
                        onChange={(e) => setCurrentMonth(Number(e.target.value))}
                        className="block w-full sm:w-40 rounded-lg border border-gray-200 shadow-sm focus:border-[#3945cb] focus:ring-[#3945cb] text-sm bg-white"
                      >
                        {months.map((month, index) => (
                          <option key={month} value={index}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[40%]">
                          Event
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]">
                          Date & Time
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]">
                          Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {(() => {
                        const filteredEvents = events.filter(event => {
                          const eventDate = new Date(event.date);
                          return eventDate.getMonth() === currentMonth;
                        });

                        if (filteredEvents.length === 0) {
                          return (
                            <tr>
                              <td colSpan={5} className="px-6 py-12 text-center">
                                <div className="flex flex-col items-center justify-center text-gray-500">
                                  <div className="p-3 bg-gradient-to-br from-[#3945cb]/10 to-[#5563e5]/10 rounded-lg border border-[#3945cb]/10 mb-4">
                                    <svg className="w-8 h-8 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                  <p className="text-lg font-medium text-gray-900 mb-1">
                                    No Events in {months[currentMonth]}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Click the &quot;Add Event&quot; button to create a new event
                                  </p>
                                </div>
                              </td>
                            </tr>
                          );
                        }

                        return filteredEvents.map((event) => (
                          <motion.tr
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="hover:bg-gray-50 transition-colors duration-200"
                          >
                            <td className="px-6 py-4 w-[40%]">
                              <div className="max-w-lg">
                                <div className="text-sm font-medium text-gray-900 mb-1">{event.title}</div>
                                <div 
                                  className="text-sm text-gray-500 line-clamp-2 hover:line-clamp-none transition-all duration-200"
                                  dangerouslySetInnerHTML={{ 
                                    __html: formatDescription(event.description || '') 
                                  }}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-4 w-[20%]">
                              <div className="text-sm text-gray-900">
                                {new Date(event.date).toLocaleDateString()}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {event.startTime} - {event.endTime}
                              </div>
                            </td>
                            <td className="px-6 py-4 w-[20%]">
                              <div className="text-sm text-gray-500 line-clamp-2">
                                {event.location}
                              </div>
                            </td>
                            <td className="px-6 py-4 w-[10%]">
                              <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                isUpcoming(event) 
                                  ? 'bg-green-100 text-green-800 border border-green-200' 
                                  : 'bg-gray-100 text-gray-800 border border-gray-200'
                              }`}>
                                {isUpcoming(event) ? 'Upcoming' : 'Past'}
                              </span>
                            </td>
                            <td className="px-6 py-4 w-[10%] whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => {
                                    setSelectedEvent(event);
                                    setIsEditModalOpen(true);
                                  }}
                                  className="inline-flex items-center text-[#3945cb] hover:text-[#2d37a0] transition-colors duration-200"
                                >
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                  Edit
                                </button>
                                <button
                                  onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this event?')) {
                                      const eventRef = ref(database, `events/${event.id}`);
                                      remove(eventRef);
                                    }
                                  }}
                                  className="inline-flex items-center text-red-600 hover:text-red-900 transition-colors duration-200"
                                >
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Delete
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ));
                      })()}
                    </tbody>
                  </table>
                </div>

                {/* Mobile List View */}
                <div className="block sm:hidden divide-y divide-gray-200">
                  {(() => {
                    const filteredEvents = events.filter(event => {
                      const eventDate = new Date(event.date);
                      return eventDate.getMonth() === currentMonth;
                    });

                    if (filteredEvents.length === 0) {
                      return (
                        <div className="px-4 py-12 text-center">
                          <div className="flex flex-col items-center justify-center text-gray-500">
                            <div className="p-3 bg-gradient-to-br from-[#3945cb]/10 to-[#5563e5]/10 rounded-lg border border-[#3945cb]/10 mb-4">
                              <svg className="w-8 h-8 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p className="text-lg font-medium text-gray-900 mb-1">
                              No Events in {months[currentMonth]}
                            </p>
                            <p className="text-sm text-gray-500">
                              Click the &quot;Add Event&quot; button to create a new event
                            </p>
                          </div>
                        </div>
                      );
                    }

                    return filteredEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 hover:bg-gray-50 transition-colors duration-200 space-y-4"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium text-gray-900">{event.title}</div>
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              isUpcoming(event) 
                                ? 'bg-green-100 text-green-800 border border-green-200' 
                                : 'bg-gray-100 text-gray-800 border border-gray-200'
                            }`}>
                              {isUpcoming(event) ? 'Upcoming' : 'Past'}
                            </span>
                          </div>
                          <div 
                            className="text-sm text-gray-500 line-clamp-2"
                            dangerouslySetInnerHTML={{ 
                              __html: formatDescription(event.description || '') 
                            }}
                          />
                        </div>

                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{event.startTime} - {event.endTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="line-clamp-1">{event.location}</span>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2 border-t border-gray-100">
                          <button
                            onClick={() => {
                              setSelectedEvent(event);
                              setIsEditModalOpen(true);
                            }}
                            className="inline-flex items-center text-[#3945cb] hover:text-[#2d37a0] transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this event?')) {
                                const eventRef = ref(database, `events/${event.id}`);
                                remove(eventRef);
                              }
                            }}
                            className="inline-flex items-center text-red-600 hover:text-red-900 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </motion.div>
                    ));
                  })()}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modals */}
      <EventModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddEvent}
        event={null}
        mode="add"
      />
      <EventModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedEvent(null);
        }}
        onSubmit={async (eventData) => {
          try {
            const eventRef = ref(database, `events/${selectedEvent?.id}`);
            await update(eventRef, eventData);
            setIsEditModalOpen(false);
            setSelectedEvent(null);
          } catch (error) {
            console.error('Error updating event:', error);
          }
        }}
        event={selectedEvent}
        mode="edit"
      />
    </div>
  );
} 