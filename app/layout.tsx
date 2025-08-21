
import type { Metadata } from "next";
import { productSans } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BKP 5.0 ",
  description: "Join us for Bappa Ka Prashad 5.0, a celebration of technology and tradition.",
  icons: {
    icon: "/gdgico.svg",
    shortcut: "/gdgico.svg",
    apple: "/gdgico.svg"
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
        className={` ${productSans.variable} antialiased  bg-gradient-to-br from-orange-50 to-pink-50 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
