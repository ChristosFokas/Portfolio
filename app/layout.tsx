import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import ManaComponent from "@/components/common/ManaComponent";

const geistSans = localFont({
  src: "./fonts/PlaypenSans.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/PlaypenSans.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {

  title: "Christos Fokas - Rising F1 and Kart Driver",
  description: "Discover Christos Fokas, an up-and-coming kart driver with dreams of competing in Formula 1. Follow his journey through the world of motorsports.",
  keywords: "Christos Fokas, F1 driver, kart driver, motorsports, Formula 1, racing, karting competitions, ChristosFokas, F1 rising star, young kart driver, karting, kart racing",
  openGraph: {
    title: "Christos Fokas - F1 Driver & Karting Champion",
    description: "Meet Christos Fokas, a passionate karting driver with aspirations of joining Formula 1. Follow his motorsport journey.",
    url: "https://www.christosfokas.com",
    images: [
      {
        url: "/drifting/4.jpg",
        width: 1200,
        height: 630,
        alt: "Christos Fokas F1 Driver",
      },
    ],
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ManaComponent message="We use cookies for security and analytical purposes, by browsing this webpage you agree to the cookies policy" />
        <Header />

        {children}
      </body>
    </html>
  );
}
