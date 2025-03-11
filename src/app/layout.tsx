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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="from-eden" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`font-serif antialiased`}>{children}</body>
    </html>
  );
}
