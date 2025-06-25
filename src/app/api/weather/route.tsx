import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.PUBLIC_WEATHER_API_KEY;

export async function GET(req: NextRequest) {
  const city = req.nextUrl.searchParams.get('city');
  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }

const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
);

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
