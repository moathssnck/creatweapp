import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"

const fontSans = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "الخبراء للتأسيس | شريكك لتأسيس الشركات",
  description: "نقدم خدمات احترافية ومتكاملة لتأسيس الشركات. ابدأ رحلتك في عالم الأعمال بثقة وأمان.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
    </html>
  )
}
