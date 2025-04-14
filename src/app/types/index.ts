export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  price: number;
  currency: string;
  amenities: string[];
  images: string[];
  highlights: string[];
  houseRules: HouseRule[];
}

export interface HouseRule {
  icon: string;
  title: string;
  content: string;
}

export interface BookingRequest {
  propertyId: string;
  startDate: string;
  endDate: string;
  guests: number;
  name?: string;
  email?: string;
  phone?: string;
  specialRequests?: string;
}

export interface BookingResponse {
  bookingId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  currency: string;
}