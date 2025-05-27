import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artesanías Xeneizes - Boca Juniors",
  description: "Artesanías y productos de Boca Juniors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black min-h-screen`}>
        <Header />
        <main className="container mx-auto px-4 pb-8">{children}</main>
      </body>
    </html>
  )
}
