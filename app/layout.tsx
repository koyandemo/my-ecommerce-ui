import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHRE - Design",
  description: "shre products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" w-[100%] md:[500px] lg:w-[900px] h-auto m-auto pt-[30px] pl-[15px] pr-[15px] ">
        {children}
        </main>
      </body>
    </html>
  );
}
