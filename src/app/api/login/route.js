import { signToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  if (email !== "lbrainbow000@gmail.com" || password !== "rainbow000") {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 401 }
    );
  }

  const token = await signToken({ email, role: "user" });

  const res = NextResponse.redirect(new URL("/products", request.url));

  res.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
  });

  return res;
}
