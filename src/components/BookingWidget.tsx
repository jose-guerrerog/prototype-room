"use client"

import { useState } from 'react';
import { Property } from '@/types';

export default function BookingWidget({ property }: { property: Property }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // For now, just show an alert
    alert(`Thank you for your interest! This feature will be connected to Guesty booking system soon. For now, please contact us at Host@noosastays.com.au to book this property.`);
  };
  
  return (
    <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
      <div className="text-2xl font-bold mb-4">
        <span className="text-rose-500">${property.price}</span> <span className="text-base font-normal text-gray-600">{property.currency} per night</span>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-4">
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded-lg"
            placeholder="Check-in date"
          />
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded-lg"
            placeholder="Check-out date"
          />
          <select
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full p-3 border border-gray-400 rounded-lg"
          >
            {Array.from({ length: property.maxGuests }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
        >
          Check Availability
        </button>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          You won't be charged yet
        </p>
      </form>
    </div>
  );
}