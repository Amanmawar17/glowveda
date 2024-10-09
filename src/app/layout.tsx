import type { Metadata } from "next";
import type { Viewport } from "next";
import { Rubik, PT_Serif } from "next/font/google";
import "./globals.css";

const pt = PT_Serif({
  subsets: ["latin"],
  variable: "--font-pt",
  weight: "400",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: "400",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export const metadata: Metadata = {
  title: "GlowVeda",
  description: "An organic and eco friendly cosnmetic for you daily use.",
  generator: "Glowveda",
  applicationName: "glowveda",
  referrer: "origin-when-cross-origin",
  keywords: [
    "platform",
    "wellness",
    "glowveda",
    "store",
    "organic",
  ],
  authors: [
    { name: "Glowveda" },
    { name: "Glowveda", url: "https://www.glowveda.vercel.app" },
  ],
  creator: "Glowveda`s Team",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Glowveda - An organic and eco friendly cosnmetic for you daily use.",
    description:
      "At Glowveda, we believe that every person deserves access to well customize products according every indivisual`s unique needs.",
    url: "https://www.glowveda.vercel.app",
    siteName: "glowveda",
    images: [
      {
        url: "",
        type: "image/png",
        width: 400,
        height: 400,
        alt: "Product profile Image",
      },
      {
        url: "",
        type: "image/png",
        width: 1920,
        height: 1080,
        alt: "Product Banner Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glowveda - An organic and eco friendly cosnmetic for you daily use.",
    description:
      "At Glowveda, we believe that every person deserves access to well customize products according every indivisual`s unique needs.",
    creator: "@Glowveda",
    images: {
      url: "",
      alt: "Glowveda Banner Image",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pt.variable} ${rubik.variable} scroll-smooth `}
      >
        {children}
      </body>
    </html>
  );
}
