import { BookingRequest, BookingResponse } from '@/types'

/**
 * This file will handle Guesty API interactions when integration is ready
 * For now, it just returns mock data
 */

export async function getAvailability(
) {
  // This would make a call to Guesty API to check availability
  // For now, just return mock data
  return {
    available: true,
    price: 595,
    currency: 'AUD',
    minimumStay: 2,
  }
}

export async function createBooking(
  bookingData: BookingRequest
): Promise<BookingResponse> {
  // Calculate nights between start and end date
  const start = new Date(bookingData.startDate)
  const end = new Date(bookingData.endDate)
  const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  
  // This would create a booking in Guesty
  // For now, just return mock data
  return {
    bookingId: 'mock-booking-123',
    status: 'pending',
    totalPrice: nights * 595,
    currency: 'AUD',
  }
}