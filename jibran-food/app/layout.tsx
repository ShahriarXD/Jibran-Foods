import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jibran Food | The Gold Standard of Bogura",
  description:
    "A luxury minimalist food experience for Jibran Food: authentic Laccha Shemai crafted with heritage, precision, and pure ingredients.",
  keywords: ["Jibran Food", "Laccha Shemai", "Bogura", "Premium Dessert", "Bengali Sweets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
