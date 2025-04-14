import { NextResponse } from 'next/server'

export async function POST() {
  
  // This would eventually check availability with Guesty API
  // For now, just return mock data
  
  return NextResponse.json({ 
    available: true,
    price: 595,
    currency: 'AUD',
    minimumStay: 2
  })
}