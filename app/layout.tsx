import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer  from "@/components/Footer"
import { Toaster } from "sonner"
import ErrorBoundary from "@/components/ErrorBoundary"
import ExtensionErrorSuppressor from "@/components/ExtensionErrorSuppressor"
import './globals.css'

export const metadata: Metadata = {
    title: "Jayesh Wadhonkar - Software Developer",
    description: "Jayesh Wadhonkar - Portfolio Website (Software Developer)",
  };
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>
            <ErrorBoundary>
              <ExtensionErrorSuppressor />
              <Navbar/>
              <Toaster position="top-right" richColors/>
              {children}
              <Footer/>
            </ErrorBoundary>
        </body>
    </html>
  )
} 