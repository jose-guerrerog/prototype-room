export default function AmenitiesList({ amenities }: { amenities: string[] }) {
  // Map of amenity names to icons
  const amenityIcons: Record<string, string> = {
    'Private pool': '🏊',
    'Beachfront': '🌊',
    'Wi-Fi': '📶',
    'Air conditioning': '❄️',
    'Free parking': '🚗',
    'Full kitchen': '🍳',
    'Smart TV': '📺',
    'Washer & dryer': '🧺',
    'BBQ grill': '🔥',
    'Outdoor dining area': '🏠',
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {amenities.map((amenity) => (
        <div key={amenity} className="flex items-center">
          <span className="mr-3">{amenityIcons[amenity] || '✓'}</span>
          <span>{amenity}</span>
        </div>
      ))}
    </div>
  )
}