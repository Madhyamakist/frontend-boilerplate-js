import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./Components/HeaderWrapper";
import Footer from "./Components/Footer";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo Page",
  description: "A frontend boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <HeaderWrapper />
        <main className="flex-1">{children} </main>
        <Footer />
      </body>
    </html>
  );
}
