import { NextResponse } from "next/server";

export function middleware(request) {
  // Login status check from cookies
  const isLoggedIn = request.cookies.get("isLoggedIn");

  // if not login and trying to enter '/add-item' page, then redirect him to login page
  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if login then go to all page
  return NextResponse.next();
}

// private route check
export const config = {
  matcher: ["/add-item/:path*"],
};
