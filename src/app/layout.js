import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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

export default function RootLayout({ children }) {
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
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Products Store
            </h1>
            <nav style={{ fontSize: "18px" }}>
              <Link href="/" style={{ marginRight: "15px" }}>
                Home
              </Link>
              <Link href="/products">Products</Link>
            </nav>
          </div>
        </header>
        <div>{children}</div>
        <footer
          style={{
            background: "gray",
            margin: "8px",
            padding: "10px",
            textAlign: "center",
            borderRadius: "6px",
            color: "white",
          }}
        >
          <h3>© 2026 Products Store</h3>
          <p>Built with Next.js</p>
        </footer>
      </body>
    </html>
  );
}
