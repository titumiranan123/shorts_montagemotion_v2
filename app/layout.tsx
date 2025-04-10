import type { Metadata } from "next";
import "./globals.css";
import {Open_Sans,Poppins} from "next/font/google"
export const metadata: Metadata = {
  title: "✂️ Professional Short Video Editing | Motage Motion",
  description: "Create impactful short videos with Motage Motion’s expert editing. Perfect for social media, ads, and quick content that captivates your audience in seconds.",
  keywords: [
    "short video editing",
    "social media video editing",
    "TikTok video editing",
    "Instagram Reels editing",
    "short video production",
    "ad video editing",
    "promo video editing",
    "quick content editing"
  ]
}
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400','500','600', '700', '800'  ]
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500', '600', '700','900']
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-[#03070D] ${openSans.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
