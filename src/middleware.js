import { NextResponse } from "next/server";
import { verifyToken } from "./app/lib/auth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const user = token ? await verifyToken(token) : null;

  if (!user) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*"],
};
