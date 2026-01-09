import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Products Store",
  description: "Simple Products Store built with Next.js",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header
          style={{
            background: "pink",
            margin: "8px",
            padding: "12px 20px",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              src="/images/applogo.png"
              alt="app-logo"
              width={80}
              height={60}
              priority
            />

            <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
              Products Store
            </h1>

            <nav style={{ fontSize: "18px" }}>
              <Link href="/" style={{ marginRight: "15px" }}>
                Home
              </Link>

              <Link href="/products" style={{ marginRight: "15px" }}>
                Products
              </Link>

              {!token ? (
                <Link href="/login">Login</Link>
              ) : (
                <form
                  action="/api/logout"
                  method="POST"
                  style={{ display: "inline" }}
                >
                  <button
                    type="submit"
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Logout
                  </button>
                </form>
              )}
            </nav>
          </div>
        </header>

        <main style={{ padding: "16px" }}>{children}</main>
      </body>
    </html>
  );
}
