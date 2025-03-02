import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monggoland = localFont({
  src: [
    {
      path: "./fonts/MonggolandRegular.woff",
      weight: "400",
    },
    {
      path: "./fonts/MonggolandRegular.woff2",
      weight: "400",
    },
  ],
});

const ptSerif = localFont({
  src: [
    {
      path: "./fonts/pt-serif-regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/pt-serif-regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/pt-serif-bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/pt-serif-bold.woff2",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "from eden",
  description:
    "Discover handpicked, elegantly arranged bouquets. Perfect for birthdays, anniversaries, weddings, and more. Same-day delivery available!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-serif antialiased`}>{children}</body>
    </html>
  );
}
