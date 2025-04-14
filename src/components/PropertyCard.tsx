import Link from 'next/link'
import { Property } from '@/types'

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-2 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Property Image</span>
        </div>
        <h3 className="font-medium">{property.title}</h3>
        <p className="text-gray-600 text-sm">{property.location}</p>
        <p className="font-medium mt-1">${property.price} <span className="font-normal text-gray-600">{property.currency} night</span></p>
      </div>
    </Link>
  )
}