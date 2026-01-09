import { NextResponse } from "next/server";

export async function POST(request) {
  const url = new URL("/", request.url);
  const res = NextResponse.redirect(url);

  res.cookies.set("token", "", {
    maxAge: 0,
    path: "/",
  });

  return res;
}
