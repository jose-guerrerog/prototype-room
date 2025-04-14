import Link from 'next/link';
import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);
  
  if (!property) {
    return notFound();
  }
  
  return (
    <main>
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-rose-500">
            Noosa Stays
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="#amenities" className="text-gray-800 hover:text-rose-500 transition">
              Amenities
            </Link>
            <Link href="#location" className="text-gray-800 hover:text-rose-500 transition">
              Location
            </Link>
            <a href="mailto:Host@noosastays.com.au" className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition">
              Contact Host
            </a>
          </nav>
          
          <button className="md:hidden text-gray-800">
            Menu
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="relative h-96 rounded-xl overflow-hidden mb-6">
          {property.images && property.images.length > 0 ? (
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </section>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {property.images && property.images.length > 1 ? 
            property.images.slice(1, 5).map((img, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={img} 
                  alt={`${property.title} - Image ${index + 2}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))
            : 
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No image</span>
              </div>
            ))
          }
        </div>
        
        {/* Two-column Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Property Details Column (2/3 width) */}
          <div className="md:col-span-2">
            {/* Property Header */}
            <section className="mb-12">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <p className="text-gray-600">{property.location}</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Host</span>
                  </div>
                  <div>
                    <p className="font-semibold">Hosted by Noosa Stays</p>
                    <p className="text-sm text-gray-600">Host since 2020</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {property.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-rose-500 mr-2">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <span className="mr-2">🛏️</span>
                  <span>{property.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🚿</span>
                  <span>{property.bathrooms} bathrooms</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👥</span>
                  <span>{property.maxGuests} guests</span>
                </div>
              </div>
            </section>
            
            {/* Property Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About this place</h2>
              <p className="whitespace-pre-line text-gray-700">{property.description}</p>
            </section>
            
            {/* Amenities */}
            <section id="amenities" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <span className="text-rose-500 mr-3">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Location */}
            <section id="location" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Where you'll be</h2>
              <p className="mb-4">
                Located in the heart of Noosa, this property offers easy access to beaches, restaurants, and attractions. Noosa Main Beach is just steps away, and the famous Hastings Street is within walking distance.
              </p>
              <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map will be integrated here</span>
              </div>
            </section>
            
            {/* House Rules */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Things to know</h2>
              <h3 className="text-xl font-semibold mb-3">House rules</h3>
              <ul className="space-y-4">
                {property.houseRules.map((rule, index) => (
                  <li key={index} className="flex items-center py-2 border-b border-gray-200">
                    <span className="mr-4">{rule.icon}</span>
                    <div>
                      <strong>{rule.title}</strong> {rule.content}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          {/* Booking Widget Column (1/3 width) */}
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="text-2xl font-bold mb-4">
                <span className="text-rose-500">${property.price}</span> <span className="text-base font-normal text-gray-600">{property.currency} per night</span>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                alert(`Thank you for your interest! This feature will be connected to Guesty booking system soon. For now, please contact us at Host@noosastays.com.au to book this property.`);
              }}>
                <div className="space-y-4 mb-4">
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-400 rounded-lg"
                    placeholder="Check-in date"
                  />
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-400 rounded-lg"
                    placeholder="Check-out date"
                  />
                  <select
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
          </div>
        </div>
      </div>
    </main>
  );
}