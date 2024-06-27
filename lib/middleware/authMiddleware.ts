import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Authentication required" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (typeof decoded === "object" && "authorId" in decoded) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("X-Author-ID", decoded.authorId.toString());
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*"
};