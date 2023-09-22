import { NextResponse, NextRequest } from 'next/server';

const rateLimit = {
  windowMs: 60000,
  maxRequests: 5,
};

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export default async function middleware(request: NextRequest) {
  const clientIp = request.ip;
  if (!clientIp) return;

  if (!requestCounts.has(clientIp))
    requestCounts.set(clientIp, { count: 0, resetTime: Date.now() + rateLimit.windowMs });

  let clientData = requestCounts.get(clientIp);
  const currentTime = Date.now();

  if (!clientData) return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

  if (currentTime > clientData.resetTime) {
    clientData = { ...clientData, count: 0, resetTime: currentTime + rateLimit.windowMs };
    requestCounts.set(clientIp, clientData);
  }

  return NextResponse.json({ error: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
}
