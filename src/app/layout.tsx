import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noosa Stays - Luxury Beachfront Properties',
  description: 'Book your dream vacation at our luxury beachfront properties in Noosa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <style>
          {`
            body {
              background-color: #fafafa;
            }
            .hero-section {
              background-color: #9ca3af;
              background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
              background-size: cover;
              background-position: center;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-100 mt-16 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-sm uppercase mb-4">Noosa Stays</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-700 hover:text-rose-500">About Us</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-500">Properties</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-700 hover:text-rose-500">Help Center</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-500">Cancellation Options</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li><a href="mailto:Host@noosastays.com.au" className="text-gray-700 hover:text-rose-500">Host@noosastays.com.au</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; 2025 Noosa Stays. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}