import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damac",
  description: "DAMAC Properties is a premier luxury real estate developer headquartered in Dubai, United Arab Emirates. Established in 2002 as part of the DAMAC Group, the company has been instrumental in shaping the Middle East's upscale property market. With a portfolio boasting over 48,000 delivered homes and more than 50,000 units in planning and progress as of December 2024, DAMAC has a significant presence in the region and beyond.",
  
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
        {children}
      </body>
    </html>
  );
}
