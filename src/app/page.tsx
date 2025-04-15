'use client'

import Link from "next/link";
import { properties } from "@/data/properties";
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { 
  ssr: false 
});

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroImages = [
  "/images/fig2.jpg",
  "/images/fig3.jpg",
  "/images/fig4.jpg",
  "/images/fig5.jpg",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: false,
  arrows: false,
  className: "hero-carousel",
  dotsClass: "slick-dots custom-dots",
};

export default function Home() {
  // Get the main property
  const mainProperty = properties[0]; // Use the first property as the main one

  return (
    <main>
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-rose-500">
            Noosa Stays
          </Link>

          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link
              href="#amenities"
              className="text-gray-800 hover:text-rose-500 transition hidden sm:inline-block"
            >
              Amenities
            </Link>
            <Link
              href="#location"
              className="text-gray-800 hover:text-rose-500 transition hidden sm:inline-block"
            >
              Location
            </Link>
            <a
              href="mailto:Host@noosastays.com.au"
              className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition"
            >
              Contact Host
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center rounded-lg mx-4 my-8 overflow-hidden">
        <img
          src="/images/fig1.png"
          alt={mainProperty.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ 
            zIndex: -1, 
            filter: 'brightness(0.7) contrast(1.1) sharp(1.2)',  // Enhances image clarity
            objectPosition: 'center'
          }}
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          style={{ zIndex: -1 }}
        ></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
          {mainProperty.title}
        </h1>
        <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8 relative z-10">
          {mainProperty.location}
        </p>
        <Link
          href="#amenities"
          className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 relative z-10"
        >
          View Amenities
        </Link>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Property Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Property Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* <div>
              <img 
                src="/images/fig2.jpg" 
                alt="Property Interior"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div> */}
            <Slider {...settings}>
              {heroImages.map((image, index) => (
                <div key={index} className="h-[450px] relative">
                  <img
                    src={image}
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
            <div>
              <h3 className="text-2xl font-bold mb-4">{mainProperty.title}</h3>
              <p className="text-gray-700 mb-4">{mainProperty.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {mainProperty.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-rose-500 mr-2">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <p className="font-medium mt-4">
                <span className="text-rose-500 font-bold">
                  ${mainProperty.price}
                </span>
                <span className="text-gray-600">
                  {" "}
                  {mainProperty.currency} night
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainProperty.amenities.map((amenity, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center">
                  <span className="text-rose-500 mr-3 text-xl">✓</span>
                  <span className="font-medium">{amenity}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Location</h2>
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
            <p>Map will be integrated here</p>
          </div>
          <p className="mt-4">
            Located in {mainProperty.location}, our property offers easy access
            to beaches, restaurants, and attractions.
          </p>
        </section>

        {/* Booking Section */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8">Book Your Stay</h2>
          <form className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Check-in</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Check-out
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Guests</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                {Array.from(
                  { length: mainProperty.maxGuests },
                  (_, i) => i + 1
                ).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-3">
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
              >
                Check Availability
              </button>
            </div>
          </form>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="mb-4">
              For inquiries about this property or to make a booking, please
              contact us at:
            </p>
            <a
              href="mailto:Host@noosastays.com.au"
              className="text-rose-500 font-bold text-lg hover:underline"
            >
              Host@noosastays.com.au
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
