import { Inter ,Mulish} from 'next/font/google'
import './globals.css'
import Header from "@/components/Header.jsx"
const inter = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'Trafalgar',
  description: 'Generated Trafalgar Landing Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
