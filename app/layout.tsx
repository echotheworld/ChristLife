import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christ Life Bacoor | Church in Bacoor, Cavite",
  description: "Magnify God | Make Disciples | Make a Difference",
  icons: {
    icon: [
      { url: "/icon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
