import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dhaka Founders — Bangladesh's #1 Founder Directory & Community",
  description:
    "Connect, Collaborate, and Scale with Dhaka's Top Founders. A vibrant community where founders, investors, and builders grow and fund their dreams together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
        <body className="min-h-screen flex flex-col bg-brand-bg antialiased selection:bg-brand-secondary selection:text-brand-primary">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
