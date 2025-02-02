import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick and Morty API Next.js",
  description: "Rick and Morty API - Search for characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
