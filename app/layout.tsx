import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shorts | Montage Motion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-[#03070D]`}>{children}</body>
    </html>
  );
}
