import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  weight: "600",
  subsets: ["latin"], 
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
