import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pravesh Pansari",
  description: "Portfolio of Pravesh Pansari, a Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  );
}
