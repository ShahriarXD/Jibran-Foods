import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jibran Food — Premium Lacchi Shemai",
  description:
    "Experience the authentic taste of handcrafted Lacchi Shemai made with 100% pure ghee and premium nuts. A traditional delicacy by Jibran Food.",
  keywords: [
    "lacchi shemai",
    "jibran food",
    "premium shemai",
    "pure ghee shemai",
    "bangladeshi dessert",
    "traditional vermicelli",
  ],
  openGraph: {
    title: "Jibran Food — Premium Lacchi Shemai",
    description:
      "Handcrafted with 100% pure ghee and premium nuts. Taste tradition in every bite.",
    type: "website",
    url: "https://jibranfood.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
