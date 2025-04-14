"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-rose-500">
          Noosa Stays
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/#amenities" className="text-gray-800 hover:text-rose-500 transition">
            Amenities
          </Link>
          <Link href="/#location" className="text-gray-800 hover:text-rose-500 transition">
            Location
          </Link>
          <a href="mailto:Host@noosastays.com.au" className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition">
            Contact Host
          </a>
        </nav>
        
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/#amenities" 
              className="text-gray-800 hover:text-rose-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link 
              href="/#location" 
              className="text-gray-800 hover:text-rose-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Location
            </Link>
            <a 
              href="mailto:Host@noosastays.com.au" 
              className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition text-center"
            >
              Contact Host
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}