import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-around items-center bg-slate-400 py-4">
          <Link
            href="/quiz/1"
            className="hover:text-blue-600 hover:underline transition-all duration-100 ease-out text-2xl uppercase font-bold"
          >
            Quiz 1
          </Link>
          <Link
            href="/quiz/2"
            className="hover:text-blue-600 hover:underline transition-all duration-100 ease-out text-2xl uppercase font-bold"
          >
            Quiz 2
          </Link>
          <Link
            href="/quiz/3"
            className="hover:text-blue-600 hover:underline transition-all duration-100 ease-out text-2xl uppercase font-bold"
          >
            Quiz 3
          </Link>
          <Link
            href="/quiz/4"
            className="hover:text-blue-600 hover:underline transition-all duration-100 ease-out text-2xl uppercase font-bold"
          >
            Quiz 4
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
