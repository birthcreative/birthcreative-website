import type { Metadata } from "next";
import { Figtree, Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Birth Creative | Get Your professional doula business up and running",
  description:
    "Welcome to Birth Creative, your dedicated partner in establishing a compelling online presence for birth workers. We specialize in helping doulas, midwives, and consultants launch their businesses with confidence and creativity.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Birth Creative | Get Your professional doula business up and running",
    description:
      "Welcome to Birth Creative, your dedicated partner in establishing a compelling online presence for birth workers.",
    url: "https://birthcreative.com",
    siteName: "Birth Creative",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://birthcreative.com/images/Birth-Creative-Browser-Image-1-1.webp",
        width: 1600,
        height: 1080,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${figtree.variable} ${libreBaskerville.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
