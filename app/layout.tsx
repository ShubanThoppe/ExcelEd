import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top" // ✅ add this

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ExcelEd | Premium Private Tutoring",
  description: "Elevate your academic performance with personalized tutoring services from ExcelEd.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <ScrollToTop /> {/* ✅ scroll to top on route change */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
