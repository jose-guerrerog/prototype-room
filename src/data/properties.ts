import { Property } from '@/types';

export const properties: Property[] = [
  {
    id: 'beachfront-paradise',
    title: 'Luxurious Beachfront Paradise in Noosa',
    description: `Welcome to our stunning beachfront property in Noosa! This luxurious vacation home offers the perfect blend of comfort, style, and prime location for an unforgettable holiday experience.

Nestled just steps from the pristine sands of Noosa Beach, this spacious property features breathtaking ocean views, modern furnishings, and all the amenities you need for a relaxing stay. The open-concept living area flows seamlessly to the outdoor entertaining space, where you can enjoy al fresco dining while listening to the sound of waves.

The property is ideally located within walking distance to Noosa's famous Hastings Street, where you'll find world-class restaurants, boutique shopping, and vibrant nightlife. For nature lovers, Noosa National Park is just a short stroll away, offering stunning coastal walks and the chance to spot local wildlife.`,
    location: 'Noosa Heads, Queensland, Australia',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    price: 595,
    currency: 'AUD',
    amenities: [
      'Private pool',
      'Beachfront',
      'Wi-Fi',
      'Air conditioning',
      'Free parking',
      'Full kitchen',
      'Smart TV',
      'Washer & dryer',
      'BBQ grill',
      'Outdoor dining area'
    ],
    highlights: [
      'Beachfront location',
      'Private pool',
      'Modern amenities',
      'Close to attractions'
    ],
    houseRules: [
      {icon: '⏰', title: 'Check-in:', content: 'After 3:00 PM'},
      {icon: '⏰', title: 'Checkout:', content: 'Before 10:00 AM'},
      {icon: '👥', title: 'Max guests:', content: '8 (adults and children)'},
      {icon: '🚬', title: 'No smoking', content: ''},
      {icon: '🐾', title: 'No pets', content: ''},
      {icon: '🎉', title: 'No parties or events', content: ''}
    ],
  },
  {
    id: 'hinterland-retreat',
    title: 'Serene Hinterland Retreat with Mountain Views',
    description: `Escape to the tranquility of the Noosa Hinterland at our serene mountain retreat. This beautifully designed property offers the perfect combination of luxury and natural beauty for a rejuvenating getaway.

Perched on a hillside with panoramic views of the surrounding mountains and valleys, this spacious home features high ceilings, expansive windows, and stylish interiors that create a sense of calm and connection with nature.`,
    location: 'Noosa Hinterland, Queensland, Australia',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    price: 450,
    currency: 'AUD',
    amenities: [
      'Mountain views',
      'Wi-Fi',
      'Air conditioning',
      'Free parking',
      'Full kitchen',
      'Smart TV',
      'Fireplace',
      'Outdoor dining area'
    ],
    highlights: [
      'Panoramic views',
      'Private location',
      'Modern amenities',
      'Close to attractions'
    ],
    houseRules: [
      {icon: '⏰', title: 'Check-in:', content: 'After 2:00 PM'},
      {icon: '⏰', title: 'Checkout:', content: 'Before 10:00 AM'},
      {icon: '👥', title: 'Max guests:', content: '6 (adults and children)'},
      {icon: '🚬', title: 'No smoking', content: ''},
      {icon: '🐾', title: 'Pets allowed', content: 'With prior approval'},
      {icon: '🎉', title: 'No parties or events', content: ''}
    ],
  }
];