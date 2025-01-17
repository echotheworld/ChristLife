import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description?: string;
  location: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (event: Omit<Event, 'id'>) => void;
  event: Event | null;
  mode: 'add' | 'edit';
}

export default function EventModal({ isOpen, onClose, onSubmit, event, mode }: EventModalProps) {
  const [formData, setFormData] = useState<Omit<Event, 'id'>>({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    location: '',
  });

  // Update form data when editing an event
  useEffect(() => {
    if (mode === 'edit' && event) {
      // Convert 12-hour format back to 24-hour format for the input fields
      const convertTo24Hour = (time12h: string) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        let hoursNum = parseInt(hours, 10);
        
        if (modifier === 'PM' && hoursNum < 12) hoursNum += 12;
        if (modifier === 'AM' && hoursNum === 12) hoursNum = 0;
        
        return `${hoursNum.toString().padStart(2, '0')}:${minutes}`;
      };

      setFormData({
        title: event.title,
        date: event.date,
        startTime: convertTo24Hour(event.startTime),
        endTime: convertTo24Hour(event.endTime),
        description: event.description || '',
        location: event.location,
      });
    }
  }, [event, mode]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        description: '',
        location: '',
      });
      setErrors({});
    }
  }, [isOpen]);

  // Helper function to convert 24h to 12h format
  const to12Hour = (time24: string) => {
    if (!time24) return '';
    const [hours24, minutes] = time24.split(':');
    const hours = parseInt(hours24);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes} ${period}`;
  };

  // Add validation state
  const [errors, setErrors] = useState<{
    title?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
    location?: string;
  }>({});

  // Add validation function
  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    // Time validation
    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required';
    }
    if (!formData.endTime) {
      newErrors.endTime = 'End time is required';
    }
    if (formData.startTime && formData.endTime) {
      const startTime = new Date(`2000-01-01T${formData.startTime}`);
      const endTime = new Date(`2000-01-01T${formData.endTime}`);
      if (endTime <= startTime) {
        newErrors.endTime = 'End time must be after start time';
      }
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const eventData = {
      ...formData,
      startTime: to12Hour(formData.startTime),
      endTime: to12Hour(formData.endTime),
      description: formData.description || ''
    };

    onSubmit(eventData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 transition-opacity"
              onClick={onClose}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
            </motion.div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="inline-block align-bottom bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 relative z-50"
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={onClose}
                  className="bg-white rounded-lg p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-all duration-200"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div>
                <div className="text-center sm:text-left">
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#3945cb]/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mode === 'add' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-lg leading-6 font-semibold text-gray-900">
                      {mode === 'add' ? 'Add New Event' : 'Edit Event'}
                    </h3>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-5"
                    >
                      {/* Event Title */}
                      <div className="relative">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                          Event Title
                        </label>
                        <div className="relative rounded-lg shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            value={formData.title}
                            onChange={(e) => {
                              setFormData({ ...formData, title: e.target.value });
                              if (errors.title) setErrors({ ...errors, title: undefined });
                            }}
                            className={`pl-10 block w-full border ${errors.title ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:outline-none focus:ring-[#3945cb] focus:border-[#3945cb] bg-white transition-all duration-200`}
                            placeholder="Enter event title"
                          />
                        </div>
                        {errors.title && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-sm text-red-600 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {errors.title}
                          </motion.p>
                        )}
                      </div>

                      {/* Date & Location Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Date */}
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Date
                          </label>
                          <div className="relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              required
                              value={formData.date}
                              onChange={(e) => {
                                setFormData({ ...formData, date: e.target.value });
                                if (errors.date) setErrors({ ...errors, date: undefined });
                              }}
                              className={`pl-10 block w-full border ${errors.date ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:outline-none focus:ring-[#3945cb] focus:border-[#3945cb] bg-white transition-all duration-200`}
                            />
                          </div>
                          {errors.date && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1 text-sm text-red-600 flex items-center"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {errors.date}
                            </motion.p>
                          )}
                        </div>

                        {/* Location */}
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            Location
                          </label>
                          <div className="relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              required
                              value={formData.location}
                              onChange={(e) => {
                                setFormData({ ...formData, location: e.target.value });
                                if (errors.location) setErrors({ ...errors, location: undefined });
                              }}
                              className={`pl-10 block w-full border ${errors.location ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:outline-none focus:ring-[#3945cb] focus:border-[#3945cb] bg-white transition-all duration-200`}
                              placeholder="Enter location"
                            />
                          </div>
                          {errors.location && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1 text-sm text-red-600 flex items-center"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {errors.location}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      {/* Time Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Start Time */}
                        <div>
                          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Start Time
                          </label>
                          <div className="relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <input
                              type="time"
                              id="startTime"
                              name="startTime"
                              required
                              value={formData.startTime}
                              onChange={(e) => {
                                setFormData({ ...formData, startTime: e.target.value });
                                if (errors.startTime) setErrors({ ...errors, startTime: undefined });
                              }}
                              className={`pl-10 block w-full border ${errors.startTime ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:outline-none focus:ring-[#3945cb] focus:border-[#3945cb] bg-white transition-all duration-200 [&::-webkit-calendar-picker-indicator]:hidden`}
                            />
                          </div>
                          {errors.startTime && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1 text-sm text-red-600 flex items-center"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {errors.startTime}
                            </motion.p>
                          )}
                        </div>

                        {/* End Time */}
                        <div>
                          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                            End Time
                          </label>
                          <div className="relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <input
                              type="time"
                              id="endTime"
                              name="endTime"
                              required
                              value={formData.endTime}
                              onChange={(e) => {
                                setFormData({ ...formData, endTime: e.target.value });
                                if (errors.endTime) setErrors({ ...errors, endTime: undefined });
                              }}
                              className={`pl-10 block w-full border ${errors.endTime ? 'border-red-300' : 'border-gray-300'} rounded-lg shadow-sm py-2.5 px-3 focus:outline-none focus:ring-[#3945cb] focus:border-[#3945cb] bg-white transition-all duration-200 [&::-webkit-calendar-picker-indicator]:hidden`}
                            />
                          </div>
                          {errors.endTime && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1 text-sm text-red-600 flex items-center"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {errors.endTime}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <div className="relative rounded-lg shadow-sm">
                          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                          </div>
                          <textarea
                            id="description"
                            name="description"
                            rows={3}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="pl-10 block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-3 focus:outline-none focus:ring-[#3945cb] focus:border-[#3945cb] bg-white transition-all duration-200"
                            placeholder="Enter event description (optional)"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 sm:mt-4 sm:flex sm:flex-row-reverse gap-3"
                    >
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg border border-transparent px-6 py-2.5 bg-gradient-to-r from-[#3945cb] to-[#5563e5] text-base font-medium text-white shadow-sm hover:from-[#2d37a0] hover:to-[#3945cb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3945cb] sm:text-sm transition-all duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {mode === 'add' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          )}
                        </svg>
                        {mode === 'add' ? 'Add Event' : 'Save Changes'}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center items-center rounded-lg border border-gray-300 px-6 py-2.5 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3945cb] sm:text-sm transition-all duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Cancel
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
} 