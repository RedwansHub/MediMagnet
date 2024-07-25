import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/Sub/Footer";

const inter = Poppins({ subsets: ["latin"] ,  weight: '300'});

export const metadata: Metadata = {
  title: "Media Magnet",
  description: "Built By Redwan.Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
            {children}
          <Footer />
        </body>
    </html>
  );
}
