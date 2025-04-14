import { NextResponse } from 'next/server'
import { BookingRequest } from '@/types'

export async function POST(request: Request) {
  const body: BookingRequest = await request.json()
  
  // This would eventually integrate with Guesty API
  // For now, just return a success message
  
  return NextResponse.json({ 
    success: true, 
    message: 'Booking request received. We will contact you shortly.',
    bookingId: 'temp-' + Math.random().toString(36).substr(2, 9),
    status: 'pending',
    totalPrice: 595 * calculateNights(body.startDate, body.endDate),
    currency: 'AUD'
  })
}

function calculateNights(startDate: string, endDate: string): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1
}