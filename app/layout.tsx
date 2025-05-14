import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ConvoSync - 모든 대화를 한 곳에서 | All conversations in one place",
  description:
    "여러 플랫폼의 메시지를 관리하고 AI가 제안하는 답장으로 시간을 절약하세요. | Manage messages from multiple platforms with smart reply suggestions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
