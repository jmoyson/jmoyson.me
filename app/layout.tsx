import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "jmoyson.me - Indie maker, Full-time dad",
  description:
    "Sharing what I build, how I build it, and what I learn during my Three Hours a Night build sessions, once the kids are asleep.",
  openGraph: {
    title: "jmoyson.me - Indie maker, Full-time dad",
    description:
      "Sharing what I build, how I build it, and what I learn during my Three Hours a Night build sessions, once the kids are asleep.",
    url: "https://jmoyson.me",
    siteName: "jmoyson.me",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "jmoyson.me - Indie maker, Full-time dad",
    description:
      "Sharing what I build, how I build it, and what I learn during my Three Hours a Night build sessions, once the kids are asleep.",
    creator: "@jeremymoyson",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans text-base leading-relaxed antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-gray-200 py-8">
          <div className="max-w-2xl mx-auto px-4 sm:px-8">
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Jeremy Moyson
            </p>
          </div>
        </footer>
        <Script
          defer
          src="https://umami.jmoyson.dev/script.js"
          data-website-id="fd2d8374-7c7d-440f-9ca6-ac631ca45cc8"
        />
      </body>
    </html>
  );
}
