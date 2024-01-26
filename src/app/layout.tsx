import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Cities Map',
  description: 'Interactive map of smart cities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ua'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
